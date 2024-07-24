<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="content-title-group ">
          <h2 class="title">Coffee Order</h2>
          <ul>
            <li v-for="drink in drinks" :key="drink.id" >               
                <div class="card boxshadow" @click="AddOrder(drink)">
                <div class="card-content">                   
                      <div class="content">
                           <!-- <div :class="{'orange-background': this.drinks.some(x=>x.Id == id)}"> -->
                              <div :key="drink.name" class="name">
                                {{ drink.name }}
                                <img :src="drink.imageUrl" class="is-rounded is-50x50" style="float: right;">
                              </div>
                              <div class="description">{{ drink.description }}
                              </div>
                            <!-- </div> -->
                      </div>                 
                  </div>
                </div>              
            </li>
          </ul>
        </div>
       <order-detail :orders.sync="orders" v-if="orders.length > 0"></order-detail>      
        <!-- @Cancel="onCancel"
          v-if="selectedHero" 
        :id="selectedHero.id"  @done="loadHeroes"-->         
      
        <div class="notification is-info" v-show="message">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from '../shared';
import { dataService } from '../shared/data.service.js';
import orderDetail from './order-detail.vue';

export default {
  name: 'CoffeeOrder',
  data() {
    return {
      drinks: [],
      message: '',
      selectedDrinks: [],
      orders: [],
      drinkPic: null,
    };
  },
  mixins:{dataService},
  components: {
    orderDetail,
  },
  async created() {
    await this.loadDrinks();
  },
  methods: {
    async loadDrinks() {
      this.drinks = [];
      this.message = 'getting the menu, please be patient';

      this.drinks = await dataService.getDrinks(); 

      this.message = '';
    },
    AddOrder(drink) {
      let index = this.orders.findIndex(x => x.id == drink.id)
      if (index >= 0) 
        this.orders.splice(index,1);
      else 
      //this.selectedDrinks.push(drink);
      this.orders.push(drink);
    },
    // isSelected(id) {
    //   return 
    //   //return (id >= 3)  
    // }

        //@load="getImage()
    // getImage () {
    //   //let index = this.orders.findIndex(x => x.id == drink.id)   
    //   // if (orders.id = drink.id) 
    //   this.drinkPic = '';
    //  this.drinkPic = this.drinks.imageUrl  ;
    // }

    // onCancel(payload) {
    //   this.orders = payload
    // }
    // selectHero(hero) {
    //   this.selectedHero = hero;
    // },
  },
};
</script>

<style>

.boxshadow{
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.boxshadow:hover{
  box-shadow: 0 9px 20px rgba(0,0,0,0.20), 0 8px 8px rgba(0,0,0,0.20);
}

.orange-background{
  background-color: #f5e9bc;
}
</style>