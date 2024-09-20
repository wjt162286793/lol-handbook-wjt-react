import request from "@/utils/request";

//获取英雄列表
export function getHeroList (){
 return request({
    url:'/lolWjtApi/heroMode/heroList',
    method:'GET'
 })
}

//根据id获取技能详情
export function getHeroSkillList (params){
    return request({
       url:'/lolWjtApi/heroMode/heroSkill',
       method:'GET',
       params:params
    })
}

//根据id获取英雄皮肤
export function getHeroDressList (params){
    return request({
      url:'/lolWjtApi/heroMode/dressList',
      method:'GET',
      params:params
    })
}
//根据id获取英雄具体信息
export function getHeroStatisticsDetail(params){
  return request({
    url:'/lolWjtApi/heroMode/heroStatisticsDetail',
    method:'GET',
    params:params
  })
}
//根据id获取英雄符文推荐
export function getHeroRelationRuneList(params){
  console.log(params,'判断题')
  return request({
    url:'/lolWjtApi/heroMode/getRelationRuneList',
    method:'GET',
    params:params
  })
}