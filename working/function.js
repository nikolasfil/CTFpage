// [Convert]::ToBase64String([System.Text.Encoding]::Unicode.GetBytes($Text))
// doesn't work right

function getting() {
    var x = document.getElementById('blindflag').value

    // document.write(x)
    // alert(x)

    el = document.getElementById('blindflagcheck')
    if (x == b64_to_utf8('ZmxhZ3tleGFtcGxlfQ==')) {
        el.innerHTML = '<h2 class="submitted">complete</h2>'
    }
    else {
        alert('Nope, Try again')
    }
}



function b64_to_utf8(str) {
    return decodeURIComponent(window.atob(str));
}



