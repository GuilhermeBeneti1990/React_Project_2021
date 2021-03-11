import Food1 from 'assets/food_01.jpg'
import Food2 from 'assets/food_02.jpg'
import Food3 from 'assets/food_03.jpg'
import Food4 from 'assets/food_04.jpg'
import Food5 from 'assets/food_05.jpg'
import Food6 from 'assets/food_06.jpg'

const products = [
  {
    id: 1,
    title: 'Produto 01',
    slang: 'primeiro-produto',
    description: 'Descrição desse produto ou serviço',
    image: Food1
  },
  {
    id: 2,
    title: 'Produto 02',
    slang: 'segundo-produto',
    description: 'Descrição desse produto ou serviço',
    image: Food2
  },
  {
    id: 3,
    title: 'Produto 03',
    slang: 'terceiro-produto',
    description: 'Descrição desse produto ou serviço',
    image: Food3
  },
  {
    id: 4,
    title: 'Produto 04',
    slang: 'quarto-produto',
    description: 'Descrição desse produto ou serviço',
    image: Food4
  },
  {
    id: 5,
    title: 'Produto 05',
    slang: 'quinto-produto',
    description: 'Descrição desse produto ou serviço',
    image: Food5
  },
  {
    id: 6,
    title: 'Produto 06',
    description: 'Descrição desse produto ou serviço',
    image: Food6
  }
]

export const useProducts = () => {
  return products
}

export const useProduct = ({ slang }) => {
  return products.find((p) => p.slang === slang)
}
