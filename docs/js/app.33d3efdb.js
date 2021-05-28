(function(t){function e(e){for(var n,a,r=e[0],h=e[1],u=e[2],l=0,d=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var h=i[r];0!==s[h]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},o=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],h=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=h;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("MyGL")],1)},o=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"webgl"}},[i("canvas",{ref:"canvas",attrs:{id:"webgl_canvas"}})])},r=[],h=i("d4ec"),u=i("bee2"),c=i("5a89"),l=function(){function t(){Object(h["a"])(this,t),this.scene=null,this.camera=null,this.spotLight=null,this.renderer=null,this.size={windowW:null,windowH:null},this.clock=null,this.time={total:null,delta:null},this.stats=null}return Object(u["a"])(t,[{key:"init",value:function(t){this.setSize(),this.scene=new c["j"],this.camera=new c["h"](45,this.size.windowW/this.size.windowH,.1,1e3),this.camera.position.set(0,0,-50),this.camera.lookAt(this.scene.position),this.renderer=new c["l"]({canvas:t}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(0),this.renderer.shadowMap.enabled=!0,this.renderer.setSize(this.size.windowW,this.size.windowH),this.clock=new c["b"],this.clock.start()}},{key:"setSize",value:function(){this.size={windowW:window.innerWidth,windowH:window.innerHeight}}},{key:"resize",value:function(){this.setSize(),this.camera.aspect=this.size.windowW/this.size.windowH,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.size.windowW,this.size.windowH)}},{key:"render",value:function(){this.time.delta=this.clock.getDelta(),this.time.total+=this.delta,this.renderer.render(this.scene,this.camera)}}]),t}(),d=new l,p=i("2909"),f=function(){function t(e,i){Object(h["a"])(this,t),this.color=e,this.posArray=i,this.init()}return Object(u["a"])(t,[{key:"init",value:function(){var t;this.spotLight=new c["k"](this.color,1,100,Math.PI/8,1),(t=this.spotLight.position).set.apply(t,Object(p["a"])(this.posArray)),this.spotLight.castShadow=!0,this.spotLight.shadow.mapSize.width=1024,this.spotLight.shadow.mapSize.height=1024,d.scene.add(this.spotLight)}}]),t}(),w=(i("159b"),i("cffa")),y=function(){function t(){Object(h["a"])(this,t),this.meshArray=[],this.boxGroup=new c["d"],this.radius=2,this.ballPosArray=[],this.init()}return Object(u["a"])(t,[{key:"init",value:function(){this.geometry=new c["a"](.1,.1,.1),this.material=new c["f"]({color:15198187});for(var t=0;t<5;t++)for(var e=0;e<5;e++)for(var i=0;i<5;i++){var n=new c["e"](this.geometry,this.material);n.position.set(t-2,e-2,i-2),n.castShadow=!0,this.meshArray.push({x:n.position.x,y:n.position.y,z:n.position.z}),this.boxGroup.add(n)}this.boxGroup.position.set(0,0,-55),d.scene.add(this.boxGroup),this.setBallPos()}},{key:"update",value:function(){this.boxGroup.rotation.y+=d.time.delta/4,this.boxGroup.rotation.z+=d.time.delta/5}},{key:"setBallPos",value:function(){for(var t=0;t<10;t++)for(var e=0;e<10;e++)this.ballPos(0,0,2*Math.PI,Math.PI,this.radius,10,10,t,e)}},{key:"ballPos",value:function(t,e,i,n,s,o,a,r,h){var u=h/o,c=r/a,l=-s*Math.cos(t+u*i)*Math.sin(e+c*n),d=s*Math.cos(e+c*n),p=s*Math.sin(t+u*i)*Math.sin(e+c*n);this.ballPosArray.push({x:l,y:d,z:p})}},{key:"changeBallPos",value:function(){for(var t=0;t<this.boxGroup.children.length;t++)t>=100?w["a"].to(this.boxGroup.children[t].position,{x:0,y:0,z:0,duration:.5,ease:"Power3.easeInOut"}):w["a"].to(this.boxGroup.children[t].position,{x:this.ballPosArray[t].x,y:this.ballPosArray[t].y,z:this.ballPosArray[t].z,duration:.5,ease:"Power3.easeInOut"});w["a"].to(this.boxGroup.position,{x:0,y:0,z:-35,duration:.5,ease:"Power3.easeInOut"})}},{key:"changeBoxPos",value:function(){var t=this;this.boxGroup.children.forEach((function(e,i){w["a"].to(e.position,{x:t.meshArray[i].x,y:t.meshArray[i].y,z:t.meshArray[i].z,duration:.8,ease:"Power3.easeInOut"})})),w["a"].to(this.boxGroup.position,{x:0,y:0,z:-55,duration:.8,ease:"Power3.easeInOut"})}}]),t}(),v=function(){function t(){Object(h["a"])(this,t),this.init()}return Object(u["a"])(t,[{key:"init",value:function(){this.geometry=new c["i"](50,50),this.material=new c["g"]({color:16644312,side:c["c"]}),this.mesh=new c["e"](this.geometry,this.material),this.mesh.receiveShadow=!0,d.scene.add(this.mesh)}}]),t}(),b=i("ef20"),m=function(){function t(){Object(h["a"])(this,t),this.stats=null}return Object(u["a"])(t,[{key:"init",value:function(){this.stats=new b["a"],document.body.appendChild(this.stats.dom)}},{key:"updateBegin",value:function(){this.stats.begin()}},{key:"updateEnd",value:function(){this.stats.end()}}]),t}(),g=function(){function t(e){Object(h["a"])(this,t),this.props=e,this.stats=new m,this.init()}return Object(u["a"])(t,[{key:"init",value:function(){d.init(this.props.$canvas),this.spotlight1=new f(16711680,[.3,0,-56]),this.spotlight2=new f(65280,[0,0,-56]),this.spotlight3=new f(255,[-.3,0,-56]),this.box=new y,this.plane=new v,window.addEventListener("resize",this.resize.bind(this)),this.stats.init(),this.loop()}},{key:"resize",value:function(){d.resize()}},{key:"loop",value:function(){this.stats.updateBegin(),this.render(),this.stats.updateEnd(),requestAnimationFrame(this.loop.bind(this))}},{key:"render",value:function(){this.box.update(),d.render()}},{key:"keydownEvent",value:function(){this.box.changeBallPos()}},{key:"keyUpEvent",value:function(){this.box.changeBoxPos()}}]),t}(),x={data:function(){return{}},mounted:function(){this.MyGL||(this.MyGL=new g({$canvas:this.$refs.canvas})),window.addEventListener("mousedown",this.changeBallPos),window.addEventListener("touchstart",this.changeBallPos),window.addEventListener("mouseup",this.changeBoxPos),window.addEventListener("touchend",this.changeBoxPos)},methods:{changeBallPos:function(){this.MyGL.keydownEvent()},changeBoxPos:function(){this.MyGL.keyUpEvent()}}},P=x,k=(i("c8b7"),i("2877")),z=Object(k["a"])(P,a,r,!1,null,"4f5f08fe",null),O=z.exports,j={name:"App",components:{MyGL:O},data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{}},M=j,G=(i("034f"),Object(k["a"])(M,s,o,!1,null,null,null)),L=G.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(L)}}).$mount("#app")},"85ec":function(t,e,i){},aaae:function(t,e,i){},c8b7:function(t,e,i){"use strict";i("aaae")}});
//# sourceMappingURL=app.33d3efdb.js.map