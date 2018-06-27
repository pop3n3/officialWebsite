<template>
  <div>
   <div class="title">
     <br>
      <br>
      <p style="text-indent:25em;font-family:'fzzhengheis-eb-gbregular';letter-spacing:1px;"><font size="10"> <b>◆关于我们</b></font></p>
      <br>
      <br>
      <br>
   </div>
   <div class="bg">
     <img style="width: 100%;" src="/static/show/title.png">
   </div>
   <div class="introduce">
     <table class="oneshow3" align="center" cellspacing="50">
      <tr>
        <td v-if="show1" style="height:500;width:800px;font-family:'fzzhengheis-eb-gbregular';letter-spacing:1px;">
          <table style="width:500px;margin-left:300px;">
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
        </td>
        <td style="height:500;width:1200px;letter-spacing:1px;">
          <table style="width:800px">
          <font style="font-family:'fzzhengheis-eb-gbregular';" size="6"> <b>公司<br></b></font>
          <font size="5"> 成都典致网络有限公司成立于2018年，专注于PC、移动端的美术外包服务，提供游戏角色、场景、特效等设计和游戏2D 和3D美术在内的全方位服务方案。</font>
          <br>
          <br>
          <font style="font-family:'fzzhengheis-eb-gbregular';" size="6"> <b>团队<br></b></font>
          <font size="5"> 能够满足客户各种美术设计需求。公司以精益求精、服务客户为导航，为每一位客户提供个性、专业、独特、高效的美术支持，致力于成为一个集各类网络游戏、手机游戏、休闲游戏等为一体的美术服务商。</font>
          <br>
          <br>
          <font style="font-family:'fzzhengheis-eb-gbregular';" size="6"> <b>经验<br></b></font>
          <font size="5"> 目前团队参与多个项目，服务多家游戏研发商，签订长期合作框架协议的企业超过20家，典致以游戏美术和艺术结合为宗旨，与客户携手并进，追求卓越。</font>
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
  data () {
    return {
      show1: false,
      items: [
        {image: '/static/about/1.png', width: 896.0},
        {image: '/static/about/2.jpg', width: 449.0},
        {image: '/static/about/3.jpg', width: 799.0},
        {image: '/static/about/4.jpg', width: 799.0},
        {image: '/static/about/5.jpg', width: 799.0},
        {image: '/static/about/6.jpg', width: 799.0},
        {image: '/static/about/7.jpg', width: 873.0}
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

}
.imgs{

}
</style>
