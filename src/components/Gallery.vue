<template>
  <div>
    <div class="oneshow1">
      <br>
      <br>
      <p style="text-indent:8em"><font size="10"> <b>+作品展示</b></font></p>
      <br>
      <br>
      <br>
    </div>
    <table class="oneshow2" align="center">
      <img src="../assets/title_left.png">
    </table>
    <table class="oneshow3" align="center" cellspacing="100">
    <tr>
      <td style="height:300px;width:400px;">
      <p><font size="5"> <b>典致网络专业提供美术外包服务，为每位客户提供全方位的美术解决方案。在游戏行业拥有丰富的专业经验和执行能力，核心成员更是参与过国内众多以美术制作精良著称的游戏项目，拥有精良的画面品质和优秀的设计能力。在项目经验和基础素质方面无可替代！<br>美术风格涵盖：日韩、欧美、Q版、写实、现代等，无论是2D还是3D，或是动作、特效，我们团队都竭力风险自己的能量，帮助客户在美术环节达到最佳的视觉呈现效果。
</b></font></p>
      </td>
      <td style="height:300px;width:400px;">
        <font size="6"> <b>我们提供服务:<br></b></font>
        <font size="5"> <b>Web Game Out•sourcing网页游戏美术整包<br>Mobile Game Outsourcing手机游戏美术整包</b></font>
        <br>
        <font size="6"> <b>2D<br></b></font>
        <font size="5"> <b>游戏角色概念设计Conceptual Design of game character<br>游戏场景概念设计Conceptual Design of game scenes<br>游戏特效制作Game effects</b></font>
        <br>
        <font size="6"> <b>3D<br></b></font>
        <font size="5"> <b>角色美术外包Characters<br>场景美术外包Art design in scenes<br>游戏美术整包Whole games</b></font>
      </td>
    </tr>
    </table>
    <p style="text-align:center"><font size="10"> <b>—2D作品展示—</b></font></p>
    <table class="oneshow4" align="center">
      <!-- <tr> -->
      <img class="little1"
          v-preview="imgs[0].url"
          v-bind:src="imgs[0].url1"
          :alt="imgs[1].title"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[1].url"
          v-bind:src="imgs[1].url1"
          :alt="imgs[1].title"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[2].url"
          v-bind:src="imgs[2].url1"
          :alt="imgs[1].title"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[3].url"
          v-bind:src="imgs[3].url1"
          :alt="imgs[1].title"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[4].url"
          v-bind:src="imgs[4].url1"
          :alt="imgs[1].title"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true">
      <!-- </tr>
      <tr> -->
      <img class="little1"
          v-preview="imgs[5].url"
          v-bind:src="imgs[5].url1"
          :alt="imgs[1].title"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little2"
          v-preview="imgs[6].url"
          v-bind:src="imgs[6].url1"
          :alt="imgs[1].title"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[7].url"
          v-bind:src="imgs[7].url1"
          :alt="imgs[1].title"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true">
      <!-- </tr>
      <tr> -->
      <img class="little1"
          v-preview="imgs[8].url"
          v-bind:src="imgs[8].url1"
          :alt="imgs[1].title"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[9].url"
          v-bind:src="imgs[9].url1"
          :alt="imgs[1].title"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[10].url"
          v-bind:src="imgs[10].url1"
          :alt="imgs[1].title"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[11].url"
          v-bind:src="imgs[11].url1"
          :alt="imgs[1].title"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true">
      <img class="little1"
          v-preview="imgs[12].url"
          v-bind:src="imgs[12].url1"
          :alt="imgs[1].title"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true">
      <!-- </tr> -->
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
  data () {
    return {
      imgs: [
        {
          url: '/static/show/small/p1.png',
          url1: '/static/show/small/p1.png',
          title: 'pic1'
        },
        {
          url: '/static/show/small/p2.png',
          url1: '/static/show/small/p2.png',
          title: 'pic2'
        },
        {
          url: '/static/show/small/p3.png',
          url1: '/static/show/small/p3.png',
          title: 'pic3'
        },
        {
          url: '/static/show/small/p4.png',
          url1: '/static/show/small/p4.png',
          title: 'pic4'
        },
        {
          url: '/static/show/small/p5.png',
          url1: '/static/show/small/p5.png',
          title: 'pic2'
        },
        {
          url: '/static/show/small/p6.png',
          url1: '/static/show/small/p6.png',
          title: 'pic3'
        },
        {
          url: '/static/show/small/p7.png',
          url1: '/static/show/small/p7.png',
          title: 'pic4'
        },
        {
          url: '/static/show/small/p8.png',
          url1: '/static/show/small/p8.png',
          title: 'pic2'
        },
        {
          url: '/static/show/small/p9.png',
          url1: '/static/show/small/p9.png',
          title: 'pic3'
        },
        {
          url: '/static/show/small/p10.png',
          url1: '/static/show/small/p10.png',
          title: 'pic4'
        },
        {
          url: '/static/show/small/p11.png',
          url1: '/static/show/small/p11.png',
          title: 'pic2'
        },
        {
          url: '/static/show/small/p12.png',
          url1: '/static/show/small/p12.png',
          title: 'pic3'
        },
        {
          url: '/static/show/small/p13.png',
          url1: '/static/show/small/p13.png',
          title: 'pic4'
        }
      ]
    }
  }
}
</script>
<style>
/* .img {
   width: 100%;
   height: 100%;
} */

.little1{
  height:295px;
  width:370px;
  margin-left: 2px;
  margin-right: 2px;
}
.little1:hover{
  opacity: 0.5;
}
.little2{
  height:295px;
  width:1118px;
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
   background-color: #FF0000;
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
