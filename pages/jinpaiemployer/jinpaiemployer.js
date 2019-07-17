// pages/jinpaiemployer/jinpaiemployer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    regionarr: ['四川省', '成都市','武侯区'],
    province:'四川省',
    city:'成都市',
    area:'武侯区'
  },
  changeregion:function(e){
    console.log(e);
    var newregionarr = [];
    newregionarr[0] = e.detail.value[0];
    newregionarr[1] = e.detail.value[1];
    newregionarr[2] = e.detail.value[2];
    var that = this;
    that.setData({
      province:e.detail.value[0],
      city: e.detail.value[1],
      area: e.detail.value[2],
      regionarr:newregionarr,
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