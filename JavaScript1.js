//document.getElementById("right").onclick = function(){ alert("hello");}
var blank;
document.getElementById("right").addEventListener("click",function(){
    clearInterval(blank);
    blank=setInterval(Right_Click,1000);
});
document.getElementById('pause').addEventListener('click',function Pause_Click(){
    clearInterval(blank);
});
document.getElementById('left').addEventListener('click',function(){
    clearInterval(blank);
    blank=setInterval(Left_Click,1000);
});

function Right_Click()
{
    LeftContent=document.getElementById('FirstBox').value;
    RightContent=document.getElementById('SecondBox').value;
    var delspace=LeftContent.split("");
    var temp="";
    for(var i=0;i<delspace.length-1;i++)
    {
        temp+=delspace[i+1];
        console.log(temp);
    }
    if(delspace[0]!=null){
        RightContent+=delspace[0]; 
    }
    document.getElementById('FirstBox').value=temp;
    document.getElementById('SecondBox').value=RightContent;

}

function Left_Click()
{
    LeftContent1=document.getElementById('FirstBox').value;
    RightContent1=document.getElementById('SecondBox').value;
    var delspace=RightContent1.split("");
    var temp="";
    for(var i=0;i<RightContent1.length-1;i++){
        console.log("Hello");
        temp+=delspace[i];
    }
    if(RightContent1.length>0){
        LeftContent1=delspace[RightContent1.length-1]+LeftContent1;
    }

    document.getElementById('SecondBox').value=temp;
    document.getElementById('FirstBox').value=LeftContent1;
    
}
    