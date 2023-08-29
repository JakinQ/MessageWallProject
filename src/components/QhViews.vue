<template>
  <transition name="views" key="box1">
    <div class="qh-view" v-if="counter.isOpenPhoto">
      <div class="bg"></div>
      <div class="viewer-photo" v-if="props.photoData[number]">
        <img
          :src="`src/assets/images/photo/qrCodeBg${props.photoData[number].photo}.jpg`"
          alt=""
        />
      </div>
      <div class="switch sw-left" @click="changeNumber(0)" v-show="number > 0">
        <svg class="icon iconfont" aria-hidden="true">
          <use xlink:href="#icon-xiangzuo"></use>
        </svg>
      </div>
      <div
        class="switch sw-right"
        @click="changeNumber(1)"
        v-show="number < props.photoData.length - 1"
      >
        <svg class="icon iconfont" aria-hidden="true">
          <use xlink:href="#icon-xiangyou"></use>
        </svg>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useStore from '../store/index.ts';
const emit = defineEmits();

const props = defineProps({
  photoData: {
    default: []
  },
  nowNumber: {
    type: Number,
    default: 0
  },

})
const number = computed(() => {
  console.log(props.photoData);
  if (props.nowNumber < 0) {
    return 0
  }
  return props.nowNumber
})

const changeNumber = (e) => {
  console.log(11);
  emit('viewSwitch', e)
}
/**
* 仓库
*/
// const store = useStore();
const { counter, user } = useStore();
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
const data = reactive({})
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
.views {
  &-enter {
    &-from {
      opacity: 0;
    }

    &-active {
      transition: all 0.2s ease-in;
    }

    &-to {
      opacity: 1;
    }
  }

  &-leave {
    &-from {
      opacity: 1;
    }

    &-active {
      transition: all 0.2s ease-out;
    }

    &-to {
      opacity: 0;
    }
  }
}
.qh-view2 {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, 0.8);
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
  .viewer-photo {
    position: absolute;
    // top: 0;
    // left: 0;
    padding: 82px 454px 0 96px;
    box-sizing: border-box;
    width: 100%;
    // height: 100%;
    display: flex;
    justify-content: center;
    overflow-y: auto;

    img {
      max-width: 100%;
      margin: 0;
      padding: 0;
      display: inline;
      //   object-fit: contain;
    }
  }
}
.qh-view {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(20px);
    height: 100%;
    width: 100%;
  }

  .viewer-photo {
    position: absolute;
    padding: 82px 454px 5px 96px;
    box-sizing: border-box;
    width: 100%;
    overflow-y: auto;
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      margin: 0;
      padding: 0;
      //   display: inline;
    }
  }

  .switch {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: @gray-3;
    color: @gray-10;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    transition: @tr;
    cursor: pointer;

    .iconfont {
      font-size: 24px;
    }

    &:hover {
      opacity: 1;
    }
  }

  .sw-left {
    left: 20px;
  }

  .sw-right {
    right: 380px;
  }
}
</style>