<template>
	<view class="content">
		<view class="wz">
			<rich-text :nodes="bookss.content"></rich-text>
		</view>

		<view class="progress-box">
			<text @click="goPreChapter">上一章</text>
			<text @click="getMulv(item)">目录</text>
			<text @click="goNextChapter">下一章</text>
		</view>


	</view>
</template>

<script>
	import myRequestGet from "../../utils/getbooks.js"
	export default {
		data() {
			return {
				bookId: "",
				bookss: [],
				p1: 1,
				url: "",
				
			}
		},
		onLoad(options) {
			this.bookId = options.id
			this.url = options.url
			this.getnewsBooks()
			
	
		},
		onReady() {
			this.getTitle()
		},
		methods: {
			async getnewsBooks() {
				const res = await myRequestGet("api/wechat/book/" + this.bookId +
					"/" + this.p1 + "?bookId=12148825&chapterId=1&usr=j32943801&ku=j32943801&kt=f49d36e232ded253d1b48132183b66eb")

				console.log(res)
				this.bookss = res.body

			},

			getTitle() {
				uni.setNavigationBarTitle({
					title: `${bookss.bookInfo.bookName}}`
				});
			},
			goPreChapter() {
				this.p1--;
				this.getnewsBooks()

			},
			goNextChapter() {
				this.p1++;
				this.getnewsBooks()

			},
			getMulv(item) {
				uni.navigateTo({
					url: `/pages/mulv/mulv?id=${this.bookId}`

				})
			},

			

		}
	}
</script>

<style lang="scss">
	.content{
		background: rgba(199,237,204,255);
	}
	.progress-box {
		width: 100%;
		height: 60px;
		display: flex;

		text {
			flex: 1;
			display: inline-block;
			width: 70px;
			height: 25px;
			margin: 10px 10px;
			border: 3rpx solid black;
			text-align: center;
			border-radius: 20px;
			font-size: 35rpx;
			color: #777777;
			padding: 8px;

		}
	}

	.wz {
		font-size: 18px;
		padding: 8px;

	}
</style>
