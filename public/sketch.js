let DATA = [];
let position = {x:0, y:0};

function setup()
{
    
    createCanvas(800,800);
    socket.on("position", (pos)=>{
        
        
        let Already = false;
        for(let i = 0; i < DATA.length;i++)
        {
            if(pos.ID == DATA[i].ID)
            {
                Already = true;
                
                DATA[i].pos = pos.pos;
            }
        }
        if(!Already)
        {
            DATA.push(pos);
        }
    });

    socket.on("disconnected", (ID)=>
    {
        for(let i = 0; i < DATA.length;i++)
        {
            if(ID == DATA[i].ID)
            {
                console.log(DATA.splice(i,1));
            }
        }

    });
}

function draw()
{
    background(0);
   
    
    position.x = mouseX;
    position.y = mouseY;

    
    for(let i = 0; i < DATA.length;i++)
    {
        fill(0,0,255);
        ellipse(DATA[i].pos.x, DATA[i].pos.y,30,30);

    }

    fill(0,255,0);
    ellipse(position.x, position.y,30,30);
    

    socket.emit("position", position);
   
    
    
}





// async function  CreatePlayer()
// {
//     const data = 
//     {
//         x: 5,
//         y: 6
//     };
//     const options = 
//     {
//         method: "POST",
//         headers:
//         {
//         "Content-Type" : "application/json"
//         },
//         body: JSON.stringify(data)
//     };
//     const response = await fetch("/createPlayer", options);
    
//     const info = await response.json();
//     console.log(info);
//     ThisPlayer = info.players.length - 1;
//     console.log(ThisPlayer);
    
    
// }

// async function  GetUpdateData()
// {
    
//     const options = 
//     {
//         method: "POST",
//         headers:
//         {
//         "Content-Type" : "application/json"
//         },
        
//     };
//     const response = await fetch("/updateData", options);
    
//     const data = await response.json();
    
//     DATA = data;

// }