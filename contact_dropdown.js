// create variable to listen to what option selected in the drop down
var service = document.getElementById("dropdown");
//listen to option selected
service.addEventListener("change", nextQuestion);

function nextQuestion() {
    if (document.getElementById("seo").selected == true) {
        document.getElementById("question-seo").style.display = "block";
        document.getElementById("question-paidsearch").style.display = "none";
        document.getElementById("question-paidsocial").style.display= "none";
        document.getElementById("question-others").style.display= "none";
    } else if (document.getElementById("paid-search").selected) {
        document.getElementById("question-seo").style.display = "none";
        document.getElementById("question-paidsearch").style.display = "block";
        document.getElementById("question-paidsocial").style.display = "none";
        document.getElementById("question-others").style.display = "none";
    } else if (document.getElementById("paid-social").selected) {
        document.getElementById("question-seo").style.display = "none";
        document.getElementById("question-paidsearch").style.display = "none";
        document.getElementById("question-paidsocial").style.display = "block";
        document.getElementById("question-others").style.display = "none";
    } else if (document.getElementById("others").selected) {
        document.getElementById("question-seo").style.display = "none";
        document.getElementById("question-paidsearch").style.display = "none";
        document.getElementById("question-paidsocial").style.display = "none";
        document.getElementById("question-others").style.display = "block";
    }
    else {
        document.getElementById("question-seo").style.display = "none";
        document.getElementById("question-paidsearch").style.display = "none";
        document.getElementById("question-paidsocial").style.display= "none";
        document.getElementById("question-others").style.display = "none";
    }
}

nextQuestion()