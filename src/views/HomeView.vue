<template>
  <div class="home">
    <div>
      <h1>Ariel Davis</h1>
      <div class="background-shapes">
        <img src="../assets/svg_icons/line-shape.svg" alt="line1">
        <img src="../assets/svg_icons/line-shape.svg" alt="line2">
        <img src="../assets/svg_icons/line-shape.svg" alt="line3">
        <img src="../assets/svg_icons/line-shape.svg" alt="line4">
        <img src="../assets/svg_icons/line-shape.svg" alt="line5">
      </div>
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
      <img class="face circle" src="../assets/ariel-davis-professional.jpg" alt="ad">
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
  animation: floating 4s ease-in-out;
  animation-iteration-count: infinite;
}
.home .description span:nth-child(odd) {
  text-align: left;
  animation: floating 5s ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes floating {
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 5px); }
    to   { transform: translate(0, -0px); }    
}

.home .img-container {
  display: flex;
  flex-shrink: 0;
  height: calc(350px + 4vw);
  width: calc(350px + 4vw);
  margin: 8em 25px 25px 25px;
  background-image: linear-gradient(to bottom right, orange, white);

}

.home img.face {
  height: calc(330px + 4vw);
  width: calc(330px + 4vw);
  background-size: cover;
  margin: auto;
  mask-image: linear-gradient(45deg, #000 25%, rgba(0,0,0,0.2) 50%, #000 75%);
  mask-size: 800%;
  mask-position: 0;
  animation: photomask 15s ease;
  animation-iteration-count: infinite;
}

@keyframes photomask {
  0% { 
    mask-position: 0;
    opacity: 1;
   }
  20%, 100% { mask-position: 120%; }
}

.circle {
  border-radius: 1000px;
}
.background-shapes img {
  position: absolute;
  height: 400px;
  animation: shake 1s ease;
  animation-iteration-count: infinite;
}

@keyframes shake {
  50% {
    transform: translateX(2px);
  }
  0%,100% {
    transform: translateX(0px);
  }
}

.background-shapes img:nth-child(1){
  top: 0;
  left: -5%;
  rotate: 60deg;
}
.background-shapes img:nth-child(2){
  top: 20%;
  left: 55%;
  rotate: 130deg;
}
.background-shapes img:nth-child(3){
  top: 30%;
  left: 20%;
  rotate: 180deg;
}
.background-shapes img:nth-child(4){
  top: 45%;
  left: 60%;
  rotate: 10deg;
}
.background-shapes img:nth-child(5){
  top: 60%;
  left: 2%;
  rotate: 130deg;
}
</style>
