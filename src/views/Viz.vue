<template>
  <div>
    <div v-if="loading" class="block p-5 border rounded-lg">
      <h1 class="pb-4 px-5 font-pop">&bull; Visualizations</h1>
      <div class="block md:flex md:flex-wrap">
        <div v-for="record in records" :key="record" class="pb-10 md:p-5 w-6/12">
          <div class="bfcss">
            <img :src="record.fields.image[0].url" alt="">
            <a :href="record.fields.link">
              <h2 class="pl-4 pb-1 mb-5 font-libre tracking-widest text-gray-700 text-xs">{{record.fields.date}}</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import axios from 'axios'
  export default {
data() {
      return {
      index: null,
        apiUrl: 'https://api.airtable.com/v0/',
        apiKey: 'keypShAsE2JBGmmi3',
        base: 'appeMm88M1T3Jjzq9/Table%201',
        records: [],
        loading: false,
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
        setTimeout(() => {this.loading = true},500)
          })
      },
    },
    mounted () {
      this.getData();
    },
  }

</script>

<style>
  .bfcss{
    transition: filter .6s;
    filter: grayscale(60%);
  }
  .bfcss:hover{
    filter: grayscale(0);
    transform: scale(1.005);
  }
</style>