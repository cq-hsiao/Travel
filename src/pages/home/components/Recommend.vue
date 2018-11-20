<template>
    <div class="title">
        <div class="border"></div>
        <div class="my-group-title-img">
            <img class="mp-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" />
            <span class="mp-title">猜你喜欢</span>
        </div>
        <ul class="mp-like-list">
            <li class="mp-border-bottom" v-for="item of list" :key="item.id">
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data: function () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    text-indent: .2rem
    .border
      background: #eee
      width:100%
      height:0.2rem
  .my-group-title-img
    padding:0.24rem 0 .26rem
    .mp-title-img
      display: inline-block
      overflow: hidden
      width: .3rem
      height: .3rem
      vertical-align: top
    .mp-title
      height: .44rem
      color: #212121
      font-size: .32rem
      line-height: .44rem
  .mp-like-list
    margin-left:.24rem
    list-style:none
    .mp-border-bottom
      position: relative
      display: flex
      overflow: hidden
      padding: .2rem 0
      .item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
      .item-info
        flex: 1
        padding: .1rem
        min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        margin-left: .2rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
