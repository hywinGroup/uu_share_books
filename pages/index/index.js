'use strict'
import util from "../../utils/util.js";
import config from "../../config.js";
/*
根据isbn获取信息，例如
https://api.douban.com/v2/book/isbn/9787115411914
*/
Page({
  data: {
    text: 'this is index page',
    bookData: []
  },
  onLoad: function(options) {
    // Do some initialize when page load.
    var self = this;
    let url = config.getBooksList;
    let successFuc = function(res){
      console.log("success");
      //debugger;
      self.setData({
        bookData: res.data.data
      })
      console.log(res.data.data);
    };
    util.doGet(url,successFuc);
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