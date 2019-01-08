<template>
  <div class="shoplist">
    <div class="s-shoplist-top">
      <div class="banner"></div>
    </div>
    <div class="s-shoplist-bottom">
      <div class="s-shoplist-bottom-ul" v-if="headerList.categoryHotSellModule">
        <ul class="s-shoplist-bottom-li"
            v-for="(item, i) in headerList.categoryHotSellModule.categoryList"
            :key="i"
            v-if="index === i"
        >
          <li class="item-cate" v-for="(cate, j) in item.itemPicBeanList" >
            <a>
              <img v-lazy="cate.picUrl">
              <span>{{cate.itemId}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    props: {
      index: Number
    },
   mounted(){
     this.$store.dispatch('getNavList');
  },
    computed: {
      ...mapState(['headerList','nav'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shoplist
    margin-left: 2.16rem;
    padding: 1.4rem .4rem .28rem
    box-sizing border-box
    .s-shoplist-top
      background-image url("https://yanxuan.nosdn.127.net/8f6643db675acace2420594545c3a180.jpg?imageView&thumbnail=0x196&quality=75")
      background-repeat no-repeat
      position: relative;
      width: 100%;
      height: 2.56rem;
      margin-bottom: .42667rem;
      background-position: center
      background-size: cover;
      border-radius: 4px;
    .s-shoplist-bottom
      .s-shoplist-bottom-ul
        /*display flex*/
        /*align-items center*/
        /*justify-content center*/
        .s-shoplist-bottom-li
          display inline-block
          margin-right .45333rem
          font-size 0
          width 100%
          vertical-align top
          .item-cate
            float left
            width 2.333rem
            a
              width: 1.92rem;
              height: 1.92rem
              display inline-block
              img
                width: 100%
                height: 100%
                display block
            span
              height: .96rem;
              font-size: .32rem;
              text-align: center;
              line-height: .48rem;
              display: block;
              color: #333

</style>
