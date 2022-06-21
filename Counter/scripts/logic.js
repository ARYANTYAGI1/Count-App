window.addEventListener('load',bindEvents)
function bindEvents()
{
    var button1=document.getElementById('btn1');
    var button2=document.querySelector('#btn2')
    var button3=document.getElementById('btn3');
    button1.addEventListener('click',counter1);
    button2.addEventListener('click',counter2);
    button3.addEventListener('click',counter3);
}
var count=0;
    function counter1() {
        count++;
        console.log("Count is",count);
        document.getElementById('result').innerText=count;
    }
    function counter2()    {
        count--;
        console.log("count is",count);
        document.getElementById('result').innerText=count;

    }
    function counter3()
    {
        count=0;
        console.log("count is",count);
        document.getElementById('result').innerText=count;

    }

