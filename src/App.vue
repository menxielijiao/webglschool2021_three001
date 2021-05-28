<template>
  <div id="app">
    <MyGL />
    <div class="title_text">webglschool2021 課題1</div>
  </div>
</template>

<script>
// import * as THREE from "three"
import MyGL from "./components/Three/index"

export default {
  name: 'App',
  components: {
    MyGL
  },
  data() {
    return {
      
    }
  },
  created() {
    
  },
  mounted() {
    
  },
  computed: {

  },
  methods: {
    
  }
}
</script>

<style>
  * {
    margin: 0 !important;
    padding: 0 !important;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
  }
  .title_text {
    position: fixed;
    top: 0;
    color: #ffffff;
    text-align: center;
    width: 100%;
    height: 100%;
  }
</style>
