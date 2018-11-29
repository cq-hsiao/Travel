<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item,index) of letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick($event,index)"
      :class="{ active: isActive == index }"
      v-if="item != 'hot'">
      {{item}}
    </li>
    <li class="item"
        v-else-if="item == 'hot'"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick($event,index)"
        :class="{ active: isActive == index }">热</li>
    <!--.prevent 事件修饰符，阻止touchstart默认行为-->
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object,
    CurrentIndex:Number
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      this.$emit('allLetter', letters)
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
      isActive: -1
    }
  },
  updated () {
//    console.log(this.$refs)
    this.startY = this.$refs['hot'].offsetTop
  },
  methods: {
    handleLetterClick (e,index) {
//      console.log(e)
//      console.log(index)
      this.isActive = index
      if(index == 0) {
        this.$emit('change', 'hot')
      } else {
        this.$emit('change', e.target.innerText)
      }
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
//        const startY = this.$refs['A'][0].offsetTop
//        console.log(startY)
//        const touchY = e.touches[0].clientY
//        console.log(touchY)
        //函数节流
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.isActive = index
//            console.log(this.letters[index])
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  watch: {
    CurrentIndex () {
      console.log(this.CurrentIndex)
      this.isActive = this.CurrentIndex
      console.log(this.isActive)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
    .active
      color:#f55
</style>
