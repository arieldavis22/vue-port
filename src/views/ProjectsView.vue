<template>
  <div class="projects">
    <div class="list">
      <h1>Professional Experience</h1>
      <CardList :data="experinces"/>
      <h1>Noteable Projects</h1>
      <CardList :data="projects"/>
    </div>
    <div class="laptop-img">
      <img src="../assets/projects/laptop.png" alt="laptop">
    </div>
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
    ])

    const projects = ref<Card[]>([
      {title: "Luck of Die", img: require('@/assets/no-image.jpg'), id:0, modal: false},
      {title: "Gem Trader", img: require('@/assets/no-image.jpg'), id:1, modal: false},
      {title: "Forecast Planner", img: require('@/assets/no-image.jpg'), id:1, modal: false},
      {title: "Dev Learning", img: require('@/assets/no-image.jpg'), id:1, modal: false},
    ])

    return { experinces, projects }
  }
})
</script>

<style>
.projects {
  height: 60em;
  display: flex;
  flex-direction: row;
}

.projects .list {
  margin-right: 20px;
}
.projects .laptop-img {
  margin-left: 20px;
}

.projects .laptop-img img {
  height: 35em;
}
</style>