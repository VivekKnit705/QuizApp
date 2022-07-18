const questions=[
    {
    'que':'Javascript is an _______ language?',
    'a':'Object Oriented',
    'b':'Object Based',
    'c':'Procedural',
    'd':'none',
    'correct':'a'
},
{
    'que':'Which of the following methods is used to access HTML elements using Javascript?',
    'a':'getElementById',
    'b':'getElementByClassName',
    'c':'Both A and B',
    'd':'none',
    'correct':'c'
},

{
    'que':'How can a datatype be declared to be a constant type',
    'a':'const',
    'b':'var',
    'c':'let',
    'd':'nconstant',
    'correct':'a'
},

{
    'que':'What keyword is used to check whether a given property is valid or not?',
    'a':'in',
    'b':'is in',
    'c':'exists',
    'd':'lies',
    'correct':'a'
},
{
    'que':'When an operator’s value is NULL, the typeof returned by the unary operator is:',
    'a':'Boolean',
    'b':'Undefined',
    'c':'Object',
    'd':'Integer',
    'correct':'c'
},
{
    'que':'Which function is used to serialize an object into a JSON string in Javascript?',
    'a':'Stringify()',
    'b':'parse()',
    'c':'convert',
    'd':'none',
    'correct':'a'
},
{
    'que':'Which of the following are closures in Javascript?',
    'a':'Variables',
    'b':'Functions',
    'c':'Object',
    'd':'All of the Above',
    'correct':'d'
},
{
    'que':'Which of the following is not a Javascript framework?',
    'a':'Node',
    'b':'Vue',
    'c':'React',
    'd':'Cassandra',
    'correct':'d'
},
{
    'que':'Which keyword is used to declare an asynchronous function in Javascript?',
    'a':'async',
    'b':'await',
    'c':'setTimeOut',
    'd':'none',
    'correct':'a'
},
{
    'que':'Which of the following are not server-side Javascript objects?',
    'a':'Date',
    'b':'FileUpload',
    'c':'Function',
    'd':'All of the Above',
    'correct':'d'
},

]


let index=0
const total=questions.length;
let right=0;
let wrong=0;
const questionBox=document.getElementById('questionBox');
const optionsInput=document.querySelectorAll('.options')

const onLoad=()=>{
    if(index==total){
        return endQuiz();
    }
    reset();
    const data=questions[index];
    questionBox.innerText=` ${index+1} ) ${data.que}`
    optionsInput[0].nextElementSibling.innerText=data.a;
    optionsInput[1].nextElementSibling.innerText=data.b;
    optionsInput[2].nextElementSibling.innerText=data.c;
    optionsInput[3].nextElementSibling.innerText=data.d;
}
const onSubmit=()=>{
    const data=questions[index];
    const answer=getAnswer();
    console.log(answer, data.correct);
    if(answer==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    onLoad();
}


const getAnswer=()=>{
    let answer;
    optionsInput.forEach((input)=>{
        if(input.checked){
            answer=input.value;
        }
    })
    return answer;
}

const reset=()=>{
    optionsInput.forEach((input)=>{
        input.checked=false;
    })
}



const endQuiz=()=>{
    document.getElementById('box').innerHTML=`
    
    <h3>Thank you for attending the quiz</h3>
    <h2>Your score is ${right} / ${total}</h2>
    `
}
onLoad();
