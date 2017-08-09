'use strict'
import util from "../../utils/util.js";
import config from "../../config.js";

Page({
  data: {
    text: "This is search page.",
    searchKey : "",
    bookData:[],
    isSearched:false
  },
  onLoad: function(options) {
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
  searchBooks:function(){
    //var searchKey = document.getElementById("searchKey").value;
    var self = this;
    //console.log("searchKey:"+self.data.searchKey);
    let successFuc = function(res){
      self.setData({
        bookData: res.data.data,
        isSearched: true
      })
    }
    util.doPost(config.getBooksList,{
      searchKey:self.data.searchKey
    },successFuc);
  },
  getInputValue:function(e){
    this.setData({
      searchKey:e.detail.value
    });
  },
  goToDetail:function(event){
    var bookId = event.currentTarget.dataset.id;
    console.log("search id:"+bookId);     
    wx.navigateTo({
      url: '../detail/detail?id='+bookId
    })
  },
  customData: {
    hi: 'MINA'
  }
})