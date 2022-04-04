import { useQuery } from 'react-query'
import { api } from '../../services/api'

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type Params = {
  page: number
}

type GetUsersResponse = {
  totalCount: number;
  users: User[];
}

const getUsers = async (page: number): Promise<GetUsersResponse> => {
    const { data, headers } =  await api.get('users', {
      params: {
        page
      }
    })

    const totalCount = Number(headers['x-total-count'])
    const users = data.users.map(user => ({
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      ...user
    }))

    return {
      users,
      totalCount
    }
}

export function useUsers({ page }: Params) {
  return useQuery(['users', {page}], () => getUsers(page) , { staleTime: 1000 * 5 })
}