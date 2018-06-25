<template>
<div>
  <div id="bgDiv" class="bg" v-bind:style="{backgroundPositionY:posY}">
    <div class="stencil">
       <div class="bgDiv">
       <p class="big bigPos1">欢迎来到</p>
       <p class="big bigPos2">典致网络<span class="small">游戏美术外包整改方案</span></p>
       </div>
    </div>
  </div>
<div id="content1">
    <div class="content1Div">
    <img class="icon" src="../assets/homePage/black.png">
    <transition-group name="slide-fade">
    <p v-if="show1" class="font1" :key="1">核心业务</p>
    <p v-if="show1" class="font2" :key="2">保持初心 精益求精</p>
    </transition-group>
    <table class="content1Table" cellpadding="0" cellspacing="0">
      <transition name="fade">
      <tr v-if="show2">
      <td v-for="item in coreitems" :key="item.id"><img v-bind:src="item.url"></td>
      </tr>
      </transition>
      <tr>
         <td v-for="item in coreitems" :key="item.id"><p class="tr_td_p">{{item.desc}}</p></td>
      </tr>
    </table>
    <table cellpadding="0" cellspacing="0">
        <tr>
        <td><p class="content1_desc">{{coreDesc[0].desc}}</p></td>
        <td><p class="content1_desc">{{coreDesc[1].desc}}</p></td>
        </tr>
    </table>
    </div>
</div>
  <div class="content2">
     <table cellpadding="0" cellspacing="0">
      <tr>
         <td v-for="item in radiusDesc" :key="item.id">
           <img class="rad_div" v-bind:style="{marginLeft:item.left}" v-bind:src="item.url">
           <p class="content2_title" v-bind:style="{marginLeft:item.left}">{{item.title}}</p>
         </td>
       </tr>
       <tr>
        <td v-for="item in radiusDesc" :key="item.id">
         <p class="content2_desc" v-bind:style="{marginLeft:item.descleft}">{{item.desc}}</p>
         </td>
       </tr>
     </table>
  </div>
  <div id="appraise">
    <div class="appraiseTitleDiv">
    <transition name="slide-fade">
    <div v-if="show3" class="appraise_title">客户评价</div>
    </transition >
    </div>
  <div class="appraise_desc_div" v-for="item in appraiseText" :key="item.id">
     <p class="appraise_desc">{{item.desc}}</p>
      <div class="appraise_cj" v-bind:style="{marginTop:item.top}">
      <p class="appraise_company">{{item.company}}</p>
      <p class="appraise_job">{{item.job}}</p>
      </div>
   </div>
  </div>
  <div id="partner">
    <transition name="slide-fade">
    <div v-if="show4">合作伙伴</div>
    </transition>
    <transition name="slidefade">
    <img v-if="show5" src="../assets/homePage/hzhb.png">
    </transition>
  </div>
  <div class="contactus">
    <div class="container">
      <img class="icon" src="../assets/homePage/white.png">
      <p class="title">联系我们</p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'HomePage',
  data () {
    return {
      posY: 0 + '%',
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      coreitems: [
        {url: '/static/homePage/sy_1.png', id: 0, desc: '宣传画'},
        {url: '/static/homePage/sy_2.png', id: 1, desc: '角色设计'},
        {url: '/static/homePage/sy_3.png', id: 2, desc: '3D角色建模以及贴图'},
        {url: '/static/homePage/sy_4.png', id: 3, desc: '3D场景建模以及贴图'}
      ],
      coreDesc: [
        {desc: '我们的设计师全部在知名艺术院校受过正规美术教育，精通2D和3D制作软件和工具，帮助消除客户在创造力和市场潜力方面的障碍，递交更多内容，缩短产品问世时间，并对成本进行控制。'},
        {desc: '提供全方位服务，包括：游戏角色、场景、特效、UI、ICON等设计和游戏2D宣传图、宣传动画 和3D角色模型、3D场景模型、动作设计。'}
      ],
      radiusDesc: [
        {url: '/static/homePage/sy_zl.png', id: 0, descleft: 40 + 'px', left: 96 + 'px', title: '质量', desc: '精益求精的品质要求。多重检查保障质量达到最好。'},
        {url: '/static/homePage/sy_td.png', id: 1, descleft: 40 + 'px', left: 152 + 'px', title: '团队', desc: '每个项目都有一个专项小组，确保在周期内完成工作。'},
        {url: '/static/homePage/sy_gt.png', id: 2, descleft: 40 + 'px', left: 152 + 'px', title: '沟通', desc: '充分、及时了解客户需求，最大限度满足客户需求。'},
        {url: '/static/homePage/sy_jg.png', id: 3, descleft: 40 + 'px', left: 152 + 'px', title: '价格', desc: '专业化的水准，给你超高性价比。'}
      ],
      appraiseText: [
        {top: 28 + 'px', id: 0, job: '美术总监', company: '顽皮狗外包对接', desc: '“变革的时代，激烈的竞争，有您的鼎力相助，我们信心满满，愿共同扬帆起航！”'},
        {top: 0 + 'px', id: 1, job: '美术总监', company: '顽皮狗外包对接', desc: '“有专人负责对接，沟通起来很高效，专业、高效和团队，质量上很有保障，期待和典致的下次合作。”'},
        {top: 0 + 'px', id: 2, job: '美术总监', company: '顽皮狗外包对接', desc: '“与典致合作非常愉快，小伙伴对接项目回馈及时，项目均能按时如约完成。希望明年可以继续合作，一路相伴，携手共进。”'}
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
      let offset = 2.0 * document.documentElement.clientWidth / 1349.0
      var scrodiv = document.getElementById('content1')
      var hT = scrodiv.offsetTop
      var hH = scrodiv.offsetHeight
      var wH = document.documentElement.clientHeight
      var wS = document.documentElement.scrollTop
      if (wS === 0) {
        wS = document.body.scrollTop
      }
      var top = wS
      var bgH = document.getElementById('bgDiv').offsetHeight
      var y = (top * offset / bgH) * 100
      if (y > 100) {
        y = 100
      }
      this.posY = y + '%'
      if (wS > (hT + hH * 0.4 - wH)) {
        this.show1 = true
        this.show2 = true
      }
      scrodiv = document.getElementById('appraise')
      hT = scrodiv.offsetTop
      hH = scrodiv.offsetHeight
      if (wS > (hT + hH * 0.4 - wH)) {
        this.show3 = true
      }
      scrodiv = document.getElementById('partner')
      hT = scrodiv.offsetTop
      hH = scrodiv.offsetHeight
      if (wS > (hT + hH * 0.4 - wH)) {
        this.show4 = true
        this.show5 = true
      }
    }
  }
}
</script>

<style scoped>
.bg{
  background: url('/static/homePage/homeBg.jpg') no-repeat center center;
  width: 100%;
  height: 800px;
  background-size:100% 56.56vw;
    /* overflow: hidden; */
  /* position: relative; */
}
.stencil{
  width:100%;
  height:199px;
  background-size:100% 100%;
  background-image: url(../assets/homePage/stencil.png);
  background-repeat:no-repeat;
  bottom: 18.3%;
  position: absolute;
}
.bgDiv{
  position: absolute;
  top:0;
  left:50%;
  margin-left:-508px;
  width: 1016px;
  height:100%;
}
.big{
  font-family:'fzzhengheis-eb-gbregular';
  letter-spacing:5px;
  color:white;
  font-size: 82px;
}
.bigPos1{
  float: left;
  margin-top:6px;
}
.bigPos2{
   position: absolute;
   bottom:0;
   margin-bottom:-5px;
   margin-left:144px;
}
.small{
  color:white;
  font-size: 28px;
  font-style:italic;
  letter-spacing:2px;
  margin-left:20px;
}
.slide-fade-enter-active {
  transition: all 1.8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}

.slidefade-enter-active {
  transition: all 2.8s ease;
}
.slidefade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slidefade-enter, .slidefade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(25px);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 3.0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#content1{
  width:100%;
}
.content1Div{
  margin: auto;
  width: 1016px;
  height: 612px;
}
.icon{
  position: absolute;
  margin-top:50px;
  margin-left:40px;
}
.font1{
  font-family:'fzzhengheis-eb-gbregular';
  font-weight:normal;
  position: absolute;
  color:black;
  font-size: 56px;
  margin-left:100px;
  margin-top:45px;
}
.font2{
  font-family:'fzzhengheis-eb-gbregular';
  font-weight:normal;
  position: absolute;
  margin-left:101px;
  margin-top:122px;
  color:#363447;
  font-size: 18px;
  font-style:italic;
}
.content1Table{
  padding-top:200px;
}
#content1 table td{
  padding-left:40px;
  text-align: center;
}
#content1 table img{
  width:214px;
  height:200px;
}
.tr_td_p{
  font-size: 14px;
  color: #7b7b7b;
  font-style:italic;
  font-weight:normal;
}
.content1_desc{
  width:468px;
  font-size:17px;
  height:96px;
  font-weight:normal;
  text-align: center;
  color: #000000;
}
.content2{
  width:100%;
  height: 363px;
  background-color:#7c8fff;
}
.content2 table{
 margin: auto;
 width: 1016px;
 height: 100%;
}
.content2 table tr{
 float: left;
}
.content2_title{
 font-family:'fzzhengheis-eb-gbregular';
 font-weight: normal;
 font-size: 20px;
 margin-top:17px;
 text-align: center;
 color:#000000;
 margin-bottom:0px;
}
.content2_desc{
 margin-top:17px;
 margin-bottom:0px;
 font-size: 16px;
 font-weight: normal;
 text-align: center;
 width:214px;
 color:#000000;
}
.rad_div{
  margin-top:60px;
}
#appraise{
  width: 100%;
  border:0;
  border-bottom:4px solid #7c8fff;
  margin:0;
  padding:0;
  height: 665px;
}
.appraiseTitleDiv{
  margin-top:60px;
  height:154px;
}
.appraise_title{
  font-family:'fzzhengheis-eb-gbregular';
  font-weight: normal;
  font-size: 64px;
  text-align: center;
}
.appraise_desc_div{
  margin:auto;
  width:780px;
  height:157px;
}
.appraise_desc{
  width: 760px;
  text-align:left;
  font-size:20px;
  margin:0;
  padding:0;
}
.appraise_cj{
  width:141px;
  float: right;
}
.appraise_company{
  display:table-cell;
  vertical-align:top;
  font-size:20px;
  font-weight: normal;
}
.appraise_job{
  font-size:20px;
  font-weight: normal;
  font-style: italic;
  text-align: center;
  margin:0;
}
#partner{
  width: 100%;
  margin:0;
  padding:0;
  height:460px;
  text-align: center;
}
#partner div{
  font-family:'fzzhengheis-eb-gbregular';
  font-weight: normal;
  font-size: 64px;
  margin-top:60px;
  margin-bottom: 70px;
}
.contactus{
  height:390px;
  background-color: #2d2e36;
}
.contactus .container{
  margin: auto;
  width: 1016px;
  height:100%;
  /* background-color: red; */
}
.contactus .container .icon{
  margin-left:40px;
  margin-top:57px;
}
.contactus .container .title{
  margin-left:104px;
  padding-top:50px;
  font-family:'fzzhengheis-eb-gbregular';
  font-weight: normal;
  font-size: 64px;
  color:white;
}
</style>
