export default {
	onShareAppMessage(res) { //发送给朋友
	
	},
	created() {
		//#ifdef MP-WEIXIN
		wx.showShareMenu({
			withShareTicket: true,
			menus: ['shareAppMessage']
		});
		//#endif
	},
}
