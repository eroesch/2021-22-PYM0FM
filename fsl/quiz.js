var setupQuizQuestions = function() {

    var questions = document.querySelectorAll("div.quiz_question");

    for (var qi = 0; qi < questions.length; qi++) {

        var inputs = questions[qi].querySelectorAll("input.option");

        for (var ii = 0; ii < inputs.length; ii++) {
            inputs[ii].onclick = function(ev) {

                var option     = ev.target.id;
                var div        = ev.target.parentElement;
                var selAnswer  = div.querySelector("span#" + option);
                var allAnswers = div.querySelectorAll("span.answer");

                for (var ai = 0; ai < allAnswers.length; ai++) {
                    allAnswers[ai].style.display = "none";
                }

                selAnswer.style.display = "block";
            }
        }
    }
}
