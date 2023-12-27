import { useLoaderData } from 'react-router-dom'
import { atom, useAtom, Provider, useSetAtom } from 'jotai'

export function Template() {
  const { page } = useLoaderData() as { page: string }
  console.log(`page:${page}`)
  return (
    <div className="flex flex-col items-center">
      <span>Hello world! Template page: {page}.</span>
      <Consumer></Consumer>
      <AddCountCom></AddCountCom>
    </div>
  )
}

const countAtom = atom(0)

function Consumer() {
  const [state, setState] = useAtom(countAtom)
  return <>count:{state}</>
}
function AddCountCom() {
  const setState = useSetAtom(countAtom)
  return (
    <>
      <button onClick={e => setState(Math.random())}>Add Count</button>
    </>
  )
}
