import * as axios from 'axios';

import { format } from 'date-fns';
import { inputDateFormat } from './constants';

import { API } from './config';


const getDrinks = async function() {
    const response = await axios.get(`${API}/Cafe/GetDrinks`);
    const drinks = response.data;
    console.log('This is response.data',response.data);
    return drinks
//   try{const response = await axios.get('/drinks.json');
//   const drinks = response.data.map()
//   return drinks;
// Example Vue.js component
/{/* <template>
  <div>
    <button @click="getData">Get Data</button>
    <button @click="saveData">Save Data</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    async getData() {
      try {
        const response = await axios.get('http://your-backend-api-url/api/cafes');
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },

    async saveData() {
      try {
        const newData = prompt('Enter new data:');
        const response = await axios.post('http://your-backend-api-url/api/cafes', newData);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script> */}





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
