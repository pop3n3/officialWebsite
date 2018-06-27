<template>
  <div>
   <div class="title">
   </div>
   <div class="bg">
   </div>
   <div class="introduce">
   </div>
  <vue-accordion :items="items">
  </vue-accordion>
</div>
</template>

<script>
import vueAccordion from './vue-accordion.vue'
export default {
  name: 'AboutUs',
  activated: function () {
    this.$emit('switchroute', '/aboutus')
  },
  components: {
    vueAccordion
  },
  data () {
    return {
      items: [
        {image: '/static/1.png', width: 896.0},
        {image: '/static/2.jpg', width: 449.0},
        {image: '/static/3.jpg', width: 799.0},
        {image: '/static/4.jpg', width: 799.0},
        {image: '/static/5.jpg', width: 799.0},
        {image: '/static/6.jpg', width: 799.0},
        {image: '/static/7.jpg', width: 873.0}
      ]
    }
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
