const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log(req.url);
    if(req.url === '/'){
        fs.readFile('./public/index.html',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(content);
        });
    }else if(req.url === '/gallery'){
        fs.readFile('./public/gallery.html',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(content);
        });
    }else if(req.url === '/contact'){
        fs.readFile('./public/contact.html',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(content);
        });
    }else if(req.url === '/profile'){
        fs.readFile('./public/profile.html',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(content);
        });
    }else if(req.url === '/images/profile.jpg'){
        fs.readFile('./public/images/profile.jpg',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/jpg'});
            res.end(content);
        });
    }else if(req.url === '/images/overlay.png'){
        fs.readFile('./public/images/overlay.png',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/png'});
            res.end(content);
        });
    }else if(req.url === '/images/bg.jpg'){
        fs.readFile('./public/images/bg.jpg',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/jpg'});
            res.end(content);
        });
    }else if(req.url === '/assets/js/jquery.min.js'){
        fs.readFile('./public/assets/js/jquery.min.js',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/javascript'});
            res.end(content);
        });
    }else if(req.url === '/assets/js/browser.min.js'){
        fs.readFile('./public/assets/js/browser.min.js',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/javascript'});
            res.end(content);
        });
    }else if(req.url === '/assets/js/breakpoints.min.js'){
        fs.readFile('./public/assets/js/breakpoints.min.js',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/javascript'});
            res.end(content);
        });
    }else if(req.url === '/assets/js/util.js'){
        fs.readFile('./public/assets/js/util.js',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/javascript'});
            res.end(content);
        });
    }else if(req.url === '/assets/js/main.js'){
        fs.readFile('./public/assets/js/main.js',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/javascript'});
            res.end(content);
        });
    }else if(req.url === '/assets/css/main.css'){
        fs.readFile('./public/assets/css/main.css',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/css'});
            res.end(content);
        });
    }else if(req.url === '/assets/css/font-awesome.min.css'){
        fs.readFile('./public/assets/css/font-awesome.min.css',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/css'});
            res.end(content);
        });
    }else if(req.url === '/lab3.js'){
        fs.readFile('./public/lab3.js',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/javascript'});
            res.end(content);
        });
    }else if(req.url === '/assets/fonts/fontawesome-webfont.woff2?v=4.7.0'){
        fs.readFile('./public/assets/fonts/fontawesome-webfont.woff2',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/font'});
            res.end(content);
        });
    }else if(req.url === '/assets/fonts/fontawesome-webfont.ttf?v=4.7.0'){
        fs.readFile('./public/assets/fonts/fontawesome-webfont.ttf',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/font'});
            res.end(content);
        });
    }else{
        fs.readFile('./public/404.html',(err,content) => {
            if(err) throw err;
            res.writeHead(404,{'content-type': 'text/html'});
            res.end(content);
        });
    }       
})


const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
  console.log('Server is running on port: '+PORT);
});