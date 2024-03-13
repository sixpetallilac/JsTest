// index.js
Page({
    data:{
        msg:'msgTest',
        nickName:'',
        iconUrl:'',
        codes:''
    },
    //获取用户信息
    getInfo(){
        wx.getUserProfile({
          desc: '获取用户信息',//description
          success: (res) =>{
              console.log(res.userInfo)
              this.setData({
                  nickName: res.userInfo.nickName,
                  iconUrl: res.userInfo.avatarUrl
              })
          }
        })
    },

    wxLoginFunction(){
        wx.login({
          success: (res) => {
            console.log(res.code)
            this.setData({
                codes: res.code
            })
          },
        })
    },

    sendRequest(){
        wx.request({
          url: 'http://127.0.0.1:8080/user/shop/status',
          method:"GET",
          success:(res)=>{
            console.log(res.data)
          }
        })
    }



})
