const scriptURL1 = 'https://script.google.com/macros/s/AKfycbwx-74X0OLRKCsQUNFZVYIPeEwgGP0dGbsPQGrMBQx-_INydx8jhu_o_IQqPo6YOdig7A/exec';
// const scriptURL2 = 'https://script.google.com/macros/s/AKfycbzkTG4g4YwNJ-3cfLJI2BMUx7xg8kV1q8Ob8JG4C_HmC0kNuiHN-zQaeyK2qP5Q_FOrgQ/exec';

const form1 = document.forms['contact_form1'];
// const form2 = document.forms['contact_form2'];
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const enquiry_form = e.target;
    // Check if all required fields are filled
    if (enquiry_form.checkValidity()) {
    
        showModal(); // Show "Please wait" message
        // Get current date and time in Indian time zone
        const currentTime = new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata"});

        // Append current time to form data
        const formData = new FormData(form1);
        formData.append('updated_at', currentTime);

        fetch(scriptURL1, { method: 'POST', body: formData })
            .then(response => {
                if (response.ok) {
                    showSuccessMessage(); // Show success message upon successful response
                    setTimeout(() => {
                        window.location.reload(); // Reload the page after some time (optional)
                    }, 3000);
                } else {
                    console.error('Error!', response.statusText);
                }
            })
            .catch(error => console.error('Error!', error.message))
            .finally(() => {
                hideModal(); // Hide the "Please wait" message regardless of response
            });
    } else {
        // If the form is invalid, prevent submission
        form1.reportValidity();
    }
});

// form2.addEventListener('submit', e => {
//     e.preventDefault();

//     // Check if all required fields are filled
//     if (form2.checkValidity()) {
//         console.log("correct");
//         showModal2(); // Show "Please wait" message

//         // Get current date and time in Indian time zone
//         const currentTime = new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata"});

//         // Append current time to form data
//         const formData = new FormData(form2);
//         formData.append('updated_at', currentTime);

//         fetch(scriptURL2, { method: 'POST', body: formData })
//             .then(response => {
//                 if (response.ok) {
//                     showSuccessMessage2(); // Show success message upon successful response
//                     setTimeout(() => {
//                         window.location.reload(); // Reload the page after some time (optional)
//                     }, 3000);
//                 } else {
//                     console.error('Error!', response.statusText);
//                 }
//             })
//             .catch(error => console.error('Error!', error.message))
//             .finally(() => {
//                 hideModal2(); // Hide the "Please wait" message regardless of response
//             });
//     } else {
//         // If the form is invalid, prevent submission
//         form2.reportValidity();
//     }
// });

function showModal() {
    var modal = document.getElementById('please_wait');
    modal.style.display = 'block';
}
function hideModal() {
    var modal = document.getElementById('please_wait');
    modal.style.display = 'none';
}
function showSuccessMessage() {
    var successMessage = document.getElementById('success_message');
    successMessage.style.display = 'block';
}
// function showModal2() {
//     var modal = document.getElementById('please_wait2');
//     modal.style.display = 'block';
// }
// function hideModal2() {
//     var modal = document.getElementById('please_wait2');
//     modal.style.display = 'none';
// }
// function showSuccessMessage2() {
//     var successMessage = document.getElementById('success_message2');
//     successMessage.style.display = 'block';
// }
