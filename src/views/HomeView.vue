<template>
  <div class="app">
    <div class="header">
      <p>Beer index</p>
      <nav class="nav">
        <div class="search-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-search"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>
          <input type="text" placeholder="find beer name" />
        </div>
        <div class="button-box">
          <button>IBU</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-caret-up"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 14l-6 -6l-6 6h12"></path>
          </svg>
        </div>
        <button class="form-button" style="background: green">Search</button>
        <button class="form-button" style="background: darkred">Reset</button>
      </nav>
    </div>
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
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 12%;
    background: rgb(58, 56, 56);
    position: fixed;
    p {
      font-size: 30px;
      color: white;
      z-index: 1;
      margin-left: 20px;
    }
    .nav {
      width: 45%;
      display: flex;
      flex-direction: row;
      .search-box {
        width: 300px;
        height: 10px;
        background: white;
        border-radius: 20px;
        align-items: center;
        padding: 20px;
        display: flex;
        margin: 0 5px;
        input {
          flex: 1;
          height: 30px;
          border: none;
          outline: none;
          font-size: 1em;
        }
      }
      .button-box {
        width: 100px;
        height: 10px;
        background: white;
        border-radius: 20px;
        align-items: center;
        padding: 20px;
        display: flex;
        margin: 0 5px;
        cursor: pointer;
        button {
          flex: 1;
          font-family: 'Poppins', sans-serif;
          padding: 'Poppins', sans-serif;
          background: transparent;
        }
        button:focus {
          outline: none;
          border: none;
        }
        button:focus-visible {
          outline: none;
          border: none;
        }
        button:hover {
          border: none;
          outline: none;
        }
      }
      .form-button {
        border-radius: 30px;
        margin: 0 5px;
        color: white;
        font-weight: bold;
      }
    }
  }
}
</style>
