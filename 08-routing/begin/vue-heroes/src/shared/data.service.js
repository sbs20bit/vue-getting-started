import * as axios from 'axios';

import { format } from 'date-fns';
import { inputDateFormat } from './constants';

import { API } from './config';


const getDrinks = async function() {
    const response = await axios.get(`${API}/drinks.json`);
    const drinks = response.data;
    console.log('This is response.data',response.data);
    return drinks
//   try{const response = await axios.get('/drinks.json');
//   const drinks = response.data.map()
//   return drinks;
// } catch(error) {
//   console.error(error);
//   return [];
// }
};

const get1Drink = async function(id) {
  try {
    const response = await axios.get(`${API}/drinks/${id}`);
    let drink = parseItem(response, 200);
    return drink;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const parseList = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== 'object') {
    list = [];
  }
  return list;
};

export const parseItem = (response, code) => {
  if (response.status !== code) throw Error(response.message);
  let item = response.data;
  if (typeof item !== 'object') {
    item = undefined;
  }
  return item;
};

export const dataService = {
  getDrinks,
  get1Drink,
};
