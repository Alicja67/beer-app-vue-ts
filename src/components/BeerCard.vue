<template>
  <div></div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';

type BeerCardProps = { beerId: number };

export default defineComponent({
  props: {
    beerId: {
      type: Number,
      required: true,
    },
  },
  setup(props: BeerCardProps) {
    const beer = computed(() => beers[props.beerId]);
    return { beer };
  },
});
</script>
<style lang=""></style>
