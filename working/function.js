

function getting() {
    var x = document.getElementById('blindflag').value

    // document.write(x)
    // alert(x)

    el = document.getElementById('blindflagcheck')
    if (x == 'flag{example}') {
        el.innerHTML = '<h2>complete</h2>'
    }
    else {
        alert('Nope, Try again')
    }
}




function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
}



