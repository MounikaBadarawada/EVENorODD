var p1_score = 0;
var p2_score = 0;
var p1_arr = [];
var p2_arr = [];
var count=0;


function playGame()
{
    if(count!=5)
    {
        var p1_n = Math.ceil(Math.random()*100);
        var p2_n = Math.ceil(Math.random()*100);
        console.log(p1_n+" "+p2_n);
        p1_arr.push(p1_n);
        p2_arr.push(p2_n);
        if(p1_n%2==0)
        {
            p1_score++;
            document.getElementById("p1s").textContent = p1_score;
        }
        if(p2_n%2==0)
        {
            p2_score++;
            document.getElementById("p2s").textContent = p2_score;
        }
        updateCircle();
        count++;
    }
    else
    {
        if(p1_score>p2_score)
            document.getElementById("result").textContent = "Yayyy Player1 WINS!!!";
        else if(p2_score > p1_score)
            document.getElementById("result").textContent = "Yayyy Player2 WINS!!!";
        else
            document.getElementById("result").textContent = "Match DRAW!!!";
    }
}


function updateCircle()
{
    var p1Circle = document.getElementById("Player1").children;
    console.log(p1Circle);
    for(let i=0;i<p1_arr.length;i++)
    {
        if(p1_arr[i]%2==0)
            p1Circle[i].style.backgroundColor = "plum";
        else
            p1Circle[i].style.backgroundColor = "rgb(167, 227, 167)";
    }


    var p2Circle = document.getElementById("Player2").children;
    console.log(p2Circle);
    for(let i=0;i<p2_arr.length;i++)
    {
        if(p2_arr[i]%2==0)
            p2Circle[i].style.backgroundColor = "plum";
        else
            p2Circle[i].style.backgroundColor = "rgb(167, 227, 167)";
    }
}




