<template>
  <!-- <div class="photo-card">
    <img
      class="photo"
      :src="`src/assets/images/photo/qrCodeBg${props.photoData.photo}.jpg`"
      alt=""
    />
    <div class="photo-bg"></div>
    <div class="photo-like">
      <svg class="icon aixin" aria-hidden="true">
        <use xlink:href="#icon-aixin1"></use>
      </svg>
      <span class="like-data">{{ props.photoData.like }}</span>
    </div>
  </div> -->

  <div class="photo-card">
    <img
      :src="`src/assets/images/photo/qrCodeBg${props.photoData.photo}.jpg`"
      class="photo-img"
    />
    <div class="photo-bg" @click="selectPhotoCard"></div>
    <div class="photo-like">
      <svg class="icon aixin" aria-hidden="true">
        <use xlink:href="#icon-aixin1"></use>
      </svg>
      <span class="like-data">{{ props.photoData.like }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from "axios";
import { wallType, label, cardColor, cardColorBlock } from "../api/webData";
import useStore from '../store/index.ts';
// const store = useStore();
const { counter, user } = useStore();
const props = defineProps({
  photoData: {},
  cardIndex: Number,

});
const emit = defineEmits();

const selectPhotoCard = () => {
  //选择卡片内容，触发打开卡片详情
  emit("selectPhotoCard", props.cardIndex);
};
const mockData = ref([]);
/**
* 仓库
*/
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
.photo-card {
  position: relative;
  overflow-y: auto;
  .photo-bg {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: @tr;
  }
  .photo {
    // width: 100%;
    // display: block;
    max-width: 100%; /* 保持图片最大宽度不超过父容器 */
    height: auto; /* 自动调整高度以保持原始比例 */
    display: block;
  }
  //   .photo-like {
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     padding: 10px;
  //     color: #fff;
  //     display: flex;
  //     align-items: center;
  //     transition: @tr;
  //     // backdrop-filter: blur(20px);
  //     opacity: 0;

  //     .aixin {
  //       font-size: 20px;
  //       cursor: pointer;
  //       color: @gray-3;
  //     }
  //     .like-data {
  //       margin-left: 5px;
  //     }
  //   }
  .photo-like {
    position: absolute;
    left: @padding-8;
    top: @padding-8;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    height: 28px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    background: blur(20px);
    opacity: 0;
    transition: @tr;

    span {
      color: @gray-1;
    }

    .aixin {
      color: @gray-3;
      padding-right: @padding-4;
    }
    .islike {
      color: @like;
    }
  }
  &:hover {
    .photo-bg {
      opacity: 1;
    }
    .photo-like {
      opacity: 1;
    }
  }
}

.photo-card {
  position: relative;
  overflow-y: auto;

  .photo-img {
    width: 100%;

    margin: 0;
    box-sizing: border-box;
  }

  .photo-bg {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: @tr;
  }

  .photo-like {
    position: absolute;
    left: @padding-8;
    top: @padding-8;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    height: 28px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    background: blur(20px);
    opacity: 0;
    transition: @tr;

    span {
      color: @gray-1;
    }

    .icon-aixin1 {
      color: @gray-3;
      padding-right: @padding-4;
    }
    .islike {
      color: @like;
    }
  }

  &:hover {
    .photo-bg {
      opacity: 1;
    }

    .photo-like {
      opacity: 1;
    }
  }
}
</style>