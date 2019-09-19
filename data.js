/**
 * @namespace findIndex 获取对应索引号
 * @param params  传入指标值
 * **/
function findIndex(params){
    let index;
    for (let i=0; i<ascension.quality[0].indicatorValue.length;i++){
        if (params === ascension.quality[0].indicatorValue[i]){
            index = i;
            return index;
        }
    }
}
/**
 * @namespace getCityname 获取所有城市名
 * **/
let setCityname = function(){
    let arr = [];
    for (let i=0;i<city.length;i++){
        arr.push(city[i].cname[1]);
    }
    return arr;
}
/**
 * @namespace getCityscore 获取对应的得分序列
 * @param params  params为String类型数据，获取对应城市得分序列
 *                params为Number类型，获取对应指标值的得分序列
 * **/
let getCityscore = function(params){
    if (typeof params == 'string'){
        for (let i=0;i<city.length;i++){
            if(params===city[i].cname){
                return city[i].score
            }
        }
    } else{
        let index = findIndex(params);//找到对应指标值的索引号
        let arr = [];
        for(let i=0; i<city.length; i++) {
            arr.push(city[i].score[index]);
        }
        return arr;
    }
}
/**
 * @namespace getScorePositive 获取得分高于平均分的值
 * @param qualityName  传入对应的指标名称
 * **/
let getScorePositive = function(qualityName){
    // let index = findIndex(qualityName);
    let arr = [];
    for(let i=0; i<city.length; i++) {
        let numArry = (city[i].score[0] - ascension.quality[0].avg).toFixed(2);
        if (numArry < 0) {
            numArry = 0;
        }
        arr.push(numArry);
    }
    return arr;
}
/**
 * @namespace getScoreNegative 获取低于平均分的值
 * @param qualityName  传入对应的指标名称
 * **/
let getScoreNegative = function(qualityName){
    // let index = findIndex(qualityName);
    let arr = [];
    for(let i=0; i<city.length; i++) {
        let numArry = (city[i].score[0] - ascension.quality[0].avg).toFixed(2);
        if (numArry < 0) {
            numArry = Math.abs(numArry);
        }else{
            numArry = 0;
        }
        arr.push(numArry);
    }
    return arr;
}
let func ={//所有方法的集合
    setCityname,//设置x轴的值(城市名)
    getCityscore,//获取对应城市的数值
    getScorePositive,//获取对应数值与平均值的差(正数)
    getScoreNegative,//获取对应数值与平均值的差(负数)
}
module.exports ={
    city:city,
    ascension:ascension,
    func:func
};
