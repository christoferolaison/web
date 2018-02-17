
import { createElement } from 'react'
import App from './App'
import htmlPage from './htmlPage'
import { renderStatic } from 'glamor/server'
import { renderToString } from 'react-dom/server'

export default () => {
  const { html, css } = renderStatic(() => renderToString(createElement(App)))
  return htmlPage({
    app: html,
    style: css,
    title: 'Christofer Olaison - Developer'
  })
}
