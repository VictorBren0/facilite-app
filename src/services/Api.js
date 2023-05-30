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
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getOneFolders = async (userToken, userParams, folderId) => {
  try {
    const response = await api.get(`/users/getonepastas`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      params: {
        userId: `${userParams}`,
        folderId: `${folderId}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
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
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};



export const postFiles = async (userToken, userParams, folderId, data) => {
  try {
    const response = await api.post(
      `/users/pastas/createarquivos`,
      data,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'multipart/form-data;',
          Accept: 'application/json',
        },
        params: {
          userId: `${userParams}`,
          folderId: `${folderId}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteFolder = async (userToken, userParams, folderId) => {
  try {
    const response = await api.delete(
      `/users/deletepastas`,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        params: {
          userId: `${userParams}`,
          folderId: `${folderId}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};



export default api;