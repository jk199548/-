//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    latitude:'',//纬度
    longitude:'',//经度
    nowlocation:''
  },
  onLoad: function () {
    
  },
  lookmap:function(res){
    var that = this;
    wx.getLocation({
      success: function(res) {
        console.log(res);
        that.setData({
          latitude : res.latitude,
          longitude:res.longitude
        })
      },
    })
  },
  checkmap:function(){
    var that = this;
    wx.openLocation({
      latitude: that.data.latitude,
      longitude: that.data.longitude,
    })
  },
  choosemap:function(){
    var that = this;
    wx.chooseLocation({
      success: function(res) {
        console.log(res),
        that.setData({
          nowlocation:res.name
        })
      },
    })
  }
})
