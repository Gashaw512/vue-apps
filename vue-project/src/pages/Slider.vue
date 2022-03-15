<template>
  <div class="overAll">
    <div v-for="(colors, index) in sliders" :key="colors">
      <transition name="fade">
        <div
          v-if="currentSlide === index"
          :style="colors"
          style="width: 100%; height: 350px; position: fixed"
        ></div>
      </transition>
    </div>
    <!-- <div style="width: 100%; position: absolute; height: 380px">
      <div style=" bottom: 0; right: 0">
        <div
          style="width: 10px; height: 10px; background-color: black; bottom: 0"
        ></div>
      </div>
    </div> -->
    <!-- <div class="part2">
      <transition name="fade">
        <h1 v-if="isShowing">My Slider</h1>
      </transition>
      <button
        style="
          background-color: rgb(2555, 170, 125);
          border-radius: 18px;
          padding: 8px;
          margin: 5px;
          color: teal;
          font-size: 15px;
          font-weight: bold;
        "
        @click="isShowing = !isShowing"
      >
        Toggle Text
      </button>
    </div> -->
    <!-- //// Refactoring the following code as above -->
    <!-- <div v-if="currentSlide==1" class="s2"></div>
      <div v-if="currentSlide==2" class="s3"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      interval: "",
      sliders: [
        "background-color: blue;",
        " background-color: rgb(129, 18, 46);",
        " background-color: yellow;",
      ],
      isShowing: false,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      console.log(`I am updating this ${this.currentSlide}`);
      this.currentSlide = this.currentSlide == 2 ? 0 : this.currentSlide + 1;
      //The following code is refactored as bove. From here understand what is refactore?
      // if (this.currentSlide==2) {
      //     this.currentSlide=0;
      // }
      // else{
      //     this.currentSlide++;
      // }
    }, 3000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.overAll {
  width: 100%;
  display: flex;
  position: relative;
}
.part2 {
  width: 100%;
  margin: auto;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>