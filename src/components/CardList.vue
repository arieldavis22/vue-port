<template>
  <div class="card-container">
    <Transition name="modal">
      <div v-if="dataCard && dataCard.modal">
        <ModalComponent :data="dataCard" v-if="dataCard.modal" @close="toggleModal(dataCard)"/>
      </div>
    </Transition>
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
  width: 210px;
  transition: all .2s ease-in-out;
}

.card-container .card:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.card-container .card img {
  height: 200px;
  margin: 6px;
  border: 1px rgba(0, 0, 0, 0.1) solid;
}

.card-container .card span {
  padding: 6px;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>