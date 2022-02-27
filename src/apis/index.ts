import { TradeAssetType, TradeRateType } from 'src/types';
import request from '../utils/request';

export const getAllAssetsAPI = async () =>
  request.get('https://data.messari.io/api/v2/assets');

export const getTradeAssetsAPI = async (): Promise<TradeAssetType[]> =>
  request.get('https://rest-sandbox.coinapi.io/v1/assets');

export const getTradeRateAPI = async ({
  base,
  quote,
}: {
  base: string;
  quote: string;
}): Promise<TradeRateType> =>
  request.get(
    `https://rest-sandbox.coinapi.io/v1/exchangerate/${base}/${quote}`,
  );

// export const getAllAssetIconsAPI = async () =>
//   request.get('https://rest-sandbox.coinapi.io/v1/assets/icons/64');
