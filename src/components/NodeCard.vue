<template>
  <div
    class="node-card"
    :style="{ width: width, background: 'rgba(252, 175, 162, 0.3)' }"
  >
    <header class="top">
      <p class="time">1</p>
      <p class="label">2</p>
    </header>
    <main class="message">
      底部导航（与顶部导航呼应，以及网站地图、帮助中心、关于我们等）
      版权说明（除了copyright by即©️，还有powered by 、design by等）
      联系方式（名称、地址、电话、邮件、微博、微信等）
    </main>
    <footer class="footer">
      <div class="left">
        <div class="iconfont">
          <svg class="icon aixin" aria-hidden="true">
            <use xlink:href="#icon-aixin1"></use></svg
          ><span class="value">1</span>
        </div>
        <div class="iconfont">
          <svg class="icon" aria-hidden="true">
            <use xlink:href=" #icon-liuyan"></use></svg
          ><span class="value">12</span>
        </div>
      </div>
      <div class="name">盚鮛</div>
    </footer>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, defineProps } from "vue";
const props = defineProps({
  width: {
    type: String,
    default: "288px",
  },
  size: String,
  type: String,
  //   count: {
  //     type: Number,
  //     default: 0,
  //   },
});
</script>

<style lang="less" scoped>
@font-face {
  font-family: "pigtruman";
  src: url("../assets/pigtruman手写体.ttf") format("truetype");
  /* 可以指定其他字体样式和格式 */
}
@font-face {
  font-family: "if";
  src: url("../assets/iconfont.ttf") format("truetype");
  /* 可以指定其他字体样式和格式 */
}
.node-card {
  height: 240px;
  background: rgba(252, 175, 162, 0.3);
  padding: 10px 20px 16px;
  box-sizing: border-box;
  position: relative;
  .top {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 12px;
      color: @gray-3;
      // letter-spacing: 0;
      // font-weight: 400;
    }
  }
  .message {
    height: 140px;
    font-family: "pigtruman", sans-serif;
    // font-family: "if", sans-serif;
    cursor: pointer;
    font-size: 14px;
    color: @gray-1;
    // letter-spacing: 0;
    // font-weight: 400;
    // margin-top: 16px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 16px;
    left: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    .left {
      display: flex;
      .value {
        font-size: 12px;
        color: @gray-3;
        line-height: 16px;
        padding-left: 4px;
      }
      .iconfont {
        padding-right: 8px;
        display: flex;
        align-items: center;
      }
      .icon {
        font-size: 16px;
        color: @gray-3;
      }
      .aixin {
        cursor: pointer;
        transition: @tr;
        &:hover {
          color: @like;
        }
      }
    }
    .name {
      font-family: "pigtruman", sans-serif;
      font-weight: 600;
      font-size: 15px;
      color: @gray-1;
    }
  }
}
</style>
