<template>
  <div id="projects" class="mb-10">
    <div class="block p-5 mb-5 border rounded-lg">
      <h1 class="pb-4 px-5 font-pop">&bull; Projects</h1>
      <div class="block md:flex">
        <div v-for="record in records" :key="record" class="pb-10 md:px-5">
          <div class="bwcss rounded-lg border shadow hover:shadow-inner">
            <router-link :to="'/portfolio/' + record.fields.slug" class="overflow-auto">
              <img :src="record.fields.image[0].url" class="w-auto mb-5 rounded-lg shadow">
              <h1 class="pl-4 pb-1 font-chivo text-lg">{{record.fields.title}}</h1>
              <h2 class="pl-4 pb-1 mb-5 font-libre tracking-widest text-gray-700 text-xs ">{{record.fields.date}}</h2>
          </router-link>
          </div>
        </div>
      </div>
    </div>
    <!--
    <div class="block p-5 border rounded-lg">
      <h1 class="pb-4 px-5 font-pop">&bull; Visualizations</h1>
      <div class="block md:flex">
        <div v-for="record in records" :key="record" class="pb-10 md:p-5">
          <div class="bwcss rounded-lg border shadow hover:shadow-inner">
            <router-link :to="'/portfolio/' + record.fields.slug" class="overflow-auto">
              <img :src="record.fields.image[0].url" class="w-auto mb-5 rounded-lg shadow">
              <h1 class="pl-4 pb-1 font-chivo text-lg">{{record.fields.title}}</h1>
              <h2 class="pl-4 pb-1 mb-5 font-libre tracking-widest text-gray-700 text-xs ">{{record.fields.date}}</h2>
          </router-link>
          </div>
        </div>
      </div>
    </div>
    -->
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