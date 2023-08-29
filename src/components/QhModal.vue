<template>
  <transition name="modal">
    <div class="QhModal" v-if="counter.isOpen">
      <div class="QhModal-head">
        <p class="QhModal-name">{{ title }}</p>
        <svg class="icon icon-guanbi" aria-hidden="true" @click="closeModal">
          <use xlink:href="#icon-guanbi"></use>
        </svg>
      </div>
      <div class="QhModal-main">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
/**
* 仓库
*/
//引入pinia
import useStore from '../store/index.ts';
// const store = useStore();
const { counter, user } = useStore();

// console.log('store', store.counter.isOpen);
/**
* 路由对象
*/
const route = useRoute();
/**
* 路由实例
*/
const router = useRouter();
//console.log('1-开始创建组件-setup')
/**
* 数据部分
*/

const props = defineProps({
  title: {
    default: "title"
  }
})
const emit = defineEmits()

function closeModal () {
  // counter.changeIsOpen(false);
  // counter.isOpenPhoto = false;
  emit('closeModal')
}
const data = reactive({

})
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(() => {
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
.modal {
  &-enter {
    &-from {
      transform: translateX(360px);
    }
    &-active {
      transition: all 0.3s ease-out;
    }
    &-to {
      transform: translateX(0);
    }
  }
  &-leave {
    &-from {
      transform: translateX(0);
    }
    &-active {
      transition: all 0.3s ease-in;
    }
    &-to {
      transform: translateX(360px);
    }
  }
}
.QhModal {
  width: 360px;
  height: 100%;
  position: fixed;
  top: 52px;
  right: 0;
  z-index: 999;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(20px);
  padding: 20px;
  box-sizing: border-box;

  .QhModal-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    .QhModal-name {
      font-size: 16px;
      color: @gray-1;
      font-weight: 600;
    }
    .icon-guanbi {
      color: gray-2;
      cursor: pointer;
      padding-left: 8px;
    }
  }
  .QhModal-main {
    // border: 1px solid #eee;
    height: 100%;
    overflow-y: auto;
    overflow-x: auto;
    box-sizing: border-box;
    padding-bottom: 116px;
    margin: 2px;
  }
  .slot {
    height: 1500px;
    background-color: #eee;
  }
  //修改默认滚动条
  .QhModal-main::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  .QhModal-main::-webkit-slider-thumb {
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.2);
  }
  .QhModal-main::-webkit-slider-track {
    border-radius: 4px;
    background: rgba(0, 0, 0, 0);
  }
}
</style>


