document.addEventListener('DOMContentLoaded', function () {
  new magicText({
    'selector' :'.text-write',
    'printText': true, 
  });

  /**
   * the effect of printed text
   * @param  {obj} obj 
   */
  function magicText(params) {
    var printTextOption = params['selector'] != '' && params['printText'] == true;
    var elems = getHtmlElements();

    if (printTextOption) {
      initPrintedText(elems);
    }
    /**
     * 
     * @param  {array} elems 
     * @return {[type]}       
     */
    function initPrintedText(elems) {
      var elemsText = getTextElems(elems);

      for (var i = 0; i < elems.length; i++) {
        printText(elems[i], elemsText[i]);
      }
    }
    /**
     * @param  {obj} elems 
     * @return {array}       
     */
    function getTextElems(elems) {
      var elemsText = [];
      elems.forEach(function (item) {
        elemsText.push(item.textContent);
      });
      return elemsText;
    }
    /**
     * [printText description]
     * @param  {obj} field HTML element
     * @param  {[str]} text  
     */
    function printText(field, text) {
      var posLetter = 0;
      var string = '';
      var interval = getRandomInt(getRandomInt(250 * 2.5));
      var cursor = '<i class="magic-cursor"></i>';
      var printLetter = setInterval(function () {
        string += text[posLetter];
        field.innerHTML = string + cursor;
        posLetter++;

        if (posLetter >= text.length) {
          clearInterval(printLetter);
        }
      }, interval);
    }
    /** 
     * @param  {int} max 
     * @return {int} 
     */
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    /**
     * @return {obj} elems
     */
    function getHtmlElements() {
      var elems = document.querySelectorAll(params.selector);
      return elems;
    }
  }
});
