<template >
  <div>
    <p>Hello Alicja</p>
    <input type="text">
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';

export default defineComponent({
  name: 'HomeView',
  props: {
  },
  // setup() {
  //   const count = ref(0)
  //   return { count }
  // }
})
</script>
<style lang="">

</style>