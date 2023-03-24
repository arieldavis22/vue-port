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
      {
        title: "Interplay Learning", 
        img: require('@/assets/experinces/interplay.png'), 
        id:0, 
        modal: false, 
        descirption: `SkillMill(Interplay Learning Platform) is an online, on-demand learning platform built for the skilled trades. 
        The platform delivers ever-expanding catalogs of courses in HVAC, plumbing, electrical, facilities maintenance and solar. 
        With a comprehensive suite of measurement and engagement tools, businesses and managers can track employee skills progression.`, 
        links: [
          {name: 'Website', url: 'https://www.interplaylearning.com/', id: 6}
        ]
      },
    ])

    const projects = ref<Card[]>([
      {
        title: "Luck of Die",
        img: require('@/assets/projects/lod-logo.png'),
        id:0, 
        modal: false,
        descirption: `Luck of Die is a small web based game that tests the luck of the user! This project was 
        created as my second project at Flatiron School, testing my skills with Ruby on Rails, HTML, and CSS.`,
        links: [{name: 'Github', url:'https://github.com/arieldavis22/luck_of_die', id: 0}]
      },
      {
        title: "Gem Trader", 
        img: require('@/assets/projects/gt-logo.png'), 
        id:1, 
        modal: false, 
        descirption: `Gem Trader is a simple game for collecting and selling cards. Cards are themed with various gems. 
        A player can buy a box of cards and hope for the rarest, most highly-valued gem cards. Ariel Davis and 
        Laura Archambault created this app while students at Flatiron School, Atlanta campus. The project assignment was 
        to create a Rails application, both front- and backend using 5 models. Students were to demonstrate an understanding 
        of ActiveRecord and the MVC pattern.`, 
        links:[{name: 'Github', url: 'https://github.com/arieldavis22/gem_trader', id: 1}]
      },
      {
        title: "Forecast Planner", 
        img: require('@/assets/projects/fp-logo.jpg'), 
        id:1, 
        modal: false, 
        descirption: `The purpose of the Forecast Planner application is to provide users with the tools to plan events 
        and be provided with special notices depending on the weather for that day. Using the WeatherIO API, based on the 
        information that the user gives, an event is created and these notices are shown on your listing of events.`, 
        links: [
          {name:'Github (FE)', url: 'https://github.com/arieldavis22/forecast_planner_client', id:2}, 
          {name: 'Github (BE)', url: 'https://github.com/arieldavis22/forecast_planner_api', id: 3}
          ]
        },
      {
        title: "Dev Learning", 
        img: require('@/assets/projects/dev-learning.png'), 
        id:1, 
        modal: false, 
        descirption: `The goal of Dev Learning is to provide users with a high school structured way to learn 
        about programming. Split into Teacher based user experience and Student based user experience, Dev Learning 
        strives to make a complete high school setting.`, 
        links: [
          {name:'Github (FE)', url: 'https://github.com/arieldavis22/dev-learning-frontend', id: 4},
          {name: 'Github (BE)', url: 'https://github.com/arieldavis22/dev-learning-backend', id: 5}
        ]
      },
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