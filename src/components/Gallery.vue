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
    <tr style="float:left" v-for="(img,index) in imgs" :key="index">
      <img class="oneshowa"
          v-preview="img.url1"
          v-bind:src="img.url"
          :alt="img.title"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true">
    </tr>
    </table>
    <table class="oneshow3" align="center" cellspacing="100">
    <tr>
      <td>
      <p><font size="4"> <b>响橙美术专注于游戏美术外包领域，同时提供全民<br>的解决方案，从创立以来多年努力，有更多的精英<br>艺术家加入我们，他们在游戏制作领域有非常专业<br>的简介和很多项目的管理经验。<br>
我们提高了团队人员的专业技能和文化修养，也加<br>快了我们的发展进程，从一个小工作室发展为一家<br>中国北方最有影响力的美术外包公司之一，并且在<br>中国的成都、沈阳、西安、长春建立了我们一直坚<br>持我们对事业的激情以及对待客户真诚的态度，这<br>让我们获得了很多客户的认可，也增加了我们的业<br>务。<br>
我们相信响橙美术会成为全球供应商中优秀的一<br>员。<br>
质量比数量更重要。</b></font></p>
      </td>
      <td>
        <p style="text-indent:2em"><font size="4"> <b>我们提供服务:</b></font></p>
        <p><font size="4"> <b>MMOG 3D Outsourcing大型网络游戏美术整包<br>Web Game Out·sourcing网页游戏美术整包<br>Mobile Game Outsourcing手机游戏美术整包</b></font></p>
        <br>
        <p><font size="4"> <b>2D<br>游戏角色概念设计Conceptual Design of game character<br>游戏场景概念设计Conceptual Design of game scenes<br>影视前期概念设计Initial Conceptual Design of movies and TV series<br>游戏特效制作Game effects</b></font></p>
        <br>
        <p><font size="4"> <b>3D<br>角色美术外包Characters<br>场景美术外包Art design in scenes<br>游戏美术整包Whole games</b></font></p>
      </td>
    </tr>
    </table>
    <p style="text-align:center"><font size="10"> <b>2D作品展示</b></font></p>
    <table class="oneshow4" align="center">
    <tr>
      <td><img src="../assets/title_left.png" ></td>
      <td><img src="../assets/title_left.png"></td>
      <td><img src="../assets/title_left.png"></td>
    </tr>
    <tr>
      <td><img src="../assets/title_left.png"></td>
      <td><img src="../assets/title_left.png"></td>
      <td><img src="../assets/title_left.png"></td>
    </tr>
    <tr>
      <td><img src="../assets/title_left.png"></td>
      <td><img src="../assets/title_left.png"></td>
      <td><img src="../assets/title_left.png"></td>
    </tr>
    <tr>
      <td><img src="../assets/title_left.png"></td>
      <td><img src="../assets/title_left.png"></td>
      <td><img src="../assets/title_left.png"></td>
    </tr>
    </table>
    <p style="text-align:center"><font size="10"> <b>3D建模以及贴图作品展示</b></font></p>
    <table class="oneshow5" align="center" cellspacing="20">
    <tr>
      <td><img src="../assets/title_left.png"></td>
      <td><img src="../assets/title_left.png"></td>
      <td><img src="../assets/title_left.png"></td>
    </tr>
    <tr>
      <td><img src="../assets/title_left.png"></td>
      <td><img src="../assets/title_left.png"></td>
      <td><img src="../assets/title_left.png"></td>
    </tr>
    <tr>
      <td><img src="../assets/title_left.png"></td>
      <td><img src="../assets/title_left.png"></td>
      <td><img src="../assets/title_left.png"></td>
    </tr>
    <tr>
      <td><img src="../assets/title_left.png"></td>
      <td><img src="../assets/title_left.png"></td>
      <td><img src="../assets/title_left.png"></td>
    </tr>
    </table>
  </div>

</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
      imgs: [
        {
          url: '/static/icon_1.png',
          url1: '/static/icon_1.png',
          title: 'pic1'
        },
        {
          url: '/static/icon_1.png',
          url1: '/static/icon_1.png',
          title: 'pic2'
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
.oneshowa{
   background-color: #FFFF00;
   height: 100px;
   width: 100px;
   margin-top:-50;
   margin-left:-50;
}
.oneshow1{
   background-color: #FFFF00;
   height: 50%;
}
.oneshow2{
   background-color: #FF0000;
}
.oneshow3{
   background-color: #0ff000;
}
.oneshow4{
   background-color: #FF0000;
}
.oneshow5{
   background-color: #000000;
}
</style>
