const faker = require('faker')

// import Food01 from 'assets/food_01.jpg'

const buildProducts = (size) => {
  const result = []

  for (let i = 0; i < size; i++) {
    result.push({
      id: i + 1,
      image: '',
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      slang: faker.lorem.slug()
    })
  }

  return result
}

console.log(JSON.stringify(buildProducts(100), null, '  '))
