import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './Routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
