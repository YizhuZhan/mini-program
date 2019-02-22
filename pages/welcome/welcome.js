// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onTap: (event) => {
    // console.log("ontap");
    // wx.navigateTo({
    //     url: '../posts/posts',
    //     success: (res) => {},
    //     fail: () => {},
    //     complete: () => {}
    //   }
    // );
    wx.redirectTo({
      url: '../posts/posts',
    });
  },
  // onTextTap: () => {
  //   console.log("onTextTap");
  // },
 
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload");
  }
})