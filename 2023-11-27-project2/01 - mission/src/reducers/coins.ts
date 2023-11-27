import Coin from "../interfaces/coin.js";

export default function reduceCoins(coins: Coin[]): string {
    return coins.map(coin => `
        <div class="col-sm-6 col-md-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${coin.name}</h5>
                    <p class="card-text">${coin.symbol}
                    </p>
                    <a href="#" class="btn btn-primary" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample">More Info</a>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default
                            but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).reduce((acc, curr) => acc + curr, '');
}