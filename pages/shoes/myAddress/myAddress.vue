<template>
	<view class="container">
		<view class="g-main" >
			<view class="m-body">
				<view class="m-box">
					<view class="box-lt cl-blue">
						<text>兰</text>
					</view>
					
					<view class="box-bd">
						<view class="box-bd-top">
							<text>兰澈</text>
							<text style="margin-left: 32rpx;">18057153505</text>
						</view>
						
						<view class="box-bd-bt" >
							<text>浙江省 杭州市 余杭区 仓前街道</text>
							<text>余杭塘路2318号B区菜鸟驿站</text>
						</view>
					</view>
					
					<view class="box-rt">
						<image src="../../../static/images/shoes/address/edit.png" mode="widthFix" style="width: 50rpx;"></image>
					</view>
				</view>
				
				<view class="m-box">
					<view class="box-lt cl-green">
						<text>兰</text>
					</view>
					
					<view class="box-bd">
						<view class="box-bd-top">
							<text>兰澈</text>
							<text style="margin-left: 32rpx;">18057153505</text>
						</view>
						
						<view class="box-bd-bt" >
							<text>浙江省 杭州市 余杭区 仓前街道</text>
							<text>余杭塘路2318号B区菜鸟驿站</text>
						</view>
					</view>
					
					<view class="box-rt">
						<image src="../../../static/images/shoes/address/edit.png" mode="widthFix" style="width: 50rpx;"></image>
					</view>
				</view>
				
				<view class="m-box">
					<view class="box-lt cl-red">
						<text>兰</text>
					</view>
					
					<view class="box-bd">
						<view class="box-bd-top">
							<text>兰澈</text>
							<text style="margin-left: 32rpx;">18057153505</text>
						</view>
						
						<view class="box-bd-bt" >
							<text>浙江省 杭州市 余杭区 仓前街道</text>
							<text>余杭塘路2318号B区菜鸟驿站</text>
						</view>
					</view>
					
					<view class="box-rt">
						<image src="../../../static/images/shoes/address/edit.png" mode="widthFix" style="width: 50rpx;"></image>
					</view>
				</view>
				
				<view class="m-box">
					<view class="box-lt cl-red">
						<text>兰</text>
					</view>
					
					<view class="box-bd">
						<view class="box-bd-top">
							<text>兰澈</text>
							<text style="margin-left: 32rpx;">18057153505</text>
						</view>
						
						<view class="box-bd-bt" >
							<text>浙江省 杭州市 余杭区 仓前街道</text>
							<text>余杭塘路2318号B区菜鸟驿站</text>
						</view>
					</view>
					
					<view class="box-rt">
						<image src="../../../static/images/shoes/address/edit.png" mode="widthFix" style="width: 50rpx;"></image>
					</view>
				</view>
				
				<view class="m-box">
					<view class="box-lt cl-red">
						<text>兰</text>
					</view>
					
					<view class="box-bd">
						<view class="box-bd-top">
							<text>兰澈</text>
							<text style="margin-left: 32rpx;">18057153505</text>
						</view>
						
						<view class="box-bd-bt" >
							<text>浙江省 杭州市 余杭区 仓前街道</text>
							<text>余杭塘路2318号B区菜鸟驿站</text>
						</view>
					</view>
					
					<view class="box-rt">
						<image src="../../../static/images/shoes/address/edit.png" mode="widthFix" style="width: 50rpx;"></image>
					</view>
				</view>
				
			</view>
			
			<view class="m-tabber">
				<!-- <view type="default" class="m-btn"></view> -->
				<button type="default" class="m-btn">
					<image src="../../../static/images/shoes/address/newAddress.png" mode="widthFix" style="width: 40rpx;"></image>
					<text style="font-size: 30rpx;font-weight: 550;">新建+</text>
				</button>
			</view>
		</view>
		
	</view>
</template>

<script>
</script>

<style>
	page{
		width: 750rpx;
		height:100%;
	}
	.g-main{
		width: 750rpx;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F6F6F6;
	}
	.m-body{
		padding-top: 30rpx;
		padding-left: 50rpx;
		padding-right: 50rpx;
		display: flex;
		flex-direction: column;
		width:650rpx;
		justify-content: center;
		align-items: center;
		margin-bottom: 120rpx;
	}
	.m-box{
		width:600rpx;
		border-radius: 50rpx;
		margin-bottom: 50rpx;
		padding-left: 30rpx;
		padding-right: 20rpx;
		height:246rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.box-lt{
		width:96rpx;
		height:96rpx;
		border-radius: 50%;
		font-size: 36rpx;
		font-weight: 700;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.box-bd{
		width:auto;
		height:auto;
		display: flex;
		flex-direction: column;
	}
	.box-bd-top{
		font-size: 34rpx;
		font-weight: 700;
	}
	.box-bd-bt{
		font-size: 28rpx;
		font-weight: 400;
		display: flex;
		flex-direction: column;
		margin-top: 22rpx;
	}
	.cl-blue{
		color:#4D94DB;
		background-color: #C3DBF3;
	}
	.cl-green{
		color:#20B67F;
		background-color: #C3F3E2;
	}
	.cl-red{
		color:#F05A2D;
		background-color: #FAC8B9;
	}
	.m-tabber{
		position: fixed;
		width:690rpx;
		padding: 0 30rpx;
		height:120rpx;
		display: flex;
		bottom: 0rpx;
		left: 0rpx;
		align-items:center;
		justify-content:flex-end;
		flex-direction:row;
		border-top:1px solid #dadada;
		background-color: #FBFBFB; 
	}
	.m-btn{
		position: fixed;
		width:200rpx;
		height:80rpx;
		background-color: #FFFFFF;
		border-radius: 40rpx;
		right: 50rpx;
		box-shadow: 0px 1px 6px #b3b3b3;
		outline: none;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.m-btn::after{
		border:0px;
	}

</style>
