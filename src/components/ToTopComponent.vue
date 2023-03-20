<template>
  <div class="button">
    <span class="material-icons">arrow_upward</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({

})
</script>

<style>
.button {
    position: fixed;
    z-index: 99;
    border: 1px black solid;
    bottom: 20px;
    right: 70px;
    border-radius: 50px;
}
</style>