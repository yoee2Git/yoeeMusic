<template>
  <div>
    <van-row type="flex" justify="space-between" class="m-browse-genre">
      <van-col span="10">
        <h3>独家放送</h3>
      </van-col>
      <van-col span="6">
        <a href>更多</a>
      </van-col>
    </van-row>
    <van-row type="flex" class="content-img-wrap">
      <van-col v-for="(img,index) in exclusive" :key="index" class="content-img">
        <van-icon name="play-circle-o" />
        <img class="content-img" :src="img.sPicUrl" />
        <p>{{img.copywriter}}</p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import scroll from "@/components/communal/scroll/scroll.vue";

import { exclusive } from "@/network/home.js";

export default {
  name: "BrowseByGenre",
  components: {
    scroll
  },
  data() {
    return {
      exclusive: null
    };
  },
  methods: {},
  created() {
    exclusive().then(res => {
      this.exclusive = res.result;
    });
  }
};
</script>

<style lang='scss' scoped>
.m-browse-genre {
  h3 {
    margin-top: 0.2rem 0rem 0.2rem;
  }
  .van-col {
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    color: seashell;
  }
}
.content-img-wrap {
  overflow: scroll;
  .content-img {
    position: relative;
    height: 8rem;
    margin: 0 0.2rem;
    .van-icon {
      position: absolute;
      z-index: 1;
      font-size: 2rem;
      color: white;
      top: 0.5rem;
      left: 1rem;
    }
    p {
      position: absolute;
      color: white;
      font-size: 12px;
      width: 10rem;
      bottom: 0.5rem;
      left: 1rem;
    }
  }
}

</style>