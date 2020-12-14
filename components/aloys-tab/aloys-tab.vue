<template>
  <view style="width: 100%; height: 100%;">
    <view class="tabs">
      <view v-for="(tab, index) in tabs" class="tab-item" :class="current==index&&'active'" @click="current = index">
      {{tab.title}}
      </view>
    </view>
    <swiper :current="current" class="swiper-box" @change="onChange">
        <swiper-item v-for="(item ,index) in tabs" :key="index">
          <scroll-view scroll-y="true" style="height: 100%;">
            <!-- #ifdef MP -->
            <slot name="{{'content' + index}}"></slot>    
            <!-- #endif -->
            <!-- #ifndef MP -->
            <slot :name="'content'+index"></slot>
            <!-- #endif -->
          </scroll-view>
        </swiper-item>
    </swiper>
  </view>
</template>

<script>
	export default {
    name: 'swiperTab',
    props: {
      currentTab: {
        type: Number,
        default: 0
      },
      tabs: {
        type: Array,
        default: []
      }
    },
		data() {
			return {
				current: this.currentTab
			};
		},
    methods: {
      onChange(e) {
        this.current = e.detail.current;
        this.$emit('change', e.detail.current);
      }
    }
	}
</script>
<style>
swiper-tab{
  display: block;
  height: 100%;
}
</style>
<style lang="scss" scoped>
.tabs{
  width: 750rpx;
  height: 75rpx;
  display: flex;
  .tab-item {
    flex: 1;
    text-align: center;
    color: grey;
    line-height: 73rpx;
    font-size: 32rpx;
    height: 100%;
    box-sizing: border-box;
    &.active{
      color: red;
	  font-weight:bold;
	  
      border-bottom: 2rpx solid red;
    }
  }
}
.swiper-box{
  width: 100%;
  height: calc(100% - 75rpx);
  overflow: auto;
}
</style>
