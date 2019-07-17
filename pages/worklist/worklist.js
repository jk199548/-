// pages/worklist/worklist.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    workexid:0,
    workex:['不限','一年以内','1-3年','3年以上'],
    radioarr:['不限','男','女'],
    isshaixuan:false,
    shaixuanisactive:false,
    zhinengpaixuisactive:false,
    zhinengpaixu:'智能排序',
    zhiwei:'职位',
    shaixuan:'筛选',
    iszhineng:false,//是否显示模态框
    positionnaturelist:['全职','兼职','实习'],
    positionnatureid:0,
    zhinengpaixulist:['离我最近','薪资最高','奖励最高']
  },
  //跳转到职位详情页面
  topositiondetail:function(e){
    wx.navigateTo({
      url: '../positiondetail/positiondetail',
    })
  },
  // 筛选的点击事件
  shaixuanclick:function(e){
    var that = this;
    if(that.data.isshaixuan){
      that.setData({
        isshaixuan:false,
        iszhineng:false,
        zhinengpaixuisactive:false,
        shaixuanisactive:false,
      })
    }else{
      that.setData({
        isshaixuan:true,
        iszhineng: false,
        zhinengpaixuisactive: false,
        shaixuanisactive:true,
      })
    }
  },
  // 选择工作经验点击事件
  chooseworkex:function(e){
    var that = this;
    that.setData({
      workexid:e.currentTarget.dataset.id
    })
  },
  // radio改变事件
  radiochange:function(e){
    console.log(e)
  },
  // 智能排序点击事件
  zhinengpaixuclick:function(e){
    var that = this;
    if (that.data.zhinengpaixuisactive == false && that.data.iszhineng ==false){
      that.setData({
        iszhineng: true,
        zhinengpaixuisactive:true,
        isshaixuan:false,
        shaixuanisactive:false,
      })
    }else if(that.data.zhinengpaixuisactive==true && that.data.iszhineng == false){
      that.setData({
        iszhineng:true,
        zhinengpaixuisactive:true,
        isshaixuan: false,
        shaixuanisactive: false,
      })
    } else if (that.data.zhinengpaixuisactive == true && that.data.iszhineng == true){
      that.setData({
        iszhineng:false,
        zhinengpaixuisactive:true,
        isshaixuan: false,
        shaixuanisactive: false,
      })
    } else if (that.data.zhinengpaixuisactive == false && that.data.iszhineng == true){
      that.setData({
        iszhineng:false,
        iszhineng:true,
        isshaixuan: false,
        shaixuanisactive: false,
      })
    }
  },
  // 点击智能排序下的item点击事件
  choosezhinenglist:function(e){
    var that = this;
    that.setData({
      zhinengpaixuisactive: true,
      iszhineng: false,
      zhinengpaixu: that.data.zhinengpaixulist[e.currentTarget.dataset.id]
    })
    
  },
  // 点击空白模态层事件
  showmodal:function(e){
    var that = this;
    that.setData({
      iszhineng:false,
      zhinengpaixuisactive:false,
      isshaixuan:false,
      shaixuanisactive:false,
    })
  },
  // 跳转到职位选择页面
  tochooseposition:function(){
    wx.navigateTo({
      url: '../positionlist/positionlist',
    })
  },
  // 选择职位性质点击事件
  choosepositionnature:function(e){
    
    var that = this;
    that.setData({
      positionnatureid: e.currentTarget.dataset.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})