<template>
  <div id="app">
    <div class="kadai_select">
      <p @click="selectKadai(0)">WebGLSCHOOL課題</p>
      <ol>
        <li @click="selectKadai(1)">Boxを100...(1)</li>
        <li @click="selectKadai(2)">Boxを100...(2)</li>
        <li @click="selectKadai(3)"></li>
      </ol>
    </div>
    <div id="appCanvas"></div>
    <three-001 v-if="page_num === 1" :scene="scene" :renderer="renderer" :camera="camera" />
    <Three001_2 v-if="page_num === 2" :scene="scene" :renderer="renderer" :camera="camera" />
  </div>
</template>

<script>
import * as THREE from "three"

import Three001 from './components/Three001.vue'
import Three001_2 from './components/Three001_2.vue'

export default {
  name: 'App',
  components: {
    Three001,
    Three001_2,
  },
  data() {
    // 変数宣言
    let scene,renderer,camera
    // scene
    scene = new THREE.Scene()
    // renderer
    renderer = new THREE.WebGLRenderer()
    const RENDERER_PARAM = {
      clearColor: 0x494949,
      width: window.innerWidth,
      height: window.innerHeight,
    }
    renderer.setClearColor(RENDERER_PARAM.color)
    renderer.setSize(RENDERER_PARAM.width, RENDERER_PARAM.height)
    // camera
    const CAMERA_PARAM = {
      fovy: 60,
      aspect: window.innerWidth / window.innerHeight,
      near: 0.001,
      far: 1000.0,
      x: 10.0,
      y: 10.0,
      z: 10.0,
      lookAt: new THREE.Vector3(0.0, 0.0, 0.0),
    }
    camera = new THREE.PerspectiveCamera(
      CAMERA_PARAM.fovy,
      CAMERA_PARAM.aspect,
      CAMERA_PARAM.near,
      CAMERA_PARAM.far
    )
    camera.position.set(CAMERA_PARAM.x, CAMERA_PARAM.y, CAMERA_PARAM.z)
    camera.lookAt(CAMERA_PARAM.lookAt)

    return {
      page_num: 0, // 切替用
      scene: scene,
      renderer: renderer,
      camera: camera,
    }
  },
  created() {
    console.log(this.scene)
    this.scene.add(this.camera)
  },
  mounted() {
    const wapper = document.querySelector('#appCanvas')
    wapper.appendChild(this.renderer.domElement)
    this.camera.updateProjectionMatrix()
  },
  computed: {

  },
  methods: {
    selectKadai(num) {
      this.page_num = num
    },
    animate() {
      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(this.animate)
    },
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #000;
  }
  .kadai_select {
    position: absolute;
    color: #fff;
  }
  li {
    cursor: pointer;
  }
  li:hover {
    color: rgb(62, 252, 242);
  }
</style>
