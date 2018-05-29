import apiConfig from './config';

const fetchApi = (endPoint, payload = undefined, strMethod = 'get') =>
  fetch(apiConfig.url + endPoint, {
    method: strMethod,
    body: payload,
  })
    .then(response => response.json())
    .catch((e) => {
      if (e.response && e.response.json) {
        e.response.json().then((json) => {
          if (json) throw json;
          throw e;
        });
      } else {
        throw e;
      }
    });

export default fetchApi;
