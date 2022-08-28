
/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");


var butts_algos=document.querySelectorAll(".algos button");

//var butts_stop=document.querySelectorAll(".stop");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
var contt1=document.getElementById("cont1");
var contt2=document.getElementById("cont2");
var el11=document.getElementById("el1");
var el22=document.getElementById("el2");
//var buti=document.getElementById("b");


cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);//when u directly click generate array
inp_as.addEventListener("input",update_array_size);//when u type input automatic array elements are generated withoute pressing button generate array



function generate_array()
{
    cont.innerHTML="";
    contt1.innerHTML="";
    contt2.innerHTML="";

    var yn;
    var arr=[];
    yn=prompt('Do you wanna enter array elements:(y/n)');
    al=prompt('Do you wanna enter charracter array elements:(y/n)');

    if(yn=='y'&& al=='y'){
    for(var i=0;i<array_size;i++)
    {
        
        var string=prompt('enter array element');
        div_sizes[i]=string.charCodeAt(0);
        if(div_sizes[i]>96){
        string=string.toLowerCase();
        arr.push(string);}
        else {

         arr.push(string);
        }
        divs[i]=document.createElement("div");
       // div.innerText="string";
        cont.appendChild(divs[i]);
    
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";//document.write(div_sizes[i]) ";
        

    }
   
    contt1.innerHTML=arr;
    arr=arr.sort();
    contt2.innerHTML=arr;

    


    }
   else if(yn=='y'&& al=='n'){
        for(var i=0;i<array_size;i++)
        {
            
            div_sizes[i]=prompt('enter array element');
            arr.push(div_sizes[i]);
            divs[i]=document.createElement("div");
            divs[i].innerText=div_sizes[i];
            cont.appendChild(divs[i]);
            margin_size=0.1;
            divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" +(100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
            

        }
        el11.innerHTML="Before sorting";
el22.innerHTML="Expected order of Elements after sorting:";
        contt1.innerHTML=arr;
    arr=arr.sort();
    contt2.innerHTML=arr;
    }
    
    else

{el11.innerHTML="";
el22.innerHTML="";
    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
      

        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        
    }
    
}
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();
    
    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":
                        var start=window.performance.now();
                        Bubble();
                        var end=window.performance.now();
                        console.log(`Execution:${end-start}ms`);
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }

}

