<template>
<div>
  <swiper :banners='BannerData' />
  <browse-by-genre/>
  <new-song/>
  <hot-sell/>
</div>
</template>

<script>
// @ is an alias to /src
import Swiper from "@/components/communal/swiper/Swiper.vue";
import BrowseByGenre from "./home/BrowsebyGenre.vue"
import NewSong from './home/NewSong.vue'
import HotSell from './home/HotSell'

//网络请求:
import {getBannerdata} from '@/network/home.js'
export default {
  name: "Home",
  data(){
    return{
      BannerData: {}
    }
  },
  components: {
    Swiper,
    BrowseByGenre,
    NewSong,
    HotSell
  },
  created(){
    //网络资源获取
    getBannerdata().then(res => {
      if(res.code === 200){
        this.BannerData = {...res.banners}
      }
    });
  }
};
</script>
