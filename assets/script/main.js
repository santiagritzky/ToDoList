(function () {
    'use strict'

    var $ul = document.querySelector('ul');
    var $btn = document.querySelector('#submit');
    var $inputTxt = document.querySelector('#input_text');
    var $btnClear = document.querySelector('#btn_clear');

    $btn.addEventListener('click', addTaks);
    $inputTxt.addEventListener('keyup', addTaskEnter);
    $ul.addEventListener('click', markItem);
    $btnClear.addEventListener('click', clearMarkedItems);


    function markItem(e) {
        if (e.target.nodeName == 'LI') {
            e.target.classList.toggle('checked')
        } else {
            return;
        }
    }

    function addTaskEnter(e) {
        if (e.keyCode == 13) {
            addTaks();
        }
    }


    function addTaks() {

        var li = document.createElement('li');
        var liTxt = document.createTextNode($inputTxt.value);

        $inputTxt.value !== '' ? (li.appendChild(liTxt), $ul.appendChild(li)) : alert('digite uma terefa para sua lista');

        li.addEventListener('mouseenter', function () {
            li.classList.add('pointer')
        })
        clearInput();
    }

    function clearInput() {
        $inputTxt.value = '';
        $inputTxt.focus();
    }

    function clearMarkedItems() {
        let checkedItems = verifyCheckedItems();
        removeItems(checkedItems);
    }

    function verifyCheckedItems() {
        var lis = $ul.childNodes;
        var lisArray = [];

        for (var i = 1; i < lis.length; i++) {
            lisArray.push(lis[i]);
        }

        var lisChecked = lisArray.filter(checkedItems)

        function checkedItems(lis) {
            return lis.classList.contains('checked');

        }
        return lisChecked;
    }

    function removeItems(lis) {
        for (var i = 0; i < lis.length; i++) {
            lis[i].parentNode.removeChild(lis[i]);
        }
    }

})();