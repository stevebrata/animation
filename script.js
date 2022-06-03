let x = 0;
  
document.getElementById("tombolkanan").onclick = function(){
    document.getElementById('gambar3').classList.add('muncul');
    document.getElementById('gambar2').classList.add('muncul');
 
    setTimeout(() => {
        document.getElementById('gambar3').classList.remove('muncul');
        document.getElementById('gambar2').classList.remove('muncul');
    }, 500);
    x++;     
    if(x==0){
    
}else if(x==1){
    document.getElementById('gambar2').src="img/believer.jpg";
    
    document.getElementById('gambar3').src="img/believer.jpg";
    document.getElementById('music').src= "img/imagine.mp3";
    document.getElementById('music').autoplay= true;
}else if(x==2){
    document.getElementById('gambar2').src="img/closer.jpg";
    
    document.getElementById('gambar3').src="img/closer.jpg";
    document.getElementById('music').src= "img/closer.mp3";
    document.getElementById('music').autoplay= true;
}else if(x==3){
    document.getElementById('gambar2').src="img/nolie.jpg";
    
    document.getElementById('gambar3').src="img/nolie.jpg";
    document.getElementById('music').src= "img/nolie.mp3";
    document.getElementById('music').autoplay= true;
}else if(x==4){
    document.getElementById('gambar2').src="img/onandon.jpg";
    
    document.getElementById('gambar3').src="img/onandon.jpg";
    document.getElementById('music').src= "img/onandon.mp3";
    document.getElementById('music').autoplay= true;
}else if(x==5){
    document.getElementById('gambar2').src="img/onmyway.jpg";
    
    document.getElementById('gambar3').src="img/onmyway.jpg";
    document.getElementById('music').src= "img/onmyway.mp3";
    document.getElementById('music').autoplay= true;
}else if(x==6){
    document.getElementById('gambar2').src="img/backhome.jpg";
    
    document.getElementById('gambar3').src="img/backhome.jpg";
    document.getElementById('music').src= "img/backhome.mp3";
    document.getElementById('music').autoplay= true;
}else if(x==7){
    x=0;
    document.getElementById('gambar2').src="img/dancemongkey.jpg";
    
    document.getElementById('gambar3').src="img/dancemongkey.jpg";
    document.getElementById('music').src= "img/dancemonkey.mp3";
    document.getElementById('music').autoplay= true;
}
}
    document.getElementById("tombolkiri").onclick = function(){
    document.getElementById('gambar1').classList.add('muncul');
    document.getElementById('gambar2').classList.add('muncul');
    
    setTimeout(() => {
        document.getElementById('gambar1').classList.remove('muncul');
        document.getElementById('gambar2').classList.remove('muncul');
    }, 500);
    x--;
    if(x==0){
        document.getElementById('gambar2').src="img/dancemongkey.jpg";
        document.getElementById('gambar1').src="img/dancemongkey.jpg";
        document.getElementById('music').src= "img/dancemonkey.mp3";
        document.getElementById('music').autoplay= true;
    }else if(x==1){
        document.getElementById('gambar2').src="img/believer.jpg";
        document.getElementById('gambar1').src="img/believer.jpg";
        document.getElementById('music').src= "img/imagine.mp3";
        document.getElementById('music').autoplay= true;
    }else if(x==2){
        document.getElementById('gambar2').src="img/closer.jpg";
        document.getElementById('gambar1').src="img/closer.jpg";
        document.getElementById('music').src= "img/closer.mp3";
        document.getElementById('music').autoplay= true;
    }else if(x==3){
        document.getElementById('gambar2').src="img/nolie.jpg";
        document.getElementById('gambar1').src="img/nolie.jpg";
        document.getElementById('music').src= "img/nolie.mp3";
        document.getElementById('music').autoplay= true;
    }else if(x==4){
        document.getElementById('gambar2').src="img/onandon.jpg";
        document.getElementById('gambar1').src="img/onandon.jpg";
        document.getElementById('music').src= "img/onandon.mp3";
        document.getElementById('music').autoplay= true;
    }else if(x==5){
        document.getElementById('gambar2').src="img/onmyway.jpg";
        document.getElementById('gambar1').src="img/onmyway.jpg";
        document.getElementById('music').src= "img/onmyway.mp3";
        document.getElementById('music').autoplay= true;
    }else if(x==6){
       
    }else if(x==-1){
        x=6;
        document.getElementById('gambar2').src="img/backhome.jpg";
        document.getElementById('gambar1').src="img/backhome.jpg";
        document.getElementById('music').src= "img/backhome.mp3";
        document.getElementById('music').autoplay= true;
    }
}
let n = 'Music Player made by Love';
let i = 0;

    function coba(){
        if (i < n.length){
        document.getElementById("test").innerHTML += n.charAt(i);
        i++;
        setTimeout(coba, 200);
    }else if(i==n.length){
        i=0;
        document.getElementById("test").innerHTML ="";
        setTimeout(coba(),1000);
    }
}
    coba();


window.addEventListener('keydown', function(event){
        if(event.key=='d'){
            document.getElementById('naruto').style.animation="jalankanan 1.5s steps(7) infinite";
        }else if(event.key=='a'){
            document.getElementById('naruto').style.animation="jalankiri 1.5s steps(7) infinite";

        }

    }
)

window.addEventListener('keyup', function(cek){
    if(cek.key=='s'){
        document.getElementById('naruto').style.animationPlayState="running";
    }else{
        document.getElementById('naruto').style.animationPlayState="paused";
    }
    


})
window.addEventListener('keydown', function(coba){
    if(coba.key=='s'){
        document.getElementById('naruto').style.animation="rasengan 1s steps(7) infinite";
    document.getElementById('rasengan').classList.add('ras');
    setTimeout(() => {
        document.getElementById('naruto').style.animation="rasengan 0s steps(7) 1s";
        document.getElementById('rasengan').classList.remove('ras');
    }, 1000);
    document.getElementById('raseng').src="img/Rasengan.mp3";
    document.getElementById('raseng').autoplay=true;
    }

})
