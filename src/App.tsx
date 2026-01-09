import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './Routes'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
