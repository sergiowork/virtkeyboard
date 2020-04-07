const keyboard = [
  96,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  48,
  45,
  61,
'backsp',
'tab',
  113,
  119,
  101,
  114,
  116,
  121,
  117,
  105,
  111,
  112,
  91,
  93,
  92,
'caps',
  97,
  115,
  100,
  115,
  102,
  103,
  104,
  106,
  107,
  108,
  59,
  39,
'enter',
'shift-l',
  122,
  120,
  99,
  118,
  98,
  110,
  109,
  44,
  46,
  47,
  '↑',
  'shift-r',
  ':)',
  'ctr-l',
  'win',
  'alt-l',
  'space',
  'alt-r',
  'ctr-r',
  '←',
  '↓',
  '→'
];

document.write("<div class=info>");
document.write("<h1>Virtual Keyboard</h1>");
document.write("<h3>Клавиатура для Windows.</h3>");
document.write("<\/div>");

var textareaElement = document.createElement('div');
textareaElement.innerHTML = '<textarea id="textarea"></textarea>';
document.body.appendChild(textareaElement);

var keyboardElement = document.createElement('div');
keyboardElement.innerHTML = '<div id="keyboard"></div>';
document.body.appendChild(keyboardElement);

function init(){
    let out = '';
    for (let i=0; i<keyboard.length; i++){
        if(i==14 || i==28){
            out +='<div class="newLineKey"></div>';
        }

        let symbol;

        if (Number.isInteger(keyboard[i])){
            symbol = String.fromCharCode(keyboard[i]);
        } else {
            symbol = keyboard[i];
        }

        out +='<div class="key" data="'+keyboard[i]+'">'+symbol+'</div>';
    }

    document.querySelector('#keyboard').innerHTML = out;

    document.getElementById('textarea').value = '';
}
init();


document.onkeypress = function(event){
    console.log(event.code); 
    console.log(event.keyCode);

    document.querySelectorAll('#keyboard .key').forEach(function(element){
        element.classList.remove('active');
    });
    document.querySelector('#keyboard .key[data="'+ event.keyCode +'"]').classList.add('active');
}


//textarea
    function showInTextarea(symbol){
        var textarea = document.getElementsByTagName('textarea')[0];
        textarea.value += symbol;
    }

    function deleteSymbolInTextarea(){
        var str = document.getElementById("textarea").value;
        var newStr = str.substring(0, str.length - 1);
        document.getElementById('textarea').value = '';
        return newStr;
    }

    function newStringInTextarea(el, text, offset){
        var val = el.value, endIndex, range, doc = el.ownerDocument;
    if (typeof el.selectionStart == "number"
            && typeof el.selectionEnd == "number") {
        endIndex = el.selectionEnd;
        el.value = val.slice(0, endIndex) + text + val.slice(endIndex);
        el.selectionStart = el.selectionEnd = endIndex + text.length+(offset?offset:0);
    } else if (doc.selection != "undefined" && doc.selection.createRange) {
        el.focus();
        range = doc.selection.createRange();
        range.collapse(false);
        range.text = text;
        range.select();
    }
    }

//mouse
document.querySelectorAll('#keyboard .key').forEach(function(element){
    element.onclick = function(event){
        document.querySelectorAll('#keyboard .key').forEach(function(element){
        element.classList.remove('active');
        });

        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(code);
        
        if(parseInt(code)) {
            showInTextarea(String.fromCharCode(code));
        } else if (code == 'space'){
            showInTextarea(' ');
        } else if (code == 'backsp'){
            showInTextarea(deleteSymbolInTextarea());
        } else if (code == '↑'){
            showInTextarea('↑');
        } else if (code == '↓'){
            showInTextarea('↓');
        } else if (code == '→'){
            showInTextarea('→');
        } else if (code == '←'){
            showInTextarea('←');
        } else if (code == 'enter'){
          newStringInTextarea(document.getElementById('textarea'),'\n');
        } else if (code == ':)'){
          showInTextarea(':)');
        } else {
            showInTextarea('');
        }
    }
});

document.addEventListener('keydown', function(event){
  document.querySelectorAll('#keyboard .key').forEach(function(element){
     element.classList.remove('active');
  });

  if (event.keyCode == 9){
    document.querySelector('#keyboard .key[data="'+ 'tab' +'"]').classList.add('active');
  } else if (event.keyCode == 8){
    document.querySelector('#keyboard .key[data="'+ 'backsp' +'"]').classList.add('active');
  } else if (event.keyCode == 16){
    if (event.location == 1) document.querySelector('#keyboard .key[data="'+ 'shift-l' +'"]').classList.add('active');
    if (event.location == 2) document.querySelector('#keyboard .key[data="'+ 'shift-r' +'"]').classList.add('active');
  } else if (event.keyCode == 17){
    if (event.location == 1) document.querySelector('#keyboard .key[data="'+ 'ctr-l' +'"]').classList.add('active');
    if (event.location == 2) document.querySelector('#keyboard .key[data="'+ 'ctr-r' +'"]').classList.add('active');
  } else if (event.keyCode == 18){
    if (event.location == 1) document.querySelector('#keyboard .key[data="'+ 'alt-l' +'"]').classList.add('active');
    if (event.location == 2) document.querySelector('#keyboard .key[data="'+ 'alt-r' +'"]').classList.add('active');
  } else if (event.keyCode == 20){
    document.querySelector('#keyboard .key[data="'+ 'caps' +'"]').classList.add('active');
  } else if (event.keyCode == 37 ){
    document.querySelector('#keyboard .key[data="'+ '←' +'"]').classList.add('active');
  } else if (event.keyCode == 38 ){
    document.querySelector('#keyboard .key[data="'+ '↑' +'"]').classList.add('active');
  } else if (event.keyCode == 39 ){
    document.querySelector('#keyboard .key[data="'+ '→' +'"]').classList.add('active');
  } else if (event.keyCode == 40 ){
    document.querySelector('#keyboard .key[data="'+ '↓' +'"]').classList.add('active');
  } else if (event.keyCode == 91 ){
    document.querySelector('#keyboard .key[data="'+ 'win' +'"]').classList.add('active');
  } else if (event.keyCode == 13 ){
    document.querySelector('#keyboard .key[data="'+ 'enter' +'"]').classList.add('active');
  } else if (event.keyCode == 32 ){
    document.querySelector('#keyboard .key[data="'+ 'space' +'"]').classList.add('active');
  }
});
