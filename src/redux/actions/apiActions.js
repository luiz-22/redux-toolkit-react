import axios from "axios";
import { getApi } from "../reducers/apiSlice";

export const getCharacters = () => (dispatch) => {
    axios("https://rickandmortyapi.com/api/character")
        .then(res => dispatch(getApi(res.data.results)))
        .catch(e => console.log(e))
}