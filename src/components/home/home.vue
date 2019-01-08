<template>
  <div class="home">
    <div class="box" v-for="(item,index) in home.result">
      <div class="title">{{item.title}}</div>
      <div class="u-pic">
        <img v-lazy="item.picUrl" >
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
  mounted(){
  this.$store.dispatch('gethome')
  },

  computed:{
    ...mapState(['home'])
//    home: state => state.home
  }



  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home
    padding: 1.72rem 0 .98rem 0;
    .box
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: .36rem .3rem;
      /*background: pink*/
      .title
        font-size: .46rem;
        color: #333;
        line-height: .52rem;
        margin: -.08rem 0 .16rem 0;
        overflow: hidden;
      .u-pic
        img
          width 100%
          height  100%
</style>
