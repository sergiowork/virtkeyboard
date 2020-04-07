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
  '',
  'ctr',
  'win',
  'alt-l',
  'space',
  'alt-r',
  '→',
  '↓',
  '←'
];



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
