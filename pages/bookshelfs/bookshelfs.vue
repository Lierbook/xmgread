<template>
	<view class="content">
		<view class="wz">
			<!--#ifdef MP-WEIXIN-->
			<rich-text :nodes="bookss.content"></rich-text>
			<!--#endif-->

			<!--#ifdef H5-->
			<view v-html="bookss.content" class="sss" style=""></view>
			<!--#endif-->

			<!--#ifdef MP-ALIPAY-->
			<rich-text :nodes="bookss.content"></rich-text>
			<!--#endif-->
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
		props: ["url"],
		data() {
			return {
				bookId: "",
				bookss: [],
				p1: 1,
				text: "",
				m: "",
				index:""


			}
		},

		onLoad(options) {
			this.m = options.m
			
			this.bookId = options.id
			if (this.m == 1) {
				this.getnewsBooks()
				
			} else {
				this.index = options.index
				this.text = this.url.slice(0, 15)
				this.getUrl()
				
			}
			this.sssss()


		},





		methods: {
			sssss: function() {
				this.text = this.url.slice(0, 15)
				this.index = this.index
				console.log(this.text,this.index)
			},
			async getnewsBooks() {
				const res = await myRequestGet("api/wechat/book/" + this.bookId +
					"/" + this.p1 + "?bookId=12148825&chapterId=1&usr=j32943801&ku=j32943801&kt=f49d36e232ded253d1b48132183b66eb")
				console.log(res, "11111111111111111111111")
				this.bookss = res.body

			},
			async getUrl() {
				const res = await myRequestGet("api/wechat" + this.text +this.index + "?bookId=12148825&chapterId=1&usr=j32943801&ku=j32943801&kt=f49d36e232ded253d1b48132183b66eb")
				console.log(res)
				this.bookss = res.body
			},

			goPreChapter() {
				this.p1--;
				this.getnewsBooks()
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})

			},
			goNextChapter() {
				this.p1++;
				this.getnewsBooks()
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})

			},
			getMulv(item) {
				uni.navigateTo({
					url: `/pages/mulv/mulv?id=${this.bookId}`

				})
			},

			tapscroll: function() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
			},



		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background: rgba(199, 237, 204, 255);
		padding: 5px;
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
		padding: 15px;

	}

	/deep/.zhangyue-tablebody {
		font-weight: normal;
		zy-fontsize-adjust: fixed;
		width: 100%;
		height: 100%;
		padding-left: 7%;
		padding-right: 7%;
		border: 1px solid black;
	}

	/deep/.biaoti {
		font-size: 20px;
		font-weight: bold;
		line-height: 1.2em;
		border-bottom: 1rpx solid #F1F1F1;
		width: 100%;
	}

	/deep/.kaiti {
		font-size: 12px;
		font-weight: normal;
		line-height: 2.6em;
	}

	/deep/.copyright {
		font-size: 10px;

	}

	/deep/.lantinghei {
		font-size: 10px;
		line-height: 1.7em;
	}

	/deep/.dotStyle2 {
		padding-left: 0.2em;
		padding-right: 0.2em;
		font-weight: bold;
		font-size: 12px;
	}

	/deep/.text-title-1 {
		font-size: 20px;
		line-height: 1.2em;
		font-weight: bold;
		margin-top: 10%;
		text-align: center;
		margin-bottom: 1.3em;
		zy-text-type: main-body;
	}

	/deep/.bodytext {
		zy-text-type: main-body;
		font-size: 18px;
		zy-text-indent: auto;
		text-indent: 2em;
		margin-bottom: 3px;
	}
</style>
