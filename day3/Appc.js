var http = require('http');
var menu = "<br/><hr/><br/><table><tr><td><a href=\"./\">Home Page</a></td><td><a href=\"./about\">About Us Page</a></td><td><a href=\"./contact\">Contact Us Page</a></td><td><a href=\"./project\">Projects Page</a></td></tr></table><br/><hr/><br/>";
var server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write(menu + "<h1 style=\"background-color:red;color:yellow\">"
            + "Welcome to home page of our website!</h1><br/><div>This is home page of our web site. We are into manufacturing of vaults...</div>");
        res.end();
    }
    if (req.url == "/about") {
        res.write(menu + "<h1 style=\"background-color:red;color:yellow\">Welcome to about us page of our website!</h1><div>Manyg=facturing is an art and we have innovated it by introducing cut throat technologies into our portals..</div>");
        res.end();
    }
    if (req.url == "/contact") {
        res.write(menu + "<h1 style=\"background-color:red;color:yellow\">Welcome to contact us page of our website!</h1><div>You can contact us through several means...<address>West Street, East Brunswick, NJ, USA</address></div>");
        res.end();
    }
    if (req.url == "/project") {
        res.write(menu + "<h1 style=\"background-color:red;color:yellow\">Welcome to projects page of our website!</h1><div>Our list of project include both domestic and interntional here is a list of our clients!</div>");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server is running!");
});