<template>
	<!--小说描述-->
	<div class="books-desc-div">
		<header class="flex header">
			<image class='bg' :src="picUrl" mode=""></image>
			<div class="img-div">
				<image :src="picUrl" mode=""></image>
			</div>
			<div class="right-div">
				<p class="title">{{dataObj.title}}</p>
				<p class="author-info">
					<span class="author">{{dataObj.author}}</span>
					<span class="type">{{dataObj.cat||dataObj.majorCate}}</span>
				</p>
				<p class="word">{{dataObj.wordCount}}字</p>
				<p class="rate" v-if="dataObj.rating">评分：{{dataObj.rating.score}}</p>
			</div>
		</header>

		<!--简介-->
		<div class="borderBox longintro">
			<p class="title">简介</p>
			<div class="flex tags-div" v-if="dataObj.tags">
				<li class="list" v-for="(item,i) in dataObj.tags" :key='i'>
					{{item}}
				</li>
			</div>
			<div class="content">{{dataObj.longIntro}}</div>
		</div>

		<div class="items-div">
			<div class="borderBox flex item" @click.stop="jumpPage('/pages/functions/novel/chapters?id='+id)">
				<span class="name">查看章节</span>
				<i class="iconfont icon-xiangyou"></i>
			</div>
		</div>

		<div class="btn add" @click.stop="addBook">加入书架</div>
	</div>
</template>

<script>
	// import {get,showToast} from '@/utils/index';
	// import {getBookDescUrl} from '@/config';
	export default {
		data() {
			return {
				id: '11489144', //小说id
				dataObj: {},
				bookInfos: {},
				bookname: "",
				author: "",
				bookRating: "",
				category: "",
				chapterCount: "",
				completeState: "",
				desc: "",
				picUrl: "",
				popularity: "",
				wordCount: "",
				tag:[],
				commentList:[],
				newBooksRecommend:[],
			}
		},
		created() {
			// this.id = this.$mp.query.id;
			this.getData();
		},
		methods: {
			//设置该小说
			jumpPage(url) {
				if (url && typeof(url) == 'string') {
					uni.navigateTo({
						url: url,
						animationType: 'zoom-out'
					});
				}
			},
			async getData() {
				// if(!this.id){
				// 	return;
				// };
				// let url = 'https://wechat.idejian.com/api/wechat/book/'+this.id;
				// 11625227
				// get(url, {})
				// .then((res)=>{
				// 	res.cover = decodeURIComponent(res.cover).replace('/agent/', '');
				// 	this.dataObj = res;
				// });
				
				await uni.request({
					url: 'https://wechat.idejian.com/api/wechat/book/' + this.id,
					success: (res) => {
						const bookInfos = res.data.body;
						console.log(bookInfos,"xxxxxxxxxx");
						//书名
						const bookname = res.data.body.bookInfo.bookName;
						console.log(bookname);
						//作者
						const author = res.data.body.bookInfo.author;
						console.log(author);
						//评分
						const bookRating = res.data.body.bookInfo.bookRating;
						console.log(bookRating);
						//分类
						const category = res.data.body.bookInfo.category;
						console.log(category);
						//章数
						const chapterCount = res.data.body.bookInfo.chapterCount;
						console.log(chapterCount);
						//状态
						const completeState = res.data.body.bookInfo.completeState;
						console.log(completeState);
						//简介
						const desc = res.data.body.bookInfo.desc;
						console.log(desc);
						//封面
						const picUrl = res.data.body.bookInfo.picUrl;
						console.log(picUrl);
						//人气
						const popularity = res.data.body.bookInfo.popularity[0]+res.data.body.bookInfo.popularity[1];
						console.log(popularity);
						//字数
						const wordCount = res.data.body.bookInfo.wordCount[0]+res.data.body.bookInfo.wordCount[1];
						console.log(wordCount);
						//标签
						const tag = res.data.body.bookInfo.tag;
						console.log(tag);
						//评论
						const commentList = res.data.body.commentList;
						console.log(commentList)
						console.log(commentList[0].avatar);
						console.log(commentList[0].nick);
						console.log(commentList[0].content);
						//书友还读过
						const newBooksRecommend = res.data.body.newBooksRecommend;
						console.log(newBooksRecommend[0].bookName);
						console.log(newBooksRecommend[0].picUrl);
						
					}
				})
			},

			//点击添加
			addBook() {
				let tmp = {
					id: this.id,
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

<style lang="scss" scoped>
	.books-desc-div {
		padding-bottom: 100upx;
	}

	header.header {
		height: 312upx;
		position: relative;

		image.bg {
			width: 100%;
			height: 100%;
			display: block;
			position: absolute;
			z-index: 0;
			filter: blur(10px);
			opacity: 0.3;
		}

		.img-div {
			image {
				width: 178upx;
				height: 238upx;
				margin: 0 50upx;
			}
		}

		.right-div {
			height: 238upx;

			.author-info {
				margin-top: 16upx;
				font-size: 26upx;

				span.author {
					color: #e24e4d;
				}

				span.type {
					color: #8e8d8d;
					margin-left: 30upx;
				}
			}

			p.word {
				font-size: 24upx;
				margin-top: 16upx;
				color: #8e8d8d;
			}

			p.rate {
				font-size: 26upx;
				margin-top: 16upx;
				color: #8e8d8d;
			}
		}
	}

	.longintro {
		padding: 30upx;
		margin-top: 30upx;
		background: #fff;

		p.title {
			line-height: 70upx;
		}

		.tags-div {
			flex-wrap: wrap;
			padding: 20upx 0;

			li.list {
				line-height: 40upx;
				font-size: 24upx;
				background: #f0eff4;
				color: #bebdc5;
				padding: 0 16upx;
				border-radius: 20upx;
				margin: 8upx;
			}
		}

		div.content {
			font-size: 28upx;
			text-indent: 56upx;
		}
	}

	.items-div {
		margin-top: 30upx;
		background: #fff;

		.item {
			min-height: 70upx;
			justify-content: space-between;
			padding: 0 30upx;
		}

		.item+.item {
			border-top: 1px solid #eee;
		}
	}

	.add {
		width: 80%;
		line-height: 80upx;
		position: fixed;
		left: 10%;
		bottom: 10upx;
		background: #38adfd;
		border-radius: 40upx;
		text-align: center;
		color: #fff;
	}

	.mainBtn {
		background: #38adfd;
		color: #fff;
		font-size: 30upx;
		padding: 14upx 30upx;
		border-radius: 12upx;
		display: inline-block;
		text-align: center;
	}
</style>
