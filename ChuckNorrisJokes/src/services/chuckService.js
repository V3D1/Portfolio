import axios from "axios";

export class ChuckService {
  async chuckCategories() {
    const options = {
      method: "get",
      url: `https://api.chucknorris.io/jokes/categories`,
    };

    const response = await axios(options)
      .then((response) => {
        return response;
      })
      .catch(async (err) => {
        console.log(err);
      });
    return Promise.resolve(response);
  }
  async chuckJoke(category) {
    const options = {
      method: "get",
      url: `https://api.chucknorris.io/jokes/random?category=${category}`,
    };

    const response = await axios(options)
      .then((response) => {
        return response;
      })
      .catch(async (err) => {
        console.log(err);
      });
    return Promise.resolve(response);
  }
}
