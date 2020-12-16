<template>
	<view class="userInformation">
		<!-- 用户自定义头像 -->
		<view class="userPortrait">
			<image :src="yonghuwx.avatarUrl" mode="widthFix"></image>
		</view>
		<view class="userLook">
			<!-- 用户自定义名字 -->
			<view class="user-title clamp">{{yonghuwx.nickName}}</view>
			<view class="user-edit">查看个人资料</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

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
		methods: {

		}
	}
</script>

<style>

</style>
