import axios from 'axios';

export const api = axios.create({
  baseURL: `https://backend-ged.vercel.app/api/ged/`,
});


//EXEMPLO
export const getFolders = async (userToken, userParams) => {
  try {
    const response = await api.get(`/users/getpastas`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      params: {
        userId: `${userParams}`,
      },
    });
    return response.data; // Retornar apenas os dados da resposta
  } catch (error) {
    console.log(error);
    throw error; // Lançar o erro para ser tratado posteriormente
  }
};

export const postFolders = async (userToken, userParams, nome) => {
  try {
    const response = await api.post(`/users/createpastas`, {nome}, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      params: {
        userId: `${userParams}`,
      },
    });
    return response.data; // Retornar apenas os dados da resposta
  } catch (error) {
    console.log(error);
    throw error; // Lançar o erro para ser tratado posteriormente
  }
};



export default api;