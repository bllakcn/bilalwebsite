<template>
  <div id="project">
    <div v-for="record in records" :key="record">
      <div v-if="record.fields.slug == $route.params.slug">
        <div class="text-center">
          <h1 class="font-pop text-lg">{{record.fields.title}}</h1>
          <h2 class="tracking-widest text-gray-700 font-libre text-xs">{{record.fields.date}}</h2>
        </div>
        <div class="py-10 px-3 md:px-10">
          <h1 class="font-chivo text-center pb-8 text-lg">Description</h1>
          <vue-simple-markdown class="font-libri pb-8" :source="record.fields.body"></vue-simple-markdown>
          <h1 class="font-chivo text-center pb-8 text-lg ">Posters</h1>
          <div class="hidden lg:block w-3/5 mx-auto border rounded-lg p-5 text-center">
            <div v-for="poster in record.fields.posters" :key="poster" class="inline-block px-1">
              <a :href="poster.filename" target="_blank">
                <img class="w-56 mx-auto rounded-lg shadow border hover:shadow-inner object-cover p-3" :src="poster.url" alt="">
              </a>
            </div>
          </div>
          <div class="lg:hidden pt-3">
            <div v-for="poster in record.fields.posters" :key="poster" class="inline-block">
              <img class="w-full mx-auto object-cover pb-3" :src="poster.url" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    props: ['slug'],
    data() {
      return {
        apiUrl: 'https://api.airtable.com/v0/',
        apiKey: 'keypShAsE2JBGmmi3',
        base: 'appWKUisC0lo7L42m/Architectural%20Projects',
        records: [],
        loading: true
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
      }
    },
    created () {
      this.getData();
      console.log(this.records)
    },
  }
</script>

<style scoped>
.font-libri{
  font-family: Libre Franklin
}
</style>