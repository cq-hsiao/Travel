<template>
    <div>
        <div class="header">
            城市选择
            <router-link to="/">
                <div class="iconfont header-back">&#xe624;</div>
            </router-link>
        </div>
        <!--搜索框-->
        <div class="search">
            <input  class="search-input" type="text" placeholder="输入城市名或拼音" />
        </div>
        <!--城市列表-->
        <city-list
                :cities="cities"
                :hot="hotCities"
                :letter="letter"></city-list>
        <city-alphabet
                :cities="cities"
                @change="handleLetterChange"
        ></city-alphabet>
    </div>

</template>

<script>
import axios from 'axios'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
              .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        console.log(res.data)
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff

  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
</style>
