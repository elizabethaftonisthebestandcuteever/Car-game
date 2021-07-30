canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

car1_width= 120;
car1_height= 70;
car1_image="car1.png";
car1_x= 10;
car1_y= 10;

car2_width= 120;
car2_height= 70;
car2_image="car2.png";
car2_x= 10;
car2_y= 100;
background_image="racing.jpg";

function add(){
background_imgTag= new Image();
background_imgTag.onload= uploadBackground;
background_imgTag.src= background_image;

car1_imgTag= new Image();
car1_imgTag.onload= uploadcar1;
car1_imgTag.src= car1_image;

car2_imgTag= new Image();
car2_imgTag.onload= uploadcar2;
car2_imgTag.src= car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "38"){
        car1_up();
        console.log("up arrow key");
    }
    if(keyPressed == "40"){
        car1_down();
        console.log("down arrow key");
    }
    if(keyPressed == "37"){
        car1_left();
        console.log("left arrow key");
    }
    if(keyPressed == "39"){
        car1_right();
        console.log("right arrow key");
    }
    if(keyPressed == "87"){
        car2_up();
        console.log("w key");
    }
}
function up(){
    if(car1_y >= 0){
        car1_y=car1_y - 10;
        console.log("when up arrow is pressed x=" + car1_x +"| y=" + car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function down(){
    if(car1_y <= 500){
        car1_y=car1_y + 10;
        console.log("when down arrow is pressed x=" + car1_x +"| y =" + car1_y);
        uploadBackground();
        uploadcar1();
    }
}

function left(){
    if(car1_x >= 0){
        car1_x=car1_x - 10;
        console.log("when left arrow is pressed x=" + car1_x +"| y =" + car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function right(){
    if(car1_x <= 700){
        car1_x=car1_x + 10;
        console.log("when right arrow is pressed x=" + car1_x +"| y =" + car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function up(){
    if(car2_y >= 0){
        car2_y=car2_y - 10;
        console.log("when up arrow is pressed x=" + car2_x +"| y=" + car2_y);
        uploadBackground();
        uploadcar2();
    }
}
function down(){
    if(car2_y <= 500){
        car2_y=car2_y + 10;
        console.log("when down arrow is pressed x=" + car2_x +"| y =" + car2_y);
        uploadBackground();
        uploadcar2();
    }
}
function left(){
    if(car2_x >= 0){
        car2_x=car2_x - 10;
        console.log("when left arrow is pressed x=" + car2_x +"| y =" + car2_y);
        uploadBackground();
        uploadcar2();
    }
}
function right(){
    if(car2_x <= 700){
        car2_x=car2_x + 10;
        console.log("when right arrow is pressed x=" + car2_x +"| y =" + car2_y);
        uploadBackground();
        uploadcar2();
    }
}
if(car1_x>700){
    console.log("car1 won");
    document.getElementById("game_status").innerHTML="car1 won!!"
}
