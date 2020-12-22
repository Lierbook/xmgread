<template>
	<view class="all">

		<view class="box" v-for="(item, index) in RankingList" :key="index"  @click="goDetail(item.bookId)">

			<view class="books">
				<image class="img" :src="item.picUrl" mode="widthFix" style="width: 150rpx"></image>
				<view class="content">
					<view class="tit">{{item.bookName}}</view>
					<text class="num">{{index+1}}</text>
					<view class="info">
						<view class="desc">{{item.desc}}</view>
						<view class="author">{{item.author}}</view>
						<view class="category">{{item.category}}</view>
					</view>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	import {
		myRequestGet
	} from '@/utils/zzgrequest.js'


	export default {
		data() {
			return {
				RankingList: [],
				//RankingListTwo: [],
			}
		},
		created() {
			this.getRankingList();
			//this.getRankingListTwo();
		},
		methods: {
			async getRankingList() {
				const res = await myRequestGet('/api/wechat/subrank?sectionId=37989&page=1')
				this.RankingList = res.body.books
				console.log(this.RankingList)
			},
			
			goDetail(id) {
				console.log("111111100000000000")
				uni.navigateTo({
					url: '../../pages/bookdetail/bookdetail?id=' + id
				})
			}
		},

		components: {

		}
	}
</script>

<style lang="scss" scoped>
	.all {}

	.books {
		width: 100%;
		height: 240rpx;
	}

	.img {
		float: left;
	}

	.content {
		width: 550rpx;
		float: left;
		//间距
		margin-left: 22rpx;
		margin-top: 5rpx;
		text-align: left;
	}
	
	.tit{
		display: inline-block;
		font-size: 30rpx;
	}
	
	.num{
		float: right;
		color: red;
	}
	
	.info {
		margin-top: 10rpx;
	}

	.desc {
		font-size: 26rpx;
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
		//间距
		margin-top: 55rpx;
		display: inline-block;
	}

	.category {
		border: 1px solid gray;
		float: right;
		color: gray;
		font-size: 25rpx;
		padding: 2rpx 15rpx;
		margin-top: 55rpx;
	}
</style>
