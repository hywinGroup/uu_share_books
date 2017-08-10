'use strict'
import util from "../../utils/util.js";
import config from "../../config.js";

Page({
  data: {
    text: "This is detail page.",
    book:{},
    urlList :[
      {
        id : "1001",
        text:"莘庄龙之梦绘本馆"
      },
      {
        id : "1002",
        text:"徐汇区港汇绘本馆"
      }
    ]
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
  toToMap:function(event){
    var urlId = event.currentTarget.dataset.id;
    var self = this;
    let url = config.getStoreDetail;
    //获取门店地址
    util.doPost(url,{
      id:urlId
    },function(res){
      if(res.data && res.data.data){
        let resutObj = res.data.data;
        wx.openLocation({
          latitude:resutObj.latitude,
          longitude:resutObj.longitude,
          scale:18,
          name:resutObj.name,
          address:resutObj.address
        })
      }
    });
  },
  customData: {
    hi: 'MINA'
  }
})