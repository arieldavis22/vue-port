
<template>
  <nav>
    <a v-for="(link, index) in navLinks" :key="index" :href="link.id" @click.prevent="scrollTo(link.id)">{{ link.text }} | </a>
  </nav>
  <HomeView id="home"/>
  <ProjectsView id="projects"/>
  <ContactView id="contact" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import ContactView from './views/ContactView.vue';
import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';

export default defineComponent({
  name: 'App',
  components: {HomeView, ProjectsView, ContactView},
  setup() {
    const navLinks = ref([
      {
        id: "#home",
        text: "Home"
      },
      {
        id: "#projects",
        text: "Projects"
      },
      {
        id: "#contact",
        text: "Contact"
      },
    ])

    const scrollTo = (selector: string) => {
      const aTag = document.querySelector<HTMLAnchorElement>(selector)
      if(aTag) aTag.scrollIntoView({behavior: 'smooth'})
    }
    
    return {navLinks, scrollTo}
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
