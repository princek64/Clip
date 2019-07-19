let a=880;    

function lef(event){
    if(event.which===37){
        $('#image1').removeClass('hide');
        a-=28;
        $('#image1').css({
            'clip-path': `inset(${a}px 0px 0px 0px)`
        })
        console.log("working")
    }
    else {
        console.log("Success")
    }
}

$(document).keydown(lef);

let b=885;

function righ(event){
    if(event.which===38){
       $('#image2').removeClass('hide');
        b-=28;
        $('#image2').css({
            'clip-path': `inset(${b}px 0px 0px 0px)`
        })
        console.log("working")
    }
    else {
        console.log("Success")
    }
}

$(document).keydown(righ);


let c=885;

function toop(event){
    if(event.which===39){
       $('#image3').removeClass('hide');
        c-=28;
        $('#image3').css({
            'clip-path': `inset(${c}px 0px 0px 0px)`
        })
        console.log("working")
    }
    else {
        console.log("Success")
    }
}

$(document).keydown(toop);

let d=885;

function botto(event){
    if(event.which===40){
       $('#image4').removeClass('hide');
        d-=28;
        $('#image4').css({
            'clip-path': `inset(${d}px 0px 0px 0px)`
        })
        console.log("working")
    }
    else {
        console.log("Success")
    }
}

if(
    ( a==0 || b==0 || c==0 || d ==0) ){
        alert("pop up")
    }


$(document).keydown(botto);





// function press(event){
//     for(var i=0; i<=670;i+=33){
//         console.log("doneeee")
//         if(event.which===37){
//             $('#image1').css({
//                 'clip-path': 'inset(i px 0px 0px 0px)',
//                 'background-color': 'steelblue',
//             })
//             console.log("working")
//         }
//         else {
//             console.log("Success")
//         }
//     }
// }



// COMMENT???
// $('body').keydown(function(event){
//     if(event.which===37){
//         $('#image1').css({

//             'clip-path': 'inset(350px 0px 0px 0px)'
//         })
//         console.log("working")
//     }
//     else {
//         console.log("Success")
//     }

// })   


// $('body').keydown(function(event){
//     if (event.which===37) {
//         $('#image1').fadeIn(300);
//     console.log("working1");
//     }
//     else if(event.which===38) {
//         $('#image2').fadeIn(300);
//     console.log("working2");
//     }
//     else if(event.which===39) {
//         $('#image3').fadeIn(300);
//     console.log("working3");
//     }
//     else if(event.which===40) {
//         $('#image4').fadeIn(300);
//         console.log("working4");
//     }
// });

//
