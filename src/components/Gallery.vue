<template>
  <div>
    <div class="oneshow1">
      <br>
      <img class="icon" src="../assets/black.png">
      <p style="text-indent:7em;font-family:'fzzhengheis-eb-gbregular';letter-spacing:1px;font-size: 57px;color:#21184a"> <b>作品展示 </b></p>
      <br>
    </div>
    <div class="oneshow2">
      <img :src="now">
    </div>
    <table class="oneshow3" align="center" cellspacing="100">
    <tr>
      <td style="height:30%;width:500px;letter-spacing:1px;">
      <p style="height:30%;width:80%;margin-left:20%;margin-top:-15px;font-size: 17px;" >典致网络专业提供美术外包服务，为每位客户提供全方位的美术解决方案。我们在大型3D客户端游戏，三渲二页游，以及手机游戏领域有着丰富的美术制作经验和成功案例；公司在短时间内就参与了众多成功游戏的开发，并与众多游戏公司建立了良好的合作关系。团队成员均在行业有着多年从业经验，在项目经验和基础素质方面无可替代！<br>美术风格涵盖：日韩、欧美、Q版、写实、现代等，无论是2D还是3D，或是动作、特效，我们团队都竭力奉献自己的能量，帮助客户在美术环节达到最佳的视觉呈现效果。
      </p>
      </td>
      <td style="width:500px;" >
        <p style="font-family:'fzzhengheis-eb-gbregular';">我们提供服务:</p>
        <p style="font-weight:normal;font-size: 17px;"> Web Game Out•sourcing网页游戏美术整包<br>Mobile Game Outsourcing手机游戏美术整包</p>
        <p style="font-family:'fzzhengheis-eb-gbregular';font-size: 17px;">2D</p>
        <p style="font-weight:normal;font-size: 17px;margin-top:-17px;"> 游戏角色概念设计Conceptual Design of game character<br>游戏场景概念设计Conceptual Design of game scenes<br>游戏特效制作Game effects</p>
        <p style="font-family:'fzzhengheis-eb-gbregular';font-size: 17px;">角色美术</p>
        <p style="font-size: 17px;margin-top:-17px;"> 角色美术外包Characters<br>场景美术外包Art design in scenes<br>游戏美术整包Whole games</p>
      </td>
    </tr>
    </table>
    <div class="titleDiv">
          <img class="leftLine" src="../assets/zp_hg.png">
          <div>
             <p class="p1"><b>2D作品展示</b></p>
             <p class="p2"><b>WORKS SHOW</b></p>
          </div>
          <img class="rightLine" src="../assets/zp_hg.png">
    </div>
    <table align="center">
        <img class="little1" @click="showPhotoSwipe(0,imgs)" v-bind:src="imgs[0].url">
        <img class="little1" @click="showPhotoSwipe(1,imgs)" v-bind:src="imgs[1].url">
        <img class="little1" @click="showPhotoSwipe(2,imgs)" v-bind:src="imgs[2].url">
        <img class="little1" @click="showPhotoSwipe(3,imgs)" v-bind:src="imgs[3].url">
        <img class="little1" @click="showPhotoSwipe(4,imgs)" v-bind:src="imgs[4].url">
        <img class="little1" @click="showPhotoSwipe(5,imgs)" v-bind:src="imgs[5].url">
        <img class="little2" @click="showPhotoSwipe(6,imgs)" v-bind:src="imgs[6].url">
        <img class="little1" @click="showPhotoSwipe(7,imgs)" v-bind:src="imgs[7].url">
        <img class="little1" @click="showPhotoSwipe(8,imgs)" v-bind:src="imgs[8].url">
        <img class="little1" @click="showPhotoSwipe(9,imgs)" v-bind:src="imgs[9].url">
        <img class="little1" @click="showPhotoSwipe(10,imgs)" v-bind:src="imgs[10].url">
        <img class="little1" @click="showPhotoSwipe(11,imgs)" v-bind:src="imgs[11].url">
        <img class="little1" @click="showPhotoSwipe(12,imgs)" v-bind:src="imgs[12].url">
    </table>
    <showPhoto></showPhoto>
  </div>
</template>
<script>
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import PhotoSwipeDefaultUI from 'photoswipe/dist/photoswipe-ui-default'
import showPhoto from './others/showPhoto.vue'
export default {
  name: 'Gallery',
  activated: function () {
    this.$emit('switchroute', '/gallery')
  },
  components: {
    showPhoto
  },
  data () {
    return {
      titleimags: ['/static/show/title1.jpg', '/static/show/title2.jpg', '/static/show/title3.jpg', '/static/show/title4.jpg', '/static/show/title5.jpg'],
      i: 0,
      now: '/static/show/title1.jpg',
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
          src: '/static/show/big/p11.jpg',
          url: '/static/show/small/p11.jpg',
          w: 2560,
          h: 1182
        },
        {
          src: '/static/show/big/p12.jpg',
          url: '/static/show/small/p12.jpg',
          w: 1024,
          h: 1201
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
    showPhotoSwipe: function (index, items) {
      var pswpElement = document.querySelectorAll('.pswp')[0]
      var options = {
        history: false,
        focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0,
        index: index,
        shareEl: false,
        loadingIndicatorDelay: 1000,
        preloaderEl: true,
        closeOnScroll: false
      }
      var gallery = new PhotoSwipe(pswpElement, PhotoSwipeDefaultUI, items, options)
      gallery.init()
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
  }
}
</script>
<style>
/* .img {
   width: 100%;
   height: 100%;
} */
.titleDiv{
  margin: auto;
  width:930px;
  height: 90px;
  position: relative;
  text-align:center;
}
.leftLine{
  position:absolute;
  left:0px;
  margin-top:35px;
}
.rightLine{
  position:absolute;
  margin-top:35px;
  right:0px;
}
.titleDiv div{
  position:absolute;
  height:100%;
  width: 182px;
  margin-left:374px;
}
.p1{
  margin-top:0px;
  margin-bottom:4px;
  font-family:'fzzhengheis-eb-gbregular';
  font-size: 30px;
}
.p2{
  margin-top:0px;
  margin-bottom:0px;
  font-family:'fzzhengheis-eb-gbregular';
  font-size: 20px;color:#acaebf;
}

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
.icon{
  position: absolute;
  margin-top:65px;
  margin-left:350px;
}
.oneshowa{
   background-color: #FFFF00;
   margin-top: 0px;
}
.oneshow1{
   background-color: #d1dfff;
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
