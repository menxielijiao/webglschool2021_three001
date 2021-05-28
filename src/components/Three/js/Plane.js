import * as THREE from "three"
import Common from "./Common"

export default class Box {
  constructor() {
    // this.segments = 80
    this.init()
  }

  init() {
    this.geometry = new THREE.PlaneGeometry(50.0,50.0)
    this.material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
    })
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.receiveShadow = true
    // this.mesh.rotation.x = Math.PI / 5
    Common.scene.add(this.mesh)
  }

}
