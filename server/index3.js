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
variablechange();
block();
obj();