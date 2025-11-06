import "@arco-design/web-react/dist/css/arco.css"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router/dom"
import { registerSW } from "virtual:pwa-register"

import "simplebar-react/dist/simplebar.min.css"

import "./index.css"
import router from "./routes"
import { registerLanguages } from "./utils/highlighter"
import "./theme.css"
// 获取 Package.json 版本号
import packageJson from "./version-info.json"
const version = packageJson.gitHash
const date = packageJson.gitDate

registerSW({ immediate: true })
registerLanguages()

console.log(`React flux current version：${version}, build date：${date}`)
ReactDOM.createRoot(document.querySelector("#root")).render(<RouterProvider router={router} />)
