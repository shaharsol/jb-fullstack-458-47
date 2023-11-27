import Coin from './interfaces/coin.js';

async function getCoins(): Promise<Coin[]> {
    // const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
    const response = await fetch('coins.json');
    const coins: Coin[] = await response.json();
    return coins;
}

(async () => {
    // init

    // get data
    const coins = await getCoins();

    // prepare data

    // cut list to 100 coins

    // display

})();
