
let divQuotesArr = [...document.querySelectorAll('.quote')];
function extractArr(arr){
    for(let i=0;i<arr.length;i++){
        let childArr = [...arr[i].children];
        state.push({
            quoteText:childArr[0].innerText,
            writer: childArr[1].innerText
        });
    }
    return state;

}



let state = [];

function createUI(state){

}