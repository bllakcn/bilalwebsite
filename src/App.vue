<template>
  <div id="app" class="">
    <div id="nav" class="mx-auto">
      <img v-on:click="currentTab = 'About'" src="./assets/logos.png" class="max-w-lg w-6/12 h-auto hidden md:block mx-auto p-10 pb-1 select-none">
      <h1 class="block md:hidden p-3 text-center font-pop text-3xl">Ahmet Bilal Akcan</h1>
      <app-navbar class="pb-3"></app-navbar>
      <div class="h-px block md:hidden mx-6 opacity-25 bg-black"></div>
      <h1 class="hidden md:block font-pop opacity-25 text-center select-none border-b w-8/12 xl:w-6/12 mx-auto bd text-xs lg:text-sm"><span class="text-4xl">"</span>Full-time architecture student. Part-time coding & photography enthusiast.<span class="text-4xl">"</span></h1>
    </div>
    <transition name="component-fade" mode="out-in">
      <keep-alive>
        <router-view class="p-5 py-6 md:p-16"></router-view>
      </keep-alive>
    </transition>
    <app-contact></app-contact>
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
  body {
    overflow-y: scroll;
  }
  .component-fade-enter-active, .component-fade-leave-active{
    transition: opacity .15s ease;
  }
  .component-fade-enter, .component-fade-leave-to{
    opacity: 0;
  }
  .bd{
    transition: border .1s ease-in-out;
    transition: opacity .1s ease-in-out;
  }
  .bd:hover{
    border-bottom: solid rgb(111, 111, 111) 1px;
    opacity: 1 ;
  }
</style>
