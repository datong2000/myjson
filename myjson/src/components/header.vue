<template>
  <div class="header">
    <div class="b">
      <b>{ } myjson</b>
    </div>
    <div class="title">
      <div>
        <router-link target="_blank" to="/">新建JSON</router-link>
      </div>
      <div>
        <router-link to="/checkfiles">查看JSON文件列表</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  width: 50%;
  margin: 15px auto 5px;
  .b {
    font-size: 70px;
    font-weight: bolder;
    color: #b2b2b2;
    margin-bottom: 15px;
  }
  .title {
    display: flex;
    justify-content: space-between;
    a {
      color: rgb(40, 101, 199);
    }
    ::v-deep a {
      text-decoration: none;
    }
  }
}
@media screen and (max-width: 800px) {
  .header {
    width: 90%;
    margin: 30px auto 10px;
  }
}
</style>