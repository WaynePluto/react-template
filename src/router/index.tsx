import { createBrowserRouter } from 'react-router-dom'
const modules = require.context('./modules', false, /.*\.ts$/)
async function formatModules(_context: __WebpackModuleApi.RequireContext, result) {
  const keys = _context.keys()
  const modules: any[] = []
  for (const key of keys) {
    const defaultModule = (await _context(key)).default
    if (!defaultModule) continue
    const moduleList = Array.isArray(defaultModule) ? [...defaultModule] : [defaultModule]
    modules.push(...moduleList)
  }
  return [...result, ...modules]
}
export async function initRouteModules() {
  const routes = await formatModules(modules, [])
  return createBrowserRouter(routes)
}
