<template>
  <div class="home">
    <div>
      <h1>Ariel Davis</h1>
      <div class="description">
        <span>
          <h5>Full-Stack Software Engineer</h5>
          A full-stack web developer with a passion for expansive learning.
        </span>
        <span>
          <h5>Latest Technologies</h5>
          Knowledge in up-to-date technologies such as React, Vue 3, Python, Javascript, Node, and Typescript
        </span>
        <span>
          <h5>A Cool Guy</h5>
          Always down to have a talk or conversation! Click here to drop a greeting!
        </span>
      </div>
    </div>
    <div class="img-container circle">
      <img class="circle" src="../assets/ariel-davis-professional.jpg" alt="ad">
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HomeView',
  components: {},
});
</script>

<style>
.home {
  display: flex;
  justify-content: space-between;
  height: 54em;
}

.home .description {
  width: 90%;
  font-size: 1.8em;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
}
.home .description h5 {
  margin-bottom: 4px;
}
.home .description span {
  margin: 0px 0px 24px;
  padding: 6px;
}
.home .description span:nth-child(even) {
  text-align: right;
}
.home .description span:nth-child(odd) {
  text-align: left;
}

.home .description span:nth-child(even)::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-bottom: 50px solid orange;
  border-left: 50px solid transparent;
  position: absolute;
  left: 61%;
}

.home .description span:nth-child(odd)::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-bottom: 50px solid orange;
  border-right: 50px solid transparent;
  position: absolute;
  left: 5%;
}

.home .img-container {
  display: flex;
  flex-shrink: 0;
  height: calc(350px + 4vw);
  width: calc(350px + 4vw);
  margin: 8em 25px 25px 25px;
  background-image: linear-gradient(to bottom right, orange, rgb(255, 181, 44), rgb(228, 192, 126));

}

.home img {
  height: calc(330px + 4vw);
  width: calc(330px + 4vw);
  background-size: cover;
  margin: auto;
}

.circle {
  border-radius: 1000px;
}
</style>
