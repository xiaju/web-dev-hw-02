(function() {
  "use strict";

  var dst = document.getElementById('screen');
  var op = 'empty';
  // value shouldn't matter
  var prevVal;
  var lastInput = 'empty';
  var hiddenValue = 0;
  var decimalShift = 0;

  function updateVal(value) {
    hiddenValue = value

    if (value.toString().length < 12) {
      dst.innerText = hiddenValue
    } else {
      dst.innerText = hiddenValue.toExponential(6)
    }
  }

  // referenced from Nat Tuck's lecture notes
  function input(value) {
    if (lastInput == 'number') {
      if (decimalShift == 0) {
        updateVal(hiddenValue * 10 + parseInt(value))
      } else {
        updateVal(hiddenValue + parseFloat(value) / Math.pow(10, decimalShift++))
      }
    }
    else {
      decimalShift = 0;
      updateVal(parseInt(value));
    }
    lastInput = 'number'
  }

  function decimal() {
    if (decimalShift == 0) {
      decimalShift = 1;
    }
  }

  function operation(oper) {
    var newVal = hiddenValue
    if (lastInput == 'operator' || lastInput == 'empty') {
      return;
    }

    switch(op) {
      case '+':
        newVal = newVal + prevVal;
      break;
      case '-':
        newVal = prevVal - newVal;
      break;
      case '/':
        newVal = prevVal / newVal;
      break;
      case 'x':
        newVal = prevVal * newVal;
      break;
      case 'empty':
      break;
    }
    op = oper;
    prevVal = newVal;
    lastInput = 'operator';
    updateVal(newVal);
  }
  function clear() {
    updateVal(0);
    op = 'empty';
    lastInput ='empty';
  }

  function setup_button() {
    var inputb = document.getElementsByClassName('input');
    var clearb = document.getElementById('clear');
    var opb = document.getElementsByClassName('operation');
    var decb = document.getElementById('decimal')
    for (var i = 0; i < inputb.length; i++) {
      inputb[i].addEventListener('click', function() {input(this.value)}, false);
    }
    for (var i = 0; i < opb.length; i++) {
      opb[i].addEventListener('click', function() {operation(this.value)}, false);
    }
    decb.addEventListener('click', decimal)
    clearb.addEventListener('click', clear);
  }

  window.addEventListener('load', setup_button);
}) ();
