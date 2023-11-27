export default interface CoinData {
    image: {
        thumb: string;
    }
    market_data: {
        current_price: {
            usd: number;
            eur: number;
            ils: number;
        }
    }
}