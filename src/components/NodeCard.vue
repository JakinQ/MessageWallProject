<template>
  <div
    class="node-card"
    :style="{
      width: width,
      background: cardColorBlock[cardData.backgroundColor],
    }"
  >
    <header class="top">
      <p class="time">{{ getTime2(Date.parse(cardData.moment)) }}</p>
      <p class="label">{{ label[cardData.type][cardData.label] }}</p>
    </header>
    <main class="message" @click="selectCard">
      {{ props.note.content }}
    </main>
    <footer class="footer">
      <div class="left">
        <div class="iconfont">
          <svg class="icon aixin" aria-hidden="true">
            <use xlink:href="#icon-aixin1"></use></svg
          ><span class="value">{{ cardData.like }}</span>
        </div>
        <div class="iconfont">
          <svg class="icon" aria-hidden="true">
            <use xlink:href=" #icon-liuyan"></use></svg
          ><span class="value">{{ cardData.comment }}</span>
        </div>
      </div>
      <div class="name">{{ cardData.name }}</div>
    </footer>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, defineProps, onMounted, Ref, computed } from "vue";
import axios from "axios";
import { wallType, label, cardColor, cardColorBlock } from "../api/webData";

const mockData = ref([]);
const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  size: String,
  type: String,
  note: {
    type: Object,
    default: [
      {
        id: 1,
        userId: 1,
        name: "杜静",
        content: "千局体化石研米权水越带准生况。着志党信运原好学名全六而。",
        moment: "1976-05-08 06:05:21",
        label: 9,
        like: 59,
        comment: 26,
        backgroundColor: 1,
        isRepeal: 14,
        isReport: 19,
        type: 0,
      },
    ],
  },
  cardIndex: Number,
  //   count: {
  //     type: Number,
  //     default: 0,
  //   },
});
interface Note {
  id: number;
  userId: number;
  name: string;
  content: string;
  moment: string;
  label: number;
  like: number;
  comment: number;
  backgroundColor: number;
  isRepeal: number;
  isReport: number;
  type: number;
}
const getTime2 = (time: string) => {
  const date = new Date(time);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};
const cardData: Note = props.note as Note;
const emit = defineEmits();

const selectCard = () => {
  //选择卡片内容，触发打开卡片详情
  emit("selectcard", props.cardIndex);
};
onMounted(async () => {});
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
      font-size: 15px;
      color: @gray-1;
    }
  }
}
</style>
