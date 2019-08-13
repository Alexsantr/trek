function viv(){
document.getElementById("black").style.opacity ="1.0" ;
document.getElementById("black").style.fontSize ="50px" ;

};
function  myFunction(){
    var it=document.getElementById("black")
    it.style.fontSize="50px";
};

function showsl(){
var uy=document.getElementById("tera")

uy.style.opacity ="1.0";

};

function det(){
    var r=document.getElementById("qwe")
    
    r.style.opacity ="1.0";
    
    };

    function ul(){
        var r=document.getElementById("ty")
        
        r.style.transform="translateY(0px)";
       
        };


const responsives=document.querySelectorAll('.responsive');
  for (let i = 0; i < responsives.length; i++) {
     const  responsive = responsives[i];
     responsive.addEventListener('mousemove',startRotate);
     
     responsive.addEventListener('mouseout',stopRotate);
    }
function startRotate(event){
    const gallery=this.querySelector('.gallery');
  
    
    gallery.style. height='500px';
    gallery.style. width='500px';
 
   
    
}

function stopRotate(event){
    const gallery=this.querySelector('.gallery');
    gallery.style. height='none';
    gallery.style. width='none';
}


  // const halfHeight = gallery.offsetHeight/2;
    // gallery.style.transform='rotateX('+-(event.offsetY -halfHeight)/5 +'deg) rotateY(' +(event.offsetX -halfHeight)/5 +'deg)   ';


// console.log(li);
    //     function wer(t){
    //        t=document.getElementsByTagName("li")
    //         t.style.transform="translateY(-10px)"
         
    //     }
    //     function q(y){
    //   y=document.getElementsByTagName("li")
    //    y.style.transform="translateY(0px)"
    //     }
// function ll()
// {
//     var r=document.getElementsByTagName(body)
//     r.style.transform="0";
// }