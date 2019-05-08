var { articles } = require('../../data/db.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*
    articles:[
      {
        avatar:'../../img/ig.jpg',
        data:'2019-05-07',
        title:'我是文章标题',
        img:'../../img/jh.jpg',
        desc:'我是描述',
        star:'30',
        view:'40'
      },
      {
        avatar: '../../img/ti8.jpg',
        data: '2019-05-07',
        title: '我是文章标题',
        img: '../../img/timg.jpg',
        desc: '我是描述',
        star: '40',
        view: '50'
      }
    ]
    */
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log('acticle onLoad');
    /*
    var articles = [
      {
        avatar: '../../img/ig.jpg',
        data: '2019-05-07',
        title: '我是文章标题',
        img: '../../img/jh.jpg',
        desc: '我是描述',
        star: '30',
        view: '40'
      },
      {
        avatar: '../../img/ti8.jpg',
        data: '2019-05-07',
        title: '我是文章标题',
        img: '../../img/timg.jpg',
        desc: '我是描述',
        star: '40',
        view: '50'
      }
    ];
    */
    /*
    this.setData({
      articles: articles
    }, function () {
      console.log('in cb', this.data.articles)
    }.bind(this))
    console.log('out cb', this.data.articles)
    */
    this.setData({
      articles: articles
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //console.log('acticle onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //console.log('acticle onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //console.log('acticle onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //console.log('acticle onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //console.log('acticle onPullDownRefresh');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //console.log('acticle onReachBottom');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    //console.log('acticle onShareAppMessage');
  },
  tapArticleItem: function (ev){
    var articleId = ev.currentTarget.dataset.articleId
    wx.navigateTo({
      url: './article-detail/article-detail?articleId=' +articleId,
    })
  }

})