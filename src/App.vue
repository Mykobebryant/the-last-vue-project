<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
    mounted(){
      this.$store.dispatch('getheaderList')
    },
  components:{
    FooterGuide
  }
}
</script>



<style>
</style>
