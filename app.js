'use strict'
App({
  onLaunch: function(options) { 
    // wx.getSetting({
    //   success(res) {         
    //       if (!res.authSetting['scope.userLocation']) {
    //           // wx.authorize({
    //           //     scope: 'scope.record',
    //           //     success() {
    //           //         // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
    //           //         wx.startRecord()
    //           //     }
    //           // })
    //           wx.showModal({
    //             content: '“UU摆书”要获取你的地理位置，是否允许?',
    //             cancelText:"不允许",
    //             cancelColor:"#0075ff",
    //             confirmText:"允许",
    //             confirmColor:"#0075ff",
    //             success: function(res) {
    //               if (res.confirm) {
    //                 //console.log('用户点击确定')
    //                 //success process TODO
    //               } else if (res.cancel) {
    //                 console.log('用户点击取消')
    //               }
    //             }
    //           })
    //       }
    //   }
    // })
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
