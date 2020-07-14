let dots = [];

function setup()
{
    createCanvas(400,400);

}

function draw()
{
    background(40);
    fill(255,0,0);
    ellipse(mouseX,mouseY,30,30);

    GetDots();
    console.log(dots.length);
    for(let i = 0; i < dots.length;i++)
    {
        console.log(i);
        fill(0,255,0);
        ellipse(dots[i].x,dots[i].y,30,30);

    }
}

function mousePressed()
{

    sendMousePosition(mouseX,mouseY)
}



async function  sendMousePosition(x,y)
{
    const data = {x,y};
    const options = 
    {
        method: "POST",
        headers:
        {
        "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    };
    const response = await fetch("/api", options);
    const positions = await response.json();
    

}

async function  GetDots()
{
    
    const options = 
    {
        method: "POST",
        headers:
        {
        "Content-Type" : "application/json"
        },
        
    };
    const response = await fetch("/database", options);
    
    const positions = await response.json();
    console.log(positions.dots);
    dots = positions.dots;

}