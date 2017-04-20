// function remove event default
function removeEventDefault(e) {
    var event = e || window.event;

    if (event.preventDefault) { // если метод существует
        event.preventDefault(); // то вызвать его
    } else { // иначе вариант IE8-:
        event.returnValue = false;
    }
}
