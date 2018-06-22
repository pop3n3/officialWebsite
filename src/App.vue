<template>
  <div id="app">
    <div class="navTitle">
    <img class="navTitleImg" src="./assets/homePage/logo.png">
    <div class="navTitleDiv">
    <table border="0" cellpadding="0" cellspacing="0">
    <tr>
    <th class="navTitleTableth"><label :class="{ navTitlelabelVisited: isSubmitted1 }" id="btnHome" @click="switchRoute($event,'/')" class="navTitlelabel" >首页</label></th>
    <th class="navTitleTableth"><label :class="{ navTitlelabelVisited: isSubmitted2 }" id="btnAbout" @click="switchRoute($event,'/aboutus')" class="navTitlelabel" >关于我们</label></th>
    <th class="navTitleTableth"><label :class="{ navTitlelabelVisited: isSubmitted3 }" id="btnGallery" @click="switchRoute($event,'/gallery')" class="navTitlelabel" >作品展示</label></th>
    </tr>
    </table>
    <div id="navTitleline" :class="{ navTitlelineTransition: isTransition }"></div>
    </div>
    </div>
    <router-view/>
  <lg-preview></lg-preview>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      isSubmitted1: false,
      isSubmitted2: false,
      isSubmitted3: false,
      isTransition: false
    }
  },
  mounted: function () {
    this.isTransition = true
    this.updateLabelStatus(this.$route.path)
  },
  methods: {
    switchRoute: function (event, path) {
      this.updateLabelStatus(path)
      if (path !== this.$route.path) {
        this.$router.push({ path: path })
      }
    },
    updateLabelStatus: function (path) {
      let marginRight = 20
      var lineWidth = 0
      var marginLeft = 0
      let btnHome = document.getElementById('btnHome')
      let btnAbout = document.getElementById('btnAbout')
      let btnGallery = document.getElementById('btnGallery')
      switch (path) {
        case '/':
          this.isSubmitted1 = true
          this.isSubmitted2 = false
          this.isSubmitted3 = false
          lineWidth = btnHome.offsetWidth
          break
        case '/aboutus':
          this.isSubmitted1 = false
          this.isSubmitted2 = true
          this.isSubmitted3 = false
          lineWidth = btnAbout.offsetWidth
          marginLeft = btnHome.offsetWidth + marginRight
          break
        case '/gallery':
          this.isSubmitted1 = false
          this.isSubmitted2 = false
          this.isSubmitted3 = true
          lineWidth = btnGallery.offsetWidth
          marginLeft = btnHome.offsetWidth + btnAbout.offsetWidth + 2 * marginRight
          break
        default:
          break
      }
      let line = document.getElementById('navTitleline')
      line.style.width = lineWidth + 'px'
      line.style.marginLeft = marginLeft + 'px'
    }
  }
}
</script>
<style>
#app {
  width:auto;
}
.navTitle{
   width: 100%;
}
.navTitleImg{
  margin-left:3.7%;
  margin-top:1%;
  margin-bottom:1%;
}
.navTitleDiv{
  float:right;
  margin-top:1.5%;
  margin-right:4%;
}
.navTitleTableth{
   text-align: left;
   width:auto;
   height: auto;
}
.navTitlelabel{
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #888ba2;
  border: 0px none;
  font-size: 20px;
  outline: none;
  margin-right:20px;
}
.navTitlelabel:hover{
  color:#4b59bc;
  border: none;
  cursor: hand;
  cursor: pointer;
}
.navTitlelabelVisited{
  color: #4b59bc;
}
.navTitlelineTransition{
  transition: margin-left 0.3s ;
}
#navTitleline{
  float: left;
  width:40px;
  height:3px;
  margin-top:0px;
  background-color: #4b59bc;
}
@font-face{
  font-family:'fzzhengheis-eb-gbregular';
  src:url('./fonts/_.ttf');
  src:url('./fonts/_.woff2') format('woff2'),
  url('./fonts/_.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
</style>
