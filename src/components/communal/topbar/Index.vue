<template>
  <van-nav-bar class="m-topbar" title="YOEEmusic" placeholder @click-left="onClickLeft"
  @click-right="onClickRight">
    <template #left>
      <van-icon class="topbar-icon" name="wap-nav" color="orange" size="1.5rem" />
    </template>
    <template #right>
      <van-icon class="topbar-icon"  name="search" color="orange" size="1.5rem" />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      console.log(1);
    },
    t(){
      console.log(1)
    },
    onClickRight() {
      console.log(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.m-topbar {
  background-color: rgb(15, 16, 18);
}
</style>