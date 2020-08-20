// 时间戳转YMD
/*
*   timestamp 当前时间戳，毫秒
*   formats 时间格式，包括：
*               1. Y-m-d
*               2. Y-m-d H:i:s
*               3. Y年m月d日
*               4. Y年m月d日 H时i分s秒
*/
dateFormat = (timestamp, formats) => {
    formats = formats || "Y-m-d";
    let zero=(value)=>(value<10)?("0"+value) :value
    let myDate = timestamp ? new Date(timestamp) : new Date();
    let year = myDate.getFullYear();
    let month = zero(myDate.getMonth() + 1);
    let day = zero(myDate.getDate());
    let hour = zero(myDate.getHours());
    let minite = zero(myDate.getMinutes());
    let second = zero(myDate.getSeconds());

    // 此处正则的使用
    return formats.replace(/Y|m|d|H|i|s/ig, (matches)=> {
        return ({
            Y: year,
            m: month,
            d: day,
            H: hour,
            i: minite,
            s: second
        })[matches];
    });
};

// 计算时间N之前
time_filter = time => {
    // 转为数字
    time+=0
    let difTime = new Date().getTime() - time;
    let { h, m, s } = { h: parseInt(difTime / (3600 * 1000)), m: parseInt(difTime / (60 * 1000)), s: parseInt(difTime / 1000) };
    let msg = "";
    if (m < 1) {
      msg = `${s}秒前`
    } else if (m >= 1 && h < 1) {
      msg = `${m}分钟前`;
    } else if (h >= 1 && h <= 24) {
      msg = `${h}小时前`;
    } else if (h > 24) {
      h = parseInt(h / 24)
      msg = `${h}天前`;
    }
    return msg;
  }
  

//   获取当前时间12小时之前的时间
getHalfHour = () => {
    let date = new Date(new Date().getTime() - 30 * 60 * 1000);
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    return hh + ':' + mm + ':' + ss
  }
  
