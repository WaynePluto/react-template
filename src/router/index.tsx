import { Home } from '@/views/home'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/template',
    loader: ({ request }) => {
      const url = new URL(request.url)
      return { page: url.searchParams.get('page') }
    },
    lazy: async () => {
      const { Template } = await import('@/views/template')
      return { Component: Template }
    },
  },
])

export default router
