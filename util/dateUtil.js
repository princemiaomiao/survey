// 格式化日期
exports.format_datetime = function (date){
    if (!date){
        return "";
    };
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    hour = ((hour < 10) ? '0' : '') + hour;
    minute = ((minute < 10) ? '0' : '') + minute;
    second = ((second < 10) ? '0': '') + second;

    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
};

// 格式化日期,到日
exports.format_datetime_day = function (date){
    if (!date){
        return "";
    };
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    return year + '-' + month + '-' + day ;
};

/*把时长转换成分秒数据*/
exports.consultTimeFormatToMinutes=function(consultTime){
    var second = consultTime/1000;
    var minute=second/60;

    minute=parseInt(minute);
    second=parseInt(second)-minute*60;

    minute = ((minute < 10) ? '0' : '') + minute;
    second = ((second < 10) ? '0': '') + second;

    return minute+':'+second;
}
