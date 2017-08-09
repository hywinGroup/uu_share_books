'use strict'
import util from "../../utils/util.js";
import config from "../../config.js";

Page({
  data: {
    text: "This is my page.",
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0, 
    items: []
  },
  onLoad: function(options) {
    var that = this;
    let url = config.getStatuBooksList;

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    let successFuc = function (res) {
      that.setData({
        items: res.data.data
      })
    };
    let subData = {};//获取到个人信息
    util.doPost(url, subData, successFuc);
  },
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  customData: {
    hi: 'MINA'
  }
})