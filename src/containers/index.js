import Loading from '../components/Loading'
import Loadable from 'react-loadable'


const DashBoard = Loadable({
  loader: ()=>import('./DashBoard'),
  loading: Loading
})
const Login = Loadable({
  loader: ()=>import('./Login'),
  loading: Loading
})
const Settings = Loadable({
  loader: ()=>import('./Settings'),
  loading: Loading
})
const ArticleList = Loadable({
  loader: ()=>import('./Articles'),
  loading: Loading
})
const ArticleEdit = Loadable({
  loader: ()=>import('./Articles/edit'),
  loading: Loading
})
const NotFound = Loadable({
  loader: ()=>import('./NotFound'),
  loading: Loading
})

export {
  Login,
  DashBoard,
  ArticleList,
  ArticleEdit,
  Settings,
  NotFound
}