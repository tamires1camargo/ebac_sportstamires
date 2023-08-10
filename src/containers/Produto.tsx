import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

type Props = {
  produtos?: ProdutoType[]
  favoritos: ProdutoType[]
}

const ProdutosComponent = ({ favoritos }: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  const { data: produtos, isLoading } = useGetProdutosQuery()
  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produto>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produto>
    </>
  )
}

export default ProdutosComponent
