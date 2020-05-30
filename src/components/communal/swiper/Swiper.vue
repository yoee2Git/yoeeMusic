<template>
  <div>
    <van-swipe :autoplay="300000">
      <van-swipe-item v-for="(image, index) in banners" :key="index">
        <img v-lazy="image.pic" />
      </van-swipe-item>
    </van-swipe>

  </div>
  
</template>
<script>
// @ is an alias to /src
export default {
  name: "Swiper",
  components: {},
  data() {
    return {};
  },
  props: {
    banners: {
      type: Object,
      default: {}
    }
  },
  methods: {
    t() {
      console.log(this.banners);
    }
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 100vw;
  height: 22vh;
}
</style>