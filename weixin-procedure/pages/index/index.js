//index.js
//获取应用实例

Page({
  data: {
   msgData:[]
  },
  changeInputVal(ev){
    this.setData({
      inputVal: ev.detail.value
    })

  },
  delMsg(ev){
    var n = ev.target.dataset.index;
    var list = this.data.msgData;
    list.splice(n,1);
    this.setData({
      msgData:list
    })
  },
  addMsg(){
    var list = this.data.msgData;
    list.push({
      msg: this.data.inputVal
    });
    //更新
    this.setData({
      msgData:list,
      inputVal:''
    })
  }
})
