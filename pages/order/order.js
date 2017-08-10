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
  }
})