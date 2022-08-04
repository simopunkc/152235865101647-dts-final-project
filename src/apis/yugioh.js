import axios from 'axios';

const yugioh = (parameters) => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
    params: parameters,
    headers: {
      'token': process.env.REACT_APP_API_KEY
    }
  });
}

const fetchListCard = async (page) => {
  try {
    const apiGet = await yugioh({});
    let obj = await apiGet.get(`/cards/page${page}/`);
    return obj.data
  } catch (e) {
    console.log(e.message)
    return [];
  }
}

const fetchSearchCard = async (query) => {
  try {
    const apiGet = await yugioh({});
    let obj = await apiGet.get(`/cards/search/${query}`);
    return obj.data
  } catch (e) {
    console.log(e.message)
    return [];
  }
}

const fetchDetailCard = async (id) => {
  try {
    const apiGet = await yugioh({});
    let obj = await apiGet.get(`/card/${id}`);
    return obj.data
  } catch (e) {
    console.log(e.message)
    return [];
  }
}

export {
  fetchListCard,
  fetchSearchCard,
  fetchDetailCard
};
