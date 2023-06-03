var middleCnt = document.querySelector('.middle_cnt');
var middleHeader = document.querySelector('.middle_header');
var middleMidleCnt = document.createElement('div');
middleMidleCnt.setAttribute('class','middle_middle');
var butCnt = document.createElement('div');
butCnt.setAttribute('class', 'butCnt');

var searchCntF = document.querySelector('.searchCnt');

function createModule(text, textField, fieldWidth, fieldHeight){

    var textCnt = document.createElement('div');
    textCnt.setAttribute('class','textCnt');
    var textElemInnerText = document.createElement('span');
    textElemInnerText.textContent = text;
    textElemInnerText.setAttribute('class', 'textLog');
    textCnt.appendChild(textElemInnerText);
    

    var fieldCnt = document.createElement('div');
    fieldCnt.setAttribute('class','fieldCnt');
    fieldCnt.style.width = fieldWidth;
    
    var textElemInnerField = document.createElement('input');
    textElemInnerField.setAttribute('type', 'text');
    textElemInnerField.setAttribute('placeholder', '  ' + textField);
    textElemInnerField.setAttribute('class', 'textField');
    textElemInnerField.style.height = fieldHeight;
    
    fieldCnt.appendChild(textElemInnerField);
    
    middleMidleCnt.appendChild(textCnt);
    middleMidleCnt.appendChild(fieldCnt);
}

function createBut(text, width, height){
    
    var but = document.createElement('div');
    but.setAttribute('class', 'but');
    but.textContent = text;
    but.style.height = height;
    but.style.width = width;

    butCnt.appendChild(but);
    middleMidleCnt.appendChild(butCnt);
}

function collectFields(){
    document.body.insertBefore(middleMidleCnt, searchCntF);
    createModule('Pet Name', 'Name', '83%', '5vh');
    createModule('Pet Owner', "Owner's name", '83%', '5vh');
    createModule('Date', "mm/dd/yyyy", '33%', '5vh');
    createModule('Time', "--:--:--", '33%', '5vh');
    createModule('Apt. Notes', "Appointment Notes", '83%', '12vh');
    createBut('Add Appointment','160px','30px');
}
collectFields();
var addAppBut = document.querySelector('.but');
addAppBut.addEventListener('click', createView);




function createSortModule(height){
    var searchCnt = document.createElement('div');
    searchCnt.setAttribute('class', 'searchCnt');
    
    var searchField = document.createElement('div');
    searchField.setAttribute('class', 'searchField');

    var inputSearch = document.createElement('input');
    inputSearch.setAttribute('placeholder', '  Search');
    inputSearch.setAttribute('class', 'inputSearch');
    inputSearch.style.height = height;

    var sortField = document.createElement('div');
    sortField.setAttribute('class', 'sortField');
    sortField.textContent = 'Sort by';
    sortField.style.height = '32px';

    var caret = document.createElement('i');
    caret.setAttribute('class', 'fas fa-caret-down');
    caret.style.paddingLeft = '5px';
    sortField.appendChild(caret);
    

    searchField.appendChild(inputSearch);
    searchCnt.appendChild(searchField);
    searchCnt.appendChild(sortField);
    document.body.appendChild(searchCnt);
}
createSortModule('30px');



var notesArr = [];

function dataCollector(){
    var fieldCnt = document.getElementsByClassName('textField');
    var newObj = {
        petName: fieldCnt[0].value,
        owner: fieldCnt[1].value,
        date: fieldCnt[2].value,
        time: fieldCnt[3].value,
        note: fieldCnt[4].value,
    };
    notesArr.push(newObj);
    fieldCnt[0].value = '';
    fieldCnt[1].value = '';
    fieldCnt[2].value = '';
    fieldCnt[3].value = '';
    fieldCnt[4].value = '';
    console.log(notesArr);
}

function deletePrev(){
    var isExistRem = document.querySelectorAll('.remarkCnt');
    if(isExistRem[0]){
        for(i = 0; i < isExistRem.length; i++){
            isExistRem[i].remove();
        }
        
    }
}

function createRem(i){
    var remarkCnt = document.createElement('div');
    remarkCnt.setAttribute('class', 'remarkCnt');

    var xbutCnt = document.createElement('div');
    xbutCnt.setAttribute('class', 'xButCnt');
    var xBut = document.createElement('i');
    xBut.setAttribute('class', 'fas fa-times');
    xbutCnt.appendChild(xBut);

    var mainCnt = document.createElement('div');
    mainCnt.setAttribute('class', 'mainCnt');
    var headName = document.createElement('h2');
    headName.textContent = notesArr[i].petName;
    var pElem1 = document.createElement('p');
    pElem1.textContent = 'Owner: ' + notesArr[i].owner;
    var pElem2 = document.createElement('p');
    pElem2.textContent = notesArr[i].note;

    mainCnt.appendChild(headName);
    mainCnt.appendChild(pElem1);
    mainCnt.appendChild(pElem2);

    var dateCnt = document.createElement('div');
    dateCnt.setAttribute('class', 'dateCnt');
    dateCnt.textContent = notesArr[i].date + ' ' + notesArr[i].time;

    remarkCnt.appendChild(xbutCnt);
    remarkCnt.appendChild(mainCnt);
    remarkCnt.appendChild(dateCnt);

    document.body.appendChild(remarkCnt);

    xBut.onclick = function(){
        remarkCnt.remove();
        if(notesArr.length == 1){
            notesArr.shift();
        }else{
            notesArr.splice(i, 1);
        }
        console.log(notesArr);
    }
}

function createView(){
    dataCollector();
    deletePrev();
    for(i = 0; i < notesArr.length; i++){
        createRem(i);
    }
}



// var addAppBut = document.querySelector('.but');
// addAppBut.addEventListener('click', createView);


var plusBut = document.getElementsByClassName('middle_cnt');
plusBut[0].addEventListener('click', openClose);

var flag = 'flag';
function openClose(){
    var targetElem = document.getElementsByClassName('middle_middle')[0];
    // var targetBut = document.getElementsByClassName('but')[0];
    // var targetSearch = document.getElementsByClassName('searchCnt')[0];
    // console.log(targetElem);
    
    if(flag){
        targetElem.style.display = 'none';
        flag = null;
        // targetBut.remove();
        // targetElem.remove();
        // targetSearch.remove();
        // targetBut.innerHTML = '';
        // targetElem.innerHTML = '';
        // targetSearch.innerHTML = '';
        
        // targetBut.parentElement.removeChild(targetBut);
        // targetElem.parentElement.removeChild(targetElem);
        // targetSearch.parentElement.removeChild(targetSearch);
                 
    }else{
        targetElem.style.display = '';
        flag = 'flag';
        var addAppBut = document.querySelector('.but');
        addAppBut.addEventListener('click', createView);
    }
}
