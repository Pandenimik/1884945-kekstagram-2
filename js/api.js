const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};

const load = (route, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    });

const getData = () => load(Route.GET_DATA);

const sendData = (evt) => {
  const formData = new FormData(evt.target);
  return load(Route.SEND_DATA, Method.POST, formData);
};

export { getData, sendData };
