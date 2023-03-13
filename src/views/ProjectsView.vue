<template>
  <div class="projects">
    <h1>Professional Experience</h1>
    <CardList :data="experinces"/>
    <h1>Noteable Projects</h1>
    <CardList :data="projects"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Card from "@/types/Card";
import CardList from "@/components/CardList.vue";

export default defineComponent({
  name: "ProjectsView",
  components: {CardList},
  setup() {
    const experinces = ref<Card[]>([
      {title: "Interplay Learning", img: require('@/assets/experinces/interplay.png'), id:0, modal: false},
      // {title: "Interplay Learning", img: require('@/assets/no-image.jpg'), id:1}
    ])

    const projects = ref<Card[]>([
      {title: "Luck of Die", img: require('@/assets/no-image.jpg'), id:0, modal: false},
      {title: "Gem Trader", img: require('@/assets/no-image.jpg'), id:1, modal: false},
      {title: "Forecast Planner", img: require('@/assets/no-image.jpg'), id:1, modal: false},
      {title: "Dev Learning", img: require('@/assets/no-image.jpg'), id:1, modal: false},
      // {title: "Interplay Learning", img: require('@/assets/no-image.jpg'), id:1},
    ])

    return { experinces, projects }
  }
})
</script>

<style>
.projects {
  height: 60em;
}
</style>