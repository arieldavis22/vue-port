<template>
  <div class="contact">
    <Transition name="fade">
      <form v-if="showForm" ref="contactForm" @submit.prevent="handleSubmit">
        <h1 v-if="showForm">Say Hello</h1>
        <label for="name">Name</label>
        <input name="from_name" id="from_name" type="text" required v-model="name">
  
        <label for="email">Email</label>
        <input name="reply_to" id="reply_to" type="email" required v-model="email">
  
        <label for="message">Message</label>
        <textarea name="message" id="message" required v-model="message"></textarea>
  
        <div class="submit">
          <button>Send</button>
        </div>
      </form>
      <div v-else>
        <h2>Thank you for saying hello!</h2>
        <h2>Feel free to check out my socials below!</h2>
      </div>
    </Transition>
    <div class="icons">
      <font-awesome-icon class="icon" :icon="['fab', 'github']"  @click="handleClick('github')" />
      <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" @click="handleClick('linkedin')" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import emailjs from '@emailjs/browser'
import Social from '../types/Social'

export default defineComponent({
  name: "ContactView",
  setup() {
    const name = ref('')
    const email = ref('')
    const message = ref('')
    const contactForm = ref('')
    const showForm = ref(true)


    const handleClick = (id: Social) => {
      let url = ''
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

    const handleSubmit = () => {      
      showForm.value = false
      emailjs.sendForm('service_y418teb', 'template_8ai5ujy', contactForm.value, 'ubZdCNPycE6qeH15a')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }

    return { name, email, message, contactForm, showForm, handleSubmit, handleClick }
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