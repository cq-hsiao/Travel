<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,count) of pages" :key="count">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" v-bind:src="item.imgUrl" />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <!--<div class="icon">-->
            <!--<div class="icon-img">-->
                <!--<img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />-->
            <!--</div>-->
            <!--<p class="icon-desc">热门景点</p>-->
        <!--</div>-->
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 58%
  .icons >>> .swiper-pagination-bullet
    width:6px
    height:6px
  .icons >>> .swiper-pagination-bullet-active
    background: rgba(0,175,190,.8)
  .icons
    height:0
    padding-bottom:58%
    display:block
    .icon
      position:relative
      float:left
      overflow:hidden
      width:25%
      height:0
      padding-bottom:25%
      .icon-img
        position:absolute
        top:0
        left:0
        right:0
        bottom:0.44rem
        box-sizing:border-box
        padding:0.1rem
        .icon-img-content
          height:100%
          display: block
          margin: 0 auto
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
