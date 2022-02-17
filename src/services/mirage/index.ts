import { createServer, Factory, Model } from 'miragejs'

type User = {
  name: string;
  email: string;
  created_at: string;
}

const makeServer = () => {
  const server = createServer({
    models: {
      users: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name: (i: number) => `User ${i + 1}`,
        email: (i: number) => `email.${i + 1}@mail.com`,
        createdAt: (i: number) => `2022-0${i + 1}-${i + 1}`
      })
    },

    seeds(server) {
      server.createList('user', 10) 
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750
      this.get('/users')
      this.post('/users')
      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}

export { makeServer }