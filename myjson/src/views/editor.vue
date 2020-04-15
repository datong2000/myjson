<template>
  <div>
    <editor :disabled="false" :getData="false"></editor>
    <div class="save_box">
      <button class="save" @click="sendJSON">编辑好JSON数据，点击保存</button>
    </div>
  </div>
</template>

<script>
import editor from "@/components/editor";
export default {
  components: {
    editor
  },
  methods: {
    async sendJSON() {
      try {
        let { data } = await this.$axios.post("/api/writejson", {
          data: this.$store.state.json
        });
        this.$store.state.url = data.url;
        this.$router.push({ path: "/readjson" });
      } catch (e) {
        alert(e);
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