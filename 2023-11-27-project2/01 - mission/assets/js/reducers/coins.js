export default function reduceCoins(coins) {
    return coins.map(coin => `
        <div class="col-sm-6 col-md-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${coin.name}</h5>
                    <p class="card-text">${coin.symbol}</p>
                    <a href="#" id="more-info-${coin.id}" class="btn btn-primary" data-bs-toggle="collapse"
                        data-bs-target="#collapse-${coin.id}">More Info</a>
                    <div class="collapse" id="collapse-${coin.id}">
                        <div class="card card-body" id="data-container-${coin.id}">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).reduce((acc, curr) => acc + curr, '');
}
