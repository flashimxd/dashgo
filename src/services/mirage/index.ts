import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs'

type User = {
  name: string;
  email: string;
  created_at: string;
}

const makeServer = () => {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer
    },
    models: {
      user: Model.extend<Partial<User>>({})
    },
    factories: {
      user: Factory.extend({
        name: (i: number) => `User ${i + 1}`,
        email: (i: number) => `email.${i + 1}@mail.com`,
        createdAt: (i: number) => `2022-0${i + 1}-${i + 1}`
      })
    },
    seeds(server) {
      server.createList('user', 200) 
    },
    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/users', function(schema, req) {
        console.log({ req })
        const { page = 1, per_page = 10 } = req.queryParams
        const total = schema.all('user').length
        const parsedPage = Number(page)
        const parsedPerPage = Number(per_page)

        const pageStart = (parsedPage - 1) * parsedPerPage
        const pageEnd = pageStart + parsedPerPage

        const users = this.serialize(schema.all('user'))
          .users.slice(pageStart, pageEnd)
        
          console.log({ users })
        return new Response(
          200,
          { 'x-total-count': String(total) },
          { users }
        )
      })
      this.post('/users')
      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}

export { makeServer }