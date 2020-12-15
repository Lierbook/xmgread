<template>
	<view>
		<uni-list>
			<uni-list-item v-for="item in RankingList" :key="item.bookId" :thumb="item.picUrl" thumb-size="lg">
				<view slot="body" class="item slot-box slot-text" @click="goDetail(item)">
					<view class="tit">{{item.bookName}}</view>
					<view class="info">
						<view class="desc">{{item.desc}}</view>
						<text class="author">{{item.author}}</text>
						<text class="category">{{item.category}}</text>
					</view>
				</view>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import {
		myRequestGet
	} from '@/utils/zgrequest.js'
	import uniList from "@/components/uni-ui/uni-list/uni-list.vue";
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"

	export default {
		data() {
			return {
				RankingList: []
			}
		},
		onLoad() {
			this.getRankingList();
		},
		methods: {
			async getRankingList() {
				const res = await myRequestGet('/api/wechat/subrank?sectionId=37988&page=1')
				this.RankingList = res.body.books
				console.log(this.RankingList)
			}
		},
		components: {
			uniList,
			uniListItem
		}
	}
</script>

<style>
	.desc {
		font-size: 32rpx;
		color: #777777;
		/* 超出部分隐藏 */
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.author {
		color: #777777;
		font-size: 30rpx;
	}

	.category {
		border: 1px solid gray;
		float: right;
		margin-right: 50rpx;
		color: gray;
		font-size: 25rpx;
		padding: 2rpx 15rpx;
	}
</style>
