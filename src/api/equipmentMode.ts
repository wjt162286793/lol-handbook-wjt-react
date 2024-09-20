
import request from "@/utils/request";

//获取英雄列表
export function getEquirementList (){
 return request({
    url:'/lolWjtApi/equirementMode/equirementList',
    method:'GET'
 })
}

