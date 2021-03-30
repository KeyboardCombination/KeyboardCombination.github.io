if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById("css").href = "CSS/mobile.css"
}else{
    document.getElementById("css").href = "CSS/main.css"
}