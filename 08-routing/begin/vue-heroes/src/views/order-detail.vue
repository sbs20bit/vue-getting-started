<template>
  <div>
    <div class="content-title-group">
      <!-- <h3 class="title is-4"></h3> -->
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Order Summary </p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
                <ul>
                  <li v-for="drink in orders" :key="drink.id"> {{ drink.Description }}</li>
                </ul> 
           </div>
          </div>
        </div>
        <footer class="card-footer">
          <button class="link card-footer-item" @click="orderDrinks()">
            <i class="fas fa-save"></i>
            <span>Order</span>
          </button>
          <button
            class="link card-footer-item cancel-button"
            @click="cancelOrder()"
          >
            <i class="fas fa-undo"></i>
            <span>Cancel</span>
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { dataService } from '../shared';
export default {
  name: 'OrderDetail',
  props: ['orders'],
  data() {
    return {
    //  hero: {},
    drinks: [],

    };
  },
  async created() {
    this.hero = await dataService.getDrinks(this.id);
  },
  computed: {
    fullName() {
      return this.hero ? `${this.hero.firstName} ${this.hero.lastName}` : '';
    },
  },
  methods: {
    orderDrinks(){
      let data = dataService.orderDrinks({
                  CustomerName: 'to be decided',
                  DrinksOrdered: this.orders});
    },

    cancelOrder() {
    this.$emit('update:orders', []);
    },
    // async saveHero() {
    //   await dataService.updateHero(this.hero);
    //   this.$emit('done');
    // },
  },
};
</script>
