import Item1 from 'assets/Item_01.jpg'
import Item2 from 'assets/Item_02.jpg'
import Item3 from 'assets/Item_03.jpg'
import Item4 from 'assets/Item_04.jpg'
import Item5 from 'assets/Item_05.jpg'
import Item6 from 'assets/Item_06.jpg'

const products = [
  {
    id: 1,
    title: 'Produto 01',
    slang: 'primeiro-produto',
    description: 'Breve resumo desse produto',
    image: Item1
  },
  {
    id: 2,
    title: 'Produto 02',
    slang: 'segundo-produto',
    description: 'Breve resumo desse produto',
    image: Item2
  },
  {
    id: 3,
    title: 'Produto 03',
    slang: 'terceiro-produto',
    description: 'Breve resumo desse produto',
    image: Item3
  },
  {
    id: 4,
    title: 'Produto 04',
    slang: 'quarto-produto',
    description: 'Breve resumo desse produto',
    image: Item4
  },
  {
    id: 5,
    title: 'Produto 05',
    slang: 'quinto-produto',
    description: 'Breve resumo desse produto',
    image: Item5
  },
  {
    id: 6,
    title: 'Produto 06',
    slang: 'sexto-produto',
    description: 'Breve resumo desse produto',
    image: Item6
  }
]

export const useProducts = () => {
  return products
}

export const useProduct = ({ slang }) => {
  return products.find((p) => p.slang === slang)
}
