<template>
	<view class="Login">
		<view class="icon">
			<image class="Horse" src="../../static/tabbar/ma.png"></image>
			<view class="appName">
				<text>小马哥说</text>
			</view>
		</view>
		<view class="login">
			<view class="after">
				<text class="line">——</text>
				<text class="words">登录后即可同步个人书架</text>
				<text class="line">——</text>
			</view>
			<!-- <view class="face">
				<button class="sys_ _btn" open-type=" getUserInfo" lang="zh_ CN" @getuserinfo=" appLoginWx">
			
				</button>
			</view> -->
			<view class="Btn">
				<button class="btn" open-type="getUserInfo" lang="zh_ CN" @click="appLoginWx">
					微信一键登录
				</button>
			</view>
			<!-- <view class="btn" @click="show">
				<text class="word">微信一键登录</text>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			appLoginWx() {
				
				// #ifdef MP-WEIXIN
				uni.getProvider({
					service: 'oauth',
					success: function(res) {
						console.log("6666666666666",res,res.provider.indexOf('weixin'))
						if (res.provider.indexOf('weixin')!=-1) {
							console.log(res,"ooooooooooo")
							uni.login({
								provider: 'weixin',
								success: (res2) => {
									// console.log(res2);
									uni.getUserInfo({
										provider: 'weixin',
										success: (info) => { //这里请求接口

											console.log(info, "999999999999");
											console.log(info.userInfo);
											console.log(info.userInfo.avatarUrl);
											console.log(info.userInfo.nickName);
											uni.navigateTo({
												url: '/pages/allow/allow'
											})
										},
										fail: () => {
											uni.showToast({
												title: "微信登录授权失败",
												icon: "none"
											});
										}
									})

								},
								fail: (err) => {
									console.log(err,"000000000")
									uni.showToast({
										title: "微信登录授权失败",
										icon: "none"
									});
								}
							})

						} else {
							uni.showToast({
								title: '请先安装微信或升级版本',
								icon: "none"
							});
						}
					}
				});
				uni.showModal({
					showCancel:false,
				    title: '提示',
				    content: '登陆成功',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
							uni.switchTab({
					   	url:'../index/index'
					   })
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				//#endif
			} 

		}
	}
</script>

<style lang="scss">
	.Login {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;

		.icon {
			width: 200rpx;
			height: 200rpx;
			margin: 150rpx auto;
			border: 1rpx solid #FFFFFF;
			background-color: #F0AD4E;
			border-radius: 30rpx;

			.Horse {
				width: 180rpx;
				height: 180rpx;
				margin: 10rpx;
			}

			.appName {
				color: #000;
				font-size: 42rpx;
				letter-spacing: 8rpx;
				font-weight: bold;
				margin: 40rpx auto;
			}
		}

		.login {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;

			.after {
				width: 70%;
				height: 50rpx;
				color: #808080;
				font-size: 28rpx;
				// margin: 20rpx auto;
				margin-left: 135rpx;

				.words {
					padding-left: 20rpx;
					padding-right: 20rpx;
					letter-spacing: 3rpx;
				}
			}

			.Btn {
				// width: 80%;
				// height: 80rpx;
				// margin: 10rpx auto;
				// border-radius: 15rpx;
				// background-color: #008B00;

				.btn {
					width: 300rpx;
					height: 80rpx;
					color: #FFFFFF;
					font-size: 35rpx;
					line-height: 80rpx;
					letter-spacing: 3rpx;
					font-weight: bold;
					margin: 20rpx auto;
					background-color: #008B00;
				}
			}
		}
	}
</style>
