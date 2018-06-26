<template>
  <div>
   <div class="title">
   </div>
   <div class="bg">
   </div>
   <div class="introduce">
   </div>
   <div class="imgs">
   </div>
</div>
</template>

<script>
export default {
  name: 'AboutUs',
  activated: function () {
    this.$emit('switchroute', '/aboutus')
  }
}
</script>
<style scoped>
.title{

}
.bg{

}
.introduce{

}
.imgs{

}
</style>
