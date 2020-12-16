<template>
	<view>
		<view class="tx-w">
			<view class="tx">
				<view class="my">我的</view>
				<image class="tx-img" :src="yonghuwx.avatarUrl"></image>
				<view class="zx"></view>
			</view>
			<view class="name">{{yonghuwx.nickName}} </view>
			<view class="name-qm">ID:88888888</view>
		</view>
		<view class="">
			<uni-list>
			    <uni-list-item  title="浏览记录" link to="" ></uni-list-item>
				<uni-list-item  title="联系客服" rightText="得间免费"></uni-list-item>
				<uni-list-item  title="用户QQ群" rightText="QQ:5201314"></uni-list-item>
			  
			</uni-list>

		</view>

	</view>
</template>

<script>
	import uniList from "@/components/uni-ui/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"

	export default {
		data() {
			return {
				yonghuwx: []
			}
		},
		onLoad() {
			let that = this;
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					// 获取用户信息				
					uni.getUserInfo({
						provider: 'weixin',
						success: function(infoRes) {
							that.yonghuwx = infoRes.userInfo
							console.log(that.yonghuwx)
						}
					});
				}
			});
		},
		components:{
			uniList,
			uniListItem
			
			
		},
		methods: {

		}
	}
</script>

<style>
	.tx-w {
		margin-top: 15upx;
	}

	.tx {
		text-align: center;
	}

	.tx image {
		width: 140upx;
		height: 140upx;
		border-radius: 50%;
	}

	.name {
		text-align: center;
		margin-top: 20upx;
	}

	.name-qm {
		text-align: center;
		margin-top: 20upx;
		font-size: 30upx;
	}

	.my {
		font-size: 16px;
		font-weight: 800;
		margin-bottom: 10px;
	}
	
</style>
