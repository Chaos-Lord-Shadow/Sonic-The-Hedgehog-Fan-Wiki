function showFlashMessage() {
    
    var flashMessage = document.getElementById("flash-message");

    var internetStatus = navigator.onLine;

    if (internetStatus) {
        
        flashMessage.innerText = "TO LEARN MORE ABOUT SONIC, HEAD TO: SONIC.FANDOM.COM";
        
        flashMessage.classList.remove("alert-danger");
        
        flashMessage.classList.add("alert-success");
        
    } else {
        
        flashMessage.innerText = "YOU ARE CURRENTLY OFFLINE. PLEASE CHECK YOUR INTERNET CONNECTION.";
        
        flashMessage.classList.remove("alert-success");
        
        flashMessage.classList.add("alert-danger");
    
    }
    
    flashMessage.style.display = "flex";
    
    // Hides The Flash Message After 6 Seconds.
    
    setTimeout(function() {
    
        flashMessage.style.display = "none";
    
    },6000);

}
  