import './App.css';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
import AuthRoute from '@/components/AuthRoute'
// 导入必要组件
import { lazy, Suspense } from 'react'
import { history } from './utils'
// 按需导入路由组件
const Login = lazy(() => import('./pages/Login/index'))
const GeekLayout = lazy(() => import('./pages/Layout/index'))
const Home = lazy(() => import('./pages/Home/index'))
const Article = lazy(() => import('./pages/Article'))
const Publish = lazy(() => import('./pages/Publish'))

function App() {
  return (
    <HistoryRouter history={history}>
      <Suspense
        fallback={
          <div
            style={{
              textAlign: 'center',
              marginTop: 200
            }}
          >
            loading...
          </div>
        }
      >
        <Routes>
          {/* 需要鉴权的路由 */}
          <Route path="/*" element={
            <AuthRoute>
              <GeekLayout />
            </AuthRoute>
          }>
            {/* 二级路由默认页面 */}
            <Route index element={<Home />} />
            <Route path="article" element={<Article />} />
            <Route path="publish" element={<Publish />} />
          </Route>
          {/* 不需要鉴权的路由 */}
          <Route path='/login' element={<Login />} />
        </Routes>
      </Suspense>
    </HistoryRouter>

  );
}

export default App;
