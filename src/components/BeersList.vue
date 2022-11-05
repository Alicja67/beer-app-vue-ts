<template>
  <div class="beers-list-container">
    <div class="beer-card-container" v-for="beer in beers" :key="beer.id">
      <h1 class="name">{{ beer.name }}</h1>
      <div class="beer-details">
        <p>IBU: {{ beer.ibu }}</p>
        <p>Food Pairing: {{ beer.food_pairing.length }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import BeerType from '../types/Beer';

export default defineComponent({
  name: 'BeersList',
  props: {
    beers: {
      required: true,
      type: Array as PropType<BeerType[]>
    }
  },
  setup() {},
});
</script>
<style lang="scss" scoped>
.beers-list-container {
  position: relative;
  top: 12%;
  // width: 100%;
  padding: 60px 100px;
  height: 100%;
  margin-bottom: 6%;
  padding: auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  overflow-y: scroll;
  .beer-card-container {
    // max-width: 500px;
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
