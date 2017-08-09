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