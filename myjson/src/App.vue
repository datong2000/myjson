<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>
<style lang="scss">
@import "@/style/theme";
body {
  background: $background;
}
</style>