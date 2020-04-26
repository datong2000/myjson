<template>
  <div class="list_box">
    <div class="item">
      <div>文件名</div>
      <div>
        已创建天数
        <span>{超过30天自动删除文件}</span>
      </div>
    </div>
    <div class="item" v-for="(item,idx) in list" :key="idx">
      <div>{{item.name}}</div>
      <div>{{item.time}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: null
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let { data } = await this.$axios.get("/api/checkfiles");
      this.list = data.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.list_box {
  width: 50%;
  margin: 60px auto 0;
  font-size: 15px;
  .item {
    margin: 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #666666;
  }
}
@media screen and (max-width: 800px) {
  .list_box {
    width: 90%;
    .item {
      span {
        display: none;
      }
    }
  }
}
</style>