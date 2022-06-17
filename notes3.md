# Node & Express
npm init creates package.json

## Simple web server
Node web server module: https://nodejs.org/docs/latest-v8.x/api/http.html
Node uses CommonJS modules: https://en.wikipedia.org/wiki/CommonJS 
CommonJS vs ES6 modules: https://nodejs.org/api/esm.html#modules-ecmascript-modules 

```
  const http = require('http')

  const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hello World')
  })

  const PORT = 3001
  app.listen(PORT)
  console.log(`Server running on port ${PORT}`)
```

## Express
```
npm install express
```

transitive dependencies: https://lexi-lambda.github.io/blog/2016/08/24/understanding-the-npm-dependency-model/ 

semantic versioning: https://docs.npmjs.com/about-semantic-versioning

caret ^4.17.2 means version is at least that, but the first number stays the same (4)
If the major number of a dependency does not change, then the newer versions should be backwards compatible

node-repl
https://nodejs.org/docs/latest-v8.x/api/repl.html 

Nodemon follows changes in node code and reloads server automatically: https://github.com/remy/nodemon 

## REST API
Applied web services:
  - URI
  - HTTP method
  - Media type
"In some places (see e.g. Richardson, Ruby: RESTful Web Services) you will see our model for a straightforward CRUD API, being referred to as an example of resource oriented architecture instead of REST. We will avoid getting stuck arguing semantics and instead return to working on our application."
CRUD: https://en.wikipedia.org/wiki/Create,_read,_update_and_delete 
ROA: https://en.wikipedia.org/wiki/Resource-oriented_architecture 
RESTful Web Services: https://learning.oreilly.com/library/view/restful-web-services/9780596529260/ 

### DELETE 
"There's no consensus on what status code should be returned to a DELETE request if the resource does not exist. Really, the only two options are 204 and 404. For the sake of simplicity our application will respond with 204 in both cases."

### Content types
We use JSON
https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types