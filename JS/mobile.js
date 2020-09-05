if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    console.log("is mobile")
    document.getElementById("css").href = "CSS/mobile.css"
}else{
    console.log("is desktop")
    document.getElementById("css").href = "CSS/main.css"
}
