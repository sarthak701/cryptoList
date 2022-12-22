export const getTableFields = (cryptoApiData) => {
  return cryptoApiData.map((coinData) => {
    return {
      id: coinData.id,
      name: {
        imageUrl: coinData.image,
        symbol: coinData.symbol,
        name: coinData.name,
      },
      price: coinData.current_price,
      change24h: Math.round(+coinData.price_change_percentage_24h * 100) / 100,
      volume24h: Math.round(+coinData.total_volume / 10000) / 100,
      marketCap: Math.round(+coinData.market_cap / 10000) / 100,
    };
  });
};
