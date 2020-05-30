<template>
  <van-card
    num="9.9"
    price="9.9"
    desc="描述信息"
    title="商品标题"
    thumb="~@/src/assets/img/HotSell/m.png"
  >
    <template #tags>
      <van-tag plain type="danger">标签</van-tag>
      <van-tag plain type="danger">标签</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">按钮</van-button>
      <van-button size="mini">按钮</van-button>
    </template>
  </van-card>
</template>

<script>
export default {};
</script>

<style>
</style>