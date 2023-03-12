<template>
  <div class="card-container">
    <div class="card" v-for="card in data" :key="card.id">
      <img :src="card.img" :alt="'c' + card.id">
      <span>{{ card.title }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Card from '@/types/Card';
export default defineComponent({
  props: {
    data: {
      required: true,
      type: Array as PropType<Card[]>
    }
  }
})
</script>

<style>
.card-container {
  display: flex;
}

.card-container .card {
  background: blue;
  display: flex;
  flex-direction: column;
  margin: 6px;
}

.card-container .card img {
  height: 200px;
  padding: 6px;
}

.card-container .card span {
  padding: 6px;
}
</style>