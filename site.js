var score = [];

function formSubmit1() {
    var values = document.getElementById('form1').elements['choice'];
    for (var i = 0, len = values.length; i < len; i++)
    {
        if (values[i].checked)
        {
            var value = values[i].value;
            if (value == 1)
            {
                score.push("Correct");
                alert("well shoot ma dog and call me sally, ya got it didn't ya");
            }
            else {
                score.push("Wrong");
                alert("wow ya got it wrong there didn't ya");
            }

            break;
        }
    }
    document.getElementById("divform1").classList.add("hidden");
    document.getElementById("divform2").classList.remove("hidden");
}
function formSubmit2() {
    var values = document.getElementById('form2').elements['choice'];
    for (var i = 0, len = values.length; i < len; i++) {
        if (values[i].checked) {
            var value = values[i].value;
            if (value == 2) {
                score.push("Correct");
                alert("well shoot ma dog and call me sally, ya got it didn't ya");
            }
            else {
                score.push("Wrong");
                alert("wow ya got it wrong there didn't ya");
            }

            break;
        }
    }
    document.getElementById("divform2").classList.add("hidden");
    document.getElementById("divform3").classList.remove("hidden");
}
function formSubmit3() {
    var values = document.getElementById('form3').elements['choice'];
    for (var i = 0, len = values.length; i < len; i++) {
        if (values[i].checked) {
            var value = values[i].value;
            if (value == 3) {
                score.push("Correct");
                alert("well shoot ma dog and call me sally, ya got it didn't ya");
            }
            else {
                score.push("Wrong");
                alert("wow ya got it wrong there didn't ya");
            }

            break;
        }
    }
    document.getElementById("divform3").classList.add("hidden");
    document.getElementById("divform4").classList.remove("hidden");
}
function formSubmit4() {
    var values = document.getElementById('form4').elements['choice'];
    for (var i = 0, len = values.length; i < len; i++) {
        if (values[i].checked) {
            var value = values[i].value;
            if (value == 2) {
                score.push("Correct");
                alert("well shoot ma dog and call me sally, ya got it didn't ya");
            }
            else {
                score.push("Wrong");
                alert("wow ya got it wrong there didn't ya");
            }

            break;
        }
    }
    document.getElementById("divform4").classList.add("hidden");
    document.getElementById("divform5").classList.remove("hidden");
}
function formSubmit5() {
    var values = document.getElementById('form5').elements['choice'];
    for (var i = 0, len = values.length; i < len; i++) {
        if (values[i].checked) {
            var value = values[i].value;
            if (value == 1) {
                score.push("Correct");
                alert("well shoot ma dog and call me sally, ya got it didn't ya");
            }
            else {
                score.push("Wrong");
                alert("wow ya got it wrong there didn't ya");
            }

            break;
        }
    }
    document.getElementById("divform5").classList.add("hidden");
    document.getElementById("score").classList.remove("hidden");
    document.getElementById("whoa").classList.remove("hidden");
    document.getElementById("whoa2").classList.remove("hidden");
    document.getElementById("final").innerText = `Question 1: ${score[0]} \n Question 2: ${score[1]} \n Question 3: ${score[2]} \n Question 4: ${score[3]} \n Question 5: ${score[4]} \n Thanks for playing... nerd`;
   
}
    

    //if (input == 1) {
    //    alert("well shoot ma dog and call me sally, ya got it didn't ya")
    //}
    //else {
    //    alert("wow ya got it wrong there didn't ya")
    //}
    //document.getElementById("divform1").classList.add("hidden");
    //document.getElementById("divform2").classList.remove("hidden");
