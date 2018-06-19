<template>
<div>
  <div class="bg">
     <div class="bigDiv">
       <p class="big">欢迎来到<br>数思科技有限公司</p>
       <p class="small">游戏美术外包整改方案</p>
     </div>
  </div>
 <div id="content1">
    <img class="icon" src="../assets/+.jpeg">
    <transition-group name="slide-fade">
    <p v-if="show1" class="font1" :key="1">核心业务</p>
    <p v-if="show1" class="font2" :key="2">保持初心 精益求精</p>
    </transition-group>
    <table>
      <transition name="fade">
      <tr v-if="show2">
      <th v-for="item in coreitems" :key="item.id"><img v-bind:src="item.url"></th>
      </tr>
      </transition>
      <tr>
         <th v-for="item in coreitems" :key="item.id"><p class="tr_th_p">{{item.desc}}</p></th>
      </tr>
    </table>
    <table class="content1_descTable">
        <tr>
        <th><p class="content1_desc">{{coreDesc[0].desc}}</p></th>
        <th><p class="content1_desc">{{coreDesc[1].desc}}</p></th>
        </tr>
    </table>
</div>
  <div class="content2">
  </div>

  <!-- <div class="appraise">
  </div>
  <div class="partner"></div>
  <div class="contactus"></div>
  <div class="license"></div> -->
</div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      show1: false,
      show2: false,
      coreitems: [
        {url: '/static/homePage/test1.jpg', id: 0, desc: '宣传画'},
        {url: '/static/homePage/test1.jpg', id: 1, desc: '角色设计'},
        {url: '/static/homePage/test1.jpg', id: 2, desc: '3D角色建模以及贴图'},
        {url: '/static/homePage/test1.jpg', id: 3, desc: '3D场景建模以及贴图'}
      ],
      coreDesc: [
        {desc: '我们的团队规模达150多人，其中超过80%的员工来自国内一线顶级研商，平均从业年龄超过6年以上，在职人员均具备丰富的成功项目制作经验和项目管理经验。'},
        {desc: '我们的服务内容具体包括：角色原画、场景原画、UI、ICON、2D宣传图、2D宣传动画、3D角色模型、3D场景模型、3D地编、3D拼关、次时代模型、3渲2角色、3渲2场景，游戏动作，游戏特效。'}
      ]
    }
  },
  mounted: function () {
    this.scrollf()
    window.addEventListener('scroll', () => {
      this.scrollf()
    })
  },
  methods: {
    scrollf: function () {
      let scrodiv = document.getElementById('content1')
      var hT = scrodiv.offsetTop
      var hH = scrodiv.offsetHeight
      var wH = document.documentElement.clientHeight
      var wS = window.document.body.scrollTop
      if (wS > (hT + hH * 0.4 - wH)) {
        this.show1 = true
        this.show2 = true
      }
    }
  }
}
</script>

<style scoped>

.bg{
  width: 100%;
  height: 30.65vw;
  background-image: url(../assets/123.png);
  background-repeat:no-repeat;
  overflow: hidden;
  background-size: cover;
}
.bigDiv{
  height:100%;
  left:18%;
  bottom:-15%;
  position: relative;
}
.big{
  position: absolute;
  line-height:80px;
  color:white;
  font-size: 80px;
}
.small{
  position: absolute;
  color:white;
  font-size: 40px;
  line-height:480px;
}
.slide-fade-enter-active {
  transition: all 3.8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 3.0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#content1{
  position: relative;
  top:40px;
}
.icon{
  left:18%;
  padding-top: 8px;
  position: absolute;
}
.font1{
  top:-56px;
  left:22.5%;
  font-weight:bold;
  position: absolute;
  color:black;
  font-size: 55px;
}
.font2{
  top:80px;
  left:22.5%;
  position: absolute;
  color:black;
  font-size: 20px;
  font-style:italic;
}
#content1 table{
  left:18%;
  top:190px;
  position: absolute;
}
#content1 table th{
  padding-right:50px;
  text-align: center;
}
#content1 table img{
  width:220px;
  height:220px;
}
.tr_th_p{
  font-size: 14px;
  font-style:italic;
  font-weight:normal;
}
.content1_descTable{
  left:18%;
  padding-top:285px;
  position: absolute;
}
.content1_desc{
  width:490px;
  font-size:17px;
  height:145px;
  font-weight:normal;
  text-align: center;
}
.content2{
  margin-top:680px;
  height:380px;
}
.appraise{
}
.partner{
}
.contactus{
}
.license{
}
</style>
