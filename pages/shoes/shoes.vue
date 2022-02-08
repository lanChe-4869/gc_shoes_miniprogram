<template>
	<view class=".container">
		<button open-type="getUserProfile" bindtap="getUserProfile" style="display: none;"></button>
		<view class="g-header">
			<view class="headImg-box">
				<image :src="avatarUrl" style="width: 100%;" mode="widthFix"></image>
			</view>
			<view class="header-desc">
				<view class="header-name">
					<text>{{username}}</text>
				</view>
				<view class="header-credit">当前信用积分 <text style="color:#4797EB">&nbsp;{{score}}</text></view>
			</view>
			<view class="header-setting">
				<image style="width:40rpx;height:40rpx;" src="../../static/images/shoes/setting.png"></image>
			</view>
		</view>

		<view class="g-main">
			<view class="st-box">
				<view class="st-box-desc">
					<image class="st-box-desc-img" src='../../static/images/shoes/orders.png'></image>
					<text>我的订单</text>
				</view>
				<view class="st-box-desc" @click="toMyFav">
					<image class="st-box-desc-img" src='../../static/images/shoes/favorites.png'></image>
					<text>我的收藏</text>
				</view>
				<view class="st-box-desc">
					<image class="st-box-desc-img" src='../../static/images/shoes/shoppingBag.png'></image>
					<text>历史发布</text>
				</view>
				<view class="st-box-desc">
					<image class="st-box-desc-img" src='../../static/images/shoes/follow.png'></image>
					<text>我的关注</text>
				</view>
			</view>
			<view class="line"></view>

			<view class="md-box" @click="toMyAddress">
				<view class="md-box-left">
					<image style="width:56rpx;height:56rpx;" src="../../static/images/shoes/location.png"></image>
					<text>收货地址</text>
				</view>
				<view>
					<image style="width:60rpx;height:60rpx;" src="../../static/images/shoes/rightArrow.png"></image>
				</view>
			</view>

			<view class="line"></view>

			<view class="md-box" @click="undevelopedFunc">
				<view class="md-box-left">
					<image style="width:56rpx;height:56rpx;" src="../../static/images/shoes/service.png"></image>
					<text>在线客服</text>
				</view>
				<view>
					<image style="width:60rpx;height:60rpx;" src="../../static/images/shoes/rightArrow.png"></image>
				</view>
			</view>

			<view class="line"></view>

			<view class="md-box">
				<view class="md-box-left">
					<image style="width:56rpx;height:56rpx;" src="../../static/images/shoes/feedback.png"></image>
					<text>我要反馈</text>
				</view>
				<view>
					<image style="width:60rpx;height:60rpx;" src="../../static/images/shoes/rightArrow.png"></image>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '用户名',
				avatarUrl: '../../static/images/shoes/user-head.png',
				score: 0,
				hasUserInfo: false,
			}
		},
		onLoad() {

		},
		onShow() {
			const that = this
			if (this.hasUserInfo == false) {
				wx.showModal({
					title: '温馨提示',
					content: '亲，授权微信登录后才能正常使用小程序功能',
					success(res) {
						console.log(0)
						console.log(res)
						//如果用户点击了确定按钮
						if (res.confirm) {
							wx.getUserProfile({
								desc: '获取你的昵称、头像、地区及性别',
								success: res => {
									console.log(1);
									console.log(res);
									that.avatarUrl = res.userInfo.avatarUrl
									that.username = res.userInfo.nickName
									that.score = 300
									that.hasUserInfo=true
								},
								fail: res => {
									console.log(2);
									console.log(res)
									//拒绝授权
									wx.showToast({
										title: '将无法正常使用',
										icon: 'error',
										duration: 2000
									});
									return;
								}
							});
						} else if (res.cancel) {
							//如果用户点击了取消按钮
							console.log(3);
							uni.showToast({
								title: '将无法正常使用',
								icon: 'error',
								duration: 2000
							});
							return;
						}
					}
				})

			}

		},
		methods: {
			toMyAddress() {
				uni.navigateTo({
					url: './myAddress/myAddress',
					events: {
						// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
						acceptDataFromOpenedPage: function(data) {
							console.log(data)
						},
						someEvent: function(data) {
							console.log(data)
						}
					},
					success: function(res) {
						// 通过eventChannel向被打开页面传送数据
						res.eventChannel.emit('acceptDataFromOpenerPage', {
							data: 'test'
						})
					},
					fail: function(res) {
						console.log(res);
					}
				});
			},
			toMyFav() {
				uni.navigateTo({
					url: './myFav/myFav',
					events: {
						// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
						acceptDataFromOpenedPage: function(data) {
							console.log(data)
						},
						someEvent: function(data) {
							console.log(data)
						}
					},
					success: function(res) {
						// 通过eventChannel向被打开页面传送数据
						res.eventChannel.emit('acceptDataFromOpenerPage', {
							data: 'test'
						})
						console.log(res);
					},
					fail: function(res) {
						console.log(res);
					}
				});
			},
			undevelopedFunc() {
				uni.showToast({
					title: "敬请期待",
					image: "../../static/error.png",
					duration: 1000
				});
			},
			getUserProfile() {
				console.log("debug")
				const that = this
				wx.getUserProfile({
					desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
					success: (res) => {
						console.log(res.userInfo)
						that.avatarUrl = res.userInfo.avatarUrl
						that.username = res.userInfo.nickName
						that.score = 300
					},
					fail: (error) => {
						console.log(error)
					}
				})
			}
		}
	}
</script>

<style>
	/* pages/shoes/shoes.css */
	page {
		background: #f6f6f6;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: hidden;
		overflow-y: scroll;
		width: 750rpx;
	}

	.line {
		border-top: 2px solid #e0e0e0;
		width: 90%;
	}

	.g-header {
		position: relative;
		width: 686rpx;
		padding: 30rpx 32rpx;
		display: flex;
		align-items: center;
		background: #FFFFFF;
	}

	.headImg-box {
		width: 128rpx;
		height: 128rpx;
		border-radius: 50%;
		background-color: #d9d9d9;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.header-desc {
		margin-left: 46rpx;
		display: flex;
		flex-direction: column;
		height: 96rpx;
		justify-content: space-between;
	}

	.header-setting {
		margin-left: 180rpx;
	}

	.g-main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 750rpx;
	}

	.st-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 148rpx;
		width: 650rpx;
	}

	.st-box-desc {
		width: 90rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 20rpx;

	}

	.st-box-desc-img {
		width: 60rpx;
		height: 60rpx;
		margin-bottom: 8rpx;
	}

	.md-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 148rpx;
		width: 600rpx;
	}

	.md-box-left {
		display: flex;
		align-items: center;
	}

	.md-box-left>text {
		font-size: 30rpx;
		margin-left: 72rpx;
	}
</style>
