<template>
  <div class="app">
    <nav class="nav">
      <p>Hello Alicja</p>
      <input type="text" />
    </nav>
    <beers-list :beers="results"></beers-list>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import BeerType from '../types/Beer';
import BeersList from '../components/BeersList.vue';

export default defineComponent({
  name: 'HomeView',
  components: { BeersList },
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
  width: 1920px;
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
</style>
