'use strict'
import util from "../../utils/util.js";
import config from "../../config.js";
Page({
  data: {
    text: "This is theme page.",
    searchType: 'keyword',
    hotKeyword: ['0-3岁', '权志郎', '冰雪奇缘'],
    searchItems:[{
      'title': '年龄',
      'currentItem': 0,
      'Arr': ['0-2岁', '3-6岁', '7-9岁', '9岁以上']
    },{
      'title':'语种',
      'currentItem': 0,
      'Arr': ['中文', '英文']
    },{
      'title':'主题',
      'currentItem': 0,
      'Arr': ['交通工具', '情绪管理', '友情', '亲情', '入园', '性教育', '无字书', '音乐', '古诗词', '儿歌', '建筑', '幽默', '科普'],
    }]
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
    util.doPost(url,{},successFuc);
  },
  handleToggle: function(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    var parentId = e.target.id;
    //设置当前样式
    that.setData({
      'currentItem':id
    })
  },
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  goToDetail:function(event){
      var bookId = event.currentTarget.dataset.id;
      console.log("book id:"+bookId);
      wx.navigateTo({
          url: '../detail/detail?id='+bookId
      })
  },
  customData: {
    hi: 'MINA'
  }
})