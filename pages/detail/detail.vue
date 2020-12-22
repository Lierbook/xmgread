<template>
	<view class="book_detail">
		<view class="book_theme">
			<view class="book_name">
				<view><text class="title">{{bookname}}</text></view>
				<view class="information1">
					<view class="author">{{author}}</view>
					<view>|</view>
					<view class="type">{{category}}</view>
				</view>
				<view class="information2">
					<view class="words">{{wordCount}}</view>
					<view class="popularity">{{popularity}}</view>
				</view>
				<view class="score">
					<text>{{bookRating}}分</text>
				</view>
			</view>
			<image :src="picUrl" mode="" class="pho"></image>
		</view>
		<view class="introduction">
			<view class="description">
				<text :class="all">{{desc}}</text>
				<view class="Tag">
					<view class="tag" v-for="tag in bookstag" :key="index">{{tag}}</view>
				</view>
				<view @click="more" class="det">详情</view>
			</view>

		</view>
		<view class="catalogue">
			<text class="list">目录</text>
			<view class="situation">
				<text class="state2">{{completeState}}</text>
				<text class="number">共{{chapterCount}}章</text>
			</view>
		</view>
		<view class="Comment">
			<text class="hotCom">热评</text>
			<view class="nocomment" v-show="commentList[0]==null">
				抱歉，本书暂无评论
			</view>
			<view class="comBox1" v-for="comment in commentList" :key="index">
				<view class="comment">
					<image :src="comment.avatar" class="person"></image>
					<view class="comPer">{{comment.nick}}</view>
				</view>
				<view class="comCon">{{comment.content}}</view>
			</view>
		</view>
		<view class="others">
			<view class="recommendation">
				<text class="title">书友还读过</text>
				<view class="Change">
					<!-- <van-icon name="replay" /> -->
					<text class="change">换一换</text>
				</view>
			</view>
			<view class="otherBook">
				<view class="bookbox" v-for="newBooks in newBooksRecommend" :key="index" @click="goAbout(newBooks.bookId)">
					<image :src="newBooks.picUrl" mode="" class="pho1"></image>
					<view class="tit"><text>{{newBooks.bookName}}</text></view>
				</view>
			</view>
		</view>
		<view class="footer">
			<uni-goods-nav :fill="false" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>

	</view>
</template>
<script>
	import uniGoodsNav from '@/components/uni-ui/uni-goods-nav/uni-goods-nav.vue'
	export default {
		components: {
			uniGoodsNav
		},
		data() {
			return {
				bookId: '', //小说试验id
				dataObj: {},
				bookInfos: {},
				bookname: "",
				author: "",
				bookRating: "",
				category: "",
				chapterCount: "",
				completeState: "",
				desc: "",
				picUrl: '',
				popularity: "",
				bookstag: "",
				wordCount: "",
				avatar: "",
				nick: "",
				content: "",
				all: "desc",
				detailList: [],
				commentList: [],
				newBooksRecommend: [],

				options: [{
						icon: 'undo',
						text: '分享给好友'
					},
					{
						icon: 'star',
						text: '加入书架',
						info: 2
					}
				],
				buttonGroup: [{
					text: '立即阅读',
					backgroundColor: '#ffa200',
					color: '#fff'
				}]
			}
		},
		onLoad(options) {
			console.log(options.bookId);
			this.bookId = options.bookId
			// this.detail(options.bookId)
		},

		// created() {
		// 	// this.id = this.$mp.query.id;
		// 	this.getData();
		// },
		onReady: function() {
			// console.log(options);

			/* 获取小说详情数据
			async getBookDetails() {
				const res = await this.$myRequest({
					url: 'https://wechat.idejian.com/api/wechat/chuban',
				})
				this.bookdetail = res.data.body.data[1].books[0];
			} */

			//获取小说book_theme详情数据
			/* uni.request({
				url: 'https://wechat.idejian.com/api/wechat/chuban'+ this.id,
				success: (res) => {
					console.log(res);
					var bookthemelList = res.data.body;
					console.log(bookthemelList, "xxxxxxxxxx");
				this.bookthemelList = bookthemelList;
				},
			}); */
		},
		methods: {
			goAbout(bookId) {
				uni.navigateTo({
					url: '/pages/detail/detail?bookId=' + bookId,
				})
			},


			onReady: function() {
				uni.request({
					url: 'https://wechat.idejian.com/api/wechat/book/' + this.bookId,
					success: (res) => {
						console.log(res);
						const bookInfos = res.data.body;
						console.log(bookInfos, "xxxxxxxxxx");
						//书名
						const bookname = res.data.body.bookInfo.bookName;
						this.bookname = bookname;
						console.log(bookname);
						//作者
						const author = res.data.body.bookInfo.author;
						this.author = author;
						console.log(author);
						//评分
						const bookRating = res.data.body.bookInfo.bookRating;
						this.bookRating = bookRating;
						console.log(bookRating);
						//分类
						const category = res.data.body.bookInfo.category;
						this.category = category;
						console.log(category);
						//章数
						const chapterCount = res.data.body.bookInfo.chapterCount;
						this.chapterCount = chapterCount;
						console.log(chapterCount);
						//状态
						const completeState = res.data.body.bookInfo.completeState;
						this.completeState = completeState;
						console.log(completeState);
						//简介
						const desc = res.data.body.bookInfo.desc;
						this.desc = desc;
						console.log(desc);
						//封面
						const picUrl = res.data.body.bookInfo.picUrl;
						this.picUrl = picUrl;
						//人气
						const popularity = res.data.body.bookInfo.popularity[0] + res.data.body.bookInfo.popularity[1];
						this.popularity = popularity;
						console.log(popularity);
						//字数
						const wordCount = res.data.body.bookInfo.wordCount[0] + res.data.body.bookInfo.wordCount[1];
						this.wordCount = wordCount;
						console.log(wordCount);
						//标签
						const bookstag = res.data.body.bookInfo.tag.slice(0, 4);
						this.bookstag = bookstag;
						// console.log(tag);
						// console.log(tag[0]);
						/* var newTag =tag.filter((index)=>{
							return index <3
						})
						console.log(newTag); */
						//评论
						const commentList = res.data.body.commentList.slice(0, 3);
						this.commentList = commentList;
						// console.log(res.data.body.commentList[1]);
						//书友还读过
						const newBooksRecommend = res.data.body.newBooksRecommend;
						this.newBooksRecommend = newBooksRecommend;

					}
				})
			},
			//点击跳转页面
			goWeChatLogin() {
				uni.navigateTo({
					//跳转至微信一键登录页面
					url: "../weChatLogin/weChatLogin",
				})
			},

			//点击添加
			addBook() {
				let tmp = {
					bookId: this.bookId,
					cover: this.cover,
					title: this.dataObj.title
				};
				this.$store.commit('novel/ADD_BOOK', tmp);
			},
			more: function() {
				console.log("000000000000000000000")
				if (this.all == "desc") {
					this.all = ""
				} else(
					this.all = "desc"
				)
			},
		},

		onPullDownRefresh() {
			uni.stopPullDownRefresh();
			uni.hideNavigationBarLoading();
			this.getData();
		}
	}
</script>

<style lang="scss">
	/* 小说详情的样式 */
	.book_detail {
		display: flex;
		flex-direction: column;
		height: 400%;
		width: 100%;
		background-color: #EDEDED;

		.book_theme {
			display: flex;
			flex-direction: row;
			background-color: #8B8970;
			width: 100%;
			height: 300rpx;

			.book_name {
				width: 380rpx;
				color: #FAFAFA;
				font-size: 28rpx;
				margin-top: 50rpx;
				margin-left: 30rpx;

				.information1 {
					display: flex;
					margin-top: 10rpx;

					.author {
						padding-right: 15rpx;
					}

					.type {
						padding-left: 15rpx;
					}
				}

				.information2 {
					display: flex;
					margin-top: 10rpx;

					.words {
						padding-right: 15rpx;
					}

					.popularity {
						padding-left: 15rpx;
					}
				}

				.score {
					width: 80rpx;
					height: 36rpx;
					font-size: 22rpx;
					margin-top: 10rpx;
					line-height: 36rpx;
					text-align: center;
					border: 4rpx solid #FFFFFF;
				}

				.title {
					font-size: 32rpx;
					letter-spacing: 3rpx;
					font-weight: bold;
					margin-top: 10rpx;
				}
			}

			.pho {
				margin-left: 100rpx;
				margin-top: 30rpx;
				width: 200rpx;
				height: 240rpx;
			}
		}

		.introduction {
			width: 100%;
			// height: 256rpx;
			background-color: #F4F4F4;

			.description {
				width: 90%;
				// height: 200rpx;
				color: #808080;
				margin-left: 40rpx;
				font-size: 28rpx;
				letter-spacing: 3rpx;

				.det {
					display: inline-block;
					float: right;
					margin-right: 15rpx;
					margin-top: -50rpx;
				}

				.desc {
					// 溢出用省略号显示
					text-overflow: ellipsis;
					// 超出的文本隐藏
					overflow: hidden;
					// 将对象作为弹性伸缩盒子模型显示。
					display: -webkit-box;
					// 从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
					-webkit-box-orient: vertical;
					//指定显示多少行
					-webkit-line-clamp: 3;
				}

				.Tag {
					display: flex;
					flex-direction: row;
					width: 100%;
					height: 46rpx;
					margin-bottom: 10rpx;
					margin-left: -20rpx;
					// background-color: #F0AD4E;

					.tag {
						width: 115rpx;
						height: 46rpx;
						border: 1rpx solid #DEDEDE;
						border-radius: 20rpx;
						background-color: #DEDEDE;
						color: #808080;
						font-size: 22rpx;
						line-height: 46rpx;
						text-align: center;
						margin-left: 20rpx;
					}
				}
			}
		}

		.catalogue {
			display: flex;
			flex-direction: row;
			width: 100%;
			height: 56rpx;
			justify-content: space-around;
			background-color: #F4F4F4;
			border-top: 1rpx solid #C8C7CC;

			// flex-wrap: wrap;
			.list {
				color: #000;
				line-height: 56rpx;
				text-align: center;
				font-size: 40rpx;
				font-weight: bold;
				padding-right: 150rpx;
			}

			.situation {
				line-height: 56rpx;
				text-align: center;
				padding-left: 200rpx;
				font-size: 32rpx;

				.state2 {
					color: #FF0000;
				}

				.number {
					padding-left: 20rpx;
					color: #0D0D0D;
				}
			}
		}

		.Comment {
			width: 100%;
			height: 750rpx;
			background-color: #F4F4F4;
			margin-top: 10rpx;
			border-bottom: 1rpx solid #C8C7CC;

			.hotCom {
				color: #000;
				font-size: 40rpx;
				font-weight: bold;
				margin-left: 35rpx;
			}

			.nocomment {
				margin: 200rpx auto;
				color: #C0C0C0;
				text-align: center;
			}

			.comment {
				width: 630rpx;
				height: 60rpx;
				margin-top: 30rpx;
				margin-left: 35rpx;
				display: flex;
				flex-direction: row;
				// justify-content: space-around;

				.person {
					width: 50rpx;
					height: 50rpx;
					border: 1rpx solid #FFFFFF;
					border-radius: 50%;
				}

				.comPer {
					width: 430rpx;
					height: 50rpx;
					color: #808080;
					font-size: 30rpx;
					margin-left: 10rpx;
					margin-top: 5rpx;
				}
			}

			.comCon {
				width: 90%;
				height: 120rpx;
				font-size: 28rpx;
				letter-spacing: 2rpx;
				margin-left: 40rpx;
				// 溢出不换行
				// white-space: nowrap; 
				// 溢出用省略号显示
				text-overflow: ellipsis;
				// 超出的文本隐藏
				overflow: hidden;
				// 将对象作为弹性伸缩盒子模型显示。
				display: -webkit-box;
				// 从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
				-webkit-box-orient: vertical;
				//指定显示多少行
				-webkit-line-clamp: 3;
			}
		}

		.others {
			width: 100%;
			height: 570rpx;
			background-color: #F4F4F4;

			.recommendation {
				display: flex;
				flex-direction: row;
				width: 100%;
				height: 70rpx;
				justify-content: space-around;
				margin-top: 10rpx;

				.title {
					color: #000;
					font-size: 40rpx;
					font-weight: bold;
					// display: block;
					// margin-left: 20rpx;
					// margin-top: 20rpx;
					padding-right: 220rpx;
				}

				.Change {
					// width: 100rpx;
					// height: 50rpx;
					padding-left: 120rpx;

					.change {
						color: #808080;
						font-size: 24rpx;
					}
				}
			}

			.otherBook {
				// margin-top: 15rpx;
				width: 100%;
				height: 370rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				// background-color: #007AFF;

				.bookbox {
					width: 200rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;

					.pho1 {
						width: 200rpx;
						height: 240rpx;
						// background-color: #007AFF;
					}

					.tit {
						width: 190rpx;
						height: 75rpx;
						font-size: 28rpx;
						letter-spacing: 3rpx;
						font-weight: bold;
						// 溢出用省略号显示
						text-overflow: ellipsis;
						// 超出的文本隐藏
						overflow: hidden;
						// 将对象作为弹性伸缩盒子模型显示。
						display: -webkit-box;
						// 从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
						-webkit-box-orient: vertical;
						//指定显示多少行
						-webkit-line-clamp: 2;
						// margin-top: 10rpx;
						// background-color: #4CD964; 
					}
				}

			}
		}
		.footer{
			position: fixed;
			width: 100%;
			left: 0;
			bottom: 0;
		}
	}
</style>
