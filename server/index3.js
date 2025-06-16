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

function addtion(n1,n2){

      return n1+n2;

}

function multily(n1,n2){

      return n1*n2;

}

function compare(str1,str2){

      return str1==str2
}


function compare2(str1,str2){

      return str1===str2
}


function compare3(str1,str2){

      return str1!=str2
}


function compare4(str1,str2){

      return str1!==str2
}

function compare5(num1){

      return (num1>=10) && (num1<=50);
}

function compare6(Age){

     let result=(Age>=18)?"old":"minor"

     console.log(`result:${result}`)
}

function strInt(strInts){

    return Number(strInts);
}

function Intstr(Intstrs){

      return String(Intstrs);
}
var num1=11n;
var num2=44n;

var str1="siddhi"
var str2="siddhi"
console.log(`sum of ${num1} and ${num2} is ${addtion(num1,num2)}`);
var mul=multily(num1,num2);
console.log(`sum of ${num1} and ${num2} is ${mul}`);
console.log(`compare of two string ${str1} and ${str2} is ${compare(str1,str2)}`);
console.log(`compare of two string ${str1} and ${str2} is ${compare2(str1,str2)}`);
console.log(` is  not equal compare of two string ${str1} and ${str2} is ${compare3(str1,str2)}`);
console.log(` is  not equal equal compare of two string ${str1} and ${str2} is ${compare4(str1,str2)}`);
console.log(` compare num  ${num1} is ${compare5(num1)}`);
compare6(num1);
console.log(`Str Into int  ${strInt("123")} type of ${typeof(strInt("123"))}`)

console.log(`int into str ${Intstr(123)} type of ${typeof(Intstr(123))}`)