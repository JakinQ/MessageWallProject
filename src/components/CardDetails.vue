<template>
  <div class="card-detail">
    <top class="top">
      <p class="label">联系管理员撕掉该标签</p>
      <p class="report">举报</p>
    </top>
    <NodeCard :note="props.cardDetail"></NodeCard>
    <div class="form">
      <textarea placeholder="请输入..." class="message"></textarea>
      <div class="submit">
        <input type="text" class="name" />
        <QhButton name="确定" size="base" type="primary"></QhButton>
      </div>
    </div>
    <p class="title" v-if="props.cardDetail.comment !== 0">
      评论 {{ props.cardDetail.comment }}
    </p>
    <p class="title" v-else>评论 0</p>
    <div class="comments">
      <div
        class="comment-item"
        v-for="(item, index) in data.commentList"
        :key="index"
      >
        <!-- <img :src="item.imgUrl" alt="" /> -->
        <div
          class="user-head"
          :style="{ backgroundImage: getImage(item.imgUrl) }"
        ></div>
        <div class="comment-content">
          <div class="comment-top">
            <p class="name">{{ item.name }}</p>
            <p class="time">{{ getTime2(item.moment) }}</p>
          </div>
          <p class="comment-message">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watchEffect,
  computed,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import NodeCard from "../components/NodeCard.vue";
import QhButton from "../components/QhButton.vue";
import { comment } from "../mock/index";
import axios from "axios";

const props = defineProps({
  cardDetail: {
    default: {},
  },
});
const getImage = (url: string) => {
  return `url(${url})`;
};
const getTime2 = (time: string) => {
  const date = new Date(time);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};
const route = useRoute();
/**
 * 路由实例
 */
const router = useRouter();
//console.log('1-开始创建组件-setup')
/**
 * 数据部分
 */
const data = reactive({
  commentList: [],
});
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
});
onMounted(async () => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
  try {
    const response = await axios.get("/api/common2");
    data.commentList = response.data.data;
    console.log("mockData", response.data.data);
  } catch (error) {
    console.error("Error fetching mock data:", error);
  }
});
watchEffect(() => {});
// 使用toRefs解构
// let { } = { ...toRefs(data) }
defineExpose({
  ...toRefs(data),
});
</script>
<style scoped lang='less'>
.card-detail {
  position: relative;
  //   padding: 0 20px;
  .top {
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px;
    display: flex;
    .label {
      cursor: pointer;
      color: @primary-color;
      font-size: 16px;
      padding-right: 30px;
    }
    .report {
      color: @warning-color;
      font-size: 16px;
      cursor: pointer;
    }
  }

  .form {
    .message {
      margin-top: 12px;
      height: 56px;
      background: none;
      resize: none;
      width: 100%;
      padding: 12px 12px 0 12px;
      box-sizing: border-box;
      border: 1px solid rgba(148, 148, 148, 1);
    }
    .name {
      border: 1px solid rgba(148, 148, 148, 1);
      padding: 12px 0 0 12px;
      width: 62.5%;
      line-height: 20px;
      box-sizing: border-box;
      padding: @padding-8;
      background: none;
      direction: rtl;
    }
    .submit {
      display: flex;
      margin-top: 12px;
      justify-content: space-between;
    }
  }
  .title {
    font-weight: 600;
    padding-top: 30px;
    padding-bottom: 12px;
  }

  .comment-item {
    display: flex;
    padding-bottom: 30px;
    .user-head {
      flex: none;
      width: 28px;
      height: 28px;
      border-radius: 20px;
      background-image: linear-gradient(180deg, #ffa9d9 0%, #e83d3d 100%);
      overflow: hidden;
    }
    .comment-content {
      padding-left: @padding-8;
    }
    .comment-top {
      display: flex;
      align-items: center;
      .name {
        font-weight: 600;
      }
      .time {
        font-size: @size-12;
        padding-left: @padding-4;
        color: @gray-3;
      }
      .comment-message {
        padding-top: @padding-4;
      }
    }
  }
}
</style>