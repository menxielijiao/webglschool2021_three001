import Common from "./Common"
import SpotLight from "./SpotLight"
import Box from "./Box"
import Plane from "./Plane"
import Stats from "./Stats"
// import { TWEEN } from './jsm/libs/tween.module.min.js'

export default class MyCL {

  constructor(props) {
    this.props = props
    this.stats = new Stats()
    this.init()
  }

  init() {
    Common.init(this.props.$canvas)
    this.spotlight1 = new SpotLight(0xff0000,[0.3,0,-56])
    this.spotlight2 = new SpotLight(0x00ff00,[0,0,-56])
    this.spotlight3 = new SpotLight(0x0000ff,[-0.3,0,-56])
    this.box = new Box()
    this.plane = new Plane()
    window.addEventListener("resize", this.resize.bind(this))
    this.stats.init()
    this.loop()
  }

  resize(){
    Common.resize();
  }

  loop(){
    this.stats.updateBegin()
    this.render()
    this.stats.updateEnd()
    requestAnimationFrame(this.loop.bind(this));
  }

  render(){
    this.box.update();
    Common.render();

  }

  keydownEvent() {
    this.box.changeBallPos()
  }

  keyUpEvent() {
    this.box.changeBoxPos()
  }
}
