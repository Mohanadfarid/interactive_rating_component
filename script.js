let rate = 0;
const submit_button = document.querySelector("#submit_container");
const rating = document.querySelectorAll(".rate");
const image=document.querySelector("#img");
const image_container =document.querySelector(".img_container");
const image_section_container = document.querySelector(".img_section_container");
const r_Container = document.querySelector(".r_container");
//elements to be removed
const actual_rating_container =document.querySelector("#rating_container")
// the button from line 2 will be removed too

//the 2 text 
const hidder = document.querySelector("#p1");
const paragraph = document.querySelector("#p2");

// saving each rate when its button is pressed
rating.forEach(function (rate_button) {
    
    rate_button.addEventListener('focus',function () {
       rate = rate_button.textContent;
    });
})


submit_button.addEventListener('click',function () {
    //1) displaying the rating --> will be changged later
    if(displayRate()==!0){
        //removing unwanted elements from the page
        
        r_Container.removeChild(actual_rating_container);
        r_Container.removeChild(submit_button);
        
        //changing the img
        image.src="images/illustration-thank-you.svg";
        image_section_container.classList.add('img_section_container_new');
        image_section_container.classList.remove('img_section_container');
        
        hidder.textContent="Thank you!";
        paragraph.textContent="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
          

    };
    
})

function displayRate() {
    
    if ( rate == 1 || rate == 2 || rate == 3 || rate == 4 || rate == 5 ) {
        alert("ur rate was "+rate)
        return 1;
    }
    else{
        alert("please choose a valid number before submitting");
        return 0;
    }
}
 



