
export default ({ app = '', style = '', title = 'webpack-react-static-site-boilerplate' }) => `
  <!DOCTYPE HTML>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="shortcut icon" href="/favicon.ico">
      <title>${title}</title>
      <style>${style}</style>
    </head>
    <body>
      <div id="app">${app}</div>
    </body>
  </html>
`
