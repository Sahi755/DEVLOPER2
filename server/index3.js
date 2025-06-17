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

function NumberType(num){

    if(num===0){

         console.log("Zero");

    }else if(num>0){

         console.log("positive")

    }else if(num<0){

         console.log("Negative")
    }
}

function EvenOdd(num){

       if(num%2===0){

            console.log("Even");

       }else{

            console.log("Odd");
       }
}

function childAger(childAge){

        if(childAge>=1 && childAge<=12){

            console.log("Abhi tu baccha hai be")

        }else if(childAge>=13 && childAge<=19){

            console.log("Ata tu paugandya Avsthet ahes!")
        }else{

             console.log("Ata tu tila ghodi karun jhav");
        }
}

function between(num){

        if(num>=10 && num<=20){

             console.log("in between!")
        }else{

            console.log("Not in between!")
        }

}

function login(Loged,Active){

      if(Loged==true && Active==true){
         
            console.log("Login and Active")

      }else{

            console.log("Not Login and Active!")
      }

}
function stringEmpty(str){

      if(str.length===0){

            console.log("string is empty!")
      }else{
              console.log("string is not empty!")
      }
}

function stringMatch(str1,str2){

      if(str1===str2){

            console.log("Ek bap ke bete!")
      }else{
            console.log("do bap ke bete!");
      }
}

function Ranges(){

      for(let num=1;num<=10;num++){

            console.log(num)
      }
}
function Sumof10(){

      var sum=0;

      for(let i=1;i<=10;i++){

            sum+=i;
      }

      console.log(`Sum of ${sum}`)
}

function EvenNumber(){

      let i=0;

      console.log("even:")
      while(i<10){

          if(i%2==0){

              console.log(i)
          }
          i++;
      }

}

function Dowhile(){

      let num=1;
      console.log("do while loop:")
      do{
            console.log(num);
            num++;
      }while(num!=4);

}

function Squares(){

      console.log("square:")
      for(let i=0;i<10;i++){

          console.log(i*i)
      }
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

NumberType(-1);
NumberType(11);
NumberType(45);
NumberType(0);
EvenOdd(23);
EvenOdd(-3);
EvenOdd(9);
EvenOdd(99);
EvenOdd(-99);
EvenOdd(22);

childAger(13);

childAger(20);

childAger(7);

childAger(18);

childAger(30);

childAger(1)

between(10)
between(11)
between(7)
between(19)
between(30)

login(true,true)
login(true,false)
stringEmpty("")
stringEmpty("Siddhi")
stringEmpty("sahil")
stringMatch("sahil","sahil")
stringMatch("sahil","siddhi")
Ranges();
Sumof10();
EvenNumber();
Dowhile();
Squares();
untilValid();