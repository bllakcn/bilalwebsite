<template>
  <div id="project">
    <router-link v-on:click="chooseNext" :to="'/portfolio/' + prevelement">
      <div class="hidden lg:block fixed opacity-25 text-center inset-y-0 pr-5 py-64 pl-6 left-0 hover:opacity-75">
        <font-awesome-icon class="text-4xl" :icon="['fas', 'angle-left']"/>
      </div>
    </router-link>
    <router-link v-on:click="chooseNext" :to="'/portfolio/' + nxtelement">
      <div class="hidden lg:block fixed opacity-25 text-center inset-y-0 pr-5 py-64 pl-6 right-0 hover:opacity-75">
        <font-awesome-icon class="text-4xl" :icon="['fas', 'angle-right']"/>
      </div>
    </router-link>
    <div v-for="record in records" :key="record">
      <div v-if="record.fields.slug == $route.params.slug">
        <div class="select-none text-center">
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
        loading: true,
        nxtelement: null,
        prevelement: null,
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
      chooseNext(){
        for (let i = 0; i < this.records.length; i++) {
          if(this.records[i].fields.slug == this.$route.params.slug){
            if( i+1 == this.records.length){
              this.nxtelement = this.records[i].fields.slug;
            }
            else{
              this.nxtelement = this.records[i + 1].fields.slug;
            }
            if(i == 0){
              this.prevelement = this.records[i].fields.slug;
            }
            else{
              this.prevelement = this.records[i - 1].fields.slug;
            }
          }
        }
      },
    },
    created () {
      this.getData();
    },
    beforeUpdate(){
      this.chooseNext();
    }
  }
</script>

<style scoped>
  .font-libri{
    font-family: Libre Franklin
  }
</style>