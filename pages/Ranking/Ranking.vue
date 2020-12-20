<template>
	<view class="content">
		<aloys-tab :tabs="tabs" @change="onTabChange">
			<view slot="content0" class="xxx">
				<manRanking></manRanking>
			</view>
			<view slot="content1" class="xxx">
				<womanRanking></womanRanking>
			</view>
		</aloys-tab>
	</view>
</template>

<script>
	import {
		myRequestGet
	} from '@/utils/zgrequest.js'

	import aloysTab from "@/components/aloys-tab/aloys-tab.vue"

	import manRanking from '../../components/rankinglist/man-ranking.vue' //man-ranking -> manRanking
	import womanRanking from "@/components/rankinglist/woman-ranking.vue" //woman-ranking -> womanRanking

	export default {
		components: {
			aloysTab,
			manRanking,
			womanRanking
		},
		data() {
			return {
				tabs: [{
					title: '男生'
				}, {
					title: '女生'
				}]
			}
		},
		onLoad() {

		},
		methods: {
			onTabChange(index) {
				uni.showToast({
					title: '切换至tab：' + index
				})
			}
		}
	}
</script>

<!-- scoped(实现组件的私有化，不对全局造成样式污染，表示当前style属性只属于当前模块) -->
<style scoped>
	page {
		height: auto;
	}

	.content {
		height: 1600rpx;
	}

	.xxx {
		font-size: 42rpx;
		font-weight: bold;
		padding: 100rpx 0;
		text-align: center;
		width: 100%;
		height: 1000rpx;
	}

	man-ranking {
		width: 500rpx;
		height: 1000rpx;
	}
</style>
