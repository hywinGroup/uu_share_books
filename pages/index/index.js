'use strict'
import util from "../../utils/util.js";
import config from "../../config.js";
import { $wuxLoading } from '../../component/wux'

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
    },
    url:{}
  },
  onLoad: function(options) {
    // Do some initialize when page load.
      var self = this;
      wx.getSetting({
          success(res) {
              if (!res.authSetting['scope.userLocation']) {
                //授权
                console.log("no");
                self.authSet();
              }else{
                console.log("yes");
                self.getLocation();
              }
          }
      })
  },
  onReady: function() {
  },
  authSet:function(){
      var self = this;
      console.log("***********authorize");
      wx.authorize({
          scope: 'scope.userLocation',
          success() {
            console.log("authorize   success");
            self.getLocation();
          }
      })
  },
  getLocation:function(){
      var self = this;
      console.log("*********getLocation*****");
      wx.getLocation({
          type: 'gcj02',
          success: function(res) {
              console.log("success");
              var latitude = res.latitude
              var longitude = res.longitude
              var speed = res.speed
              var accuracy = res.accuracy
              self.setData({
                  url : res
              });
              self.getBooks(res)
          }
      })
  },
  getBooks:function (urlObj) {
    console.log("******getBooks*******");
      var obj = Object.assign({},urlObj),self = this,url = config.getBooksList;
      var successFuc = function(res){
          self.setData({
              bookData: res.data.data
          })
      };
      util.doPost(url,{
          latitude:obj.latitude,
          longitude:obj.longitude
      },successFuc);
  },
  bindLoad: function(){
    $wuxLoading.show({
      text: '数据加载中',
    })

    setTimeout(() => {
      $wuxLoading.hide()
    }, 1500)
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