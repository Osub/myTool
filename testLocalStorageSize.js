localStorage.setItem("DATA", "m");
for(i=0 ; i<40 ; i++) {
    var data = localStorage.getItem("DATA");
    try { 
        localStorage.setItem("DATA", data + data);
    } catch(e) {
        console.log("LIMIT REACHED: (" + i + ")");
        console.log(e);
    }
}
localStorage.removeItem("DATA");
