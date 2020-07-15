const express = require("express");
const app = express();
const socket = require("socket.io");

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {console.log("Server is listening")});

app.use(express.static("public"));
app.use(express.json({limit: "1mb"}));

const io = socket(server);


const DATA = [];





io.on("connection", function(socket)
{

    
    socket.on("position", (pos)=>
    {
        const ID = socket.id;
        const D = {ID:ID, pos:pos};
        
        socket.broadcast.emit("position",D);
    });

    socket.on("disconnect", ()=>
    {
        const ID = socket.id;
        
        
        socket.broadcast.emit("disconnected",ID);
    });
});









// ///Update something on the server
// app.post("/createPlayer", (request, response) =>
// {
//     //console.log(request.body);
//     data = request.body;
//     DATA.push(data);
//     response.json({
//             status: "sucess",
//             players:DATA

//     })
// });


// ///send back data
// app.post("/updateData", (request, response) =>
// {
    
    
    
//     response.json({
//             status: "sucess",
//             data:DATA

//     })
// });