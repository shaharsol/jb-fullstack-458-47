import CoinData from './interfaces/coin-data.js';
import Coin from './interfaces/coin.js';
import reduceCoins from './reducers/coins.js';
import Cache from './Cache.js';

const cache = Cache.getInstance();

async function getCoins(): Promise<Coin[]> {
    // const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
    // const response = await fetch('coins.json');
    // const coins: Coin[] = await response.json();
    // const cacheResponse = await cache.getData('https://api.coingecko.com/api/v3/coins/list');
    const cacheResponse = await cache.getData('coins.json');
    const coins: Coin[] = (cacheResponse) as Coin[]
    console.log(coins)

    return coins;
}

async function getCoinData(coinId: string): Promise<CoinData> {
    const cacheResponse = await cache.getData(`https://api.coingecko.com/api/v3/coins/${coinId}`);
    const coinData: CoinData = (cacheResponse) as CoinData
    return coinData;
}

async function coinsContainerClicked(e: MouseEvent) {
    if (e.target instanceof HTMLElement) {
        const element = e.target as HTMLElement;
        if (element.id.startsWith('more-info-')) {
            const coinId = element.id.substring('more-info-'.length);
            const coinData = await getCoinData(coinId);
            console.log(coinData);
            document.getElementById(`data-container-${coinId}`).innerHTML = `
                <img src="${coinData.image.thumb}"/> <br>
                usd: ${coinData.market_data.current_price.usd} <br>
                eur: ${coinData.market_data.current_price.eur} <br>
                ils: ${coinData.market_data.current_price.ils}
            `;
        }
    }
}

(async () => {
    // init
    document.getElementById('coins-container').addEventListener('click', coinsContainerClicked);

    // get data
    const coins = await getCoins();

    // prepare data

    // cut list to 100 coins
    const shortList = coins.slice(0, 100);

    // reduce to create the HTML string of the cards
    const html = reduceCoins(shortList);

    // display
    document.getElementById('coins-container').innerHTML = html;

})();
