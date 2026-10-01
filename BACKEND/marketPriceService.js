const db = require("./db");

// Get latest market prices from MySQL
function getLatestMarketPrices(callback) {
  const sql = `
    SELECT
      market_prices.id,
      crops.name AS crop,
      markets.name AS market,
      markets.district,
      markets.location,
      market_prices.price_per_kg,
      market_prices.price_per_quintal,
      market_prices.price_date,
      market_prices.source
    FROM market_prices
    JOIN crops
      ON market_prices.crop_id = crops.id
    JOIN markets
      ON market_prices.market_id = markets.id
    WHERE market_prices.price_date = (
      SELECT MAX(price_date)
      FROM market_prices
    )
    ORDER BY crops.name, market_prices.price_per_kg DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Market price query error:", err.message);
      return callback(err, null);
    }

    callback(null, results);
  });
}

module.exports = {
  getLatestMarketPrices,
};
