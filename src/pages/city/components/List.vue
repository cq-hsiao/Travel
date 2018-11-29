<template>

  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
              <div class="button-wrapper">
                  <div class="button">{{this.currentCity}}</div>
              </div>
          </div>
      </div>
      <div class="area" ref="hot">
        <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
              <div class="button-wrapper"  v-for="item of hot" :key="item.id"  @click="handleCityClick(item.name)">
                <div class="button">{{item.name}}</div>
              </div>
          </div>
      </div>
      <div class="area"
           v-if="key != 'hot'"
           v-for="(item,key,index) of cities"
           :key="key"
           :ref="key">
        <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
              <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id"  @click="handleCityClick(innerItem.name)"> {{innerItem.name}}</div>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      scrollY: 0,
      currentIndex: 0,
      letters: []
    }
  },
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String,
    allLetter: Array
  },
  mounted () {
    console.log(this.letters)
    this.touch = {}
    // 初始化 better-scroll 必须要等 dom 加载完毕
    setTimeout(() => {
      this._initSrcoll()
  }, 20)
  },
  computed: {
          ...mapState({
            currentCity: 'city'
          })
  },
  methods: {
    _initSrcoll () {
      // console.log('didi')
      this.scroll = new Bscroll(this.$refs.wrapper, {
        probeType: 3,
        click: true
      })

      this.scroll.on('scroll', (pos) => {
        this.scrollY = pos.y
    })
    },
    _calculateHeight () {
      this.listHeight = []
      const list = this.letters
      console.log(this.letters)
      let height = 0
      this.listHeight.push(height)
      console.log(list.length)
      for (let i = 0; i < list.length; i++) {
        let item = list[i]
        if(item == 'hot') {
          height += this.$refs[item].clientHeight + 78
        } else {
          height += this.$refs[item][0].clientHeight
        }
        this.listHeight.push(height)
      }
      console.log(this.listHeight)
    },
    handleCityClick (city) {
//      alert(city)
//      this.$store.dispatch('changeCity',city)
//      console.log(this)
//      this.$store.commit('changeCity',city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity']) //Mutation映射到组件的方法
  },
//  mounted () {
//    this.scroll = new Bscroll(this.$refs.wrapper)
//  },
  watch: {
    letter () {
//      console.log(this.$refs[this.letter])
      if(this.letter == 'hot') {
        const element = this.$refs['hot']
        this.scroll.scrollToElement(element)
      } else {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }

    },
    allLetter () {
      this.letters = this.allLetter
      this._calculateHeight()
    },
    scrollY (newVal) {
      // 向下滑动的时候 newVal 是一个负数，所以当 newVal > 0 时，currentIndex 直接为 0
      if (newVal > 0) {
        this.currentIndex = 0
        return
      }
      // 计算 currentIndex 的值
      for (let i = 0; i < this.listHeight.length - 1; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]

        if (-newVal >= height1 && -newVal < height2) {
          this.currentIndex = i
          console.log(this.letters[i])
          this.$emit('currentIndex', this.currentIndex)
//          console.log(this.letters[i])
          return
        }
      }
      // 当超 -newVal > 最后一个高度的时候
      // 因为 this.listHeight 有头尾，所以需要 - 2
      this.currentIndex = this.listHeight.length - 2
      console.log(this.currentIndex)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
     border-color: #ccc
    &:after
     border-color: #ccc
  .border-bottom
    &:before
     border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .64rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem

</style>
