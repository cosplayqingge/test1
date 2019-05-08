var { articles } = require('../../../data/db.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var articleId = options.articleId;
    var article = articles[articleId]
    // console.log(article)
    /*处理收藏状态*/
    var articles_collection = wx.getStorageSync('articles_collection');
    var isCollected = false;
    if (!articles_collection){
      console.log('111')
      /**
       * "0":false
       * "1":true
       */
      var data = {

      }
      data[articleId] = false;
      wx.setStorageSync('articles_collection', data)
    }else{
      console.log('22')
      isCollected = articles_collection[articleId]
    }
    this.setData({ ...article,isCollected:isCollected})
  },
  tapCollect:function(){
     /*
    wx.setStorageSync('key1',123)
    wx.setStorageSync('key2', 'hello');
    wx.setStorageSync('key3', {
      name:'tom'
    })
    wx.setStorageSync('key1', 555)
    console.log(wx.getStorageSync('key1'))
    console.log(wx.getStorageSync('key2'))
    console.log(wx.getStorageSync('key3'))

    wx.removeStorageSync('key1')
    wx.clearStorageSync();
    */
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