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
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContactView",
  setup() {
    const name = ref('')
    const email = ref('')
    const message = ref('')

    const handleSubmit = () => {
      console.log('working');
    }


    return { name, email, message, handleSubmit }
  }
})
</script>

<style>
.contact {
  height: 40em;
}
form {
  max-width: 500px;
  margin: auto;
}

label {
  display: inline-block;
  margin: 15px 0px 15px;
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
}

input,textarea {
  display: block;
  width: 100%;
  padding: 10px 6px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px black solid;
  box-shadow: 2px 2px orange;
}

textarea {
  height: 10em;
  resize: none;
}

button {
  background: white;
  border: 2px orange solid;
  padding: 10px 20px;
  margin-top: 20px;
  /* color: orange; */
  border-radius: 12px;
  font-size: large;
  /* font-weight: 600; */
  box-shadow: 4px 4px orange;
}
.submit {
  text-align: center;
}
</style>