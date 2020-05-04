const date = function (v) {
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
//换算yyyy-mm-dd
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


export {
    date,
    changeArr,
    getThemeId,
    orderDate,
    Date2CN,
    countDate,
    date2Data
}