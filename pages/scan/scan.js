'use strict'
import util from "../../utils/util.js";
import config from "../../config.js";

Page({
  data: {
    text: "This is scan page."
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  scanCode:function(){
    //只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res)
      }
    })
  },
  customData: {
    hi: 'MINA'
  }
})