// //  TASK 1
//     var button = document.getElementById("myButton");
//     var paragraph = document.getElementById("myParagraph");

//     button.addEventListener("click", function() {
//         paragraph.textContent = "The paragraph text has been changed!";
//     });
 

// TASK 2
// document.addEventListener("DOMContentLoaded", function() {
//     var image = document.getElementById("myImage");

//     image.addEventListener("dblclick", function() {
//         if (image.style.display === "none") {
//             image.style.display = "block";
//         } else {
//             image.style.display = "none";
//         }
//     });
// });


// // TASK 3
// document.addEventListener("DOMContentLoaded", function() {
//     var element = document.getElementById("myElement");

//     element.addEventListener("mouseover", function() {
//         element.style.backgroundColor = "lightgreen";  
//     });

//     element.addEventListener("mouseout", function() {
//         element.style.backgroundColor = "lightblue";  
//     });
// });


// // TASK 4
// document.addEventListener("DOMContentLoaded", function() {
//     var element = document.getElementById("myElement");

//     element.addEventListener("mouseover", function() {
//         element.style.backgroundColor = "lightgreen";  
//     });

//     element.addEventListener("mouseout", function() {
//         element.style.backgroundColor = "lightblue";  
//     });
// });




// // TASK 5 
//     var inputField = document.getElementById("myInput");

//     inputField.addEventListener("keydown", function(event) {
//         console.log("Key pressed: " + event.key);
//     });
 
// TASK 6

    // var inputField = document.getElementById("myInput");
    // var displayParagraph = document.getElementById("displayParagraph");

    // inputField.addEventListener("keyup", function() {
    //     displayParagraph.textContent = inputField.value;
    // });


// TASK 7
    // var form = document.getElementById("myForm");

    // form.addEventListener("submit", function(event) {
    //     event.preventDefault(); 

    //     var formData = new FormData(form);

    //     var formObject = {};
    //     formData.forEach((value, key) => {
    //         formObject[key] = value;
    //     });

    //     console.log("Form data:", formObject);
    // });


    // // TASK 8
    //     var selectDropdown = document.getElementById("mySelect");
    //     var displayParagraph = document.getElementById("displayParagraph");
    
    //     selectDropdown.addEventListener("change", function() {
    //         displayParagraph.textContent = "Selected value: " + selectDropdown.value;
    //     });
    


    // TASK 9
    // document.addEventListener("DOMContentLoaded", function() {
    //     var list = document.getElementById("myList");
    
    //     list.addEventListener("click", function(event) {
    //         if (event.target && event.target.nodeName === "LI") {
    //             console.log("Clicked item text:", event.target.textContent);
    //         }
    //     });
    // });
    
// TASK 10
        // var parentElement = document.getElementById("parentElement");
        // var dynamicList = document.getElementById("dynamicList");
        // var addButton = document.getElementById("addButton");
    
        // addButton.addEventListener("click", function() {
        //     var newItem = document.createElement("li");
        //     newItem.textContent = "New Item " + (dynamicList.children.length + 1);
        //     dynamicList.appendChild(newItem);
        // });
    
        // parentElement.addEventListener("click", function(event) {
        //     if (event.target && event.target.nodeName === "LI") {
        //         console.log("Clicked item text:", event.target.textContent);
        //     }
        // });
    