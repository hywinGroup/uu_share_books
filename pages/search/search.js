Page({
  data: {
    text: "This is search page.",
    searchKey : ""
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
  },
  onPageScroll: function() {
    // Do something when page scroll
  },
  // Event handler.
  viewTap: function() {
    // this.setData({
    //   text: 'Set some data for updating view.'
    // })
  },
  searchBooks:function(){
    //var searchKey = document.getElementById("searchKey").value;
    var self = this;
    console.log("searchKey:"+self.data.searchKey);
  },
  getInputValue:function(e){
    this.setData({
      searchKey:e.detail.value
    });
  },
  customData: {
    hi: 'MINA'
  }
})