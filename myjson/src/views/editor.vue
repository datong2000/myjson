<template>
  <div>
    <Header></Header>
    <editor :disabled="false" :getData="false"></editor>
    <div class="save_box">
      <button class="save" @click="sendJSON">编辑好JSON数据，点击保存</button>
    </div>
    <div class="save_box">
      <input type="file" ref="input_file" @change="file" />
      <button class="save" @click="$refs.input_file.click()">上传JSON文件</button>
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
          const { data } = await this.$axios.post("/api/writejson", {
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
    },
    async file() {
      if (
        this.$refs.input_file.files.length &&
        this.$refs.input_file.files[0].type === "application/json"
      ) {
        try {
          const formData = new FormData();
          formData.append("file", this.$refs.input_file.files[0]);
          const { data } = await this.$axios.post("/api/filejson", formData);
          alert(data.message);
          localStorage.setItem("url", data.url);
          this.$router.push({ path: "/readjson" });
        } catch (e) {
          alert(e);
        }
      } else {
        alert("请选择JSON文件");
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
  position: relative;
  input[type="file"] {
    opacity: 0;
    display: block;
    position: absolute;
    width: 0;
    height: 0;
  }
  .save {
    cursor: pointer;
    background: #ccc;
    border-radius: 5px;
    padding: 5px 20px;
    outline: none;
  }
}

@media screen and (max-width: 800px) {
  .save_box {
    text-align: center;
  }
}
</style>