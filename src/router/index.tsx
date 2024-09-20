import Dashboard from '../views/dashboard/index'
import Login from '../views/login/index'
import HeroList from '../views/heroList/index'
import HeroDetail from '../views/heroDetail/index'
import EquipmentList from '../views/equipmentList/index'



const routes = [
    {
        name:'dashboard',
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
               name:'heroList', path:'/dashboard/heroList',element:<HeroList></HeroList>,
            },
            {
                name:'heroDetail',path:'/dashboard/heroDetail',element:<HeroDetail></HeroDetail>,
            },
            {
                name:'equipmentList', path:'/dashboard/equipmentList',element:<EquipmentList></EquipmentList>,
            },
        ]
    },
    {
       name:'login',path:'/login',element:<Login></Login>,
    },
    {
        path:'*',element:<Dashboard></Dashboard>
    }
]

export default routes