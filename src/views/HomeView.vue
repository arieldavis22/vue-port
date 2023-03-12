<template>
  <div class="home">
    <div>
      <h1>About me</h1>
      <div class="description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nulla, cum minus veritatis magni rem eligendi nostrum consequatur maxime repellat delectus dolorum ducimus eaque sunt quibusdam sit laborum! Eveniet, sint.
        Quasi temporibus est, vero, nobis rerum quidem assumenda repellendus quas aliquam optio repellat praesentium totam enim laudantium sint non eveniet, unde ad eligendi ullam nostrum recusandae! Consectetur ut soluta accusamus?
        Nulla laboriosam esse quos iste quae perferendis modi, quod itaque porro quasi ipsa architecto. Corporis, aperiam nostrum. Nobis at suscipit veritatis quas, voluptate qui. Ullam maiores qui explicabo laborum tempore.
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
}

.home .description {
  width: 95%;
  font-size: 30px;
  line-height: 1.5;
}

.home img {
  height: 300px;
  margin: auto;
}
</style>
