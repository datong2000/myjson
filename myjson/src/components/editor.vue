<template>
  <div>
    <div class="editor" @mousemove="debounce(resize,10)" @touchmove="debounce(resize,10)">
      <div class="box">
        <ol ref="ol">
          <li ref="li"></li>
          <li v-for="idx in number" :key="idx"></li>
        </ol>
        <textarea
          @input="rowNumber"
          @scroll="scroll"
          @blur="jsonData"
          v-model="json"
          ref="textarea"
          wrap="on"
          autofocus
          :disabled="disabled"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      json: "",
      timeout: null
    };
  },
  mounted() {
    this.resize();
    this.getData ? this.getJson() : "";
  },
  methods: {
    debounce(fn, wait) {
      if (this.timeout !== null) clearTimeout(this.timeout);
      this.timeout = setTimeout(fn, wait);
    },
    rowNumber() {
      this.number = Math.ceil(
        this.$refs.textarea.scrollHeight / this.$refs.li.scrollHeight
      );
    },
    resize() {
      this.$refs.ol.style.height = this.$refs.textarea.offsetHeight + "px";
      this.rowNumber();
    },
    scroll() {
      this.$refs.ol.scrollTop = this.$refs.textarea.scrollTop;
    },
    jsonData() {
      this.$store.state.json = this.json;
    },
    async getJson() {
      try {
        let { data } = await this.$axios.post("/api/readjson", {
          url: localStorage.getItem("url")
        });
        if (data.data) {
          this.json = data.data;
        } else {
          this.json = this.$store.state.json;
        }
      } catch (e) {
        alert(e);
      }
    }
  },
  props: ["disabled", "getData"]
};
</script>

<style lang="scss" scoped>
.editor {
  .box {
    box-sizing: border-box;
    border: 2px solid #ccc;
    padding: 2px;
    border-radius: 5px;
    display: flex;
    margin: 0 auto;
    width: 50%;
    ol {
      margin: 0;
      overflow: hidden;
      font: 400 16px 微软雅黑;
    }
    textarea {
      background-color: #f6f6f6;
      flex: 1;
      line-height: 18px;
      padding: 0 0 0 5px;
      border-right: 0;
      border-top: 0;
      border-bottom: 0;
      border-left: 1px solid #ccc;
      height: 630px;
      outline: none;
      font: 400 16px 微软雅黑;
    }
  }
}
@media screen and (max-width: 800px) {
  .editor {
    .box {
      width: 100%;
      margin: 0;
    }
  }
}
</style>