const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log("Server is listening")});

app.use(express.static("public"));
app.use(express.json({limit: "1mb"}));


const dots = [];

app.post("/api", (request, response) =>
{
    console.log(request.body);
    data = request.body;
    dots.push(data);
    response.json({
            status: "sucess",
            x: data.x,
            y: data.y,
            dots:dots

    })
});

app.post("/database", (request, response) =>
{
    
    
    
    response.json({
            status: "sucess",
            dots:dots

    })
});