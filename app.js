const http = require('http')
const {readFileSync} = require('fs')

const server = http.createServer((req, res) =>{
    // console.log(req);
    // console.log(req.method) -> returns GET
    // console.log(req.url)
    const url = req.url;
    const homePage = readFileSync('./navbar-app/index.html')  //parsing html files
    const homeStyles = readFileSync('./navbar-app/styles.css')
    const homeLogo = readFileSync('./navbar-app/logo.svg')
    const homeLogic = readFileSync('./navbar-app/browser-app.js')

    //home-page
    if(url == '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }

    //styles
    else if(url == '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }

    //logo
    else if(url == '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homeLogo)
        res.end()
    }

    //logic
    else if(url == '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(404, {'content-type':'text/js'})
        res.write(homeLogic)
        res.end()
    }
    
})

server.listen(5000)
