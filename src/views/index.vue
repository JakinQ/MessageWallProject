<template>
  <div>
    <p class="count">Count: {{ count2 }}</p>
    <p class="ab">c2{{ count }}</p>
    <p class="aa">1111</p>
    <button @click="increment2">Increment</button>

    <p>{{ user.money }}</p>
  </div>
</template>
<script setup lang='ts'>
//初始化组件状态和响应式数据。在 setup 函数内部，你可以返回需要在组件中使用的数据、函数和计算属性。
import { ref, reactive } from "vue";
// import { useCounterStore, useCounterStore2 } from "../store/modules/counter";
import useStore from "../store/index";
import { getM } from "../api/index";
const { counter, user } = useStore();

const count2 = ref(0);
const count = counter.count;
const increment2 = () => {
  count2.value++;
  getM();
};
const getMusic = () => {
  getM;
};
const increment = counter.increment;
</script>

<style scoped lang="less">
// @import url(@/styles/commons);

.count {
  color: red;
}
.aa {
  color: blue;
}
.ab {
  font-size: @size-16;
  color: @primary-color;
  background-color: @gray-2;
}
</style>