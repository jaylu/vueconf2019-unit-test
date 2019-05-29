import { http } from '../http'

export async function getAllMessages () {
  return http.get('/api/v1/messages')
}

export async function postMessage (message) {
  return http.post('/api/v1/messages', message)
}

export async function searchMessage (search) {
  return http.get('/api/v1/messages', {
    params: {
      search
    }
  })
}
