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
    </div>

</template>

<script>
export default {
  name: 'City'
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
