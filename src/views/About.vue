<template>
  <div id="about" class="mx-auto my-auto">
    <div class="block justify-center mx-auto md:flex xl:px-10">
      <img src="../assets/A.BilalAkcan.jpeg" class="photo shadow border hover:shadow-inner my-auto mx-auto rounded-full w-3/6 sm:w-2/6 mx-10 md:w-1/4 lg:w-3/12 xl:w-1/5">
      <p class="py-10 md:px-10 mx-auto text-base text-justify font-libre">
        Hi, I am Bilal. <br><br>
        Currently pursuing Architecture Bachelor's degree at Budapest University of Technology and Economics and practicing UI design and development skills in free times.<br><br>
        Addressing myself as a jack of all trades but not neglecting to excel at the main profession. Eager to help others learn and thrive in anything I can get my hands on. This has always been one of my main sources of motivation to study more and, thus, help more.<br><br>
        Passionate and reading about design, technology and psychology with the ultimate goal of combining them in the future career.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .photo{
    filter: grayscale(1);
    transition: filter 1s
  }
  .photo:hover{
    filter: grayscale(.3);
    
  }
</style>