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
      <img style="width: 100%;" src="/static/show/title.png">
    </table>
    <table class="oneshow3" align="center" cellspacing="100">
    <tr>
      <td style="height:30%;width:50%;font-family:'fzzhengheis-eb-gbregular';letter-spacing:1px;">
      <p style="height:30%;width:80%;margin-left:20%;margin-top:-15px;" ><font size="5">典致网络专业提供美术外包服务，为每位客户提供全方位的美术解决方案。在游戏行业拥有丰富的专业经验和执行能力，核心成员更是参与过国内众多以美术制作精良著称的游戏项目，拥有精良的画面品质和优秀的设计能力。在项目经验和基础素质方面无可替代！<br>美术风格涵盖：日韩、欧美、Q版、写实、现代等，无论是2D还是3D，或是动作、特效，我们团队都竭力奉献自己的能量，帮助客户在美术环节达到最佳的视觉呈现效果。
    </font></p>
      </td>
      <td style="height:30%;width:50%;font-family:'fzzhengheis-eb-gbregular';letter-spacing:1px;">
        <font size="6"> <b>我们提供服务:<br><br></b></font>
        <font size="5"> Web Game Out•sourcing网页游戏美术整包<br>Mobile Game Outsourcing手机游戏美术整包</font>
        <br>
        <br>
        <font size="6"> <b>2D<br></b></font>
        <font size="5"> 游戏角色概念设计Conceptual Design of game character<br>游戏场景概念设计Conceptual Design of game scenes<br>游戏特效制作Game effects</font>
        <br>
        <br>
        <font size="6"> <b>3D<br></b></font>
        <font size="5"> 角色美术外包Characters<br>场景美术外包Art design in scenes<br>游戏美术整包Whole games</font>
      </td>
    </tr>
    </table>
    <p style="text-align:center;min-width:1200px;font-family:'fzzhengheis-eb-gbregular';letter-spacing:1px;"><font size="10"> <b>—2D作品展示—</b></font></p>
    <table class="paragraph" align="center">
      <div>
        <img class="little1" @click="showPhotoSwipe(0)" v-bind:src="imgs[0].url">
        <img class="little1" @click="showPhotoSwipe(1)" v-bind:src="imgs[1].url">
        <img class="little1" @click="showPhotoSwipe(2)" v-bind:src="imgs[2].url">
        <img class="little1" @click="showPhotoSwipe(3)" v-bind:src="imgs[3].url">
        <img class="little1" @click="showPhotoSwipe(4)" v-bind:src="imgs[4].url">
        <img class="little1" @click="showPhotoSwipe(5)" v-bind:src="imgs[5].url">
        <img class="little1" @click="showPhotoSwipe(6)" v-bind:src="imgs[6].url">
        <img class="little1" @click="showPhotoSwipe(7)" v-bind:src="imgs[7].url">
        <img class="little1" @click="showPhotoSwipe(8)" v-bind:src="imgs[8].url">
        <img class="little1" @click="showPhotoSwipe(9)" v-bind:src="imgs[9].url">
        <img class="little1" @click="showPhotoSwipe(10)" v-bind:src="imgs[10].url">
        <img class="little1" @click="showPhotoSwipe(11)" v-bind:src="imgs[11].url">
        <img class="little1" @click="showPhotoSwipe(12)" v-bind:src="imgs[12].url">
      </div>
    </table>
    <v-photoswipe :isOpen="isOpen" :items="imgs" :options="options" @close="hidePhotoSwipe"></v-photoswipe>
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
import { PhotoSwipe, PhotoSwipeGallery } from 'v-photoswipe'
export default {
  name: 'Gallery',
  activated: function () {
    this.$emit('switchroute', '/gallery')
  },
  components: {
    'v-photoswipe': PhotoSwipe,
    'v-photoswipe-gallery': PhotoSwipeGallery
  },
  data () {
    return {
      isOpen: false,
      isOpenGallery: false,
      options: {
        index: 0
      },
      optionsGallery: {},
      imgs: [
        {
          src: '/static/show/big/p1.jpg',
          url: '/static/show/small/p1.png',
          w: 2600,
          h: 2088
        },
        {
          w: 7581,
          h: 6547,
          src: '/static/show/big/p2.jpg',
          url: '/static/show/small/p2.png'
        },
        {
          src: '/static/show/big/p3.jpg',
          url: '/static/show/small/p3.png',
          w: 3536,
          h: 2000
        },
        {
          src: '/static/show/big/p4.jpg',
          url: '/static/show/small/p4.png',
          w: 7813,
          h: 8594
        },
        {
          src: '/static/show/big/p5.jpg',
          url: '/static/show/small/p5.png',
          w: 3881,
          h: 3976
        },
        {
          src: '/static/show/big/p6.jpg',
          url: '/static/show/small/p6.png',
          w: 992,
          h: 1349
        },
        {
          src: '/static/show/big/p7.png',
          url: '/static/show/small/p7.png',
          w: 2048,
          h: 1486
        },
        {
          src: '/static/show/big/p8.jpg',
          url: '/static/show/small/p8.png',
          w: 3072,
          h: 3202
        },
        {
          src: '/static/show/big/p9.jpg',
          url: '/static/show/small/p9.png',
          w: 1920,
          h: 1080
        },
        {
          src: '/static/show/big/p10.png',
          url: '/static/show/small/p10.png',
          w: 2048,
          h: 1203
        },
        {
          src: '/static/show/big/p11.png',
          url: '/static/show/small/p11.png',
          w: 1920,
          h: 1080
        },
        {
          src: '/static/show/big/p12.jpg',
          url: '/static/show/small/p12.png',
          w: 1920,
          h: 1080
        },
        {
          src: '/static/show/big/p13.jpg',
          url: '/static/show/small/p13.png',
          w: 1920,
          h: 1080
        }
      ]
    }
  },
  methods: {
    showPhotoSwipe (index) {
      this.isOpen = true
      this.$set(this.options, 'index', index)
    },
    hidePhotoSwipe () {
      this.isOpen = false
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
