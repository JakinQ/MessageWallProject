<template>
  <div>
    <button class="qh-button" :class="[size, type]">{{ props.name }}</button>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, Ref } from "vue";
import { defineProps } from "vue";
const props = defineProps({
  name: String,
  size: String,
  type: String,
  //   count: {
  //     type: Number,
  //     default: 0,
  //   },
});

const bType = ref("primary");
</script>

<style scoped lang="less">
.qh-button {
  text-align: center;
  //除去button公共 样式
  // background: none;
  // outline: none;
  cursor: pointer;
  border: none;
}
//size
.mMax {
  min-width: 200px;
  height: 48px;
  border-radius: 32px;
  padding: 0 24px;
}
.max {
  min-width: 100px;
  height: 48px;
  border-radius: 24px;
  padding: 0 24px;
}
.base {
  min-width: 80px;
  height: 36px;
  border-radius: 24px;
  padding: 0 20px;
}
.small {
  min-width: 72px;
  height: 32px;
  border-radius: 24px;
  padding: 0 20px;
}

//type
.primary {
  background: @gray-1;
  color: @gray-10;
}
.nPrimary {
  background: @gray-10;
  color: @gray-1;
}
.normal {
  background: none;
  color: @gray-1;
  border: 1px solid @gray-1;
}
.primaryActive {
  background-color: @primary-color;
  color: @gray-10;
}
.normalActive {
  background-color: @primary-color;
  color: @gray-1;
  border: 1px solid @gray-1;
}
</style>