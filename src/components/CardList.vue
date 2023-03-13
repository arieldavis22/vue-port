<template>
  <div class="card-container">
    <div v-if="dataCard">
      <ModalComponent :data="dataCard" v-if="dataCard.modal" @close="toggleModal(dataCard)"/>
    </div>
    <div class="card" v-for="card in data" :key="card.id" @click="toggleModal(card)">
      <img :src="card.img" :alt="'c' + card.id">
      <span>{{ card.title }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import Card from '@/types/Card';
import ModalComponent from './ModalComponent.vue';

export default defineComponent({
  components: {ModalComponent},
  props: {
    data: {
      required: true,
      type: Array as PropType<Card[]>
    }
  },
  setup() {
    const dataCard = ref<Card|null>(null)
    const toggleModal = (card: Card|null) => {
      if(card) {
        dataCard.value = card
        dataCard.value.modal = !dataCard.value.modal
      }
      
    }

    return { toggleModal, dataCard }
  }
})
</script>

<style>
.card-container {
  display: flex;
}

.card-container .card {
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  margin: 6px 18px;
  border-radius: 6px;
  box-shadow: 
  0 3px 2px rgba(0, 0, 0, 0.03),
  0 7px 5px rgba(0, 0, 0, 0.04),
  0 13px 10px rgba(0, 0, 0, 0.06),
  0 22px 18px rgba(0, 0, 0, 0.07),
  0 41px 33px rgba(0, 0, 0, 0.08),
  0 100px 80px rgba(0, 0, 0, 0.12)
  ;
}

.card-container .card img {
  height: 200px;
  padding: 6px;
}

.card-container .card span {
  padding: 6px;
}
</style>