<template>
  <div id="app">
    <div class="title">
    <img src="./assets/homePage/logo.png">
    <div>
    <table border="0" cellpadding="0" cellspacing="0">
    <tr>
    <th><label :class="{ labelVisited: isSubmitted1 }" id="btnHome" @click="switchRoute($event,'/')" class="label" >首页</label></th>
    <th><label :class="{ labelVisited: isSubmitted2 }" id="btnAbout" @click="switchRoute($event,'/aboutus')" class="label" >关于我们</label></th>
    <th><label :class="{ labelVisited: isSubmitted3 }" id="btnGallery" @click="switchRoute($event,'/gallery')" class="label" >作品展示</label></th>
    </tr>
    </table>
    <div id="line" :class="{ lineTransition: isTransition }"></div>
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
      let line = document.getElementById('line')
      line.style.width = lineWidth + 'px'
      line.style.marginLeft = marginLeft + 'px'
    }
  }
}
</script>
<style scoped>
#app {
  width:auto;
}
.title{
   width: 100%;
}
.title img{
  margin-left:3.7%;
  margin-top:1%;
  margin-bottom:1%;
}
.title div{
  float:right;
  margin-top:1.5%;
  margin-right:4%;
}
th{
   text-align: left;
   width:auto;
   height: auto;
}
.label{
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
.label:hover{
  color:#4b59bc;
  border: none;
  cursor: hand;
  cursor: pointer;
}
.labelVisited{
  color: #4b59bc;
}
.lineTransition{
  transition: margin-left 0.3s ;
}
#line{
  float: left;
  width:40px;
  height:3px;
  margin-top:0px;
  background-color: #4b59bc;
}
</style>
