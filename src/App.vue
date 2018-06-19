<template>
  <div id="app">
    <div class="title">
    <img src="./assets/title_left.png">
    <div>
    <table border="0">
    <tr>
    <th><label :class="{ labelVisited: isSubmitted1 }" id="btnHome" @click="switchRoute($event,'/')" class="label" >首页</label></th>
    <th><label :class="{ labelVisited: isSubmitted2 }" id="btnAbout" @click="switchRoute($event,'/aboutus')" class="label" >关于我们</label></th>
    <th><label :class="{ labelVisited: isSubmitted3 }" id="btnGallery" @click="switchRoute($event,'/gallery')" class="label" >作品展示</label></th>
    </tr>
    </table>
    </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      isSubmitted1: false,
      isSubmitted2: false,
      isSubmitted3: false
    }
  },
  mounted: function () {
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
      switch (path) {
        case '/':
          this.isSubmitted1 = true
          this.isSubmitted2 = false
          this.isSubmitted3 = false
          break
        case '/aboutus':
          this.isSubmitted1 = false
          this.isSubmitted2 = true
          this.isSubmitted3 = false
          break
        case '/gallery':
          this.isSubmitted1 = false
          this.isSubmitted2 = false
          this.isSubmitted3 = true
          break
        default:
          break
      }
    }
  }
}
</script>

<style scoped>
.title{
   width: 100%;
}
.title img{
  margin-left:3.7%;
  margin-top:1.7%;
  margin-bottom:1.7%;
}
.title div{
  float:right;
  margin-top:1.7%;
  margin-right:3%;
}
table{
  border-collapse:collapse;
}
th{
   text-align: right;
   width:90px;
   height: auto;
}
.label{
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: black;
  background-color: #FFFFFF;
  border: 0px none;
  font-size: 14px;
  outline: none;
}
.label:hover{
  color:orange;
  border: none;
  cursor: hand;
  cursor: pointer;
}
.labelVisited{
  color: orange;
}
</style>
