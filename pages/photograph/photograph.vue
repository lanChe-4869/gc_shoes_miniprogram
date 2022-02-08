<template>
	<view class="container">
		<view class="g-main">
			<image src="../../static/images/photograph/feet.png" mode="widthFix" style="width:100%;">
			</image>
			<view class="takePhoto" @click="getPhoto">
				<image src="../../static/images/photograph/takePhoto.png" mode="widthFix" style="width:76rpx;"></image>
			</view>

			<view class="resTable">
				<view class="res-tr">
					<view class="res-title"></view>
					<view class="res-left">左</view>
					<view class="res-unit"></view>
					<view class="res-right">右</view>
					<view class="res-unit"></view>
				</view>
				<view class="res-tr">
					<view class="res-title">脚长</view>
					<view class="res-left"></view>
					<view class="res-unit">cm</view>
					<view class="res-right"></view>
					<view class="res-unit">cm</view>
				</view>
				<view class="res-tr">
					<view class="res-title">脚宽</view>
					<view class="res-left"></view>
					<view class="res-unit">cm</view>
					<view class="res-right"></view>
					<view class="res-unit">cm</view>
				</view>
				<view class="res-tr">
					<view class="res-title">脚高</view>
					<view class="res-left"></view>
					<view class="res-unit">cm</view>
					<view class="res-right"></view>
					<view class="res-unit">cm</view>
				</view>
				<view class="res-tr">
					<view class="res-title">脚底宽度</view>
					<view class="res-left"></view>
					<view class="res-unit">cm</view>
					<view class="res-right"></view>
					<view class="res-unit">cm</view>
				</view>
				<view class="res-tr">
					<view class="res-title">脚跟</view>
					<view class="res-left"></view>
					<view class="res-unit">cm</view>
					<view class="res-right"></view>
					<view class="res-unit">cm</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			
		},
		methods:{
			getPhoto(){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'],
				    sourceType: ['album', 'camera'],
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
						
						console.log('debug')
						
						uni.showLoading({
						    title: '加载中'
						});
						
						setTimeout(function () {
						    uni.hideLoading();
							uni.showToast({
								title: "足部拍摄错误",
								icon:'error',
								duration: 2000
							});
						}, 2000);
				    }
				});
			}
		}
	}
</script>

<style>
	page {
		background-color: #F6F6F6;
	}

	.g-header {
		margin-top: 96rpx;
		width: 698rpx;
		padding: 0 26rpx;
		height: 64rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header-sch {
		padding-top: 20rpx;
	}

	.g-main {
		width: 750rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.takePhoto {
		position: absolute;
		right: 20rpx;
		top: 640rpx;
		border-radius: 50%;
		padding: 10rpx 10rpx;
		background-color: #F6F6F6;
	}

	.resTable {
		width: 582rpx;
	}

	.res-tr {
		height: 50rpx;
		width: 100%;
		padding: 10rpx 0;
		display: flex;
		align-items: center;
		font-size: 30rpx;
		color: #4B4B4B;
	}

	.res-title {
		width: 260rpx;
	}

	.res-left {
		width: 80rpx;
	}

	.res-unit {
		width: 30rpx;
		margin-left: 14rpx;
	}

	.res-right {
		margin-left: 50rpx;
		width: 80rpx;
	}
</style>
