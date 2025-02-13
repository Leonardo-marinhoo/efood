import { GlobalStyle } from './styles/GlobalStyle'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes'

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={Routes} />
    </>
  )
}

export default App
