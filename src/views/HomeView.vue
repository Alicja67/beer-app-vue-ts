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
          <input type="text" v-model="searchName" placeholder="find beer name" />
        </div>
        <div class="search-ibu-box">
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
          <input type="text" v-model="searchIbu" placeholder="IBU" />
        </div>
        <div class="button-box" @click="toggleIbu">
          <div class="svg" v-if="ibuOption">
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
          <div class="svg" v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-caret-down"
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
              <path d="M6 10l6 6l6 -6h-12"></path>
            </svg>
          </div>
        </div>
        <button class="form-button" style="background: green" type="submit" @click="handleSearch">Search</button>
        <button class="form-button" style="background: darkred" @click="handleReset">Reset</button>
      </nav>
    </div>
    <beers-list :beers="results" :searchName="searchName"></beers-list>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, Ref } from 'vue';
import axios from 'axios';
import BeerType from '../types/Beer';
import BeersList from '../components/BeersList.vue';


export default defineComponent({
  name: 'HomeView',
  components: { BeersList },
  setup() {
    let results = ref<BeerType[]>([]);
    let searchName = ref('');
    let searchIbu: Ref<number | null>  = ref(null);
    let ibu_gt = ref(false);
    let url = ref('https://api.punkapi.com/v2/beers');

    function handleSearch() {
      if (searchName.value !== '' && searchIbu.value === null) {
        console.log('Podano tylko name');
        url.value = `https://api.punkapi.com/v2/beers?beer_name=${searchName.value}`;
        getApiData();
        searchName.value = '';
      }
      else if (searchIbu.value !== null && searchName.value === '') {
        console.log('Podano tylko ibu');
        if (ibu_gt) {
          url.value = `https://api.punkapi.com/v2/beers?ibu_gt=${searchIbu.value}`;
        } else {
          url.value = `https://api.punkapi.com/v2/beers?ibu_lt=${searchIbu.value}`;
        }
        getApiData();
        searchIbu.value = null;
        searchName.value = '';
      }
      else if (searchIbu.value !== null && searchName.value !== '') {
        console.log('Podano name & ibu');
        if (ibu_gt) {
          url.value = `https://api.punkapi.com/v2/beers?beer_name=${searchName.value}&ibu_gt=${searchIbu.value}`;
        } else {
          url.value = `https://api.punkapi.com/v2/beers?beer_name=${searchName.value}&ibu_lt=${searchIbu.value}`;
        }
        getApiData();
        searchIbu.value = null;
        searchName.value = '';
      } else {
        console.log('Nic nie wybrano');
        url.value = 'https://api.punkapi.com/v2/beers';
        getApiData();
        searchName.value = '';
        searchIbu.value = null;
      }
    }
    function handleReset() {
      url.value = 'https://api.punkapi.com/v2/beers';
      getApiData();
    }
    function toggleIbu () {
      ibu_gt.value = !ibu_gt.value;
      console.log('ibu gt', ibu_gt.value);
    }
    const ibuOption = computed(() => {
      return ibu_gt.value ? true : false
    });

    async function getApiData() {
      await axios
        .get(url.value)
        .then((response) => {
          if (response.data) {
            results.value = response.data;
            console.log('results', results);
          } else {
            alert('Network Error');
          }
        })
        .catch((error) => {
          console.log(error.message);
          alert(error.message);
        });
    }

    onMounted(() => {
      getApiData();
    });
    // const findByName = computed(() => {

    // });

    return { results, searchName, searchIbu, handleSearch, handleReset, getApiData, toggleIbu, ibu_gt, ibuOption };
  },
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
      .search-box,
      .search-ibu-box {
        width: 300px;
        height: 50px;
        background: white;
        border-radius: 30px;
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
      .search-ibu-box {
        width: 150px;
        input {
          width: 70px;
        }
      }
      .search-box:hover,
      .search-ibu-box:hover {
        border: 1px solid #646cff;
        // outline: 4px auto -webkit-focus-ring-color;
      }
      .button-box {
        width: 70px;
        height: 50px;
        background: white;
        border-radius: 30px;
        padding: 20px;
        display: flex;
        // margin: 0 5px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        p {
          flex: 1;
          font-size: 1em;
          color: black;
          padding: 0;
          margin: 0;
        }
      }
      .button-box:focus,
      .button-box:hover {
        border-color: #646cff;
        // outline: 4px auto -webkit-focus-ring-color;
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
@media screen and (max-width: 850px) {
  .app {
    width: 100%;
    .header {
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      height: 25%;
      padding-top: 2%;
      p {
        display: none;
      }
      .nav {
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        .search-ibu-box, .button-box {
          display: none;
        }
      }
    }
  }
}
</style>
