<template>
  <div class="search">
    <!--第二屏搜索框-->
    <div class="s-header">
      <div class="s-h-top">
        <div class="s-h-top-search">
          <i class="s-searchP"></i>
          <span class="s-searchW">搜索商品,共20000件</span>
        </div>
      </div>
    </div>
    <!--第二屏左侧列表-->
    <div class="s-listLeft">
      <div class="s-listLeftText">
        <ul class="s-listUl" v-if="headerList.categoryHotSellModule">
          <li class="s-listLi "
              v-for="(item,index) in headerList.categoryHotSellModule.categoryList"
              :key="index"
              @click="getIndex(index)"

          >
            <a>{{item.categoryName}}</a>
          </li>
        </ul>
      </div>
    <!--第二屏右侧列表-->
    </div>
    <shoplist :index="index"/>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import BScroll from "better-scroll"
import shoplist from '../../components/shoplist/shoplist.vue'

export default{
  data(){
    return{
     index: 0
    }
  },
components:{
  shoplist
},
mounted(){

},
methods:{
  getIndex(index){
    this.index = index
  }
  },
computed:{
  ...mapState(['headerList'])
}


}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>



.search
  width 100%
  .s-header
    position fixed
    left 0
    top 0
    z-index 5
    width 100%
    .s-h-top
      display flex
      background-color #fff
      align-items center
      height 1.1733rem
      padding 0 .4rem
      .s-h-top-search
         width 100%
         display flex
         flex-flow row nowrap
         align-items center
         height .7466rem
         font-size .3733rem
         justify-content center
         background-color #ededed
         .s-searchP
          display inline-block
          vertical-align middle;
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat no-repeat;
          background-size 100% 100%;
          width .37333rem;
          height .37333rem;
          margin-right .13333rem;
         .s-searchW
          color #666
          display inline-block
      &:after
        content: '';
        position absolute;
        background-color #d9d9d9;
        left 0;
        width 100%;
        height 1px;
        bottom: 0;



  .s-listLeft
    position: fixed
    top 1.17333rem
    left 0
    bottom 0
    z-index 4
    width 2.16rem
    background-color #fff
    .s-listLeftText
      position: relative;
      height: 100%;
      width: 100%;
      overflow: hidden;
      .s-listUl
        /*display flex*/
        /*flex-direction column*/
        /*align-items center*/
        .s-listLi
          width: 100%;
          height: 1.3rem
          text-align: center

          a
            display: block;
            color: #333;
            font-size: .37333rem;
            line-height: 1.3rem
            text-overflow: ellipsis;
            &:before
              content: ' ';
              position: absolute;
              top: 25px;
              left: 0;
              bottom: 0;
              width: .08rem;
              height  .66667rem
              background-color: #ab2b2b;









</style>
