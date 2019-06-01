
var tryToRaise = false;
var tryToTakeRoot = false;
var lastNumber = "";

function add(number) {

    let x =document.querySelector("#sum").value;
    if((isNaN(Number(x[x.length-1])) && isNaN(Number(number))) || (x === '0' && number !=='dot' ))  {
        deleteLast();
    }

    if(number === 'dot'){
        document.querySelector("#sum").value += '.';
        
    } else if (number === 'plus'){
        // Addition
        document.querySelector("#sum").value += '+';

    }else if (number === 'minus'){
        //Subtraction
        document.querySelector("#sum").value += '-';

    }else if (number === 'multi'){
        //Multiplication
        document.querySelector("#sum").value += '*';
    }else if (number === 'divide'){
        //Multiplication
        document.querySelector("#sum").value += '/';
    }
    //Add number
    else document.querySelector("#sum").value += number;
}

function calc() {

    let y = document.querySelector("#sum").value;
    if(!(isNaN(Number(y[0])))){
        if(tryToRaise){
            //Calculates x to the power of y
            document.querySelector("#result").value = Math.pow(lastNumber,document.querySelector("#sum").value);
            tryToRaise = false;
        }else if (tryToTakeRoot){
            //Calculates x root of y
            let x =  eval('(1/' + document.querySelector("#sum").value +')');
            document.querySelector("#result").value = Math.pow(lastNumber,x);
            tryToTakeRoot = false;
    
        }else {document.querySelector("#result").value = eval(document.querySelector("#sum").value);
        document.querySelector("#sum").value = "";
        }
    }else document.querySelector("#result").value = 'Bad operation';

}

function raise() {
   lastNumber = eval(document.querySelector("#sum").value);
   document.querySelector("#sum").value = "";
   tryToRaise = true;
}

function sqroot() {
    document.querySelector("#result").value = Math.sqrt(eval(document.querySelector("#sum").value));
}

function anyroot() {
    lastNumber = eval(document.querySelector("#sum").value);
    document.querySelector("#sum").value = "";
    tryToTakeRoot = true;
}

function del() {
    document.querySelector("#sum").value ="";
    document.querySelector("#result").value ="";
}
function deleteLast() {
    if(document.querySelector("#sum").value.length !== 0){
        let x = document.querySelector("#sum").value;
        document.querySelector("#sum").value = x.slice(0, x.length - 1);
    }
}


function sin() {
    let x = eval(document.querySelector("#sum").value) * (Math.PI/180);
    document.querySelector("#result").value = Math.sin(x).toFixed(10);
    document.querySelector("#sum").value = "";
}
function cos() {
    let x = eval(document.querySelector("#sum").value) * (Math.PI/180);
    document.querySelector("#result").value = Math.cos(x).toFixed(10);
    document.querySelector("#sum").value = "";
}
function tan() {
    let x = eval(document.querySelector("#sum").value) * (Math.PI/180);
    document.querySelector("#result").value = Math.tan(x).toFixed(10);
    document.querySelector("#sum").value = "";
}
