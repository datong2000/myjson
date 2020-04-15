<template>
  <div>
    <editor :disabled="true" :getData="getData"></editor>
    <div class="input_address">
      URL:
      <input type="text" class="address" :value="address" />
    </div>
  </div>
</template>

<script>
import editor from "@/components/editor";
export default {
  data() {
    return {
      getData: false
    };
  },
  created() {
    if (this.$store.state.url === "") {
      this.$router.push("/");
    } else {
      this.getData = true;
    }
  },
  components: {
    editor
  },
  computed: {
    address() {
      return `http://localhost:3000/api/${this.$store.state.url}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.input_address {
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
  .address {
    padding: 5px 20px;
    width: 230px;
    outline: none;
    border-radius: 5px;
  }
}
</style>