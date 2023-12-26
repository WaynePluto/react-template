import { useLoaderData } from 'react-router-dom'

export function Template() {
  const { page } = useLoaderData() as { page: string }
  console.log(`page:${page}`)
  return <div>Hello world! Template page: {page}.</div>
}
