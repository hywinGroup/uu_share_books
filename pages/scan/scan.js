'use strict'

Page({
  data: {
    text: "This is scan page."
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  scanCode:function(){
    //TODO 测试跳转，待删除
        // var bookIsbn = "11122333";
        // wx.navigateTo({
        //     url: '../order/order?isbn='+bookIsbn
        // })
    
    //只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        //跳转至订单
        var bookIsbn = res.result;
        wx.navigateTo({
            url: '../order/order?isbn='+bookIsbn
        })
      },
      fail: (res) =>{
        wx.showToast({
          title: "失败"+res.result,
          icon: 'success',
          duration: 0
        })
      },
      complete: (res) => {
      }
    })
  },
  customData: {
    hi: 'MINA'
  }
})