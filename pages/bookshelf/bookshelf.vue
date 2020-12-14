<template>
	<view class="content">

		<view class="zi">书架</view>
		<view class="zt"><text class="z1">共<text class="jiu">9</text>本书</text></view>
		<view class="delete" @click="detele">
			<text>删除</text>
		</view>
		<uni-list>
			<uni-list-item v-for="item in books" :key="item.lastChapterId" link to="/pages/vue/index/index" :thumb="item.picUrl">
				<view slot="body" class="item slot-box slot-text">
					<view class="tit">{{item.bookName}}</view>
					<view class="swyd">
						<text class="zz">尚未阅读</text>
					</view>
					<view class="shop-price">
						<text class="ny">最新</text>
						<text class="shop-price-text">{{ item.lastChapter  }}</text>
					</view>

				</view>


			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniList from "@/components/uni-ui/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import myRequestGet from "../../utils/zgrequest.js"
	export default {
		data() {
			return {
				books: []
			}
		},
		onLoad() {
			this.getBooks()
			
		},
		methods: {
			async getBooks() {
				let result = await myRequestGet("/api/wechat/bookshelf/builtin?sex=-1&categories=1&p2=129003")
				this.books = result.bookInfo;
			},
			


		},
		components: {
			uniList,
			uniListItem

		},


	}
</script>




<style>
	.zi {
		width: 100%;
		height: 30px;
		font-size: 20px;
		font-weight: 800;
		text-align: center;
		margin-top: 20rpx;

	}

	image {
		height: 85px !important;
		width: 65px !important;
	}

	.uni-title {
		margin-left: 15rpx;

	}

	.uni-ellipsis-2 {
		font-size: 33rpx;
		color: #333333;
	}

	.swyd {

		margin: 15rpx;
		margin-left: 25rpx;
	}

	.zz {
		color: #777777;
		font-size: 25rpx;
	}

	.shop-price {
		margin: 15rpx;
		margin-left: 12rpx;
		white-space: nowrap;
		text-overflow: ellipsis;


	}

	.shop-price-text {
		color: #777777;
		font-size: 25rpx;


	}

	.uni-list--border-top {
		display: none;

	}

	.uni-list--border {
		display: none;
	}

	.ny {

		border: 1rpx solid red;
		margin: 10rpx;
		padding: 5rpx 8rpx;
		font-size: 20rpx;
		font-weight: 100;
		color: red;
	}
	.zt{
		margin-left: 30rpx;
		margin-bottom: 20rpx;
	}
	.z1{
		color: #777777;
		
		
	}
	.jiu{
		color: red;
		font-size: 45rpx;
		margin: 0 5rpx;
	}
	.delete{
		float: right;
		margin-top: -70rpx;
		margin-right: 20rpx;
	}
	
</style>
