// const firebaseConfig = {
//     apiKey: "AIzaSyBPUigUsImssx2qFGKizwfDjQqMrbnqQxM",
//     authDomain: "lnt-fe-final-project.firebaseapp.com",
//     projectId: "lnt-fe-final-project",
//     storageBucket: "lnt-fe-final-project.appspot.com",
//     messagingSenderId: "915467982210",
//     appId: "1:915467982210:web:a26c5f0c4c572af085ab9b",
//     measurementId: "G-PMBK8X5KKQ"
//   };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// const firebaseConfig = {
//     apiKey: "AIzaSyCDO8qHToeXfEyfQ80EUuGpNkbmZgy5PT8",
//     authDomain: "lntfinalproject-5f4e6.firebaseapp.com",
//     projectId: "lntfinalproject-5f4e6",
//     storageBucket: "lntfinalproject-5f4e6.appspot.com",
//     messagingSenderId: "798800097706",
//     appId: "1:798800097706:web:81c9cd70926573d56c7bd3",
//     measurementId: "G-CS00D08G3B"
//   };

const firebaseConfig = {
    apiKey: "AIzaSyB8NGaevNAwGLBgCjfKaStV3Cnn1QuHaZE",
    authDomain: "lntfe-5b725.firebaseapp.com",
    projectId: "lntfe-5b725",
    storageBucket: "lntfe-5b725.appspot.com",
    messagingSenderId: "438210597148",
    appId: "1:438210597148:web:16a89581ff92c1814f6ad9",
    measurementId: "G-4QNVDPW1EQ"
  };
  

firebase.initializeApp(firebaseConfig);
var firestore=firebase.firestore();

const submitBtn=document.querySelector('#submit');

let nameinput = document.querySelector('#nameinput');
let emailinput = document.querySelector('#emailinput');
let phoneinput = document.querySelector('#phoneinput');
let eventinput = document.getElementById('eventinput');
let alertmsg1 = document.querySelector('#alertmsg1');
let alertmsg2 = document.querySelector('#alertmsg2');
let alertmsg3 = document.querySelector('#alertmsg3');

const db=firestore.collection("LnTFE");

submitBtn.addEventListener ('click',function(event){
    event.preventDefault();
    alertmsg1.innerText='';
    alertmsg2.innerText='';
    alertmsg3.innerText='';
    let nameinputs = nameinput.value;
    let emailinputs = emailinput.value;
    let phoneinputs = phoneinput.value;
    let eventinputs = eventinput.options[eventinput.selectedIndex].text;

    if (nameinputs.length<3){
        alertmsg1.innerText= 'You must enter at least 3 characters';
    }

    else if(!(emailinputs.includes('@'))){
        alertmsg2.innerText= 'Email must included @';
    }
        
    else if((!(phoneinputs.startsWith('08')))|| phoneinputs.length==0 || phoneinputs.length>14){
        alertmsg3.innerText= 'The phone number should start with 08 and less than equal to 14 characters';
    }

    else{
        let param = {Name: nameinputs, Email: emailinputs, PhoneNumber: phoneinputs, Event: eventinputs}
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/posts',
            type: 'POST',
            data: JSON.stringify(param),
            success:function(data){
                console.log(data);
            }
        })
        db.doc().set({
            Name: nameinputs,
            Email: emailinputs,
            PhoneNumber: phoneinputs,
            Event: eventinputs
         }).then(function(){
             console.log("Data Submitted");
         });
         $("#nameinput").val("");
         $("#emailinput").val("");
         $("#phoneinput").val("");
         $("#alert-success").removeClass("d-none");
    }
    
})

// let name = document.forms ['form'] ['name'];
// let email = document.forms ['form'] ['email'];
// let phonenumber = document.forms ['form'] ['phonenumber'];
// let alertmsg1 = document.getElementById("alertmsg1");
// let alertmsg2 = document.getElementById("alertmsg2");
// let alertmsg3 = document.getElementById("alertmsg3");



// let username=document.querySelector('#nameinput');
// let useremail=document.querySelector('#emailinput');
// let userphonenumber=document.querySelector('#phoneinput');
// let userevent=document.querySelector('#eventinput');
// let error1=document.querySelector('#alertmsg1');
// let error2=document.querySelector('#alertmsg2');
// let error3=document.querySelector('#alertmsg3');

// const db=firestore.collection("LnTFinalProject");

// function myFunction() {
//     // Get the value of the input field with id="numb"
//     let x = document.getElementById("nameinput").value;
//     // If x is Not a Number or less than one or greater than 10
//     let display;
//     if (x < 3 ) {
//       display = "block";
//     } 
    
//     // else {
//     //   text = "Input OK";
//     // }
    
    
//     document.getElementById("alertmsg1").innerHTML = display;
//   }

// submitBtn.addEventListener ('click',function(event){
//     event.preventDefault();
//     alertmsg1.style.display= "none";
//     alertmsg2.style.display= "none";
//     alertmsg3.style.display= "none";
//     let usernameInput = username.value;
//     let useremailInput = useremail.value;
//     let userphonenumberInput = userphonenumber.value;
//     let usereventInput = userevent.options[userevent.selectedIndex].text;

//     if(usernameInput.lenght<3){
//         alertmsg1.style.display= "block" ;
//     }
       

//     else if(!(useremailInput.includes('@'))){
//         alertmsg2.style.display= "block" ;
//     }

//     else if((!(userphonenumberInput.startswith('08')))|| userphonenumberInput.lenght<14 || userphonenumberInput.lenght>1){
//         alertmsg3.style.display= "block" ;
//     }

    // else{
    //     let param = {Name: usernameInput, Email: useremailInput, PhoneNumber: userphonenumberInput, Event: usereventInput}
    //     $.ajax({
    //         url:'https://jsonplaceholder.typicode.com/posts',
    //         type: 'POST',
    //         data: JSON.stringify(param),
    //         success:function(data){
    //             console.log(data);
    //         }
    //     })
    //     db.doc().set({
    //         Name: usernameInput,
    //         Email:useremailInput,
    //         PhoneNumber:userphonenumberInput,
    //         Event: usereventInput
    //      }).then(function(){
    //          console.log("Data Submitted");
    //      });
    //      $("#username").val("");
    //      $("#useremail").val("");
    //      $("#userphonenumber").val("");
    //      $("#alert-success").removeClass("d-none");
//     }

// })
