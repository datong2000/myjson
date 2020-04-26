<template>
  <div>
    <Header></Header>
    <editor :disabled="false" :getData="false"></editor>
    <div class="save_box">
      <button class="save" @click="sendJSON">编辑好JSON数据，点击保存</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
import editor from "@/components/editor";
export default {
  components: {
    editor,
    Header
  },
  methods: {
    async sendJSON() {
      try {
        JSON.parse(this.$store.state.json);
        try {
          let { data } = await this.$axios.post("/api/writejson", {
            data: this.$store.state.json
          });
          localStorage.setItem("url", data.url);
          this.$router.push({ path: "/readjson" });
        } catch (e) {
          alert(e);
        }
      } catch (e) {
        alert(`请严格输入JSON格式`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.save_box {
  width: 50%;
  margin: 15px auto 0;
  font-size: 14px;
  .save {
    background: #ccc;
    border-radius: 5px;
    padding: 5px 20px;
    outline: none;
  }
}
</style>