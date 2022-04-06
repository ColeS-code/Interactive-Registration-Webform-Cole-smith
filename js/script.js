
//*Name Focus State*/ gets the id of 'name' to add a focus state to. Snippet from: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#focus_on_a_text_field

focusMethod = function getFocus() {
    document.getElementById("name").focus();
}

//*Job Role*/ variables to store the select, and text id fields in job roles.

const otherJobRole = document.getElementById("other-job-role");

const jobRole = document.getElementById("title");

otherJobRole.hidden = true;




