<template>
	<view class="container" style="background-color: #f5f5f5;padding:30rpx 16rpx 28rpx 16rpx;">
		<view class="schBox">
			<input type="text" value="" />
			<view class="sch-btn">
				搜索
			</view>
		</view>
		<view class="favPane">
			<view class="sortList">
				<view style="display: flex;">
					<view class="stLi">
						鞋靴分类
						<image src="../../../static/images/shoes/favorite/arrow.png" mode="widthFix" ></image>
					</view>
					
					<view class="stLi">
						收藏时间
						<image src="../../../static/images/shoes/favorite/arrow.png" mode="widthFix" ></image>
					</view>
				</view>
				
				<image src="../../../static/images/shoes/favorite/edit.png" mode="widthFix" class="favEdit"></image>
			</view>
			
			<view class="shoesList">
				
				<view class="shoesLi">
					<image src="../../../static/images/shoes/favorite/shoes1.jpg" mode="widthFix" class="shoesLi-img"></image>
					<view class="shoesLi-text">
						<text class="shoesLi-text-title">李宁 韦德之道7</text>
						<text class="shoesLi-text-content">纪念版/白色/荧光糖粉</text>
						<view class="shoesLi-price">
							<text class="shoesLi-price-text">￥ 569.00</text>
							<text></text>
							<button type="default" class="shoesLi-price-btn">
								<text>详情</text>
							</button>
						</view>
					</view>
				</view>
				
				<view class="shoesLi">
					<image src="../../../static/images/shoes/favorite/shoes2.jpg" mode="widthFix" class="shoesLi-img"></image>
					<view class="shoesLi-text">
						<text class="shoesLi-text-title">李宁 驭帅11</text>
						<text class="shoesLi-text-content">水蜜桃</text>
						<view class="shoesLi-price">
							<text class="shoesLi-price-text">￥ 499.00</text>
							<text></text>
							<button type="default" class="shoesLi-price-btn">
								<text>详情</text>
							</button>
						</view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.schBox{
		width: 592rpx;
		height:62rpx;
		padding-left: 30rpx;
		padding-right: 10rpx;
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-indent: 4rpx;
		background-color: #D2D2D2;
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
	.favPane{
		width: 630rpx;
		height:100%;
		padding: 22rpx 32rpx 22rpx 50rpx;
		height:auto;
		border-radius: 16rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column; 
		justify-content: center;
		align-items: center;
		margin-top: 40rpx;
	}
	.sortList{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 52rpx;
	}
	.stLi{
		display: flex;
		align-items: center;
		margin-right: 40rpx;
	}
	.stLi>image{
		width: 26rpx;
		margin-left: 10rpx;
	}
	.shoesList{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.shoesLi{
		width: 636rpx;
		height: 192rpx;
		display: flex; 
		justify-content: space-between;
		margin-bottom: 40rpx;
	}
	.shoesLi-img{
		width:202rpx;
		height:192rpx;
	}
	.shoesLi-text{
		width: 406rpx;
		height:100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.shoesLi-text-title{
		font-size: 36rpx;
		color:#474747;
		margin-bottom: 12rpx;
	}
	.shoesLi-text-content{
		font-size: 26rpx;
		color:#4F4F4F;
		margin-bottom: 34rpx;
	}
	.shoesLi-price{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.shoesLi-price-text{
		font-size: 40rpx;
		color:#4797EB;
	}
	.shoesLi-price-btn{
		width: 110rpx;
		height:48rpx;
		border-radius: 40rpx;
		border:1px solid #CACACA;
		font-size: 26rpx;
		color:#000000;
		background-color: #ffffff;
		display: flex;
		justify-content: center;
		align-items: center;
		margin:0px;
	}
	.shoesLi-price-btn:after{
		border: 0px;
	}
	.favEdit{
		width: 44rpx;
	}
	
</style>
