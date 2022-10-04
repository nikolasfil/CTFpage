// [Convert]::ToBase64String([System.Text.Encoding]::Unicode.GetBytes($Text))
// doesn't work right

function getting(srcs) {
    
    // document.write(x)
    // alert(x)
    if (srcs == 'lsb') {
        var sect='lsbflagcheck';
        var chall='lsbflag';
        var flag='ZmxhZ3tmdW5fdzF0aF9MU0J9';
    }
    else if(srcs == 'blind'){
        var sect = 'blindflagcheck';
        var chall='blindflag';
        var flag = 'ZmxhZ3tleGFtcGxlfQ==';
    }
    else if(srcs == 'huffpuff' ){
        var sect = 'huffpuffflagcheck';
        var chall='huffpuffflag';
        var flag = 'ZmxhZ3t2M3J5UDFja3lIdWZmM3J9';        
    }
    var x = document.getElementById(chall).value;
    el = document.getElementById(sect);
    // alert(b64_to_utf8(flag))
    if (x == b64_to_utf8(flag)) {
        el.innerHTML = '<h2 class="submitted">complete</h2>';
    }
    else {
        alert('Nope, Try again');
    }
}



function b64_to_utf8(str) {
    return decodeURIComponent(window.atob(str));
}



