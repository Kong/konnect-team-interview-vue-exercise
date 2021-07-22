const faker = require('faker')

module.exports = () => {
  const data = { service_packages: [] }

  // Create 1000 users
  for (let i = 0; i < (Math.random() * 100) + 50; i++) {
    data.service_packages.push({
      id: faker.random.uuid(),
      name: faker.commerce.productName(),
      description: faker.hacker.phrase() + faker.company.catchPhrase(),
      versions: (() => {
        return [...Array(faker.random.number).keys()].map(() => ({
          id: faker.random.uuid(),
          name: faker.commerce.department(),
          description: faker.random.words()
        }))
      })()
    })
  }

  return data
}
