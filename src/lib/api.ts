import axios from 'axios'
import type { AuthMode } from '../stores/uiStore'

export const api = axios.create({
  baseURL: '/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

type PortalPayload = {
  mode: AuthMode
  fullName?: string
  phoneNumber?: string
  email: string
}

type PortalResponse = {
  message: string
}

export async function submitPortalAccessRequest(payload: PortalPayload) {
  const response = await api.request<PortalResponse>({
    url: '/api/portal-access',
    method: 'post',
    data: payload,
    adapter: async (config) => {
      await new Promise((resolve) => setTimeout(resolve, 450))

      return {
        data: {
          message:
            payload.mode === 'signin'
              ? 'Sign-in is not connected yet. This is a reviewed client portal flow.'
              : 'Account creation is not connected yet. This is a reviewed client portal flow.',
        },
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      }
    },
  })

  return response.data
}
