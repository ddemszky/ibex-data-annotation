//var shuffleSequence = seq("intro",
//    sepWith("sep", seq("practice", rshuffle("s1", "s2"))), sepWith("sep", rshuffle("q1", "q2")));
var shuffleSequence = seq("intro", randomize("task"));
var practiceItemTypes = ["practice"];
var showProgressBar = true;
var countsForProgressbar = true;

var defaults = [
    "Separator", {
        transfer: 10,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Please wait for the next sentence."
    },
    "Form", {
        hideProgressBar: false,
        countsForProgressbard: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    //["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],

    // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
    // consent checkbox).

    ["intro", "Form", {
        html: { include: "my_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
];

var student = ["i was going to say that that's just like a ruler for one inch.",
    "- cookies and took one-half of them to a boy scout meeting.",
    "because this is a square and all sides are equal.",
    "oh. - if we say, like - if we buy 58 donuts and we round it to 50 donuts -",
    "buy at least like, 24 pizzas and give them out in wholes. twenty-five.",
    "it's gonna give me the volume.",
    "one. two. and then four times two is eight. and then eight times two is -",
    "she made a key, and she put her - she put different kinds of like, i don't know how to say it, like different kinds of - like the sprinkles and the -",
    "we're doing all threes, like 45 divided by 5--",
    "my sister had a tomato (?). and it was all about shapes and numbers.",
    "and then 1 minus 1 is 0. so your whole number is 3.",
    "i don't think i can do it.",
    "number eight. eight. we're discussing the paper. what number is that?",
    "i said the range was 5. and since it's parenthesis [just subtract] the minimum and the maximum. if the maximum was 8 and you subtract 3 you get 5.",
    "three fourths? one over four. three eighths.",
    "jerodtopia; i like it. you scared me.",
    "could it be 2 times 25 times 2 for 100?",
    "bill nye the shovel guy. today we're shoveling ice.",
    "you can't because they're saying how much did student l spend for both items? both items. so they're saying you have to add those two 'cause spent like <cur>57.95 on a bike and <cur>12.65 on a helmet. and it's gonna be how much did she spend all together?",
    "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30.",
    "yeah, but you repeated it on the --"];


var teacher = ["i was going to say that that's just like a ruler for one inch.",
    "- cookies and took one-half of them to a boy scout meeting.",
    "because this is a square and all sides are equal.",
    "oh. - if we say, like - if we buy 58 donuts and we round it to 50 donuts -",
    "buy at least like, 24 pizzas and give them out in wholes. twenty-five.",
    "it's gonna give me the volume.",
    "one. two. and then four times two is eight. and then eight times two is -",
    "she made a key, and she put her - she put different kinds of like, i don't know how to say it, like different kinds of - like the sprinkles and the -",
    "we're doing all threes, like 45 divided by 5--",
    "my sister had a tomato (?). and it was all about shapes and numbers.",
    "and then 1 minus 1 is 0. so your whole number is 3.",
    "i don't think i can do it.",
    "number eight. eight. we're discussing the paper. what number is that?",
    "i said the range was 5. and since it's parenthesis [just subtract] the minimum and the maximum. if the maximum was 8 and you subtract 3 you get 5.",
    "three fourths? one over four. three eighths.",
    "jerodtopia; i like it. you scared me.",
    "could it be 2 times 25 times 2 for 100?",
    "bill nye the shovel guy. today we're shoveling ice.",
    "you can't because they're saying how much did student l spend for both items? both items. so they're saying you have to add those two 'cause spent like <cur>57.95 on a bike and <cur>12.65 on a helmet. and it's gonna be how much did she spend all together?",
    "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30.",
    "yeah, but you repeated it on the --"];

for (var i = 0; i < student.length; i++) {
    items.push(
        ["task", "Form", {
            html: "<table>" +
                "<tr>" +
                "<td colspan='1' style='padding: 1em; font-size: 16px; background-color: azure; border: 1px solid black;'>" +
                "Student" +
                "</td>" +
                "<td colspan='2' style='padding: 1em; font-size: 16px; background-color: azure; border: 1px solid black;'>" +
                student[i] +
                "</td>" +
                "<tr>" +
                "<td colspan='1' style='padding: 1em; font-size: 16px; background-color: azure; border: 1px solid black;'>" +
                "Teacher" +
                "</td>" +
                "<td colspan='2' style='padding: 1em; font-size: 16px; background-color: azure; border: 1px solid black;'>" +
                teacher[i] +
                "</td>" +
                "</tr>" +
                "<tr><td colspan='3' style='padding-top: 1em; padding-bottom: 1em;'>Validity<br/><i>If you check either of the boxes below, no need to code the example further.</i></td></tr>" +
                "<tr><td colspan='3'><input type=\"checkbox\" name=\"off_task\" id=\"off_task\" /><label for=\"off_task\">Teacher utterance is off task.</label></td></tr>" +
                "<tr><td colspan='3'><input type=\"checkbox\" name=\"no_student_idea\" id=\"no_student_idea\" /><label for=\"no_student_idea\">No student idea.</label></td></tr>" +
                "<tr><td colspan='3' style='padding-top: 1em; padding-bottom: 1em;'>Display of Active Listening<br/><i>If you check either of the boxes below, no need to code the example further.</i></td></tr>" +
                "<tr>" +
                "<td><input name=\"backward\" type=\"radio\" value=\"low\" class=\"obligatory\" id=\"csexmale\" /><label for=\"csexmale\">Low </label></td>" +
                "<td><input name=\"backward\" type=\"radio\" value=\"mid\" class=\"obligatory\" id=\"csexmale\" /><label for=\"csexmale\">Mid </label></td>" +
                "<td><input name=\"backward\" type=\"radio\" value=\"high\" class=\"obligatory\" id=\"csexmale\" /><label for=\"csexmale\">High </label></td>" +
                "</tr>" +
                "<tr><td colspan='3' style='padding-top: 1em; padding-bottom: 1em;'>Use of Student Idea<br/><i>If you check either of the boxes below, no need to code the example further.</i></td></tr>" +
                "<tr>" +
                "<td><input name=\"forward\" type=\"radio\" value=\"low\" class=\"obligatory\" id=\"csexmale\" /><label for=\"csexmale\">Low </label></td>" +
                "<td><input name=\"forward\" type=\"radio\" value=\"mid\" class=\"obligatory\" id=\"csexmale\" /><label for=\"csexmale\">Mid </label></td>" +
                "<td><input name=\"forward\" type=\"radio\" value=\"high\" class=\"obligatory\" id=\"csexmale\" /><label for=\"csexmale\">High </label></td>" +
                "</tr>" +
                "<tr><td colspan=\"3\" style='padding-top: 1em; padding-bottom: 1em;'>Comments?</td></tr>" +
                "<tr><td colspan=\"3\"><textarea name=\"comments\" rows=\"5\" cols=\"40\"></textarea></td></tr>" +
                "</table>"
        }],
    );
}