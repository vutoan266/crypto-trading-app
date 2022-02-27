import request from '../utils/request';

export const getAllAssetsAPI = async () =>
  request.get('https://data.messari.io/api/v2/assets');

export const getTradeAssetsAPI = async () =>
  request.get('https://rest-sandbox.coinapi.io/v1/assets');

export const getAllAssetIconsAPI = async () =>
  request.get('https://rest-sandbox.coinapi.io/v1/assets/icons/64');
