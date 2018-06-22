<template>
<div>
  <div class="bg" :style="bgImg">
    <div class="stencil">.
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
  <div class="appraise">
    <div class="appraise_title">客户评价</div>
    <div class="appraise_desc_div">
      <p class="appraise_desc"><span>“</span>响橙美术在这个项目上做得十分出色，他们在很短的时间内递交了非常高质量的作品给我们。我们期待与响橙的再一次合作。”</p>
    </div>
  </div>
  <!-- <div class="partner"></div>
  <div class="contactus"></div>
  <div class="license"></div> -->
</div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      bgImg: {
        backgroundImage: 'url(' + ('/static/homePage/homeBg.jpg') + ')'
      },
      show1: false,
      show2: false,
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
        {jop: '美术经理', company: '中国手游', desc: '响橙美术在这个项目上做得十分出色，他们在很短的时间内递交了非常高质量的作品给我们。我们期待与响橙的再一次合作。”'},
        {jop: '研发副总', company: '玩蟹科技', desc: '有专人负责对接，沟通起来很高效，专业、高效和团队，质量上很有保障，期待和典致的下次合作。'},
        {jop: '美术总监', company: '天马时空科技', desc: '与典致合作非常愉快，小伙伴对接项目回馈及时，项目均能按时如约完成。希望明年可以继续合作，一路相伴，携手共进。'}
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
      var wS = document.documentElement.scrollTop
      if (wS === 0) {
        wS = document.body.scrollTop
      }
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
  height: 56.56vw;
  background-repeat:no-repeat;
  overflow: hidden;
  background-size: cover;
  position: relative;
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
  margin-left:50px;
}
.font1{
  font-family:'fzzhengheis-eb-gbregular';
  font-weight:normal;
  position: absolute;
  color:black;
  font-size: 56px;
  margin-left:114px;
  margin-top:45px;
}
.font2{
  font-family:'fzzhengheis-eb-gbregular';
  font-weight:normal;
  position: absolute;
  margin-left:115px;
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
.appraise{
  width: 100%;
  height: 600px;
  border:0;
  border-bottom:4px solid #7c8fff;
  margin:0;
  padding:0;
}
.appraise_title{
  font-size: 64px;
  font-weight:bold;
  text-align: center;
  line-height: 64px;
  margin-top:60px;
  margin-bottom:90px;
}
.appraise_desc_div{
  margin:auto;
  width:860px;
  height:200px;
  background-color: green;
}
.appraise_desc{
  text-align:left;
  margin:0;
  padding:0;
}
.partner{
}
.contactus{
}
.license{
}
</style>
