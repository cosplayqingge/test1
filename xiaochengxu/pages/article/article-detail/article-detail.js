var { articles } = require('../../../data/db.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlaying:false
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
      /**
       * "0":false
       * "1":true
       */
      var data = {

      }
      data[articleId] = false;
      wx.setStorageSync('articles_collection', data)
    }else{
      isCollected = !!articles_collection[articleId]
    }
    this.setData({ ...article,isCollected:isCollected})
    //监听音乐相关事件
    var backgroundAudioManager = wx.getBackgroundAudioManager();
    backgroundAudioManager.onPlay(function () {
      this.setData({
        isPlaying: true
      })
    }.bind(this))
    backgroundAudioManager.onPause(function () {
      this.setData({
        isPlaying: false
      })
    }.bind(this)) 
  },
  /**
   * 处理收藏
   */
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
    var articles_collection = wx.getStorageSync('articles_collection');
    var isCollected = articles_collection[this.data.articleId];
    //改变storage里面的数据
    articles_collection[this.data.articleId] = !isCollected;
    //从新存
    wx.setStorageSync('articles_collection', articles_collection);
    //改变视图页面
    this.setData({
      isCollected:!isCollected
    },function(){
      wx.showToast({
        title: isCollected ? '取消收藏' : '收藏成功',
      })
    })
  },
  /**
   * 处理分享
   */
  tapShare:function(){
    var itemList = ['分享到朋友圈', '分享到QQ', '分享到微博']
    wx.showActionSheet({
      itemList: itemList,
      success: function (res){
        wx.showToast({
          title: itemList[res.tapIndex] + '成功',
        })
      }
    })
  },
/**
 * 处理音乐播放
*/
  tapMusic:function(){
    var backgroundAudioManager = wx.getBackgroundAudioManager();
    var isPlaying = this.data.isPlaying;
    if(isPlaying){
      backgroundAudioManager.pause();
      this.setData({
        isPlaying: false
      })
    }else{
      var music = articles[this.data.articleId].music;
      backgroundAudioManager.src = music.src;
      backgroundAudioManager.coverImgUrl = music.coverImgUrl;
      backgroundAudioManager.title = music.title;
           /*
    //外链地址
    backgroundAudioManager.src = 'http://www.170mv.com/kw/other.web.rh01.sycdn.kuwo.cn/resource/n3/38/49/2811545095.mp3';
    //外链图片
    backgroundAudioManager.coverImgUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1557304988&di=932076c2bdab2b2556bbb2ea001bb42f&src=http://a3.topitme.com/7/51/44/117242004224244517o.jpg';
    //外链标题
    backgroundAudioManager.title = '二十岁的某一天';
    */
      this.setData({
        isPlaying: true
      })
    }
 
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