import axios from "axios";

export function getRandomJoke() {
  return axios
    .get("https://api.chucknorris.io/jokes/random")
    .then(({ data }) => data.value);
}
