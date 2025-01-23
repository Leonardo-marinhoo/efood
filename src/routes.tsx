import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/menu/:id',
    element: <Menu />
  }
])

export default Routes
