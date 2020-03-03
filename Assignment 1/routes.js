const requestHandler = (req, res) => {
    const url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Greetings</title></head>');
        res.write('<body><h1>Hi there, Welcome to the website!</h1></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>Greetings</title></head>');
        res.write('<body><ul><li>Tanmay</li><li>Yolo</li><li>haha</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>');
    res.write('</html>');
    res.end();
}

exports.handler = requestHandler;
