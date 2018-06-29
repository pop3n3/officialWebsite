<template>
  <div>
    <div class="oneshow1">
      <br>
      <br>
      <p style="text-indent:8em;font-family:'fzzhengheis-eb-gbregular';letter-spacing:1px;"><font size="10"> <b>+作品展示</b></font></p>
      <br>
      <br>
      <br>
    </div>
    <table class="oneshow2" align="center" border="0">
      <img :src="now">
    </table>
    <table class="oneshow3" align="center" cellspacing="100">
    <tr>
      <td style="height:30%;width:50%;font-family:'fzzhengheis-eb-gbregular';letter-spacing:1px;">
      <p style="height:30%;width:80%;margin-left:20%;margin-top:-15px;" ><font size="5">典致网络专业提供美术外包服务，为每位客户提供全方位的美术解决方案。在游戏行业拥有丰富的专业经验和执行能力，核心成员更是参与过国内众多以美术制作精良著称的游戏项目，拥有精良的画面品质和优秀的设计能力。在项目经验和基础素质方面无可替代！<br>美术风格涵盖：日韩、欧美、Q版、写实、现代等，无论是2D还是3D，或是动作、特效，我们团队都竭力奉献自己的能量，帮助客户在美术环节达到最佳的视觉呈现效果。
    </font></p>
      </td>
      <td style="height:30%;width:50%;">
        <font style="font-family:'fzzhengheis-eb-gbregular';letter-spacing:1px;" size="6"> <b>我们提供服务:<br><br></b></font>
        <font style="font-weight:normal;" size="5"> Web Game Out•sourcing网页游戏美术整包<br>Mobile Game Outsourcing手机游戏美术整包</font>
        <br>
        <br>
        <font style="font-family:'fzzhengheis-eb-gbregular';letter-spacing:1px;" size="6"> <b>2D<br></b></font>
        <font style="font-weight:normal;" size="5"> 游戏角色概念设计Conceptual Design of game character<br>游戏场景概念设计Conceptual Design of game scenes<br>游戏特效制作Game effects</font>
        <br>
        <br>
        <font style="font-family:'fzzhengheis-eb-gbregular';letter-spacing:1px;" size="6"> <b>角色美术<br></b></font>
        <font size="5"> 角色美术外包Characters<br>场景美术外包Art design in scenes<br>游戏美术整包Whole games</font>
      </td>
    </tr>
    </table>
    <p style="text-align:center;min-width:1200px;font-family:'fzzhengheis-eb-gbregular';letter-spacing:1px;"><font size="10"> <b>—2D作品展示—</b></font></p>
    <table class="oneshow4" align="center">
      <img class="little1"
          v-preview="imgs[0].url"
          v-bind:src="imgs[0].url1"
          :alt="imgs[0].title"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[1].url"
          v-bind:src="imgs[1].url1"
          :alt="imgs[1].title"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[2].url"
          v-bind:src="imgs[2].url1"
          :alt="imgs[2].title"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[3].url"
          v-bind:src="imgs[3].url1"
          :alt="imgs[3].title"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[4].url"
          v-bind:src="imgs[4].url1"
          :alt="imgs[4].title"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[5].url"
          v-bind:src="imgs[5].url1"
          :alt="imgs[5].title"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little2"
          v-preview="imgs[6].url"
          v-bind:src="imgs[6].url1"
          :alt="imgs[6].title"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[7].url"
          v-bind:src="imgs[7].url1"
          :alt="imgs[7].title"
          preview-title-enable="true"
          preview-nav-enable="true">

      <img class="little1"
          v-preview="imgs[8].url"
          v-bind:src="imgs[8].url1"
          :alt="imgs[8].title"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[9].url"
          v-bind:src="imgs[9].url1"
          :alt="imgs[9].title"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[10].url"
          v-bind:src="imgs[10].url1"
          :alt="imgs[10].title"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[11].url"
          v-bind:src="imgs[11].url1"
          :alt="imgs[11].title"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[12].url"
          v-bind:src="imgs[12].url1"
          :alt="imgs[12].title"
          preview-title-enable="true"
          preview-nav-enable="true">
    </table>
    <!-- <table class="oneshow4" align="center">
    <tr style="float:left" v-for="(img,index) in imgs" :key="index">
      <img class="oneshowa"
          v-preview="img.url1"
          v-bind:src="img.url"
          :alt="img.title"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true">
    </tr>
    </table> -->
  </div>
</template>
<script>
export default {
  name: 'Gallery',
  activated: function () {
    this.$emit('switchroute', '/gallery')
  },
  components: {
  },
  data () {
    return {
      titleimags: ['/static/show/title1.png', '/static/show/title2.png', '/static/show/title3.png', '/static/show/title4.png', '/static/show/title5.png'],
      i: 0,
      now: '/static/show/title1.png',
      imgs: [
        {
          url: '/static/show/big/p1.jpg',
          url1: '/static/show/small/p1.png',
          title: 'CharacterConcept',
          index: 0
        },
        {
          index: 1,
          url: '/static/show/big/p2.jpg',
          url1: '/static/show/small/p2.png',
          title: 'CharacterConcept'
        },
        {
          index: 2,
          url: '/static/show/big/p3.jpg',
          url1: '/static/show/small/p3.png',
          title: 'CharacterConcept'
        },
        {
          index: 3,
          url: '/static/show/big/p4.jpg',
          url1: '/static/show/small/p4.png',
          title: 'CharacterConcept'
        },
        {
          index: 4,
          url: '/static/show/big/p5.jpg',
          url1: '/static/show/small/p5.png',
          title: 'CharacterConcept'
        },
        {
          index: 5,
          url: '/static/show/big/p6.jpg',
          url1: '/static/show/small/p6.png',
          title: 'CharacterConcept'
        },
        {
          index: 6,
          url: '/static/show/big/p7.png',
          url1: '/static/show/small/p7.png',
          title: 'ScenesConcept'
        },
        {
          index: 7,
          url: '/static/show/big/p8.jpg',
          url1: '/static/show/small/p8.png',
          title: 'CharacterConcept'
        },
        {
          index: 8,
          url: '/static/show/big/p9.jpg',
          url1: '/static/show/small/p9.png',
          title: 'ScenesConcept'
        },
        {
          index: 9,
          url: '/static/show/big/p10.png',
          url1: '/static/show/small/p10.png',
          title: 'ScenesConcept'
        },
        {
          index: 10,
          url: '/static/show/big/p11.png',
          url1: '/static/show/small/p11.png',
          title: 'ScenesConcept'
        },
        {
          index: 11,
          url: '/static/show/big/p12.jpg',
          url1: '/static/show/small/p12.png',
          title: 'ScenesConcept'
        },
        {
          index: 12,
          url: '/static/show/big/p13.jpg',
          url1: '/static/show/small/p13.png',
          title: 'ScenesConcept'
        }
      ]
    }
  },
  mounted: function () {
    this.now = this.titleimags[0]
    var _this = this
    setInterval(function () {
      _this.i++
      if (_this.i >= 5) {
        _this.i = 0
      }
      _this.now = _this.titleimags[_this.i]
      // if (_this.i >= (_this.titleimags.length-1)) {
    }, 3000)
  },
  methods: {
  }
}
</script>
<style>
/* .img {
   width: 100%;
   height: 100%;
} */

.little1{
  /* height:295px;
  width:370px; */
  width: 19.5%;
  margin-left: 2px;
  margin-right: 2px;
}
.little1:hover{
  opacity: 0.5;
}
.little2{
   /* height:288px; */
  /*width:1118px; */
  width: 58.9%;
  margin-left: 2px;
  margin-right: 2px;
}
.little2:hover{
  opacity: 0.5;
}

.oneshowa{
   background-color: #FFFF00;
   margin-top: 0px;
}
.oneshow1{
   background-color: #FFFF00;
   width: 100%;
}
.oneshow2{
   background-color: #ffffff;
}
.oneshow3{
   background-color: #ffffff;
}
.oneshow4{
   background-color: #ffffff;
}
.oneshow5{
   background-color: #000000;
}
</style>
