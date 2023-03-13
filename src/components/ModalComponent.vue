<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" v-if="data">
        <h1>{{ data.title }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Card from "@/types/Card";
import { defineComponent, PropType } from "vue";
export default defineComponent({
    name: "ModalComponent",
    methods: {
        closeModal() {          
            this.$emit('close')
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
    width: 400px;
    padding: 20px;
    margin: 200px auto;
    background: white;
    border-radius: 10px;
  }
</style>