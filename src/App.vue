<template>
  <div id="app" class="min-h-screen">
    <div id="nav">
      <img v-on:click="currentTab = 'About'" src="./assets/logos.png" class="max-w-lg w-6/12 h-auto hidden md:block mx-auto p-10 select-none">
      <h1 class="block md:hidden font-pop text-center text-2xl p-5">Ahmet Bilal Akcan</h1>
      <app-navbar></app-navbar>
    </div>
    <div>
      <keep-alive>
        <router-view class="p-5 py-10 md:p-16"></router-view>
      </keep-alive>
      <app-contact></app-contact>
    </div>
  </div>
</template>

<script>
import './main.css'
import navbar from './components/navbar'
import contact from './components/contact'
export default {
  components: {
    "app-navbar" : navbar,
    "app-contact" : contact
  },
  data() {
    return {
      
    }
  },  
}
</script>

<style>

</style>
