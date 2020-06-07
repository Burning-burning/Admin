import {Login, NotFound, Settings, ArticleList, ArticleEdit, DashBoard} from '../containers'
export const mainRouter  = [{
  pathname: '/login',
  component: Login
},{
  pathname: '/404',
  component:NotFound
}]

export const adminRouter =[{
  pathname: '/admin/dashboard',
  component: DashBoard,
  title:'仪表盘',
  isNav: true
},{
  pathname: '/admin/article',
  component: ArticleList,
  title: '文章列表',
  isNav: true,
  exact:true
},{
  pathname: '/admin/article/edit/:id',
  component: ArticleEdit
},{
  pathname: '/admin/settings',
  component: Settings,
  title: '设置',
  isNav: true
}]