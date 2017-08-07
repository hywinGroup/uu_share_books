'use strict'

function doPost(url,data,success,fail,complete){
	wx.request({
	  url: url, 
	  data: data,
	  header: {
	      'content-type': 'application/json'
	  },
	  method:"POST",
	  success: function(res) {
	    console.log(res.data)
	    if(success){
	    	success(res);
	    }
	  },
	  fail:function(error){
	  	console.log(error);
	  	if(fail){
	  		fail(error);
	  	}else{
	      wx.showModal({
	        content: error,
	        showCancel: false,
	        confirmText: "确定"
	      })
	  	}
	  },
	  complete:function(){
	  	if(complete)complete();
	  }
	})
}
function doGet(url,success,fail,complete){
	wx.request({
	  url: url, 
	  header: {
	      'content-type': 'application/json'
	  },
	  method:"GET",
	  success: function(res) {
	    console.log(res.data)
	    if(success){
	    	success(res);
	    }
	  },
	  fail:function(error){
	  	console.log(error);
	  	if(fail){
	  		fail(error);
	  	}else{
	      wx.showModal({
	        content: error,
	        showCancel: false,
	        confirmText: "确定"
	      })
	  	}
	  },
	  complete:function(){
	  	if(complete)complete();
	  }
	})
}
module.exports  = {
	doPost,
	doGet
}