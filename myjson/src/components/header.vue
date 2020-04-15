<template>
  <div class="header">
    <div>
      <img src />
    </div>
    <div class="title">
      <div>临时的JSON数据</div>
      <router-link target="_blank" to="/">新建JSON</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  width: 50%;
  margin: 30px auto 10px;
  .title {
    display: flex;
    justify-content: space-between;
    ::v-deep a {
      text-decoration: none;
    }
  }
}
</style>