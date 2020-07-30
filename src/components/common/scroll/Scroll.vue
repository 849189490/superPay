<template>
  <div class="wrapper" ref="wrapper">
		<div class="content">
			
    <slot></slot>
		</div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

	export default {
		name: "Scroll",
    props: {
			//决定是否监听滚动位置
		  probeType: {
		    type: Number,
        default: 3
      },
      data: {
		    type: Array,
        default: () => {
          return []
        }
      },
      pullUpLoad: {
		    type: Boolean,
        default: true
      },
			pulldown: {
				type:Boolean,
				default: false
			}
    },
    data() {
		  return {
		    scroll: {}
      }
    },
    mounted() {
		  setTimeout(this.__initScroll, 20)
    },
    methods: {
		  __initScroll() {
		    // 1.初始化BScroll对象
		    if (!this.$refs.wrapper) return
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: true,
          pullUpLoad: this.pullUpLoad
        })

        // 2.将监听事件回调/位置监听
        this.scroll.on('scroll', pos => {
          this.$emit('scroll', pos)
        })

        // 3.监听上拉到底部，上拉加载
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
				
				//4.下拉刷新
				this.scroll.on('touchEnd', pos => {
					if(pos.y > 50) {
						this.$emit('pullingDown')
					}
				})
      },
			//监听图片加载刷新可滑动区域
      refresh() {
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      },
			//监听下拉刷新结束
      finishPullUp() {
		    this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
      },
			//返回顶部实现
      scrollTo(x, y, time) {
		    this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
      },
			//获取Y轴位置
			getScrollY() {
				return this.scroll ? this.scroll.y : 0
			}
    },
    watch: {
		  data() {
        setTimeout(this.refresh, 20)
      }
    }
	}
</script>

<style scoped>

</style>
