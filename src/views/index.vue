<template>
  <Particles></Particles>
  <TopBar></TopBar>
  <router-view></router-view>
  <Footer class="footer"></Footer>
</template>

<script setup lang='ts'>
//初始化组件状态和响应式数据。在 setup 函数内部，你可以返回需要在组件中使用的数据、函数和计算属性。
import { ref, reactive, Ref } from "vue";

import TopBar from "../components/TopBar.vue";
import Particles from "./Particles.vue";
import Footer from "@/components/Footer.vue";

const components = {
  TopBar,
  Particles,
  Footer,
};
</script>

<style scoped lang="less">
// @import url(@/styles/commons);
.footer {
  width: 100%;
}
</style>