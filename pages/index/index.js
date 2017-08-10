'use strict'
import util from "../../utils/util.js";
import config from "../../config.js";
import { $wuxDialog } from '../../component/wux';
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
  onModal: function(){
    $wuxDialog.confirm({
      title: 'title',
      content: 'content',
      onConfirm(e) {
        console.log('what!')
      },
      onCancel(e) {
        console.log('why?')
      },
    })
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