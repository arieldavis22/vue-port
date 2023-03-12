<template>
  <div>
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
      {title: "Interplay Learning", img: require('@/assets/no-image.jpg'), id:0},
      {title: "Interplay Learning", img: require('@/assets/no-image.jpg'), id:1}
    ])

    const projects = ref<Card[]>([
      {title: "Interplay Learning", img: require('@/assets/no-image.jpg'), id:0},
      {title: "Interplay Learning", img: require('@/assets/no-image.jpg'), id:1},
      {title: "Interplay Learning", img: require('@/assets/no-image.jpg'), id:1},
      {title: "Interplay Learning", img: require('@/assets/no-image.jpg'), id:1},
      {title: "Interplay Learning", img: require('@/assets/no-image.jpg'), id:1},
    ])

    return { experinces, projects }
  }
})
</script>

<style>

</style>