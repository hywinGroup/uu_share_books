'use strict'
import util from "../../utils/util.js";
import config from "../../config.js";
Page({
  data: {
    text: "This is theme page.",
    items:[],
    searchType: 'keyword',
    hotKeyword: ['0-3岁', '权志郎', '冰雪奇缘'],
    ageKeyword: ['0-2岁', '3-6岁', '7-9岁', '9岁以上'],
    langKeyword: ['中文', '英文',],
    themeTag: ['交通工具', '情绪管理', '友情', '亲情', '入园', '性教育', '无字书', '音乐', '古诗词', '儿歌', '建筑', '幽默', '科普'],
  },
  onLoad: function(options) {
    var self = this;
    let url = config.getBooksList;
    let successFuc = function (res) {
      console.log("success");
      self.setData({
        items: res.data.data
      })
      console.log(res.data.data);
    };
    //util.doGet(url, successFuc);
    util.doPost(url,{},successFuc);
  },
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  customData: {
    hi: 'MINA'
  }
})