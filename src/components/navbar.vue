<template>
  <div id="navbar" class="flex mx-auto justify-center text-center w-48 font-chivo tracking-wider select-none">
    <router-link to="/">
      <h1 class="flex-1 max-w-lg px-10 hover:shadow-inner rounded-lg">About</h1>
    </router-link>
    <router-link to="/portfolio">
      <h1 class="flex-1 max-w-lg px-10 hover:shadow-inner rounded-lg">Portfolio</h1>
    </router-link>
    <router-link to="/skills">
      <h1 class="flex-1 max-w-lg px-10 hover:shadow-inner rounded-lg">Skills</h1>
    </router-link>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>