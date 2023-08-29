<template>
  <div class="new-card">
    <div class="colorBox">
      <p
        v-for="(item, index) in cardColorBlock"
        :key="index"
        :style="{ backgroundColor: item }"
        :class="{ active: data.selectColor === index }"
        @click="changeColor(index)"
      ></p>
    </div>
    <main :style="{ background: cardColorBlock[data.selectColor] }">
      <textarea
        placeholder="留言..."
        class="message"
        maxlength="100"
        v-model="data.message"
      ></textarea>
      <input type="text" placeholder="签名" class="name" v-model="data.name" />
    </main>
    <div class="labels">
      <p class="title">选择标签</p>
      <div class="label">
        <p
          v-for="(e, index) in label[id]"
          :key="index"
          class="label-item"
          :class="{ labelselected: index === data.labelSelected }"
          @click="changeLabel(index)"
        >
          {{ e }}
        </p>
      </div>
    </div>
    <div>
      <p class="title">免责声明</p>
      <p class="mzsm">
        一刻时光是本人独自开发的，为便于与用户交流的留言平台。请不要利用此平台服务制作、上传、下载、复制、发布、传播或者转载如下内容：<br />
        1、反对宪法所确定的基本原则的；<br />
        2、危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家 统一的；<br />
        3、损害国家荣誉和利益的；<br />
        4、煽动民族仇恨、民族歧视，破坏民族团结的；<br />
        5、破坏国家宗教政策，宣扬邪教和封建迷信的；<br />
        6、散布谣言，扰乱社会秩序，破坏社会稳定的；<br />
        7、散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；<br />
        8、侮辱或者诽谤他人，侵害他人合法权益的；<br />
        9、含有法律、行政法规禁止的其他内容的信息。
      </p>
    </div>
    <footer>
      <QhButton name="发布" size="max" type="normal" @click="closeModal()"
        >丢弃</QhButton
      >
      <QhButton name="发布" size="mMax" type="primary" class="submit"
        >确定</QhButton
      >
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { cardColorBlock, cardColor, label } from '../api/webData';
import QhButton from "../components/QhButton.vue";

/**
* 仓库
*/
import useStore from '../store/index.ts';
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
const props = defineProps({
  id: {
    default: 0
  }
})
const data = reactive({
  selectColor: 0,
  label: [],
  labelSelected: 0,
  message: "留言中...",
  name: "qjh"
})
function changeColor (index) {
  data.selectColor = index
}
function changeLabel (index) {
  data.labelSelected = index
}
function closeModal () {
  counter.changeIsOpen(false);
}

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
.new-card {
  padding: 0 0 108px 0;
  position: relative;

  .colorBox {
    padding-bottom: 12px;
    display: flex;
    align-items: center;
    p {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      user-select: none;
    }
    .active {
      border: 1px solid rgba(59, 115, 240, 1);
    }
  }
  main {
    height: 240px;
    width: 100%;
    // padding: 12px;
    // padding-left: 0;
    box-sizing: border-box;
    padding: 8px;
    transition: @tr;
    .message {
      height: 172px;
      background: none;
      resize: none;
      border: none;
      width: 100%;
      padding: 12px 12px 0 12px;
      box-sizing: border-box;
      font-size: 15px;
      font-family: "pigtruman";
    }
    .name {
      padding: 12px 0 0 12px;
      width: 100%;
      line-height: 20px;
      box-sizing: border-box;
      padding: @padding-8;
      background: none;
      border: 1px solid #fff;
      font-size: 15px;
      font-family: "pigtruman";
      direction: rtl;
    }
  }
  .title {
    color: @gray-1;
    font-weight: 600;
    padding: 30px 0 12px;
  }
  .labels {
    .label {
      display: flex;
      flex-wrap: wrap;
      .label-item {
        padding: 2px 10px;
        border-radius: 20px;
        margin: 8px 4px 0 0;
        cursor: pointer;
        color: gray-2;
        transition: @tr;
      }
      .labelselected {
        background: #ebebeb;
        font-weight: 600;
        color: gray-1;
      }
    }
  }
  .mzsm {
    padding-top: 10px;
    font-size: 12px;
    color: @gray-3;
  }
  footer {
    position: fixed;
    display: flex;
    padding: @padding-20;
    box-sizing: border-box;
    bottom: 52px;
    left: 0;
    background: rgba(255, 255, 255, 0.4);
    width: 100%;
    backdrop-filter: blur(10px);

    .submit {
      margin-left: @padding-20;
      width: 200px;
    }
  }
}
</style>