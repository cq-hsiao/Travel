<template>
    <div class="title">
        <div class="border"></div>
        <div class="my-group-title-img">
            <img class="mp-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" />
            <span class="mp-title">猜你喜欢</span>
        </div>
        <ul class="mp-like-list">
            <li class="mp-border-bottom" v-for="item of recommendList" :key="item.id">
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
  data: function () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
        title: '故宫',
        desc: '东方宫殿建筑代表，世界宫殿建筑典范'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
        title: '南山滑雪场',
        desc: '北京专业级滑雪圣地'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg',
        title: '天安门广场',
        desc: '我爱北京天安门，天安门上太阳升'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg',
        title: '水立方',
        desc: '中国的荣耀，阳光下的晶莹水滴'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg',
        title: '温都水城养生馆',
        desc: '各种亚热带植物掩映其间仿佛置身热带雨林'
      }]
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
