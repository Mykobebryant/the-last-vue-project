<template>
  <div id="xiangMu">
    <header id="header" >
      <div class="header-top">
        <div class="header-line">
          <a class="logo"></a>
          <div class="header-search">
            <i class="iconfont icon-sousuo4"></i>
            <span class="placeholder">搜索商品，共10000件</span>
          </div>
          <div class="header-btn">登录</div>
        </div>
      </div>
      <div class="header-nav">
        <!--头部滚动导航-->
        <div class="header-navList">
          <ul class="header-navListContent">
            <li class="h-list" v-for="(text,index) in headerList.kingKongModule.kingKongList " :key="index" >
              <span>{{text.text}}</span>
            </li>
          </ul>
        </div>
        <!--头部滚动导航中菜单-->
        <div class="header-wrap">
          <div class="header-wrapBox"></div>
          <div class="header-wrapList"></div>
        </div>
        <div></div>
      </div>
    </header>
    <!--中心区域-->
    <div class="contenList">
      <!--轮播图-->
      <div class="msite-nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="slide swiper-slide">
              <a href="javascript:;">
                <img src="https://yanxuan.nosdn.127.net/78505b6fbbb6b25f1fdb0504dfa852f5.jpg?
                          imageView&quality=75&thumbnail=750x0" alt="点击查看">
              </a>
            </div>
            <div class="slide swiper-slide">
              <a href="javascript:;">
                <img src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0">
              </a>
            </div>
            <div class="slide swiper-slide">
              <a href="javascript:;">
                <img src="https://yanxuan.nosdn.127.net/45e2a2c3cf3e6881fbbcdf0b4f1a54e8.jpg?imageView&quality=75&thumbnail=750x0">
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!--轮播图下方三个li-->
      <div class="contenList-center">
        <ul class="contenList-ul" >
          <li class="contenList-li">
            <a >
              <i class="iconfont icon-icon_duihao-mian-copy "></i>
              <span>网易自营品牌</span>
            </a>
          </li>
          <li class="contenList-li">
            <a class="title">
              <i class="iconfont icon-icon_duihao-mian-copy "></i>
              <span>六十天退货</span>
            </a>
          </li>
          <li class="contenList-li">
            <a class="title">
              <i class="iconfont icon-icon_duihao-mian-copy "></i>
              <span>四十八小时沟通</span>
            </a>
          </li>

        </ul>
      </div>
      <!--中心区域大列表-->
      <div class="contenlist-centerLast">
        <div class="firstList">
          <ul class="f-ul">
            <li class="f-li" v-for="(text,index) in headerList.kingKongModule.kingKongList ">
              <a>
                <i class="icon">
                  <img :src="text.picUrl" >
                </i>
                <span>
                  {{text.text}}
                </span>
              </a>
            </li>

          </ul>
          <!--<ul class="f-ul">-->
            <!--<li class="f-li">-->
              <!--<a>-->
                <!--<i class="icon">-->
                  <!--<img src="http://yanxuan.nosdn.127.net/42b4ab968ae5b0f38e608131fb68a095.png" alt="">-->
                <!--</i>-->
                <!--<span>-->
                 <!--饮食-->
                <!--</span>-->
              <!--</a>-->
            <!--</li>-->
            <!--<li class="f-li">-->
              <!--<a>-->
                <!--<i class="icon">-->
                  <!--<img src="http://yanxuan.nosdn.127.net/40e494813fae78a483483d32fd7338b1.png" alt="">-->
                <!--</i>-->
                <!--<span>-->
                 <!--洗护-->
                <!--</span>-->
              <!--</a>-->
            <!--</li>-->
            <!--<li class="f-li">-->
              <!--<a>-->
                <!--<i class="icon">-->
                  <!--<img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">-->
                <!--</i>-->
                <!--<span>-->
                  <!--餐具-->
                <!--</span>-->
              <!--</a>-->
            <!--</li>-->
            <!--<li class="f-li">-->
              <!--<a>-->
                <!--<i class="icon">-->
                  <!--<img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">-->
                <!--</i>-->
                <!--<span>-->
                  <!--文体-->
                <!--</span>-->
              <!--</a>-->
            <!--</li>-->
            <!--<li class="f-li">-->
              <!--<a>-->
                <!--<i class="icon">-->
                  <!--<img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">-->
                <!--</i>-->
                <!--<span>-->
                  <!--特色-->
                <!--</span>-->
              <!--</a>-->
            <!--</li>-->
          <!--</ul>-->
        </div>
        <!--新人专享-->
        <div class="secondList">
          <div class="s-perNew">
            <span>新人专区</span>
          </div>
          <div class="s-box">
            <a class="s-right">
              <div class="name">新人专属大礼包</div>
              <div class="s-rightImg">
                <img src="//yanxuan.nosdn.127.net/a020bed0783956f650abc016e386bead.png" alt="">
              </div>
            </a>
            <div class="s-left">
              <a class="s-left-top">
                <div class="topLeft">福利社<br><br>今日特价</div>
                <div class="topRight">
                  <img src="http://yanxuan.nosdn.127.net/21d9f858fe4b1e2d37ce09c1c399a6b2.png?imageView&thumbnail=200x200&quality=75" alt="">
                </div>
              </a>
              <a class="s-left-bottom">
                <div class="bottomLeft">新人拼团</div>
                <div class="bottomRight">
                  <img src="http://yanxuan.nosdn.127.net/d8d2a808ae9abdcdc337f521df0254ef.png?imageView&thumbnail=200x200&quality=75" alt="">
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import BScroll from "better-scroll"
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import'swiper/dist/js/swiper.min'

export default{
  name:'Msite',
  data(){
    return {

    }
  },
  computed:{
    ...mapState(['headerList'])
  },
  mounted(){
    new BScroll('.header-navList',{
      scrollX: true,
      scrollY: false
    })
    new Swiper('.swiper-container', { // 配置对象
      autoplay:true,
      loop: true, // 循环轮播
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })
  },

}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
#xiangMu
  height 100%
  width 100%
  #header
    z-index 5
    position fixed
    top 0
    left 0
    /*background: pink*/
    width: 100%
    .header-top
      /*position relative*/
      padding .21333rem .4rem
      box-sizing border-box
      .header-line
        position relative
        display flex
        .logo
          width 1.84rem
          height .5333rem
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
          display inline-block
          margin-right .26667rem
          background-size cover
          background-position center
        .header-search
          flex 1
          margin-right .26667rem
          width 100%
          font-size .3733rem
          justify-content center
          background-color:#7E8C8D
          align-items center
          display flex
          .iconfont
            align-items center
            font-size .3733rem
            display inline-block
            margin-right  20px

        .header-btn
          width .98667rem
          height .5333rem
          color #b4282d
          border 2px solid #b4282d
          border-radius .10667rem
          font-size .32rem
          line-height .5333rem
          text-align center
          margin-right .26667rem

    .header-nav
      /*background: deeppink*/
      .header-navList
        /*width 1000px*/
        position relative

        .header-navListContent
          position absolute
          top 0
          left 0
          width 1500px
          /*background-color:pink*/

          .h-list
            float left
            font-size .5rem
            padding 11px 28px
            box-sizing border-box
            span
              display inline-block
        .header-wrap
          width 100px
          height 100px
          background-color yellowgreen
          position absolute
          top 0
          right 0
          z-index 5
  /*轮播*/
  .contenList
    padding-top 150px
    width: 100%
    .msite-nav
      .swiper-container
        width: 100%
        background white
        height: 4.93333rem;
        img
          width 100%
          height 100%
    .contenList-center
      /*position absolute*/
      /*top 580px*/
      /*left 0*/
      /*background-color pink*/
      width 100%
      .contenList-ul
        height .96rem
        width 100%
        padding 0 .4rem
        display flex
        flex-flow: row nowrap;
        align-items: center;
        zoom: 1;
        box-sizing border-box
        .contenList-li
          flex 1
          a
            flex-flow: row nowrap;
            align-items: center;
            zoom: 1;
            .iconfont
              width 0.32rem;
              height 0.32rem;
              font-size 30px
              vertical-align: middle;
              background-size: 100% 100%;
            span
              color: #B4282D;
              font-size: 0.32rem;
              margin-left: 0.08rem;
              line-height: 0.32rem;
              display: inline-block;
              vertical-align: middle;


  .contenlist-centerLast
    /*position relative*/
    .firstList
      /*position absolute*/
      /*top 670px*/
      /*left 0*/
      /*background: palegoldenrod*/
      width 100%
      .f-ul
        display flex
        .f-li
          flex-grow  1
          flex-basis 0
          display flex
          justify-content center
          a
            display flex
            flex-direction column
            align-items center
            .icon
              width 1.1rem
              height 1.1rem
              display flex
              justify-content center
              img
                width: 1.5rem;
                height: 1.5rem;
                display: block;
            span
              margin-top 50px
              display inline-block
              font-size 0.4rem
              color #333333
              box-sizing border-box


    .secondList
      /*position absolute*/
      /*top 1030px*/
      /*left 0*/
      width 100%
      .s-perNew
        height 1.2rem
        width 100%
        /*background-color pink*/
        text-align center
        font-size 0.24rem
        &:before
          content ''
          position absolute
          top .6rem
          left 3.5333rem
          width  .32rem
          height .04rem
          background-color  #000
        &:after
          content ''
          position absolute
          top .6rem
          right 3.5333rem
          width .32rem
          height .04rem
          background: #000
      span
        color #333333
        display inline-block
        line-height 3
        font-size .4267rem

    .s-box
      /*position absolute*/
      /*top 100px*/
      /*left 0*/
      /*background deeppink*/
      width 100%
      margin-right .09rem
      .s-right
        display block
        width 4.5733rem
        height 5.786rem
        border-radius .05333rem
        margin-right .05333rem
        float left
        color black
        background-color: #F9E9CF
        .name
          font-size .43667rem
          padding .4rem 0 0 .4rem
        .s-rightImg
          width 3.44rem
          height 3.436rem
          margin .4933rem auto
      .s-left
        float left
        .s-left-top
          width 4.57rem
          height 2.86rem
          background-color: #FBE2D3
          /*display inline-block*/
          border-radius 4px
          margin-bottom .03rem
          display flex
          .topLeft
            font-size .4267rem
            float left
            color black
            margin 20px 0 0 20px
          .topRight
            float left
        .s-left-bottom
          width 4.57rem
          height 2.86rem
          background-color:#FFECC2
          display inline-block
          float left
          border-radius 4px
          .bottomLeft
            font-size .4267rem
            float left
            color black
            margin 20px 0 0 20px
          .bottomRight
            float left





</style>
