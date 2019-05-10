const list = document.getElementById("todoList");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const submit = document.getElementById("add");
const toastCtrl = document.querySelector('ion-toast-controller');

console.log(titleInput, descriptionInput, submit);

submit.addEventListener("click", handleSubmit);

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        handleSubmit(event);
    }
}

function handleSubmit (event) {
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (title !== "") {
        var newCard = document.createElement('ion-card');
        var cardHeader = document.createElement('ion-card-header');
        var cardTitle = document.createElement('ion-card-subtitle');
        var cardCloseIcon = document.createElement('ion-icon');
        //var cardCloseContainer = document.createElement('ion-fab-button').
        var cardContent = document.createElement('ion-card-content');

        
        cardCloseIcon.setAttribute('name', 'checkbox');
        //cardCloseContainer.setAttribute('style', 'font-size: 3em');
        cardCloseIcon.setAttribute('float-right','');
        cardCloseIcon.setAttribute('margin','');
        //cardCloseContainer.setAttribute('color','black');
        //cardCloseIcon.setAttribute('slot','icon-only');
        //cardCloseContainer.innerHTML = '✓';
        cardTitle.innerHTML = title;
        cardTitle.appendChild(cardCloseIcon);
        cardHeader.appendChild(cardTitle);
        newCard.appendChild(cardHeader);
        cardContent.innerHTML = description;
        newCard.appendChild(cardContent);
        list.appendChild(newCard);
        
        cardCloseIcon.addEventListener("click", function() {
            list.removeChild(newCard);
            toastCtrl.create({
                header: "Task Completed!",
                message: "Task '" + title + "' has been completed! Good job!",
                duration: 5000
            }).then(
                toastElement => toastElement.present()
            );
        });

        titleInput.value = "";
        descriptionInput.value = "";
    } else {
        toastCtrl.create({
            header: "Invalid title",
            message: "Please enter a valid title",
            duration: 2000
        }).then(
            toastElement => toastElement.present()
        );
    }
}

