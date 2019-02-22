// pages/posts/posts.js

const postsData = require('../../data/posts-data.js');
const postContents = postsData.localData;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: "true",
    autoplay: "true", 
    interval: "3000",
    duration: "1000",
    imgUrls: [{id:1, url:'/images/content001.png'}, {id:2, url:'/images/content002.png'}, {id:3, url:'/images/content003.png'}]
  },

  onPostTap: (event) => {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' +postId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({postContents});
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
  }
})