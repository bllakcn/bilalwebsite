<template>
  <div id="navbar" class="flex justify-center mt-1 overflow-auto mx-auto">
    <div v-for="menu in menus" :key="menu">
      <router-link :to="menu.to">
        <h1 class="py-1 px-4 sm:px-8 lg:px-12 hover:shadow-inner rounded-lg">{{menu.name}}</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menus:[
          {name:"About",to:"/"},
          {name:"Skills",to:"/skills"},
          {name:"Portfolio",to:"/portfolio"},
          {name:"Notepad",to:"/notepad"}
        ]
      }
    },
  }
</script>

<style scoped>

</style>