<template>
  <div id="webgl"></div>
</template>
<script>
import * as THREE from "three"
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Stats from 'three/examples/jsm/libs/stats.module';
import gsap from "gsap"

export default {
  props: ['scene','renderer','camera'],
  data() {
    // light
    const DIRECTIONAL_LIGHT_PARAM = {
      color: 0xffffff, // 光の色
      intensity: 1.0,  // 光の強度
      x: 1.0,          // 光の向きを表すベクトルの X 要素
      y: 1.0,          // 光の向きを表すベクトルの Y 要素
      z: 1.0           // 光の向きを表すベクトルの Z 要素
    }
    const DIRECTIONAL_LIGHT = new THREE.DirectionalLight(
      DIRECTIONAL_LIGHT_PARAM.color,
      DIRECTIONAL_LIGHT_PARAM.intensity
    )
    DIRECTIONAL_LIGHT.position.x = DIRECTIONAL_LIGHT_PARAM.x;
    DIRECTIONAL_LIGHT.position.y = DIRECTIONAL_LIGHT_PARAM.y;
    DIRECTIONAL_LIGHT.position.z = DIRECTIONAL_LIGHT_PARAM.z;

    // geometry material mesh
    const GEO = new THREE.BoxGeometry(1.0,1.0,1.0)
    const MATERIAL_PARAM = {
      color: 0x3399ff,
      wireframe: true,
    }
    // const MAT = new THREE.MeshLambertMaterial(MATERIAL_PARAM)
    const MAT = new THREE.MeshNormalMaterial(MATERIAL_PARAM)
    // const MESH = new THREE.Mesh(GEO,MAT)

    // group
    const BOX_GROUP = new THREE.Group();

    // stats
    const STATS = new Stats()

    return {
      // scene: SCENE,
      // renderer: RENDERER,
      // camera: CAMERA,
      light: DIRECTIONAL_LIGHT,
      geometry: GEO,
      material: MAT,
      // mesh: MESH,
      // controls: null,
      frameID: 0,
      boxArray: [],
      boxPosArray: [],
      boxGroup: BOX_GROUP,
      isKeyDown: false,
      stats: STATS,
    }
  },
  created() {
    console.log('scene:',this.scene)
    // this.scene.add(this.camera)
    this.scene.add(this.light)
    // let axesHelper = new THREE.AxesHelper(10.0);
    // this.scene.add(axesHelper);
    this.scene.add(this.boxGroup)

    this.createMesh(this.geometry, this.material)
  },
  mounted() {
    window.addEventListener('keydown', this.spaceKeydown)
    window.addEventListener('keyup', this.spaceKeyup)

    // const WRAPPER = document.querySelector('#webgl')
    // WRAPPER.appendChild(this.renderer.domElement)
    Object.assign(this.stats.dom.style, {
      'position': 'fixed',
      'height': 'max-content',
      'top': 'auto',
      'bottom': '0'
    })
    document.body.appendChild( this.stats.dom )

    // this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    // this.controls.enableZoom = false
    // this.controls.enablePan = false

    this.camera.updateProjectionMatrix()
    this.animate()
  },
  beforeDestroy() {
    console.log('beforeDestroy')
    this.boxArray.forEach((box) => {
      this.boxGroup.remove(box)
    })
    this.scene.remove(this.boxGroup)
    this.geometry.dispose()
    this.material.dispose()
    this.scene.remove(this.light)
    this.light.dispose()
    document.body.removeChild( this.stats.dom )
    cancelAnimationFrame(this.frameID)

    window.removeEventListener('keydown', this.spaceKeydown)
    window.removeEventListener('keyup', this.spaceKeyup)
  },
  destroyed() {
    console.log('destroyed')
    console.log(this.scene)
  },
  computed: {
    
  },
  methods: {
    animate() {
      // this.controls.update()
      this.stats.begin()
      this.boxArray.forEach(() => {
        if(this.isKeyDown === true) {
          this.boxGroup.rotation.y += 0.1
        }
      })
      this.stats.end()

      this.renderer.render(this.scene, this.camera)
      this.frameID = requestAnimationFrame(this.animate)
    },
    createMesh(geo, mat) {
      for(let i=-2; i<=2; i++) {
        for(let j=-2; j<=2; j++) {
          for(let k=-2; k<=2; k++) {
            const BOX = new THREE.Mesh(geo,mat)
            BOX.position.set(i, j, k)
            this.boxArray.push(BOX)
            // this.scene.add(BOX)
            this.boxGroup.add(BOX)
            this.boxPosArray.push({x:i,y:j,z:k})
            // BOX.scale.set(0.5,0.5,0.5)
          }
        }
      }
    },

    /**
     * event functions
     */
    spaceKeydown(event) {
      if(event.key === ' ') {
        this.isKeyDown = true
        this.easingBoxDown()
      }
    },
    spaceKeyup(event) {
      if(event.key === ' ') {
        this.isKeyDown = false
        this.easingBoxUp()
      }
    },
    easingBoxDown() {
      this.boxArray.forEach((box) => {
          gsap.to(box.position, {
            x: 0,
            y: 0,
            z: 0,
            duration: 0.4,
            ease: 'Power3.easeInOut',
          })
      })
    },
    easingBoxUp() {
      this.boxArray.forEach((box, n) => {
          gsap.to(box.position, {
            x: this.boxPosArray[n].x,
            y: this.boxPosArray[n].y,
            z: this.boxPosArray[n].z,
            duration: 0.4,
            ease: 'Power3.easeInOut',
          })
      })
    }
  }
}
</script>
