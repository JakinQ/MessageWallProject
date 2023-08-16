<template>
  <div class="WallMessage">
    <p class="title">{{ wallType[id].name }}</p>
    <p class="slogan">{{ wallType[id].slogan }}</p>
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
        v-for="(data, index) in label[id]"
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
      ></NodeCard>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, Ref, computed } from "vue";
import { onMounted, onUpdated, onUnmounted } from "vue";
import useStore from "../store/index";
import { getM } from "../api/index";
import { wallType, label } from "../api/webData";
import NodeCard from "../components/NodeCard.vue";
import { note } from "../mock/index";
import axios from "axios";
const { counter, user } = useStore();

const id: Ref<number> = ref(0);
const nLabel: Ref<number> = ref(-1); //当前标签
const nWidth: Ref<number> = ref(288); //卡片宽度
const mockData = ref([]);
const selectLabel = (index: number) => {
  let width = window.innerWidth;
  alert(Math.floor((width - 120) / 300) * 300);
};
const getNWidth = () => {
  let width = window.innerWidth;
  nWidth.value = Math.floor((width - 120) / 300) * 300;
};
onMounted(async () => {
  try {
    const response = await axios.get("/api/common");
    mockData.value = response.data.data;
    console.log("mockData", mockData.value);
  } catch (error) {
    console.error("Error fetching mock data:", error);
  }
  window.addEventListener("resize", getNWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", getNWidth);
});
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
  }
}
</style>