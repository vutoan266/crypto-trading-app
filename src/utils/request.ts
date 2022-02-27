const get = (url: string, data?: any) => {
  const urlString = data ? new URLSearchParams(data).toString() : '';

  const requestOptions = {
    method: 'GET',
    headers: {
      'X-CoinAPI-Key': '8CE6A6C9-325B-470E-9522-2574B65B02BB',
    },
  };
  return fetch(`${url}${urlString}`, requestOptions)
    .then(async response => {
      const data = await response.json();
      if (!response.ok) {
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }
      return data;
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
};

const request = {
  get,
};

export default request;
