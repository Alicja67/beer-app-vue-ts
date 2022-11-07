<template >
  <div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PaginationPage',
})
</script>
<style lang="scss" scoped>
  div {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 2%;
    left: 80%;
    width: 100%;
    span {
      padding: 20px;
      margin: 1%;
      width: 50px;
      height: 50px;
      border-radius: 30px;
      background: black;
      color: white;
    }
  }
</style>