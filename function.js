// [Convert]::ToBase64String([System.Text.Encoding]::Unicode.GetBytes($Text))
// doesn't work right

function getting(srcs) {

    // document.write(x)
    // alert(x)
    if (srcs == 'lsb') {
        var flag = 'ZmxhZ3tmdW5fdzF0aF9MU0J9';
    }
    
    
    else if (srcs == 'huffpuff') {
        var flag = 'ZmxhZ3t2M3J5UDFja3lIdWZmM3J9';
    }

    else if (srcs == 'lookclosely1') {
        var flag = 'ZmxhZzF7VzBybGRfZzAzc19SMHVuZF9hbmRfcjB1bmR9';
    }

    else if (srcs == 'lookclosely2') {
        var flag = 'ZmxhZzJ7bjB0aDFuZ19iM3R0M3JfdGhhbl9iMzFuZ19TM2N1cjN9';
    }

    else if (srcs == 'contexthidden') {
        var flag = 'ZmxhZzN7TDF0dGwzX2JhczFuZ30=';
    }

    else if (srcs == 'yingyang') {
        var flag = 'ZmxhZzR7V3V4aV9GaW5nZXJfSG9sZH0=';
    }

    else if (srcs == 'cifercrackzip') {
        var flag = 'ZmxhZzV7SUVFRV9jMG1wM3QxdDF2M30=';
    }   

    // miscellaneous

    else if (srcs == 'blind') {
        var flag = 'ZmxhZ3tOMHdfWTB1X1MzM19NM30=';
    }
    else if (srcs == 'idle') {
        var flag = 'ZmxhZ3tEMG50X1N0MHBfTTNfTjB3fQ==';
    }
    else if (srcs == 'breakout') {
        var flag = 'ZmxhZ3tUaDFzXzNzY2FsM3RlZF9xdTFjbHl9';
    }

    var sect = srcs + 'check';
    var chall = srcs + 'flag';
    var x = document.getElementById(chall).value;
    el = document.getElementById(sect);
    // alert(b64_to_utf8(flag))
    if (x == b64_to_utf8(flag)) {
        el.innerHTML = '<h3 class="submitted">complete</h3>';
    }
    else {
        // alert('Nope, Try again');
        window.confirm('Nope, Try again')
        // el.innerHTML+='<div id="dialog" title="Basic dialog">;<p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the x icon.</p></div>'
        // el.innerHTML+='<div class="alert"><span class="closebtn" onclick="this.parentElement.style.display="none";">&times;</span>This is an alert box.</div>'
        
    }
}



function b64_to_utf8(str) {
    return decodeURIComponent(window.atob(str));
}



