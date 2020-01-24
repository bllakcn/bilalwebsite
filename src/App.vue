<template>
  <div id="app" class="min-h-screen">
    <div id="nav">
      <img v-on:click="currentTab = 'About'" src="./assets/logos.png" class="max-w-lg w-6/12 h-auto hidden md:block mx-auto p-10 select-none">
      <h1 class="block md:hidden font-pop text-center text-2xl p-5">Ahmet Bilal Akcan</h1>
      <app-navbar></app-navbar>
    </div>
    <div>
      <transition name="component-fade" mode="out-in">
        <keep-alive>
          <router-view class="p-5 py-10 md:p-16"></router-view>
        </keep-alive>
      </transition>
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
  .component-fade-enter-active, .component-fade-leave-active{
    transition: opacity .2s ease;
  }
  .component-fade-enter, .component-fade-leave-to{
    opacity: 0;
  }
</style>
