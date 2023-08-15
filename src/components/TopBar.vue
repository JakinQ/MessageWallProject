<template>
  <div class="topBar">
    <div class="logo">
      <img src="../assets/images/favicon.svg" />
      <p class="logoTitle">千鹤时光</p>
    </div>
    <div class="menu">
      <QhButton
        name="留言墙"
        size="base"
        type="primaryActive"
        class="qb"
      ></QhButton>
      <QhButton name="照片墙" size="base" type="nPrimary" class="qb"></QhButton>
    </div>
    <div class="user"><div class="user-head"></div></div>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from "vue";
import QhButton from "./QhButton.vue";

const components = {
  QhButton,
};
</script>

<style scoped lang="less">
.topBar {
  width: 100%;
  height: 52px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  .logo {
    width: 200px;
    display: flex;
    align-items: center;
    .logoTitle {
      font-size: @size-20;
      color: @gray-1;
      text-align: justify;
      font-weight: 600;
      padding-left: 10px;
    }
  }
  .menu {
    display: flex;
    .qb {
      padding: 0 12px 0 12px;
    }
  }
  .user {
    width: 200px;
    .user-head {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-image: linear-gradient(180deg, #7be7ff, #1e85e2); //渐变色
    }
  }
}
</style>