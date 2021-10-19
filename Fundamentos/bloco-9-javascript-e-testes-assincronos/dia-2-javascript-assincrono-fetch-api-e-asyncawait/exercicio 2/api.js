const coins = () => {
const URL = 'url: https://api.coincap.io/v2/assets';

const moedas = await fetch(URL)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => error.toString());

  return coins;
}