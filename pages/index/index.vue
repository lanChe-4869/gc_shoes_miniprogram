<template>
	<view class="container">
		<view id="bgPos">
			<view id="bgRound">
			</view>
		</view>

		<view class="g-header">
			<view class="schBox">
				<image src="../../static/images/home/camera.png" style="width:17px;height:17px;" @click="getPhoto">
				</image>
				<input type="text" class="text-in" bindinput="schInput" />
				<view class="sch-btn">
					<text>搜索</text>
				</view>
			</view>
			<image src="../../static/images/home/ring.png" style="width:60rpx;height:60rpx;"></image>
		</view>

		<view class="brand-info">
			<!-- <view class="brand-info-header">
		        <text>品牌推荐</text>
		      </view> -->
			<image src="https://i.loli.net/2021/07/17/QXwTqtafvgMc6Dl.png" class="brand-info-body" mode="aspectFill">
			</image>
			<view class="brand-point">
				<view class="brand-point-desc"></view>
				<view class="brand-point-desc" style="background-color:#4797EB"></view>
				<view class="brand-point-desc"></view>
			</view>
		</view>

		<view class="g-main">

			<view class="m-body fn-mgTop">
				<h4 style="color: #707070;">个性化推荐</h4>
				<view class="shoes-info" style="margin-top:20rpx;">
					<view class="shoes-info-left">
						<view class="shoes-box-big">
							<image src="https://i.loli.net/2021/07/17/mBYJRDozVEkjU3Z.png" mode="widthFix"
								class="shoes-img"></image>
							<view class="shoes-body">
								<view class="shoes-title">
									<text class="shoes-title-mark-spring">2021年春季</text>
									<text class="shoes-title-name">CONVERE 匡威</text>
								</view>
								<view class="shoes-desc">Chuck 70 夏威夷蓝</view>
								<view class="shoes-price">￥<text>599.00</text></view>
							</view>
						</view>
						<view class="shoes-box-normal fn-mgTop">
							<image src="https://i.loli.net/2021/07/17/FJBxkg4N1GlRchI.png" mode="widthFix"
								class="shoes-img"></image>
							<view class="shoes-body">
								<view class="shoes-title">
									<text class="shoes-title-mark-summer">2021年夏季</text>
									<text class="shoes-title-name">LiNing 李宁</text>
								</view>
								<view class="shoes-desc">反光一体织跑鞋</view>
								<view class="shoes-price">￥<text>899.00</text></view>
							</view>
						</view>
					</view>
					<view class="shoes-info-right">
						<view class="shoes-box-normal">
							<image src="https://i.loli.net/2021/07/17/gyCN2tP8pERUDkj.png" mode="widthFix"
								class="shoes-img"></image>
							<view class="shoes-body">
								<view class="shoes-title">
									<text class="shoes-title-mark-summer">2021年夏季</text>
									<text class="shoes-title-name">LiNing 李宁</text>
								</view>
								<view class="shoes-desc">减震回弹篮球鞋</view>
								<view class="shoes-price">￥<text>799.00</text></view>
							</view>
						</view>
						<view class="shoes-box-normal fn-mgTop">
							<image src="https://i.loli.net/2021/07/17/M7RtCvAY26eOjPz.png" mode="widthFix"
								class="shoes-img"></image>
							<view class="shoes-body">
								<view class="shoes-title">
									<text class="shoes-title-mark-spring">2021年春季</text>
									<text class="shoes-title-name">HuiLi 回力</text>
								</view>
								<view class="shoes-desc">休闲回天之力板鞋</view>
								<view class="shoes-price">￥<text>318.00</text></view>
							</view>
						</view>



					</view>
				</view>


			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
			getPhoto(){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'],
				    sourceType: ['album', 'camera'],
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				});
			}
		}
	}
</script>

<style>
	page {
		background: #f6f6f6;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: scroll;
		width: 750rpx;
	}

	.preBg {
		width: 750rpx;
		overflow-x: hidden;
	}

	#bgPos {
		position: relative;
		overflow-x: hidden;
		width: 750rpx;
		height: 452rpx;
	}

	#bgRound {
		position: absolute;
		width: 1704rpx;
		left: -470rpx;
		top: -1252rpx;
		height: 1704rpx;
		border-radius: 50%;
		background-color: #4797EB;
	}

	.g-header {
		position: fixed;
		width: 680rpx;
		display: flex;
		justify-content: space-around;
		padding: 0rpx 30rpx 40rpx 40rpx;
		margin-top: 100rpx;
		z-index: 1;
	}

	.m-box {
		display: flex;
		justify-content: center;
	}

	.schBox {
		width: 568rpx;
		height: 62rpx;
		padding: 0rpx 10rpx 0rpx 28rpx;
		background: rgba(104, 104, 104, 0.25);
		border: 1px solid rgba(255, 255, 255, 0.23137254901960783);
		border-radius: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.sch-btn {
		width: 102rpx;
		height: 48rpx;
		background: #FFFFFF;
		opacity: 0.9;
		border-radius: 40rpx;
		font-size: 26rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.text-in {
		height: 100%;
		width: 380rpx;
		color: #e2e2e2;
	}

	.g-main {
		position: absolute;
		top:600rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.brand-info {
		position: absolute;
		top: 200rpx;
		width: 670rpx;
		height: auto;
		overflow-x:hidden;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.brand-info-header {
		width: 100%;
		height: 21.5%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #EBA05C;
		color: #FFFFFF;
		font-size: 15px;
	}

	.brand-info-body {
		background-size: cover;
		width: 670rpx;
		height: 344rpx;
		border-radius: 40rpx;
	}

	.brand-point {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 80rpx;
		margin-top: 20rpx;
	}

	.brand-point-desc {
		width: 16rpx;
		height: 16rpx;
		border-radius: 50%;
		background-color: rgb(218, 218, 218);
	}

	.m-body {
		margin: 40 48rpx;
		width: 654rpx;
		display: flex;
		flex-direction: column;
		padding-bottom: 20rpx;
	}

	.shoes-info {
		display: flex;
		padding-left: 30rpx;
		justify-content: space-between;
	}

	.shoes-info-left,
	.shoes-info-right {
		display: flex;
		flex-direction: column;
	}

	.shoes-img {
		width: 90%;
	}

	.shoes-box-big {
		width: 300rpx;
		height: 372rpx;
		background: #FFFFFF;
		box-shadow: 6px 3px 6px rgba(104, 104, 104, 0.4);
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0rpx 0;
	}

	.shoes-box-normal {
		width: 292rpx;
		height: 310rpx;
		background: #FFFFFF;
		box-shadow: 6px 3px 6px rgba(104, 104, 104, 0.4);
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0rpx 0;
	}

	.shoes-body {
		width: 80%;
		display: flex;
		flex-direction: column;
	}

	.shoes-title {
		display: flex;
		align-items: center;
		padding: 20rpx 0 5rpx 0;
	}

	.shoes-title-mark-spring {
		font-size: 12rpx;
		color: #3968FA;
		background-color: rgba(57, 104, 250, 0.5);
	}

	.shoes-title-mark-summer {
		font-size: 12rpx;
		color: #068990;
		background-color: #71CDD3;
	}

	.shoes-title-name {
		margin-left: 5rpx;
		font-size: 24rpx;
	}

	.shoes-desc {
		padding: 5rpx 0;
		font-size: 20rpx;
		color: #8D8D8D;
	}

	.shoes-price {
		padding: 5rpx 0;
		font-size: 24rpx;
		color: #3968FA;
	}
</style>
