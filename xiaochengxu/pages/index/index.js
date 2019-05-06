//index.js
//获取应用实例
const app = getApp()

Page({
  tapMotto:function(){
    /*wx.navigateTo({
      url: '../acticle/acticle',
    })*/
    wx.redirectTo({
      url: '/pages/acticle/acticle',
    })
  }
})
