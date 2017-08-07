'use strict'

Page({
  data: {
    text: 'this is index page',
    array: [{msg: '1'}, {msg: '2'}]
  },
  onLoad: function(options) {
    console.log("run here");
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
  },
  onPageScroll: function() {
    // Do something when page scroll
  },
  // Event handler.
  viewTap: function() {
    // this.setData({
    //   text: 'Set some data for updating view.'
    // })
  },
  customData: {
    hi: 'MINA'
  }
})