<template>
  <div class="home">
    <div>
      <h1>About me</h1>
      <div class="description">
        <span>
          <h5>Full-Stack Software Engineer</h5>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem voluptatum corporis obcaecati? Dolorum commodi repellat accusantium nam repellendus sunt illum impedit debitis rerum, labore excepturi enim itaque distinctio consectetur aspernatur?
        </span>
        <span>
          <h5>Latest Technologies</h5>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem illo eum dignissimos quo quam nisi consequuntur voluptatibus sed velit perferendis, necessitatibus possimus expedita quis, omnis consequatur ducimus ex nam autem.
        </span>
        <span>
          <h5>A Cool Guy</h5>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione aut ipsam ipsa iure dolorem! Nobis rerum quo, beatae quas soluta provident, et harum voluptas odit, aut eveniet culpa! Possimus, odit!
        </span>
      </div>
    </div>
    <img src="../assets/ariel-davis-professional.jpg" alt="ad">
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
  /* line-height: 1.5; */
}
.home .description h5 {
  margin-bottom: 4px;
}
.home .description span {
  margin: 0px 0px 12px;
}
.home .description span:nth-child(even) {
  text-align: right;
}
.home .description span:nth-child(odd) {
  text-align: left;
}

.home img {
  height: 350px;
  margin: 100px auto;
}
</style>
