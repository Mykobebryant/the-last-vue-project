<template>
  <div class="shangxin" >
    <div class="box" v-for="(item,index) in shangxin.result" :key="index">
      <div class="title">{{item.title}}</div>
      <div class="content">{{item.subTitle}}</div>
      <ul v-if="item.itemList.length>0">
        <li v-for="(cate,i) in item.itemList" :key="i" >
          <img v-lazy="cate.itemUrl" v-if="cate !== null">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    mounted(){
      this.$store.dispatch('getshangxin')
    },
    computed:{
      ...mapState(['shangxin'])
    }


  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shangxin
    padding: 1.72rem 0 .98rem 0;
    .box
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      box-sizing: border-box;
      padding: .36rem .3rem;
      /*background: pink*/
      .title
        width: 100%;
        color: #333;
        font-size: .45rem;
        line-height: .54rem;
        white-space: nowrap;
        overflow hidden
      .content
        font-size: .35rem;
        color: #7F7F7F;
        line-height: .4rem;
        overflow: hidden;
        padding-top: .08rem;
      ul
        margin: .24rem 0;
        overflow hidden
        li
          width: 1.66rem;
          height: 1.66rem;
          border-radius: .04rem;
          overflow: hidden;
          background: #f4f4f4;
          float left
          margin 0 .2rem  .3rem .2rem
          img
            height 100%
            width 100%

</style>
