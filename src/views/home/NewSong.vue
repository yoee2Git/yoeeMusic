<template>
  <div class="new-song">
    <van-row class="new-song-title">
      <van-col>
        <p>new</p>
        <p>Song</p>
      </van-col>
    </van-row>
    <van-row type="flex" justify="end" gutter="35">
      <van-col span="6">
        <img src="~@/assets/img/NewSong/1.png" alt />
      </van-col>
      <van-col span="6">
        <img src="~@/assets/img/NewSong/2.png" alt />
      </van-col>
      <van-col span="6">
        <img src="~@/assets/img/NewSong/3.png" alt />
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
img {
  width: 5.8rem;
  display: inline-block;
  margin: 20px;
}
.new-song {
  position: relative;
  .new-song-title {
    position: absolute;
    font-size: 2rem;
    top: 1.4rem;
    left: .5rem;
    vertical-align:middle;
    padding: .6rem;
    border: 2px solid #ffffff;
  }
}
</style>