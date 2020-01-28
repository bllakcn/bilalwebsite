<template>
  <div id="skills" class="mb-10">
    <div class="block md:flex border rounded-lg">
      <div class="block py-5 flex-1">
        <h1 class="pb-4 px-5 font-pop">&bull; 3D Modelling</h1>
        <div v-for="model in models" :key="model" class="pb-5 mx-auto">
          <h2 class="font-libre pb-2 px-2 lg:px-20">{{model.name}}</h2>
          <div class="px-4 lg:px-24">
            <div class="shadow hover:shadow-inner rounded-lg bg-gray-300">
              <div class="bg-gray-900 h-4 rounded-lg" :style="model.progress"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="block py-5 flex-1"> 
      <h1 class="pb-4 px-5 font-pop">&bull; Digital Production</h1>
        <div v-for="adobe in adobes" :key="adobe" class="pb-5 mx-auto">
          <h2 class="font-libre pb-2 px-2 lg:px-20">{{adobe.name}}</h2>
          <div class="px-4 lg:px-24">
            <div class="shadow hover:shadow-inner rounded-lg bg-gray-300">
              <div class="bg-gray-900 h-4 rounded-lg" :style="adobe.progress"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="block py-5 flex-1">
      <h1 class="pb-4 px-5 font-pop">&bull; Frontend Development</h1>
        <div v-for="front in fronts" :key="front" class="pb-5 mx-auto">
          <h2 class="font-libre pb-2 px-2 lg:px-20">{{front.name}}</h2>
          <div class="px-4 lg:px-24">
            <div class="shadow hover:shadow-inner rounded-lg bg-gray-300">
              <div class="bg-gray-900 h-4 rounded-lg" :style="front.progress"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        models:[
          {name: 'Autodesk Revit', progress: 'width: 78%'},
          {name: 'Autodesk Autocad', progress: 'width: 70%'},
          {name: 'Sketchup', progress: 'width: 70%'},
        ],
        adobes:[
          {name: 'Adobe Photoshop', progress: 'width: 90%'},
          {name: 'Adobe Lightroom', progress: 'width: 70%'},
          {name: 'Adobe Illustrator', progress: 'width: 68%'},
        ],
        fronts:[
          {name: 'Javascript & Vue', progress: 'width: 78%'},
          {name: 'Html & Css', progress: 'width: 72%'},
          {name: 'Google Script', progress: 'width: 55%'},
        ]
      }
    },
    methods: {
    },
  }
</script>

<style scoped>

</style>