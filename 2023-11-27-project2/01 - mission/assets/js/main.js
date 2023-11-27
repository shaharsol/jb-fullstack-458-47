var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getCoins() {
    return __awaiter(this, void 0, void 0, function* () {
        // const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
        const response = yield fetch('coins.json');
        const coins = yield response.json();
        return coins;
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    // init
    // get data
    const coins = yield getCoins();
    // prepare data
    // cut list to 100 coins
    // display
}))();
export {};
