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
export {
    date
}