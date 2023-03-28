<template>
  <div class="contact">
    <h1>Say Hello</h1>
    <form @submit.prevent="handleSubmit">
      <label for="name">Name</label>
      <input type="text" required v-model="name">

      <label for="email">Email</label>
      <input type="email" required v-model="email">

      <label for="message">Message</label>
      <textarea required v-model="message"></textarea>

      <div class="submit">
        <button>Send</button>
      </div>
    </form>
    <div class="icons">
      <font-awesome-icon class="icon" :icon="['fab', 'github']"  @click="handleClick('github')" />
      <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" @click="handleClick('linkedin')" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Social from '../types/Social'

export default defineComponent({
  name: "ContactView",
  setup() {
    const name = ref('')
    const email = ref('')
    const message = ref('')

    const handleSubmit = () => {
      console.log('working');
    }

    const handleClick = (id: Social) => {
      let url = null
      switch (id) {
        case 'github':
          url = 'https://github.com/arieldavis22'
          break;
        case 'linkedin':
          url = 'https://www.linkedin.com/in/arieladavis/'
          break;
        default:
          break;
      }
      window.open(url, '_break')
    }


    return { name, email, message, handleSubmit, handleClick }
  }
})
</script>

<style>
.contact {
  height: 40em;
}
.contact form {
  max-width: 500px;
  margin: auto;
}

.contact label {
  display: inline-block;
  margin: 15px 0px 15px;
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
}

.contact input,textarea {
  display: block;
  width: 100%;
  padding: 10px 6px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px black solid;
  box-shadow: 2px 2px orange;
}

.contact textarea {
  height: 10em;
  resize: none;
}

.contact .submit {
  text-align: center;
}

.contact .icons {
  font-size: 50px;
  margin-top: 30px;
}

.contact .icons .icon {
  margin: 10px;
  transition: all .2s ease-in-out;
}
.contact .icons .icon:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>