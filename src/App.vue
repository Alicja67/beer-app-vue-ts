<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
#app {
  padding: 0;
  margin: 0;
  max-width: 1920px;
  // height: 100%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
