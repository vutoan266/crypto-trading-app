const get = (url: string, data?: any) => {
  const urlString = data ? new URLSearchParams(data).toString() : '';

  const requestOptions = {
    method: 'GET',
    headers: {
      'X-CoinAPI-Key': 'E18F254B-C4B8-4E2D-A177-40BCA265A038',
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
