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

export interface TradeAssetType {
  asset_id: string;
  name: string;
  type_is_crypto: number;
}

export interface TradeRateType {
  asset_id_base: string;
  asset_id_quote: string;
  rate: number;
}
