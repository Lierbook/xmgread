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
				<view class="desc"><text>{{desc}}</text></view>
				<view class="Tag">
					<view class="tag" v-for="tag in bookstag">{{tag}}</view>
					
					
				</view>
			</view>


			<view class="catalogue">
				<text class="list">目录</text>
				<view class="situation">
					<text class="state2">{{completeState}}</text>
					<text class="number">共{{chapterCount}}章</text>
				</view>
			</view>
		</view>
		<view class="Comment">
			<text class="hotCom">热评</text>
			<view class="comBox1">
				<view class="comment">
					<image :src="commentList[0].avatar" class="person"></image>
					<view class="comPer">{{commentList[0].nick}}</view>
				</view>
				<view class="comCon">{{commentList[0].content}}</view>
			</view>
			<view class="comBox2">
				<view class="comment">
					<image :src="commentList[1].avatar" class="person"></image>
					<view class="comPer">{{commentList[1].nick}}</view>
				</view>
				<view class="comCon">{{commentList[1].content}}</view>
			</view>
			<view class="comBox3">
				<view class="comment">
					<image :src="commentList[2].avatar" class="person"></image>
					<view class="comPer">{{commentList[2].nick}}</view>
				</view>
				<view class="comCon">{{commentList[2].content}}</view>
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
				<view class="bookbox">
					<image :src="newBooksRecommend[0].picUrl" mode="" class="pho1"></image>
					<view class="tit"><text>{{newBooksRecommend[0].bookName}}</text></view>
				</view>
				<view class="bookbox">
					<image :src="newBooksRecommend[1].picUrl" mode="" class="pho1"></image>
					<view class="tit"><text>{{newBooksRecommend[1].bookName}}</text></view>
				</view>
				<view class="bookbox">
					<image :src="newBooksRecommend[2].picUrl" mode="" class="pho1"></image>
					<view class="tit"><text>{{newBooksRecommend[2].bookName}}</text></view>
				</view>
			</view>
		</view>
		<view class="read">
					<view class="left">
						<view class="Share">
							<image src="../../static/tabbar/微信图片_20201216183815.png" class="weChat"></image>
							<text class="share">分享给好友</text>
						</view>
						<view class="bookrack">
							<image src="../../static/tabbar/书架图片_20201216183829.png" class="bookshelf"></image>
							<text class="add">加入书架</text>
						</view>
					</view>
					<view class="readNow">立即阅读</view>
				</view>

	</view>

</template>

<script>
	export default {
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
				detailList: [],
				commentList: [],
				newBooksRecommend: [],
			}
		},
		onLoad(options) {
					console.log(options.bookId);
					this.bookId=options.bookId
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
			onReady: function(){
				uni.request({
					url: 'https://wechat.idejian.com/api/wechat/book/' + this.bookId,
					success: (res) => {
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
						const bookstag = res.data.body.bookInfo.tag;
						this.bookstag = bookstag;
						// console.log(tag);
						// console.log(tag[0]);
						/* var newTag =tag.filter((index)=>{
							return index <3
						})
						console.log(newTag); */
						//评论
						const commentList = res.data.body.commentList;
						this.commentList = commentList;
						console.log(commentList)
						console.log(commentList[0].avatar);
						console.log(commentList[0].nick);
						console.log(commentList[0].content);
						//书友还读过
						const newBooksRecommend = res.data.body.newBooksRecommend;
						this.newBooksRecommend = newBooksRecommend;
						console.log(newBooksRecommend[0].bookName);
						console.log(newBooksRecommend[0].picUrl);

					}
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
			}
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
				margin-left: 200rpx;
				margin-top: 30rpx;
				width: 200rpx;
				height: 240rpx;
			}
		}

		.introduction {
			width: 100%;
			height: 256rpx;
			background-color: #F4F4F4;

			.description {
				width: 90%;
				height: 200rpx;
				color: #808080;
				margin-left: 40rpx;
				font-size: 28rpx;
				letter-spacing: 3rpx;
				border-bottom: 1rpx solid #C8C7CC;

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
					margin-top: 20rpx;
					margin-left: -20rpx;
					// background-color: #007AFF;
					

					
					.tag {
						width: 120rpx;
						height: 46rpx;
						border: 1rpx solid #DEDEDE;
						border-radius: 20rpx;
						background-color: #DEDEDE;
						color: #808080;
						font-size: 24rpx;
						line-height: 46rpx;
						text-align: center;
						margin-left: 20rpx;
						
					}
				}
			}

			.catalogue {
				display: flex;
				flex-direction: row;
				width: 100%;
				height: 56rpx;
				justify-content: space-around;

				// flex-wrap: wrap;
				.list {
					color: #000;
					line-height: 56rpx;
					text-align: center;
					font-size: 40rpx;
					font-weight: bold;
					padding-right: 100rpx;
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
		}

		.Comment {
			width: 100%;
			height: 700rpx;
			background-color: #F4F4F4;
			margin-top: 10rpx;
			border-bottom: 1rpx solid #C8C7CC;

			.hotCom {
				color: #000;
				font-size: 40rpx;
				font-weight: bold;
				margin-left: 40rpx;
			}

			.comment {
				width: 300rpx;
				height: 60rpx;
				margin-top: 30rpx;
				margin-left: 35rpx;
				// background-color: #000;
				display: flex;
				flex-direction: row;
				justify-content: space-around;

				.person {
					width: 50rpx;
					height: 50rpx;
					border: 1rpx solid #FFFFFF;
					border-radius: 50%;
					padding-left: 0rpx;
				}

				.comPer {
					width: 200rpx;
					height: 50rpx;
					color: #808080;
					font-size: 30rpx;
				}
			}

			.comCon {
				width: 90%;
				height: 110rpx;
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
			height: 550rpx;
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
				height: 350rpx;
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
						height: 70rpx;
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

		
		
		.read {
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					width: 100%;
					height: 100rpx;
					background-color: #F4F4F4;
					//将底部固定且不影响滚动
					position: fixed;
					bottom: 0;
					left: 0;
					bottom: var(--window-bottom, 0);
		
					.left {
						width: 50%;
						display: flex;
						flex-direction: row;
						justify-content: space-around;
		
						.Share {
							width: 50%;
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							
		
							.weChat {
								width: 100rpx;
								height: 100rpx;
								margin-left: 40rpx;
							}
						}
		
						.bookrack {
							width: 50%;
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							
		
							.bookshelf {
								width: 65rpx;
								height: 65rpx;
								margin-left: 50rpx;
							}
						}
		
						.share,
						.add {
							width: 100%;
							margin-left: 40rpx;
							color: #000;
							font-size: 24rpx;
							// margin-top: 60rpx;
							// padding-left: 20rpx;
						}
		
						
		
					}
		
					.readNow {
						width: 50%;
						color: #FAFAFA;
						line-height: 100rpx;
						font-size: 38rpx;
						background-color: #EE0000;
						text-align: center;
					}
				}
		



	}
</style>
