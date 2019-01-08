<template>
  <div class="foods-wrapper">
    <div class="s-list" >
      <div>
        <div v-for="(item,i) in tabs" :key="i">
          <div class="s-lista"
               v-for="(cate,j) in item.topics"
               :key="j+'|abe|'">
            <div class="s-name">
            <span class="ava">
              <img :src="cate.avatar"
                   width="100%" height="100%">
            </span>
              <span class="xuanmei">{{cate.nickname}}</span>
            </div>
            <div class="title">{{cate.title}}</div>
            <div class="s-pic">
              <img v-lazy="cate.picUrl"
                   alt width="100%" height="100%">
            </div>
            <div class="s-rcount">
              <i class="ico"></i>
              <span>{{cate.readCount}}</span>
            </div>
          </div>
          <div class="s-listb"
               v-for="(cate,j) in item.topics"
               :key="j">
            <div class="s-info">
              <div class="s-name">
              <span class="ava">
                <img :src="cate.avatar"
                     width="100%" height="100%">
              </span>
                <span class="xuanmei">{{cate.nickname}}</span>
              </div>
              <div class="title">{{cate.title}}</div>
              <div class="desc">{{cate.subTitle}}</div>
              <div class="s-rcount">
                <i class="ico"></i>
                <span>{{cate.readCount}}</span>
              </div>
            </div>
            <div class="u-pic">
              <img :src="cate.picUrl"
                   width="100%" height="100%">
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


  export default{
    methods: {
      _initScroll(){
        if (!this.scroll) {
          this.scroll = new BScroll('.s-list', {
            scrollY: true,
            click: true,
            pullUpLoad: {
              threshold: true
            }
          })
        } else {
          this.scroll.on('pullingUp', () => {
            if (this.timeoutId) {
              clearTimeout(this.timeoutId)
            }
            this.timeoutId = setTimeout(() => {
              this.$store.dispatch('getTabs')
            }, 1000)
            this.scroll.finishPullUp()
          })
        }
        this.scroll.refresh()
      }
    },
    watch: {
      daohang(){
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    },

    props: {
      index: Number
    },

    mounted(){
      this.$store.dispatch('getTabs')
      this.$store.dispatch('getdaohang',() => {
        this._initScroll()
      })

    },
    computed: {
      ...mapState(['tabs', 'daohang'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .foods-wrapper
    .s-list
      height: 100%
      padding: 1.72rem 0 .98rem 0
      box-sizing border-box
      .s-lista
        /*background: pink*/
        width: 100%;
        background: #fff
        margin: .2rem 0;
        box-sizing: border-box;
        padding: .36rem .3rem;
        .s-name
          color: #333;
          line-height: .36rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display flex
          align-items center
          .ava
            width: .7rem;
            height: .7rem;
            overflow: hidden;
            margin-right: .12rem;
            img
              display block
              border-radius 50%;
              box-sizing: border-box;
              border: .01rem solid #d9d9d9;
          .xuanmei
            font-size: .4rem;

        .title
          font-size: .5rem;
          color: #333;
          line-height: .52rem;
          margin: -.08rem 0 .16rem 0;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top 20px
          box-sizing border-box

        .s-rcount
          .ico
            display: inline-block;
            width: .3rem;
            height: .3rem;
            margin-right: .05rem;
            background-color palevioletred
            margin-bottom 11px
          span
            display: inline-block;
            vertical-align: middle;
            font-size: .333rem;
            color: #999;
            line-height: .4rem;

      .s-listb
        margin 0.2rem 0
        padding .32rem .3rem;
        /*background pink*/
        background #fff
        width 100%
        box-sizing border-box
        overflow hidden
        .s-info
          float left
          width 5.5rem
          .s-name
            color: #333;
            line-height: .36rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display flex
            align-items center
            .ava
              width: .7rem;
              height: .7rem;
              overflow: hidden;
              margin-right: .12rem;
              img
                display block
                border-radius 50%;
                box-sizing: border-box;
                border: .01rem solid #d9d9d9;
            .xuanmei
              font-size: .4rem;
          .title
            font-size: .5rem;
            color: #333;
            line-height: .52rem;
            margin: -.08rem 0 .16rem 0;
            overflow: hidden;
            margin-top 20px
            box-sizing border-box
          .desc
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: .39rem;
            line-height: .4rem;
            padding-top: .08rem;
            color: #7f7f7f;
          .s-rcount
            .ico
              display inline-block;
              width .3rem;
              height .3rem;
              margin-right .05rem;
              background-color palevioletred
              margin-bottom 11px
            span
              display: inline-block;
              vertical-align: middle;
              font-size: .333rem;
              color: #999;
              line-height: .4rem;

        .u-pic
          border-radius .08rem;
          float left

          img
            display block
            width: 3.6rem;
            height: 3.6rem;


</style>


