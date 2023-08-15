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
    <div class="card">
      <NodeCard></NodeCard>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, Ref } from "vue";
import { onMounted, onUpdated, onUnmounted } from "vue";
import useStore from "../store/index";
import { getM } from "../api/index";
import { wallType, label } from "../api/webData";
import NodeCard from "../components/NodeCard.vue";
const { counter, user } = useStore();
const setupComponent = () => {
  onMounted(() => {});
  onUpdated(() => {});

  onUnmounted(() => {});
};
// const components = {
//   NodeCard,
// };
const id: Ref<number> = ref(0);
const nLabel: Ref<number> = ref(-1); //当前标签

const selectLabel = (e: number) => {
  nLabel.value = e;
};
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
}
</style>