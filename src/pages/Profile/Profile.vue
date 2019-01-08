<template>
  <div class="profile">
    <div class="p-header">
     <div class="guding">
       <a class="p-h-left" @click="$router.replace('/msite')">
       </a>
       <div class="p-h-center">
         <a class="p-h-center-a"></a>
       </div>
       <div class="p-h-left">
         <div class="p-h-left-left">
           <a class="search">
             <i class="search-right"></i>
           </a>
         </div>
         <div class="p-h-left-right">
           <a class="search-right-right">
             <i class="search-right-right"></i>
           </a>
         </div>
       </div>
     </div>
    </div>
    <div class="p-center">
      <div class="p-center-top">
        <div class="logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" >
        </div>
        <div class="btn">
          <div class="btn-top">
            <i class="phoneLogo"></i>
            <span>手机号码登录</span>
          </div>
          <div class="btn-center">
            <i class="youxiang"></i>
            <span>邮箱验证登录</span>
          </div>
        </div>
      </div>
      <!--<div class="p-center-bottom">-->
        <!--<span class="p-weixin">微信</span>-->
        <!--<span class="p-qq">QQ</span>-->
        <!--<span class="p-weibo">微博</span>-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>

export default{

}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.profile
  .p-header
    width 100%
    background-color pink
    /*position fixed*/
    /*top 0*/
    /*left 0*/
    /*z-index 5*/
    .guding
      position relative
      width 100%
      height 100%
      .p-h-left
        display inline-block
        width .64rem
        height .586rem
        vertical-align middle
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png")
        background-size 2.2933rem 5.6rem
        background-repeat no-repeat
        background-position 0  -.98667rem;
      .p-h-center
        position absolute;
        top 0
        right 0
        bottom 0
        left 0
        margin auto
        width: 2.29333rem;
        height: .72rem;
        background-position: 0 -1.70667rem;
        display: inline-block;
        vertical-align: middle;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
        background-repeat: no-repeat;
        background-size: 2.29333rem 5.6rem;
       .p-h-left
         margin-left auto
         margin-right .06667rem
         .p-h-left-left
           margin-right .26667rem
           .search
             .search-right
                position absolute
                bottom 0
                right 105px
                width: .85333rem;
                height: .85333rem;
                background-position: 0 -4.74667rem;
                display: inline-block;
                vertical-align: middle;
                background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
                background-repeat: no-repeat;
                background-size: 2.29333rem 5.6rem;
           .search-right-right
             .search-right-right
                position absolute
                right 0
                bottom: 0
                width: .85333rem;
                height: .85333rem;
                background-position: 0 0;
                display: inline-block;
                vertical-align: middle;
                background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
                background-repeat: no-repeat;
                background-size: 2.29333rem 5.6rem;


  .p-center
    width 100%
    height  100%
    /*background palegreen*/
    .p-center-top

      .logo
        text-align: center;
        padding-top: 2.13333rem;
        padding-bottom: 2.13333rem;
        img
          width: 3.57333rem;
          height: 1.2rem
          /*box-sizing border-box*/
      .btn
        padding 0 .53333rem
        margin-bottom 2.73333rem
        position relative
        .btn-top
          width 100%
          margin-bottom .42667rem
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          line-height: .90667rem;
          font-size: .37333rem;
          color: #fff;
          border: 1px solid #b4282d;
          background-color: #b4282d;
          border-radius: 4px;
          overflow: hidden;
          .phoneLogo
            margin-right: .21333rem;
            position: relative;
            top: -.02667rem;
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
            background-repeat: no-repeat;
            background-size: .53333rem 3.86667rem;
            width: .53333rem;
            height: .53333rem;
            background-position: 0 -.66667rem
          span
            font-size: .37333rem;
            text-align: center
            line-height: 1.25333rem
            color: #fff
        .btn-center
          width 100%
          margin-bottom .42667rem
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          line-height: .90667rem;
          font-size: .37333rem;
          border: 1px solid #b4282d;
          background-color: white
          border-radius: 4px;
          overflow: hidden;
          .youxiang
            margin-right: .21333rem;
            position relative;
            top -.02667rem;
            display inline-block;
            vertical-align middle;
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
            background-repeat no-repeat;
            background-size .53333rem 3.86667rem;
            width .53333rem;
            height .53333rem;
          span
            font-size: .37333rem;
            text-align: center
            line-height: 1.25333rem
            color: #b4282d;
      .p-center-bottom
        width 100px
        height: 100px
        background: #000
        display flex
        justify-content center

        .p-weixin
          display inline-block
          color #7e8c8d
          font-size 22rem




</style>
