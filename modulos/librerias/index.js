// axios para servicios externos
import axios from "axios";

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    // handle success
    console.log(response.data);
    console.log("Éxito");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    console.log("Error!!!!");
  })
  .finally(function () {
    // always executed
  });