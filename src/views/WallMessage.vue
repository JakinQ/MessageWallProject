<template>
  <div class="WallMessage">
    <p class="title">{{ wallType[counter.wallID].name }}</p>
    <p class="slogan">{{ wallType[counter.wallID].slogan }}</p>
    <div class="label">
      <button
        class="label-list"
        :class="{ active: nLabel === -1 }"
        @click="selectLabel(-1)"
      >
        全部
      </button>
      <button
        @click="selectLabel(index)"
        class="label-list"
        :class="{ active: nLabel === index }"
        v-for="(data, index) in label[counter.wallID]"
        :key="index"
      >
        {{ data }}
      </button>
    </div>
    <div class="card" :style="{ width: nWidth + 'px' }">
      <NodeCard
        v-for="(data, index) in mockData"
        :key="index"
        :note="mockData[index]"
        class="card-inner"
        :width="'288px'"
        :class="{ cardActive: data.cardSelected === index }"
        :cardIndex="index"
        @selectcard="selectCard"
        v-show="counter.wallID === 0"
      ></NodeCard>
    </div>
    <div class="photo" v-show="counter.wallID === 1">
      <PhotoCard
        class="photo-card"
        :photoData="item"
        v-for="(item, index) in photoData"
        :key="index"
        :cardIndex="index"
        @selectPhotoCard="selectPhotoCard"
      ></PhotoCard>
    </div>
    <div
      class="add"
      :style="{ bottom: addBottom + 'px' }"
      v-show="!counter.isOpen"
    >
      <svg
        class="icon icon-tianjia"
        aria-hidden="true"
        @click="openModal(index)"
      >
        <use xlink:href="#icon-tianjia"></use>
      </svg>
    </div>

    <QhModal :title="data.title" @closeModal="closeModal">
      <NewCard :id="id" v-show="data.cardSelected === -1"></NewCard>
      <CardDetails
        v-show="data.cardSelected !== -1"
        :cardDetail="
          counter.wallID === 1
            ? photoData[data.cardSelected]
            : mockData[data.cardSelected]
        "
      ></CardDetails>
    </QhModal>

    <QhViews
      v-show="counter.isOpen"
      :photoData="photoData"
      :nowNumber="data.cardSelected"
      @viewSwitch="viewSwitch"
    ></QhViews>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, Ref, computed, watch } from "vue";
import { onMounted, onUpdated, onUnmounted } from "vue";
import useStore from "../store/index";
import { getM } from "../api/index";
import { wallType, label } from "../api/webData";
import NodeCard from "../components/NodeCard.vue";
import NewCard from "../components/NewCard.vue";
import QhModal from "../components/QhModal.vue";
import CardDetails from "../components/CardDetails.vue";
import PhotoCard from "../components/PhotoCard.vue";
import QhViews from "../components/QhViews.vue";

import { note, photo } from "../mock/index";
import axios from "axios";
const { counter, user } = useStore();
const data = reactive({
  cardSelected: -1,
  title: "",
});
const id: Ref<number> = ref(0);
id.value = counter.wallID;
const nLabel: Ref<number> = ref(-1); //当前标签
const nWidth: Ref<number> = ref(288); //卡片宽度
const mockData = ref([]);
const photoData = ref([]);

const addBottom = ref(30);
const selectLabel = (index: number) => {
  nLabel.value = index;
};
const getNWidth = () => {
  let width = window.innerWidth;

  nWidth.value = Math.floor((width - 120) / 300) * 300;
};
const scrollBottom = () => {
  //距顶部高度
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  //屏幕高度
  let clientHeight = document.documentElement.clientHeight;
  //内容高度
  let scrollHeight = document.documentElement.scrollHeight;
  if (scrollTop + clientHeight + 200 >= scrollHeight) {
    addBottom.value = scrollTop + clientHeight + 230 - scrollHeight;
  } else addBottom.value = 30;
};
function openModal(e: number) {
  data.title = "写留言";
  counter.changeIsOpen(true);
}
function selectCard(index: number) {
  console.log(counter.isOpenPhoto);

  data.title = "";
  if (index !== data.cardSelected) {
    data.cardSelected = index;
    counter.changeIsOpen(true);
    if (counter.wallID === 1) {
      counter.isOpenPhoto = true;
    }
    return;
  }
  if (counter.wallID === 1) {
    counter.isOpenPhoto = false;
  }
  data.cardSelected = -1;
  counter.changeIsOpen(false);
  console.log(counter.isOpenPhoto);
}
function selectPhotoCard(index: number) {
  data.title = "";
  if (index !== data.cardSelected) {
    data.cardSelected = index;
    counter.changeIsOpen(true);
    if (counter.wallID === 1) {
      counter.isOpenPhoto = true;
    }
    return;
  }
  data.cardSelected = -1;
  if (counter.wallID === 1) {
    counter.isOpenPhoto = false;
  }
  counter.changeIsOpen(false);
}
//改变弹出层状态
const closeModal = () => {
  data.cardSelected = -1;
  counter.changeIsOpen(false);
  if (counter.wallID === 1) {
    counter.isOpenPhoto = false;
  }
};
//切换图片
const viewSwitch = (e: number) => {
  if (e === 0) {
    data.cardSelected -= 1;
    return;
  }
  data.cardSelected += 1;
};
onMounted(async () => {
  getNWidth();
  try {
    const response = await axios.get("/api/common");
    mockData.value = response.data.data;
    console.log("mockData", mockData.value);
    const res = await axios.get("/api/photo");
    photoData.value = res.data.data;
  } catch (error) {
    console.error("Error fetching mock data:", error);
  }
  window.addEventListener("resize", getNWidth);
  window.addEventListener("scroll", scrollBottom);
});
onUnmounted(() => {
  window.removeEventListener("resize", getNWidth);
  window.addEventListener("scroll", scrollBottom);
});

watch(
  //切换墙重置状态
  () => counter.wallID,
  (newVal, oldVal) => {
    counter.changeIsOpen(false);
    nLabel.value = -1;
    data.cardSelected = -1;
    counter.isOpenPhoto = false;
  },
  { deep: true, immediate: true }
);
</script>

<style scoped lang="less">
.WallMessage {
  min-height: 700px;
  padding-top: 52px;
  //   display: flex;
  //   justify-content: center;
  .title {
    font-size: 56px;
    color: @gray-1;
    text-align: center;
    font-weight: 600;
    padding: 48px 0 8px 0;
  }
  .slogan {
    color: @gray-2;
    text-align: center;
  }
  .label {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    button {
      border: none;
      background: none;
    }
    .label-list {
      display: flex;
      align-items: center;
      height: 30px;
      padding: 0 14px;
      line-height: 28px;
      margin: @padding-4;
      color: @gray-2;
      box-sizing: border-box;
    }
    .active {
      color: @gray-1;
      font-weight: 600;
      border: 1px solid @gray-1;
      border-radius: 16px;
    }
  }
  .card {
    // border: 1px solid @gray-1;
    display: flex;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(
    //   4,
    //   minmax(300px, 1fr)
    // ); /* 自动填充列，最小宽度为200px */
    // gap: 20px; /* 间隔 */
    margin: auto;
    padding: 28px 50px 0 50px;
    // justify-content: center;
    margin-bottom: 40px;
    .card-inner {
      margin-bottom: 10px;
      margin: 6px;
      border: 1px solid transparent;
      transition: @tr;
      &:hover {
        scale: 1.05;
      }
    }
    .cardActive {
      color: red;
      border: 1px solid @primary-color;
    }
  }

  .photo {
    width: 88%;
    margin: auto;
    columns: 4;
    column-gap: @padding-4;
    // padding-top: 20px;

    // display: flex;
    // flex-wrap: wrap;
    // margin: auto;
    // padding: 28px 50px 0 50px;

    .photo-card {
      margin: 10px 4px 4px 4px;
      margin-bottom: @padding-4;
      break-inside: avoid;
      transition: @tr;
      &:hover {
        scale: 1.03;
      }
    }
  }
  .add {
    width: 56px;
    height: 56px;
    background: @gray-1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
    border-radius: 28px;
    position: fixed;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: @tr;
    .icon-tianjia {
      color: @gray-10;
      font-size: 24px;
    }
  }
}
</style>