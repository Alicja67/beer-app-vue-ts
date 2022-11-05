<template>
  <div class="app">
    <nav class="nav">
      <p>Hello Alicja</p>
      <input type="text" />
    </nav>
    <div class="beers-list-container">
      <div class="beer-card-container" v-for="beer in results" :key="beer.id">
        <h1 class="name">{{ beer.name }}</h1>
        <div class="beer-details">
          <p>IBU: {{ beer.ibu }}</p>
          <p>Food Pairing: {{ beer.food_pairing.length }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import BeerType from '../types/Beer';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const results = ref<BeerType[]>([]);

    return { results };
  },
  methods: {
    getApiData() {
      axios
        .get('https://api.punkapi.com/v2/beers')
        .then((response) => {
          this.results = response.data;
          console.log('results', this.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getApiData();
  },
  // setup() {
  //   const count = ref(0)
  //   return { count }
  // }
});
</script>
<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
.nav {
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 12%;
}
.beers-list-container {
  position: relative;
  top: 15%;
  width: 100%;
  // height: 88vh;
  // margin-top: 12%;
  padding: 5% 2%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 3%;
  grid-row-gap: 3%;
  padding: 0 10px;
  overflow-y: scroll;

  .beer-card-container {
    background: white;
    border-radius: 20px;
    -webkit-box-shadow: 0px 0px 8px -1px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 8px -1px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 8px -1px rgba(66, 68, 90, 1);
    .name {
      font-family: 'Abril Fatface', cursive;
      font-size: 1.5em;
      padding: 20px;
      text-align: center;
    }
    .beer-details {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>
