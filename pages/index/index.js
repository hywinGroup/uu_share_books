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
    bookData: [],
    swiperObj:{
      indicatorDots:true,
      autoplay:true,
      interval:5000,
      duration:500,
      imgUrls:[
        "http://upfile2.asqql.com/upfile/hdimg/wmtp/wmtp/2016-11/25/114520VTdwwcG3cd.jpg",
        "http://upfile2.asqql.com/upfile/hdimg/wmtp/wmtp/2016-5/27/924529lFKzImYF0.jpg"
      ]
    }
  },
  onLoad: function(options) {
    // Do some initialize when page load.
    var self = this;
    let url = config.getBooksList;
    let successFuc = function(res){
      //console.log("success");
      //debugger;
      self.setData({
        bookData: res.data.data
      })
      console.log(res.data.data);
    };
    util.doPost(url,{},successFuc);
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
  goToDetail:function(event){
      var bookId = event.currentTarget.dataset.id;
      wx.navigateTo({
          url: '../detail/detail?id='+bookId
      })
  },
  goToSearch:function(event){
      wx.navigateTo({
          url: '../search/search'
      })
  },
  customData: {
    hi: 'MINA'
  }
})