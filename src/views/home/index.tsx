import './body.css'
import './index.css'

const reactLogo = require('@/assets/react.svg')
const WebpackLogo = require('@/assets/webpack.png')

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">
          <img src={WebpackLogo} className="logo" alt="Webpack logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Webpack + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Webpack and React logos to learn more</p>
    </>
  )
}
