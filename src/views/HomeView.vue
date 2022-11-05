<template >
  <div>
    <p>Hello Alicja</p>
    <input type="text">
    <div class="beers-container" v-for="beer in results" :key="beer.id">
      <h1 class="name">{{ beer.name }}</h1>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios';
import BeerType from '../types/Beer';

export default defineComponent({
  name: 'HomeView',
  setup(){
    const results = ref<BeerType[]>([]);

    return{ results }
  },
  methods: {
    getApiData(){
      axios
      .get('https://api.punkapi.com/v2/beers')
      .then((response) => {
        this.results = response.data;
        console.log('results', this.results);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  mounted(){
    this.getApiData();
  }
  // setup() {
  //   const count = ref(0)
  //   return { count }
  // }
})
</script>
<style lang="">

</style>