'use strict'
import util from "../../utils/util.js";
import config from "../../config.js";

Page({
  data: {
    text: "This is detail page.",
    book:{}
  },
  onLoad: function(option) {
    // Do some initialize when page load.
    //获取参数
    //debugger;
    console.log("detail*************"+option.id);
    var self = this;
    let url = config.getBookDetail;
    util.doPost(url,{
      id:option.id?option.id:""
    },function(res){
      self.setData({
        book: res.data.data
      })
    });
    // 获取书本详情
  },
  customData: {
    hi: 'MINA'
  }
})