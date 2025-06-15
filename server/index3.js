function variablechange(){

    var name="Sahil"
    console.log(`my name is ${name}`)
    name="Manu bhakar"
    console.log(`my name is ${name}`)
}

function block(){

      let name="sahil"

      {
        name="siddhi"
        console.log(`my name is ${name}`)
      }

      console.log(`my name is ${name}`)
}

function consts(){

      const name="sahil"

      console.log(`my name is ${name}`)

      name="siddhi"// const is constant can't reassigned it 
      console.log(`my name is ${name}`)
}

function obj(){

      const employe={

           name:"sahil",
           id:"123",
           post:"software Engineer",
           company:"Google"
      };

       console.log(employe);
       employe.company="facebook"
       console.log(employe);
}


function typeofs(){

      var password="Kunda@123"
      console.log(`my password  type ${typeof(password)}`)
}

function typeof2(){

      var phone=9420407141
      console.log(`my password  type ${typeof(phone)}`)

}

function typeof3(){

      var isMale=true;
       console.log(`my password  type ${typeof(isMale)}`)
}
function typeof4(){

       var bestfriendName=undefined
       console.log(`my password  type ${typeof(bestfriendName)}`)
}

function typeof5(){
     
      var bestfriendName=null
      console.log(`my password  type ${typeof(bestfriendName)}`)

}

function typeof6(){

       var  BigInt = 687859499957485n;
       console.log(`my password  type ${typeof(BigInt)}`)
}

function typeof7(){

       var pi=3.14;
       console.log(`my password  type ${typeof(pi)}`)

}

function typeof8(){

       let pi=["kiran","siddhi","shruti","riddhi"]
       console.log(`my password  type ${typeof(pi)}`)

       let numbers = new Array(1, 2, 3, 4, 5);
        console.log(`my password  type ${typeof(numbers)}`)
}

variablechange();
block();
obj();
typeofs();
typeof2();
typeof3();
typeof4();
typeof5();
typeof6();
typeof7();
typeof8();



