
<template>
  <nav>
    <a v-for="(link, index) in navLinks" :key="index" :href="link.id" @click.prevent="scrollTo(link.id)">{{ link.text }}</a>
    <div id="indicator"></div>
  </nav>
  <ToTopComponent/>
  <HomeView id="home" class="view"/>
  <ProjectsView id="projects" class="view"/>
  <ContactView id="contact" class="view"/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ToTopComponent from './components/ToTopComponent.vue';

import ContactView from './views/ContactView.vue';
import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';

export default defineComponent({
  name: 'App',
  components: {HomeView, ProjectsView, ContactView, ToTopComponent},
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
  position: absolute;
  right: 0;
  width: 350px;
  display: table;
  margin: 0 auto;
}

nav a {
  position: relative;
  width: 33%;
  display: table-cell;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  color: black;
}

nav a:before,
nav a:after {
  content: "";
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  transition: 0.2s ease transform;
}

nav a:before {
  top: 0;
  left: 10px;
  width: 6px;
  height: 6px;
}

nav a:after {
  top: 5px;
  left: 18px;
  width: 4px;
  height: 4px;
}

nav a:nth-child(1):before {
  background-color: orange;
}

nav a:nth-child(1):after {
  background-color: orange;
}

nav a:nth-child(2):before {
  background-color: orange;
}

nav a:nth-child(2):after {
  background-color: orange;
}

nav a:nth-child(3):before {
  background-color: orange;
}

nav a:nth-child(3):after {
  background-color: orange;
}

#indicator {
  position: absolute;
  left: 5%;
  bottom: 0;
  width: 30px;
  height: 3px;
  background-color: #fff;
  border-radius: 5px;
  transition: 0.2s ease left;
}

nav a:hover {
  color: grey;
}

nav a:hover:before,
nav a:hover:after {
  transform: scale(1);
}

nav a:nth-child(1):hover ~ #indicator {
  background: linear-gradient(130deg, orange, white);
}

nav a:nth-child(2):hover ~ #indicator {
  left: 34%;
  background: linear-gradient(130deg, orange, white);
}

nav a:nth-child(3):hover ~ #indicator {
  left: 70%;
  background: linear-gradient(130deg, orange, white);
}

.view {
  margin-bottom: 20px;
}
</style>
