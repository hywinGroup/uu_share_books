'use strict'
App({
  onLaunch: function(options) { 
    // Do something initial when launch.
    wx.showModal({
      content: '“UU摆书”要获取你的地理位置，是否允许?',
      cancelText:"不允许",
      cancelColor:"#0075ff",
      confirmText:"允许",
      confirmColor:"#0075ff",
      success: function(res) {
        if (res.confirm) {
          //console.log('用户点击确定')
          //success process TODO
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  onShow: function(options) {
      // Do something when show.
  },
  onHide: function() {
      // Do something when hide.
  },
  onError: function(msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})
