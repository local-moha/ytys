const currency = function (v) {
    return "$"+v.toFixed(2);
}
const date = function (v){
    if(v){
        const time = new Date(v);
        return time.getFullYear() + "-" +
            ((time.getMonth() + 1)).toString().padStart(2, 0) + "-" +
            (time.getDate()).toString().padStart(2, 0) + " " +
            (time.getHours()).toString().padStart(2, 0) + ":" +
            (time.getMinutes()).toString().padStart(2, 0) + ":" +
            (time.getSeconds()).toString().padStart(2, 0);
    }else{
        return "无"
    }

}
const lastDate =
    function leftTimer(leftTime){ 
        var days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10); //计算剩余的天数 
        var hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时 
        var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟 
        var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数 
        days = checkTime(days); 
        hours = checkTime(hours); 
        minutes = checkTime(minutes); 
        seconds = checkTime(seconds); 
      return days+'天'+hours+'小时'+minutes+'分'
    }
       function checkTime(i){ //将0-9的数字前面加上0，例1变为01 
        if(i<10) 
        { 
        i = "0" + i; 
        } 
        return i; 
       } 

export default {
    date,
    currency,
    lastDate
}