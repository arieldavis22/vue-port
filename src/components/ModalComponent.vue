<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" v-if="data">
      <h1>{{ data.title }}</h1>

      <img :src="data.img" alt="?">

      <div class="description">
        <span>{{ data.descirption }}</span>
      </div>

      <div class="links">
        <button v-for="link in data.links" :key="link.id" @click="handleClick(link)">{{ link.name }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Card from "@/types/Card";
import { defineComponent, PropType } from "vue";
import CardLink from '../types/CardLink'

export default defineComponent({
    name: "ModalComponent",
    methods: {
        closeModal() {          
            this.$emit('close')
        },
        handleClick(link: CardLink) {
          window.open(link.url, '_blank')
        }
    },
    props: {
    data: {
      required: true,
      type: Object as PropType<Card|null>
    }
  },
}) 
</script>

<style>
  .backdrop {
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }

  .modal {
    width: 50%;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 5px;
    border: 6px orange solid;
  }

  .modal img {
    height: 150px;
  }

  .modal .description {
    margin-top: 20px;
  }
</style>