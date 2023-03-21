<template>
  <div @click="handleClick" class="button">
    <span class="material-icons">arrow_upward</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToTopComponent",
  setup() {
    const handleClick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }

    return { handleClick }
  }
})
</script>

<style>
.button {
    position: fixed;
    z-index: 99;
    border: 1px black solid;
    background-color: black;
    bottom: 20px;
    right: 70px;
    border-radius: 50px;
    width: 55px;
}
.button:hover {
  cursor: pointer;
}

.button span {
  color: white;
  font-size: 3em;
}
</style>