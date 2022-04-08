
//*Name Focus State*/ gets the id of 'name' to add a focus state to mtext field. Snippet from: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#focus_on_a_text_field

focusMethod = function getFocus() {
    document.getElementById("name").focus();
}

//*Job Role*/ variables to store the select, and text id fields in job roles as well as hiding the other drop down menu as default.

const otherJobRole = document.getElementById("other-job-role");

const jobRole = document.getElementById("title");

otherJobRole.hidden = true;

// this listens for any change made to the drop down menu, once a change occurs the job role selection either hides or displays itself.
jobRole.addEventListener("change", event => {
    if (event.target.value === "other") {
        otherJobRole.hidden = false;
    } else if (event.target.value !== "other") {
        otherJobRole.hidden = true;
    }
});

//*T shirt Role */ 

const design = document.getElementById("design");

const color = document.getElementById("color");

const option = document.getElementById("color").children;

color.disabled = true;

design.addEventListener("change", event => {
    color.disabled = false;
    for (let i = 0; i < option.length; i++) {

        const value = event.target.value;
        const theme = option[i].getAttribute("data-theme");

        if (value === theme) {
            option.hidden[i] = false;

        } else if (value !== theme) {
            option.hidden[i] = true;
        }
    }

   
});
