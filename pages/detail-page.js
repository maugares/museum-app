// add event handler
function doesNotPassAllValidations(name, msg){
    if(!name){
        alert("You forgot to fill in your name!");
        return true;
    }
    
    if(!msg){
        alert("You forgot to fill in your message!");
        return true;
    }

    if(msg.length > 280){
        alert("Your comment is too long");
        return true;
    }
}

function firstIsCaps(name){
    let caps = /[A-Z]/g;
    let lows = /[a-z]/g;
    let firstChar = name.charAt(0);

    if(!!firstChar.match(caps)){
        return name;
    } else if (!!firstChar.match(lows)){
        let capsName = firstChar.toUpperCase() + name.slice(1);
        return capsName;
    }
}

function nameIsWrong(name){
    let validChar = /[A-Za-z]/;
    let firstChar = name.charAt(0);

    if(!firstChar.match(validChar)){
        alert("Check your name! It seems to be incorrectly written.");
        return true;
    }
}

function submitComment(){

    // Gather data
    const inputField = document.getElementById('name');
    let name = inputField.value;
    const textArea = document.getElementById('msg');
    const msg = textArea.value;

    // Check if input is provided
    if(doesNotPassAllValidations(name, msg)){
        return null;
    };

    // Check if the name is correct
    if(nameIsWrong(name)){
        return null;
    }

    // Correct no caps in name
    name = firstIsCaps(name)

    // Create HTML elements
    const comment = document.createElement('section');
    const h3 = document.createElement('h3'); 
    const p = document.createElement('p');
    
    h3.innerHTML = `${name} said: `;
    p.innerHTML = msg;

    comment.classList.add("comment");
    comment.appendChild(h3);
    comment.appendChild(p);

    // Display the elements on the page
    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);
    
    // reset form values
    inputField.value = null;
    textArea.value = null;    
}