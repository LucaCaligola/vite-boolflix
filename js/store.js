import { reactive } from "vue";
import axios  from "axios";

export const store = reactive({
  filmSearch: null,

  apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=0a1a18272fb8d93351b833485b06018e&query=ritorno+al+futuro',

  getFilms() {
    axios.get(this.apiUrl)
      .then((response) => {
        // handle success
        console.log(response.data.results);
      })
      .catch((error) => {
        // handle error
        console.error(error);
      })
      .finally(() => {
        // always executed
      });
  },
});