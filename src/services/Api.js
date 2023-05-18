import axios from 'axios';


const api = axios.create({
  baseURL: `http://SuaApi/`,
});


//EXEMPLO
export const getRotas = async () => {
  return api.get(
    `/rotas`,
  ).catch(err => {
    console.log(err);
  });
};




export default api;