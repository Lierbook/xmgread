<template>
	<view class="content">
		<aloys-tab :tabs="tabs" @change="onTabChange">
			<view slot="content0" class="xxx">
				<lv-select @handleSearch="handleSearch" @change="change" placeholder="请输入信息" :infoList="infoList" :showValue="showValue"
				 v-model="searchValue" :loading="loading" type="success " :uniShadow="true">
				</lv-select>
			</view>
			<view slot="content1" class="xxx">B</view>
			<view slot="content2" class="xxx">
				<!-- <view class="book-Name" v-for="carousel in carouselList">
				<view class="bookName">
					{{carousel.author}}
				</view>
			</view> -->
				<view class="book_detail">
					<view class="book_theme">
						<view class="book_name">
							<view><text class="title">灶下婢</text></view>
							<!-- 	<text class="author">{{author}} | {{category}}</text> -->
							<text class="author">作者 | </text>
							<text class="type"> 文学艺术</text>
							<view><text class="words">72万字</text></view>
							<text class="state">连载</text>
						</view>
						<view class="pic">
							<image :src="picUrl"></image>
						</view>
					</view>
				</view>
				<view class="introduction">
					<text class="description">{{desc}}</text>
					<view class="catalogue"></view>
				</view>
				<view class="comment">
					热评
				</view>
				<view class="read">
					<image src="../../static/tabbar/l-tabbar-1.png"></image>
					<text class="share">分享给好友</text>
					<image src="../../static/tabbar/书架.png"></image>
					<text class="add">加入书架</text>
					<view class="readNow">立即阅读</view>
				</view>
			</view>
	
	</aloys-tab>
	</view>
</template>

<script>
	import aloysTab from "@/components/aloys-tab/aloys-tab.vue"
	import lvSelect from '../../components/lv-select/lv-select'

	export default {
		components: {
			aloysTab,
			lvSelect

		},
		data() {
			return {
				loading: false,
				showValue: 'name', // 需要显示的数据，必须与infoList中的name对应
				searchValue: '',
				infoList: [],
				infoLists: [{
					name: '吕星辰1'
				}, {
					name: '吕星辰2'
				}, {
					name: '吕星辰3'
				}, {
					name: '吕星辰4'
				}],
				tabs: [{
					title: '男生'
				}, {
					title: '女生'
				}, {
					title: '出版'
				}],

				detaillList: [],

			}
		},
		onLoad() {
			//获取小说详情数据
			// async getBookDetails() {
			// 	const res = await this.$myRequest({
			// 		url: 'https://wechat.idejian.com/api/wechat/chuban',
			// 	})
			// 	this.bookdetail = res.data.body.data[1].books[0];
			// }
			var me = this;

			uni.request({
				url: 'https://wechat.idejian.com/api/wechat/chuban',
				success: (res) => {
					console.log(res);

					var detaillList = res.data.body.data[1].books[0];
					me.detaillList = detaillList;

				},

			});








		},





		methods: {
			onTabChange(obj) {
				uni.showToast({
					title: '切换成功',
					icon: 'none',
					duration: 500,
					mask: false

				})
			},
			handleSearch() {
				this.loading = true
				setTimeout(() => {
					this.loading = false
					this.infoList = this.infoLists
				}, 2000)
			},
		}
	}
</script>

<style lang="scss">
	.content {
		position: absolute;
		height: 100%;

		.xxx {
			font-size: 42rpx;
			font-weight: bold;
			padding: 10rpx 0;
			text-align: center;
		}
	}



	/* 小说详情的样式 */
	.book_detail {
		display: flex;

		.book_theme {
			flex: 1;
			background-color: #8B8B83;
			width: 100%;
			height: 300rpx;

			.book_name {
				width: 50%;
				height: 50%;
				color: #FAFAFA;
				font-size: 38rpx;
				margin-top: 30rpx;
			}

		}
	}
</style>
