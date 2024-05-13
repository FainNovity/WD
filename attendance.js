var currentRoll=101;
var abs=0;
var dt= new Date();
var year= dt.getFullYear();
var month= dt.getMonth()+1;
var date= dt.getDate();
var len=0;

//window.open(`https://wa.me/9662490058?text=I%27m%20api%20msg%20hello%20Harsh%20friend%20Hello`, '_blank');

function playIt(){
    var ele=document.getElementById('show');
    ele.style.animationPlayState="running";
    setTimeout(()=>{
        ele.style.animationPlayState="paused";
    },500);
}
function update(){
    document.getElementById('show').innerHTML= currentRoll;
};
update();
var A=document.getElementById('A');
var B=document.getElementById('B');
var C=document.getElementById('C');

function changeClass()
{    
    if (currentRoll/100<4) {
       currentRoll=currentRoll-(currentRoll%100)+101;
    update(); 
    }
}

function send(){
 var num=document.getElementById('num').value;
 var a=document.getElementById('a');
 var b=document.getElementById('b');
 var isChecked="";
 if(a.checked){
     isChecked="A";
 }
 else if(b.checked){
     isChecked="B";
 }
 else {
      alert("Please, select class!!");
      return false;
 }
 if(num==""&& num==0){
     alert("Please, Enter WhatsApp number to send or save!!");
      return false;
 } window.open(`https://wa.me/${num}?text=Absent%20students%20in%20${isChecked}%20Class%20on%20${date}/${month}/${year}-%0D%0AA:%20${A.value}%0D%0AB:%20${B.value}%0D%0AC:%20${C.value}`, '_blank');
}

function present() {
    currentRoll+=1;
    update();
    playIt();
}
function absent(){    
    abs++;
    
    if(parseInt(currentRoll/100)==1){
    var val= A.value;
    A.value=val.concat(currentRoll+", ");            
    }
    if(parseInt(currentRoll/100)==2){
        var val= B.value;
    B.value=val.concat(currentRoll+", "); 
    }
    if(parseInt(currentRoll/100)==3){
        var val= C.value;
    C.value=val.concat(currentRoll+", "); 
    }
    currentRoll+=1;
    update();
    playIt();
}


document.addEventListener('keydown',()=>{
    
    if(event.key=="ArrowRight"){
        present();
    }
    else if(event.key=="ArrowLeft"){
        absent();
    }
    else if(event.key=="ArrowDown"){
        changeClass();
    }
    else if(event.key=="a" || event.key=="A"){
   document.getElementById('a').checked=true;
    }
    else if(event.key=="b" || event.key=="B"){
   document.getElementById('b').checked=true;
    }
});

    function start() {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'yes :variable': function(variable){
    console.log(variable);
      if(variable=="present"){
          present();
      }
      else if(variable=="absent"){
          absent();
      }
    },
    'no :variable': function(variable){
    console.log(variable);
      if(variable=="present"){
          present();
      }
      else if(variable=="absent"){
          absent();
      }
    },
    'class :variable': function(variable){
    console.log(variable);
      if(variable.toLowerCase()=="a"){
         document.getElementById('a').checked= true;
 
      }
      else if(variable.toLowerCase()=="b"){
         document.getElementById('b').checked= true;
      }
    },
    'next :variable': function(variable){
    console.log(variable);
      if(variable= "class"){
         changeClass();
 
      }
      
    },
    'send :variable': function(variable){
    console.log(variable);
      if(variable= "list"){
         send(); 
      }
      
    },
    'remove :variable': function(variable){
    console.log(variable);
      if(parseInt(variable)<200 && parseInt(variable)>100){
      document.getElementById('A').value= document.getElementById('A').value.split(variable+", ").join("");  
 console.log(document.getElementById('A').value);
      }
      else if(parseInt(variable)<300 && parseInt(variable)>200){
      
     document.getElementById('B').value= document.getElementById('B').value.split(variable+", ").join("");  
 
      }
      else if(parseInt(variable)>300){
      document.getElementById('C').value= document.getElementById('C').value.split(variable+", ").join("");  
 
      }
    }
  };

  annyang.addCommands(commands);


  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}
function stop(){
    annyang.start({ autoRestart: false, continuous: false });
}
