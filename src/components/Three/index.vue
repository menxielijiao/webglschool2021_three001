<template>
  <div id="webgl">
    <canvas id="webgl_canvas" ref="canvas"></canvas>
  </div>
</template>
<script>
import MyGL from "./js/MyGL"
export default {
  data() {
    return {
    }
  },
  mounted() {
    if(!this.MyGL) {
      this.MyGL = new MyGL({
        $canvas: this.$refs.canvas
      })
    }
    window.addEventListener('mousedown',this.changeBallPos)
    window.addEventListener('touchstart',this.changeBallPos)
    window.addEventListener('mouseup',this.changeBoxPos)
    window.addEventListener('touchend',this.changeBoxPos)
  },
  methods: {
    changeBallPos() {
      // if(event.key === ' ') {
        this.MyGL.keydownEvent()
      // }
    },
    changeBoxPos() {
      // if(event.key === ' ') {
        this.MyGL.keyUpEvent()
      // }
    }
  }

}
</script>
<style scoped>
  #webgl {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
  }
</style>
