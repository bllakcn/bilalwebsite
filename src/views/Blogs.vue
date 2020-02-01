<template>
  <div id="blogs">
    <div class="mx-auto px-8 lg:px-0">
      <h1 class="text-xs pl-2 text-center lg:text-left font-chivo tracking-widest select-none">Here, I post stuff I noted worthwhile.<span class="text-sm font-pop"> Enjoy!</span></h1>
      <div v-for="blog in blogs" :key="blog" class="rounded-lg my-2 border shadow hover:shadow-inner">
        <a :href="blog.fields.Url" target="_blank" class="block lg:flex">
          <div class="text-center lg:text-left my-auto pr-20 py-2 flex-1">
            <h1 class="font-chivo pb-3 ml-10 tracking-wide text-gray-800">{{blog.fields.Title}}</h1>
            <h1 class="font-libri pb-1 ml-16 tracking-wider text-gray-700 text-xs lg:text-sm">{{blog.fields.Notes}}</h1>
            <h1 style="fontSize: 10px" class="font-libri ml-16 text-gray-500">{{blog.fields.Date}}</h1>
          </div>
          <div class="mx-auto w-full lg:w-2/6 rounded-lg overflow-auto">
            <div class="h-40 bg-fill bg-center bg-no-repeat lg:border" :style="{ backgroundImage: 'url('+blog.fields.thumbnail+')' }"></div>
          </div>
        </a>
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
        base: 'appCTYfhQLMx380OA/Table%201',
        blogs: [],
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
        this.blogs = res.data.records
        setTimeout(() => {this.loading = true},500)
          })
      },
    },
    mounted () {
      this.getData();
    },
  }
</script>

<style scoped>

</style>