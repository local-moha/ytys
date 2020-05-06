const dateChoose = function (v) {
    if (v) {
        const time = new Date(v);
        return (time.getDate()).toString() + "天" +
            (time.getHours()).toString() + "小时" +
            (time.getMinutes()).toString() + "分"
    } else {
        return ""
    }
}
const changeArr = (arr, len = 10) => {
    const arr2 = [];
    for (let i = 0; i < arr.length; i += len) {
        arr2.push(arr.slice(i, i + len));
    }
    return arr2;
}
const getThemeId = (str) => {
    const newStr = str.split("=")[1]
    return newStr;
}
//将时间戳换算yyyy-mm-dd
const orderDate = (date) => {
    const newDate = new Date(date);
    return newDate.getFullYear() + "-" +
        ((newDate.getMonth() + 1)).toString().padStart(2, 0) + "-" +
        (newDate.getDate()).toString().padStart(2, 0)
}
//换成月日
const Date2CN = (str) => {
    str = str.replace(/-/g, '/');
    const date = new Date(str)
    return (((date.getMonth() + 1)).toString() + "月" + (date.getDate()).toString()) + "日"
}
//换算入住多少晚
const countDate = (start, end) => {
    end = end.replace(/-/g, '/');
    start = start.replace(/-/g, '/');
    const end_date = new Date(end);
    const start_date = new Date(start);
    const count_date = end_date - start_date;
    return "共" + parseInt(count_date / (1000 * 60 * 60 * 24)) + "晚"
}
//把yyyy-mm-dd换成yyyymmdd
const date2Data = (str) => {
    str = str.replace(/-/g, '');
    return str
}

const currency = function (v) {
    return "$" + v.toFixed(2);
}
const date = function (v) {
    if (v) {
        const time = new Date(v);
        return time.getFullYear() + "-" +
            ((time.getMonth() + 1)).toString().padStart(2, 0) + "-" +
            (time.getDate()).toString().padStart(2, 0) + " " +
            (time.getHours()).toString().padStart(2, 0) + ":" +
            (time.getMinutes()).toString().padStart(2, 0) + ":" +
            (time.getSeconds()).toString().padStart(2, 0);
    } else {
        return "无"
    }

}
const lastDate =
    function leftTimer(leftTime) {
        var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
        var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
        var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟 
        var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数 
        days = checkTime(days);
        hours = checkTime(hours);
        minutes = checkTime(minutes);
        seconds = checkTime(seconds);
        return "剩余" + days + '天' + hours + '小时' + minutes + '分'
    }
function checkTime(i) { //将0-9的数字前面加上0，例1变为01 
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

export {
    dateChoose,
    changeArr,
    getThemeId,
    orderDate,
    Date2CN,
    countDate,
    date2Data,
    date,
    currency,
    lastDate
}