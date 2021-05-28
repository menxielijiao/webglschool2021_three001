import * as THREE from "three"
import Common from "./Common"

export default class SpotLight {
  constructor(color, posArray) {
    this.color = color
    this.posArray = posArray
    this.init()
  }
  init() {
    this.spotLight = new THREE.SpotLight(this.color, 1, 100, Math.PI / 8, 1)
    this.spotLight.position.set(...this.posArray)

    this.spotLight.castShadow = true
    this.spotLight.shadow.mapSize.width = 1024
    this.spotLight.shadow.mapSize.height = 1024

    Common.scene.add(this.spotLight)
    // Common.scene.add(new THREE.CameraHelper(this.spotLight.shadow.camera))
  }
}