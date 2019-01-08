<template>
  <div class="see">
    <div class="s-header">
      <header>
        <div class="s-header-top">
          <div class="s-header-left">
            <a @click="$router.replace('/msite')">
              <i></i>
            </a>
          </div>
          <div class="s-header-center">
            <a class="faxian">
              <router-link to="/see/faxian">发现</router-link>
            </a>
            <a class="zhenxuanjia">甄选佳</a>
          </div>
          <router-view/>
          <div class="s-header-right">
            <a class="shoushuo" @click="$router.replace()"></a>
            <a class="gouwuche"></a>
          </div>
        </div>
      </header>
    </div>
    <div class="s-nav">
      <div class="s-nav-top">
        <a v-for="(item,index) in daohang"
           :key="index"
           @click="goTo(index)"
        >{{item.tabName}}</a>
      </div>
    </div>
    <tuijian :index="index" v-if="index === 0"/>
    <daren :index="index" v-if="index === 1"/>
    <shangxin :index="index" v-if="index === 2"/>
    <shaidan :index="index" v-if="index === 3"/>
    <home :index="index" v-if="index === 4"/>
    <!--<daren/>-->
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import tuijian from '../../components/tuijan/tuijian.vue'
  import daren from '../../components/daren/daren.vue'
  import shangxin from '../../components/shangxin/shangxin.vue'
  import shaidan from '../../components/shaidan/shaidan.vue'
  import home from '../../components/home/home.vue'
  import faxian from './Faxian.vue'

  export default{
//下啦更新， 上啦刷新
    data(){
      return {
        index:0
      }
    },
    mounted(){
      this.$store.dispatch('getdaohang')
    },
    computed: {
      ...mapState(['daohang'])
    },

    components: {
      tuijian,
      daren,
      shangxin,
      shaidan,
      home,
    },

    methods: {
      goTo(index){ // 传参
        this.index = index
      }
    },

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>


  .see
    .s-header
      position fixed
      left 0
      top 0
      width 100%
      z-index 20
      header
        position: relative;
        height: 1rem;
        background-color: #fafafa;
        box-sizing: border-box;
        border-bottom: .01rem solid #d9d9d9;
        .s-header-top
          z-index: 1;
          max-width: 768px;
          box-sizing: border-box;
          margin: auto;
          overflow: hidden;
          padding: 0 .26rem 0 .24rem;
          position: relative
          a
            display inline-block
            i
              display inline-block
              width .64rem
              height .586rem
              vertical-align middle
              background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png")
              background-size 2.2933rem 5.6rem
              background-repeat no-repeat
              background-position 0 -.98667rem;
          &:after
            content: "";
            display: block;
            clear: both;

        .s-header-center
          position: absolute;
          width: 3.2rem;
          height: 100%;
          line-height: 1rem;
          text-align: center;
          left: 50%;
          top: 0;
          margin-left: -1.6rem;
          font-size: .4rem;
          color: #7F7F7F;
          z-index: 1;
          .faxian
            font-size: .6rem;
            color: #b4282d;
            font-weight: bold;
          .zhenxuanjia
            padding: 0 .16rem;
            vertical-align: middle;

        .s-header-right
          display: block;
          float: right;
          height: 1rem;
          margin-right: .02rem;
          .shoushuo
            position: absolute;
            bottom: 70px;
            right: 105px;
            width: 0.85333rem;
            height: 0.85333rem;
            background-position: 0 -4.74667rem;
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
            background-repeat: no-repeat;
            background-size: 2.29333rem 5.6rem;

    .s-nav
      width: 100%;
      height: .72rem;
      background: #fafafa;
      border-bottom: .01rem solid #d9d9d9;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      overflow: hidden;
      position: fixed;
      top: 1rem;
      left: 0;
      z-index: 20;
      .s-nav-top
        display flex
        flex-flow row wrap
        justify-content space-around
        a
          display: inline-block;
          height: .72rem;
          line-height: .72rem;
          box-sizing: border-box;
          font-size: .4rem;
          color: #7F7F7F;
          padding: 0 .08rem;
          margin: 0 .2rem;
          vertical-align: middle;


</style>
