    function display() {
        const store = localStorage.getItem("store");
        const parsedStore = JSON.parse(store);
        
    
        for (let i = 0; i < parsedStore.length; i++) {
            console.log(parsedStore[i]);   
            document.getElementById("showData").innerHTML += `<ol><li>${parsedStore[i].emailId}</li> <li>${parsedStore[i].loginUsername}</li> <li>${parsedStore[i].loginPassword}</li> </ol>`
            // parsedStore[i].emailId + ", " + parsedStore[i].loginUsername + ", " + parsedStore[i].loginPassword;
        }
    }
    
   display();
    
   
    