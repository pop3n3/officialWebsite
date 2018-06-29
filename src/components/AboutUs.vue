<template>
  <div>
   <div class="title">
     <br>
      <br>
      <p style="text-indent:25em;font-family:'fzzhengheis-eb-gbregular';letter-spacing:1px;"><font size="10"> <b>◆关于我们 </b></font></p>
      <br>
      <br>
      <br>
   </div>
   <div class="bg">
     <img style="width: 100%;" v-bind:src="title1">
   </div>
   <div id="inTroduce" class="introduce">
     <table class="introduceTable" align="center" cellspacing="0" cellpadding="0">
      <tr>
        <td style="letter-spacing:1px;position:relative;">
          <transition name="slidefade">
          <table v-if="show1" class="imgTable" style="width:500px;">
            <tr>
            <td style="width:140">
            <img src="/static/about/introduce/p1.png">
            </td>
            <td style="width:140">
            <img src="/static/about/introduce/p2.png">
            </td>
            <td style="width:140">
            <img src="/static/about/introduce/p3.png">
            </td>
            </tr>
            <tr>
            <td style="width:140">
            <img src="/static/about/introduce/p4.png">
            </td>
            <td style="width:140">
            <img src="/static/about/introduce/p5.png">
            </td>
            <td style="width:140">
            <img src="/static/about/introduce/p6.png">
            </td>
            </tr>
            <tr>
            <td style="width:140">
            <img src="/static/about/introduce/p7.png">
            </td>
            <td style="width:140">
            <img src="/static/about/introduce/p8.png">
            </td>
            <td style="width:140">
            <img src="/static/about/introduce/p9.png">
            </td>
            </tr>
          </table>
          </transition>
          <table class="textTable" style="width:800px">
          <font style="font-family:'fzzhengheis-eb-gbregular';" size="6"> <b>公司<br></b></font>
          <font size="4"> 成都典致网络有限公司成立于2018年，专注于PC、移动端的美术外包服务，提供游戏角色、场景、特效等设计和游戏2D 和3D美术在内的全方位服务方案。</font>
          <br>
          <br>
          <font style="font-family:'fzzhengheis-eb-gbregular';" size="6"> <b>团队<br></b></font>
          <font size="4"> 能够满足客户各种美术设计需求。公司以精益求精、服务客户为导航，为每一位客户提供个性、专业、独特、高效的美术支持，致力于成为一个集各类网络游戏、手机游戏、休闲游戏等为一体的美术服务商。</font>
          <br>
          <br>
          <font style="font-family:'fzzhengheis-eb-gbregular';" size="6"> <b>经验<br></b></font>
          <font size="4"> 目前团队参与多个项目，服务多家游戏研发商，签订长期合作框架协议的企业超过20家，典致以游戏美术和艺术结合为宗旨，与客户携手并进，追求卓越。</font>
          </table>
        </td>
      </tr>
    </table>
   </div>
  <vue-accordion :items="items">
  </vue-accordion>
</div>
</template>

<script>
import vueAccordion from './others/vue-accordion.vue'
export default {
  name: 'AboutUs',
  components: {
    vueAccordion
  },
  activated: function () {
    this.$emit('switchroute', '/aboutus')
  },
  mounted: function () {
    this.scrollf()
    window.addEventListener('scroll', () => {
      this.scrollf()
    })
  },
  methods: {
    scrollf: function () {
      if (this.$route.path !== '/aboutus') {
        return
      }
      var scrodiv = document.getElementById('inTroduce')
      var hT = scrodiv.offsetTop
      var hH = scrodiv.offsetHeight
      var wH = document.documentElement.clientHeight
      var wS = document.documentElement.scrollTop
      if (wS > (hT + hH * 0.4 - wH)) {
        this.show1 = true
      }
    }
  },
  data () {
    return {
      title1: '/static/show/title1.png',
      show1: false,
      items: [
        {image: '/static/about/1.png', width: 896.0},
        {image: '/static/about/2.jpg', width: 799.0},
        {image: '/static/about/3.jpg', width: 799.0},
        {image: '/static/about/4.jpg', width: 449.0},
        {image: '/static/about/5.jpg', width: 799.0},
        {image: '/static/about/6.jpg', width: 873.0},
        {image: '/static/about/7.jpg', width: 799.0}
      ]
    }
  }
}
</script>
<style scoped>
.title{
background-color: #6876dc;
}
.bg{

}
.introduce{
 width:100%;
 height:600px;
}
.introduceTable{
  width:100%;
  height:100%;
  margin:0;
  padding:0;
}
.imgTable{
  position:absolute;
  margin:0;
  left:318px;
  top:60px;
}
.textTable{
  position:absolute;
  margin:0;
  left:850px;
  top:124px;
}
.slidefade-enter-active {
  transition: all 1.8s ease;
}
.slidefade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slidefade-enter, .slidefade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(25px);
  opacity: 0;
}
</style>
