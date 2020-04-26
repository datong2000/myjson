<template>
  <div>
    <Header></Header>
    <editor :disabled="true" :getData="getData"></editor>
    <div class="input_address">
      URL:
      <input type="text" class="address" :value="address" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
import editor from "@/components/editor";
export default {
  data() {
    return {
      getData: false
    };
  },
  created() {
    if (localStorage.getItem("url")) {
      this.getData = true;
    } else {
      this.$router.push("/");
    }
  },
  components: {
    editor,
    Header
  },
  computed: {
    address() {
      return `${window.location.host}/api/${localStorage.getItem("url")}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.input_address {
  width: 50%;
  margin: 15px auto 0;
  font-size: 14px;
  .address {
    padding: 5px 20px;
    outline: none;
    border-radius: 5px;
  }
}
</style>