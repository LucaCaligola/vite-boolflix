import { reactive } from "vue";
import axios  from "axios";

export const store = reactive({
  filmSearch: '',
  

  apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=0a1a18272fb8d93351b833485b06018e&query=',

  getFilms(filmSearch = ''){
    console.log(filmSearch);
    
    axios.get(this.apiUrl + this.filmSearch)
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