import Login from '../containers/Login'
import NotFound from '../containers/NotFound'
import ArticleList from '../containers/Articles'
import ArticleEdit from '../containers/Articles/edit'
import Settings from '../containers/Settings'
import DashBoard from '../containers/DashBoard'

export const mainRouter  = [{
  pathname: '/login',
  component: Login
},{
  pathname: '/404',
  component:NotFound
}]

export const adminRouter =[{
  pathname: '/admin/dashboard',
  component: DashBoard
},{
  pathname: '/admin/settings',
  component: Settings
},{
  pathname: '/admin/article',
  component: ArticleList,
  exact:true
},{
  pathname: '/admin/article/edit/:id',
  component: ArticleEdit
}]