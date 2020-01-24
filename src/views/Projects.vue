<template>
  <div id="projects">
    <div class="mx-auto flex flex-wrap justify-center overflow-hidden">
      <div v-for="record in records" :key="record">
        <router-link  :to="'/portfolio/' + record.fields.slug">
          <div class="bwcss w-64 lg:w-auto rounded-lg shadow border hover:shadow-inner m-5 overflow-auto bg-white select-none">
            <img :src="record.fields.image[0].url" class="h-40 lg:h-56 object-cover p-4">
            <h1 class="pl-4 pb-1 font-chivo text-lg">{{record.fields.title}}</h1>
            <h2 class="pl-4 pb-4 tracking-widest text-gray-700 font-libre text-xs">{{record.fields.date}}</h2>
          </div>
        </router-link>
      </div>
    </div> 
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        apiUrl: 'https://api.airtable.com/v0/',
        apiKey: 'keypShAsE2JBGmmi3',
        base: 'appWKUisC0lo7L42m/Architectural%20Projects',
        records: [],
        loading: true,
      }
    },
    methods: {
      getData(){
        axios({
          url: this.apiUrl + this.base,
          headers: {
            'Authorization': `Bearer ${this.apiKey}`
          }
        }).then((res) => {
        this.records = res.data.records
        setTimeout(() => {this.loading = false},500)
          })
      },
    },
    mounted () {
      this.getData();
    },
  }

</script>

<style scoped>
  .bwcss{
    transition: filter .6s;
    filter: grayscale(60%)
  }
  .bwcss:hover{
    filter: grayscale(0)
  }
</style>