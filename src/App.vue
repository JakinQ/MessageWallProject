<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
// import "@/assets/fonts/icon/iconfont.js";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "./components/HelloWorld.vue";
</script>
<style scoped lang="less">
// @import "./assets/fonts/iconfont.css";
// @import url(@/styles/commons);
.ab {
  font-size: @size-16;
  color: @primary-color;
  background-color: @gray-2;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
