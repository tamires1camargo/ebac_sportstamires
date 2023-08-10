import { Provider } from 'react-redux'
import { GlobalStyle } from './styles'

import { store } from './store'
import Header from './components/Header'
import Produtos from './containers/Produto'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos favoritos={[]} />
      </div>
    </Provider>
  )
}

export default App
