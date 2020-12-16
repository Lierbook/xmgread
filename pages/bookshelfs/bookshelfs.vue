<template>
	<view class="content">

		<view class="">
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
				p1:1
			}
		},
		onLoad(options) {
			this.bookId = options.id
			console.log(options.id)
			this.getnewsBooks()
			

		},
		onReady() {
			this.getTitle()
		},
		methods: {
			async getnewsBooks() {
				const res = await myRequestGet("api/wechat/book/"+this.bookId +
					"/"+this.p1+"?bookId=12148825&chapterId=1&usr=j32943801&ku=j32943801&kt=f49d36e232ded253d1b48132183b66eb")

				console.log(res)
				this.bookss = res.body


			},
			　
			getTitle() {
				uni.setNavigationBarTitle({
					title: `${bookss.bookInfo.bookName}}`
				});
			},
			goPreChapter(){
				this.p1--;
				this.getnewsBooks()
				
			},
			goNextChapter(){
				this.p1++;
				this.getnewsBooks()
			
			},
			getMulv(item){
				uni.navigateTo({
					url:`/pages/mulv/mulv?id=${this.bookId}`
					
				})
			}

		}
	}
</script>

<style lang="scss">
	.progress-box{
		width: 100%;
		height: 60px;
		display: flex;
		text{
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
			padding: 3px;
			
		}
	}
</style>
