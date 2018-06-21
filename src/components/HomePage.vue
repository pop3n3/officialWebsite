<template>
<div>
  <div class="bg">
     <div class="bigDiv">
       <p class="big">欢迎来到<br>数思科技有限公司</p>
       <p class="small">游戏美术外包整改方案</p>
     </div>
  </div>
<div id="content1">
    <div class="content1Div">
    <img class="icon" src="../assets/homePage/black.png">
    <transition-group name="slide-fade">
    <p v-if="show1" class="font1" :key="1">核心业务</p>
    <p v-if="show1" class="font2" :key="2">保持初心 精益求精</p>
    </transition-group>
    <table cellpadding="0" cellspacing="0">
      <transition name="fade">
      <tr v-if="show2">
      <th v-for="item in coreitems" :key="item.id"><img v-bind:src="item.url"></th>
      </tr>
      </transition>
      <tr>
         <th v-for="item in coreitems" :key="item.id"><p class="tr_th_p">{{item.desc}}</p></th>
      </tr>
    </table>
    <table cellpadding="0" cellspacing="0">
        <tr>
        <th><p class="content1_desc">{{coreDesc[0].desc}}</p></th>
        <th><p class="content1_desc">{{coreDesc[1].desc}}</p></th>
        </tr>
    </table>
    </div>
</div>
  <div class="content2">
     <table cellpadding="0" cellspacing="0">
      <tr>
         <th v-for="item in radiusDesc" :key="item.id">
           <div class="rad_div" v-bind:style="{marginLeft:item.left,backgroundImage:'url(' + item.url + ')'}"></div>
           <p class="content2_title" v-bind:style="{marginLeft:item.left}">{{item.title}}</p>
         </th>
       </tr>
       <tr>
        <th v-for="item in radiusDesc" :key="item.id">
         <p class="content2_desc"  v-bind:style="{marginLeft:item.descleft}">{{item.desc}}</p>
         </th>
       </tr>
     </table>
  </div>
  <div class="appraise">
    <div class="appraise_title">客户评价</div>
    <div class="appraise_desc_div">
      <span>“</span><p class="appraise_desc">响橙美术在这个项目上做得十分出色，他们在很短的时间内递交了非常高质量的作品给我们。我们期待与响橙的再一次合作。”</p>
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
      ],
      radiusDesc: [
        {url: '/static/homePage/book.png', id: 0, descleft: 0 + 'px', left: 50 + 'px', title: '质大于量', desc: '响橙美术一直把质量放在第一位，目前响橙参与制作的成功项目已超过150例，合作服务的大中型游戏研发商超过70家，签订长期合作框架协议的企业超过30家。'},
        {url: '/static/homePage/book.png', id: 1, descleft: 50 + 'px', left: 150 + 'px', title: '高效的团队', desc: '响橙的团队成员们总能在截止日期前完成作品，更重要的是他们经常给互相提出意见和建议，以确保我们能够递交给我们的客户最好的作品。'},
        {url: '/static/homePage/book.png', id: 2, descleft: 50 + 'px', left: 150 + 'px', title: '沟通', desc: '我们深知与客户沟通的重要性，我们尽最大的努力去了解客户的需求，从而使我们能够更完美的达到客户的需求。'},
        {url: '/static/homePage/book.png', id: 3, descleft: 50 + 'px', left: 150 + 'px', title: '价格', desc: '虽然我们的报价相较低于其他公司，但请放心这完全不会影响到我们作品的质量。'}
      ],
      appraiseText: [
        {jop: '美术经理', company: '中国手游', desc: '响橙美术在这个项目上做得十分出色，他们在很短的时间内递交了非常高质量的作品给我们。我们期待与响橙的再一次合作。”'},
        {jop: '研发副总', company: '玩蟹科技', desc: '响橙美术一直是我们很好的研发伙伴，我们已经合作了两年多了，他们总是能够完美地完成我们交给他们的项目。响橙的成员们都很有天赋以及十分专业，高效的同时又保证了质量。”'},
        {jop: '美术总监', company: '天马时空科技', desc: '我们和响橙美术合作了很多个项目，他们的专业性以及积极性总是能把项目做到超乎我们想象的好。我们非常乐意在我们的下个项目中也与响橙合作。”'}
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
  width:950px;
  margin: auto;
}
.big{
  width: 100%;
  float: left;
  line-height:80px;
  color:white;
  font-size: 80px;
}
.small{
  width: 100%;
  margin-top: -65px;
  float: left;
  color:white;
  font-size: 40px;
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
  width: 950px;
}
.icon{
  float: left;
  margin-top:50px;
}
.font1{
  float: left;
  font-weight:bold;
  color:black;
  font-size: 55px;
  margin-left:10px;
  margin-top:36px;
}
.font2{
  float: left;
  margin-left:-220px;
  margin-top:120px;
  color:black;
  font-size: 20px;
  font-style:italic;
}
#content1 table th{
  padding-right:50px;
  text-align: center;
}
#content1 table img{
  width:200px;
  height:200px;
}
.tr_th_p{
  font-size: 14px;
  font-style:italic;
  font-weight:normal;
}

.content1_desc{
  width:450px;
  font-size:16px;
  height:142px;
  font-weight:normal;
  text-align: center;
}
.content2{
  width:100%;
  height: 450px;
  background-color:yellowgreen;
}
.content2 table{
 margin: auto;
 width: 950px;
 height: 100%;
}
.content2 table tr{
 float: left;
}
.content2_title{
 font-size: 15px;
 padding-top:15px;
 font-weight: normal;
 text-align: center;
}
.content2_desc{
 margin-top:-8px;
 font-size: 15px;
 font-weight: normal;
 text-align: left;
 width:200px;
 height:128px;
}

.rad_div{
  margin-top:60px;
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50px;
  -moz-border-radius: 50px;
  background-repeat:no-repeat;
  background-position: center center;
}
.appraise{
  float: left;
  width: 100%;
  height: 400px;
  border:0;
  border-bottom:10px solid yellow;
  margin:0;
  padding:0;
}
.appraise_title{
  font-size: 64px;
  font-weight:bold;
  text-align: center;
  line-height: 64px;
  margin-top:60px;
  margin-bottom:60px;
  background-color: red;
  font-family:"Microsoft YaHei";
}
.appraise_desc_div{
  margin: auto;
  width:60%;
  height:200px;
  background-color: green;
}
.appraise_desc{
  margin:0;
  padding:0;
  text-align: left;
}
.partner{
}
.contactus{
}
.license{
}
</style>
