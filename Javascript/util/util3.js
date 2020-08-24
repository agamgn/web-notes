/**
 * RGB模式转十六进制
 */

 const RGBToHex=(r,g,b)=>((r<<16)+(g<<8)+b).toString(16).padStart(6,"0");


 /**
  * 返回两个日期之间以天为单位的差值
  */
 const getDayDiff = (date1, date2) => ((date2 - date1) / (1000 * 3600 * 24));