let ulQuote = document.querySelector('.ul1');
let ulLearn = document.querySelector('.ul2');
let shareBtn = document.querySelector('.twitter');
let inputName = document.querySelector('.inputName');

// time-----------------------------
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

function military(num){
    if(num < 10){
        num = '0'+ num;
    }else{
        num = num.toString();
    }  
    return num;
}


 function createTimeUI(){
  var now = new Date();
    hr = now.getHours();
    min = now.getMinutes();
    sec = now.getSeconds();
    hour.innerText = military(hr);
    minute.innerText = military(min);
    second.innerText = military(sec);
 }// --------------redirect-------------------------

function redirect(){
  shareBtn.href = "https://twitter.com/intent/tweet/?text = "
}
// ----------------------------------------------------

let state = [
  {
    "quoteText": "“1.It is not a lack of love, but a lack of friendship that makes unhappy marriages.”",
    "writer": "by Friedrich Nietzsche "
  },
  {
    "quoteText": "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
    "writer": "by Mark Twain "
  },
  {
    "quoteText": "“The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.”",
    "writer": "by Bob Marley "
  },
  {
    "quoteText": "“There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.”",
    "writer": "by Jane Austen "
  },
  {
    "quoteText": "“If I had a flower for every time I thought of you...I could walk through my garden forever.”",
    "writer": "by Alfred Tennyson "
  },

  {
    "quoteText": "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",
    "writer": "by Albert Einstein"
  },
  {
    "quoteText": "“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”",
    "writer": "by Marilyn Monroe"
  },
  {
    "quoteText": "“I have not failed. I've just found 10,000 ways that won't work.”",
    "writer": "by Thomas A. Edison"
  },
  {
    "quoteText": "“Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.”",
    "writer": "by Bill Gates"
  },
  {
    "quoteText": "“The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.”",
    "writer": "by Elie Wiesel"
  },
  {
    "quoteText": "“To the well-organized mind, death is but the next great adventure.”",
    "writer": "by J.K. Rowling"
  },
  {
    "quoteText": "“It is never too late to be what you might have been.”",
    "writer": "by George Eliot"
  },
  {
    "quoteText": "“You can never get a cup of tea large enough or a book long enough to suit me.”",
    "writer": "by C.S. Lewis"
  },
  {
    "quoteText": "“Only in the darkness can you see the stars.”",
    "writer": "by Martin Luther King Jr."
  },
  {
    "quoteText": "“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”",
    "writer": "by Helen Keller"
  }
  ,
  {
    "quoteText": "“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”",
    "writer": "by Jane Austen"
  },
  {
    "quoteText": "“A day without sunshine is like, you know, night.”",
    "writer": "by Steve Martin"
  },
  {
    "quoteText": "“Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.”",
    "writer": "by Garrison Keillor"
  },
  {
    "quoteText": "“Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.”",
    "writer": "by Jim Henson"
  },
  {
    "quoteText": "“All you need is love. But a little chocolate now and then doesn't hurt.”",
    "writer": "by Charles M. Schulz"
  },
  {
    "quoteText": "“Remember, we're madly in love, so it's all right to kiss me anytime you feel like it.”",
    "writer": "by Suzanne Collins"
  },
  {
    "quoteText": "“Some people never go crazy. What truly horrible lives they must lead.”",
    "writer": "by Charles Bukowski"
  },
  {
    "quoteText": "“The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.”",
    "writer": "by Terry Pratchett"
  },
  {
    "quoteText": "“Think left and think right and think low and think high. Oh, the thinks you can think up if only you try!”",
    "writer": "by Dr. Seuss"
  },
  {
    "quoteText": "“The reason I talk to myself is because I’m the only one whose answers I accept.”",
    "writer": "by George Carlin"
  }


]
let state2 = [{
  key: "a",
  value: 1
}, {
  key: "b",
  value: 2
},
{
  key: "C",
  value: 3
}, {
  key: "d",
  value: 4
}, {
  key: "e",
  value: 5
},
{
  key: "f",
  value: 6
}]
// ----------------------creating UI------------------------------------
function createUI(obj,obj2) {

  let quoteContent = document.createElement('p');
  let quoteWriter = document.createElement('span');

  let regItem = document.createElement('span');
  let regDes = document.createElement('span');

  shareBtn.addEventListener('click',redirect);
  function redirect(){
  shareBtn.href = "https://twitter.com/intent/tweet/?text = "+state[x()]
  }


  regItem.innerText = obj2.key;
  regDes.innerText = obj2.value;
  
  let btnInc = document.createElement('button');
  let btnDec = document.createElement('button');
  // let random = Math.floor(Math.random()*10);
  quoteContent.textContent = obj.quoteText;
  quoteWriter.textContent = obj.writer;
  ulQuote.append(quoteContent, quoteWriter);
  ulLearn.append(regItem, regDes);
}


// randomly sending quote-----------and regular expression-----------------------------------
let x = function outer() {

  // this variable is outside incrementCounter's scope
  // function incrementCounter () {
  //   counter ++;
  //   return counter;
  // }
  // return incrementCounter();
  var counter = JSON.parse(localStorage.getItem('sas')) || 0;
  if (counter >= 0) {
    counter++;
  }
  if (counter > 23) {
    counter = 0;
  }

  localStorage.setItem('sas', JSON.stringify(counter));
  return counter;
};

let y = function ture(){
  var counter1 = JSON.parse(localStorage.getItem('next')) || 0;
  if (counter1 >= 0) {
    counter1++;
  }
  if (counter1 > 4) {
    counter1 = 0;
    
  }

  localStorage.setItem('next', JSON.stringify(counter1));
  return counter1;
  
}



// function incFun() { }
// function decFun() { }

// btnInc.addEventListener('click', incFun);
// btnDec.addEventListener('click', decFun);









// other approaches that didnt work
// let i = 0;
// function run(){
//   if(i>30){
//     i=0;
//   }else{
//     return createUI(state[i]);
//     i++;
//   }

// }
// run();
// function random(){
//   return Math.ceil(Math.random() * 4)
//  }
// random();


//------------------------- todo js----------------------------------------------------------------- 


const input_todo = document.querySelector('.input_todo');
const ul = document.querySelector('.ulist');
const itemslefts = document.querySelector('#itemsleft');
const act = document.querySelector('.active');
const all = document.querySelector('.all');
const complete = document.querySelector('.completed');
const clearSelected = document.querySelector('.clear_comp');
let selectAll = document.querySelector('.select_all');
let content = JSON.parse(localStorage.getItem('todolist')) || [];


let switched = false;
// let id = function(){
//     '
// };
function idGenerator(){
  return 'ayushman'.split('').sort(()=> Math.random()-0.5) + '_' + Math.floor(Math.random()*1000);
}
function createTodo(todos) {
  ul.innerHTML = "";
  todos.forEach(elem => {    //elem here is each indivitual todo in the array of todos
    var li = document.createElement('li');
    li.classList.add('prime_list');
    var input_check = document.createElement('input');
    input_check.classList.add('input_tick');
    input_check.type = "checkbox";
    input_check.checked = elem.completed;
    input_check.setAttribute('data-id', elem.id);
    var para_todo = document.createElement('p');
    para_todo.textContent = elem.text;
    var spanx = document.createElement('span');
    spanx.classList.add('cross');
    spanx.innerText = 'X';
    spanx.setAttribute('data-id', elem.id);
    li.append(input_check, para_todo, spanx);
    ul.append(li);
    input_check.addEventListener('click', check_complete);
    // para_todo.addEventListener('click',check_complete);
    spanx.addEventListener('click', deletetodo);
    // localStorage.setItem('todolist', JSON.stringify(content));
    let editableInput = document.createElement('input');
    para_todo.addEventListener('dblclick',makeEdit);

    function makeEdit(event){
      para_todo.parentElement.replaceChild(editableInput, para_todo);
      editableInput.value = elem.text;
      editableInput.focus();
      editableInput.addEventListener('keyup',(event)=>{
        if(event.keyCode == 13){
          elem.text = editableInput.value; 
          createTodo(content); 
          // console.log(elem.textContent);
        }
      })
      editableInput.addEventListener('blur',(event) => {
        elem.text = editableInput.value; 
        createTodo(content);
        localStorage.setItem('todolist', JSON.stringify(content));
      });
    }
  });
  itemsleft();
  selectAll.addEventListener('click',showAllFunc);
}


function addtodo(event) {
  if (event.keyCode == 13 && input_todo.value) {
    content.push({
      completed: false,
      text: input_todo.value,
      id: idGenerator()
    })
    createTodo(content);
    localStorage.setItem('todolist',JSON.stringify(content));
    input_todo.value = "";
  }

}


function deletetodo(event) {
  content = content.filter(todo => todo.id != event.target.dataset.id);
  createTodo(content);
  localStorage.setItem('todolist', JSON.stringify(content));
}

function check_complete(event) {
  content = content.map(todo => {
    if (todo.id == event.target.dataset.id) {
      todo.completed = !todo.completed
    }
    return todo;
  })
  createTodo(content);
  localStorage.setItem('todolist', JSON.stringify(content));
}
function itemsleft() {
  var lefts = content.filter(todo => todo.completed == false).length;
  if (lefts) {
    itemslefts.parentElement.parentElement.classList.add('layout_flex')
  }
  return itemslefts.innerText = lefts;
}

function showAll() {
  createTodo(content);
}

function showActive() {
  activeContent = content.filter(todo => todo.completed == false)
  createTodo(activeContent);
}
function showComplete() {
  completedContent = content.filter(todo => todo.completed == true);
  createTodo(completedContent);

}
function clearcompletedfun() {
  content = content.filter(todo => todo.completed == false)
  createTodo(content);
  localStorage.setItem('todolist', JSON.stringify(content));  
}
function showAllFunc() {
  // console.log("heo")
  
  if (switched == true) {
    // content = content.map(todo =>{
    //   todo.completed = true
    //    return todo
    //  })
    content.forEach(todo => todo.completed = true);
    createTodo(content);
    localStorage.setItem('todolist', JSON.stringify(content));
  }
  else {
    // content= content.map(todo => {
    //  todo.completed = false
    //  return todo;
    // })
    content.forEach(todo => todo.completed = false);
    createTodo(content);
    localStorage.setItem('todolist', JSON.stringify(content));
  }
  switched = !switched;


}

  // selectAll.checked = !selectAll.checked;
// }


all.addEventListener('click', showAll);
act.addEventListener('click', showActive);
complete.addEventListener('click', showComplete);
clearSelected.addEventListener('click', clearcompletedfun);
input_todo.addEventListener('keyup', addtodo);

setInterval(createTimeUI,1000);
createUI(state[x()],state2[y()]);
createTodo(content);




// let cardDisp = document.querySelector('.quote-wrapper');

