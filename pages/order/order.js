'use strict'
import util from "../../utils/util.js";
import config from "../../config.js";

Page({
  data: {
    text: "This is order data.",
    book:{}
  },
  onLoad: function(option) {
    // Do some initialize when page load.
    var self = this;
    let url = config.getBookDetail;
    util.doPost(url,{
      isbn:option.isbn?option.isbn:""
    },function(res){
      self.setData({
        book: res.data.data
      })
    });
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
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  customData: {
    hi: 'MINA'
  }
})