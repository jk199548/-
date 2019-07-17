// pages/positionlist/positionlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ischoose:false,
    selectedid:0,
    chooselist:[],
    positionlist:['推荐职位','餐饮服务','家政/保洁','客服','物业'],
    positionlistright:['淘宝客服','分拣员','服务员','前台','收银'],
    showright:false,
  },
  //删除已选岗位
  delitem:function(e){
    console.log(e);
    var that = this;
    let chooselist = that.data.chooselist;
    chooselist.splice(e.currentTarget.dataset.id,1);
    that.setData({
      chooselist
    })
  },
  //展示右边的具体职位
  showright:function(e){
    console.log(e);
    var that = this;
    that.setData({
      selectedid:e.currentTarget.dataset.id
    })
  },
  //添加岗位到已选岗位
  addtochooselist:function(e){
    
    var that =this;
    
    if (that.data.chooselist.includes(that.data.positionlistright[e.currentTarget.dataset.id])){
      wx.showToast({
        title: '请不要重复选择相同的职位',
        duration:2000,
        icon:"none",
        mask:true,
      })
    }else{
      let chooselist = that.data.chooselist;
      chooselist.push(that.data.positionlistright[e.currentTarget.dataset.id]);
      that.setData({
        chooselist,
        ischoose:true
      })
    }
  },
  // 点击完成按钮
  choosecomplete:function(e){
    console.log(this.data.chooselist.length)
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