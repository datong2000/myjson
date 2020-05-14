<template>
  <div class="header">
    <div class="title">
      <b>{ } myjson</b>
    </div>
    <div class="nav">
      <div>
        <router-link target="_blank" to="/">新建JSON</router-link>
      </div>
      <div>
        <router-link to="/checkfiles">查看JSON文件列表</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 50%;
  margin: 15px auto 5px;
  .title {
    font-size: 70px;
    color: #b2b2b2;
    margin-bottom: 15px;
    white-space: nowrap;
  }
  .nav {
    div {
      font-size: 15px;
      color: #3a3a3a;
      font-weight: 600;
      margin-left: 1rem;
      display: inline;
      ::v-deep a {
        color: #3a3a3a;
        text-decoration: none;
      }
    }
    div:first-child {
      margin-left: 0;
    }
  }
}
@media screen and (max-width: 800px) {
  .header {
    width: 90%;
    b {
      font-size: 3rem;
    }
  }
}
</style>