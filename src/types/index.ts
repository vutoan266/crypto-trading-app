export interface CoinType {
  id: string;
  name: string;
  symbol: string;
  metrics: {
    market_data: {
      price_usd: number;
    };
  };
}
