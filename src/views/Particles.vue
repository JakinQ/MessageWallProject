<template>
  <div>
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    />
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from "vue";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const particlesInit = async (engine: Engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container: any) => {
  console.log("Particles container loaded", container);
};
const options = reactive({
  //   background: {
  //     color: {
  //     //   value: "transparent", // 背景颜色
  //     },
  //   },
  background: {
    color: "#000000",
    opacity: 0.1,
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push", // 可用的click模式有: "push", "remove", "repulse", "bubble"。
      },
      onHover: {
        enable: true,
        mode: "grab", // 可用的hover模式有: "grab", "repulse", "bubble"。
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff", // '#dedede'。线条颜色。
      distance: 150, // 线条长度
      enable: true, // 是否有线条
      opacity: 0.8, // 线条透明度。
      width: 1, // 线条宽度。
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3, // 粒子运动速度。
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80, // 粒子数量。
    },
    opacity: {
      value: 0.8, // 粒子透明度。
    },
    shape: {
      type: "circle", // 可用的粒子外观类型有："circle","edge","triangle", "polygon","star"
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
});
</script>

<style scoped>
</style>