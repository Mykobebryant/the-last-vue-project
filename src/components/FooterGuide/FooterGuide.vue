<template>
 <footer class="footer_guide">
   <a href="javascript:;" class="guide_item " :class="{on:$route.path ==='/msite'}" @click="goTo('/msite')">
     <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
     <span>首页</span>
   </a>
   <a href="javascript:;"  class="guide_item " :class="{on:$route.path==='/search'} " @click="goTo('/search')">
     <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
     <span>分类</span>
   </a>
   <a href="javascript:;"  class="guide_item" :class="{on:$route.path==='/see'}" @click="goTo('/see')">
     <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
     <span>识物</span>
   </a>
   <a href="javascript:;"  class="guide_item" :class="{on:$route.path==='/shop'}" @click="goTo('/shop')">
     <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
     <span>购物车</span>
   </a>
   <a href="javascript:;"  class="guide_item" :class="{on:$route.path==='/profile'}" @click="goTo('/profile')">
     <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
     <span>个人</span>
   </a>
 </footer>
</template>
<script>
export default{
  methods:{
    goTo(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin -28px
      color #999999
      &.on
        color #b4282d
      span
        font-size 30px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 40px
</style>
