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


for (var i = 0; i < 20; i++) {
    row = data_entries[i];
    items.push(
        ["task", "Form", {
            html: "<table>" +
                "<tr><td colspan='10' style='padding-bottom: 1em;'><a href='https://docs.google.com/document/d/1Kq1iWTqxLJFW284HfycpS2CGpwQefRbA32AoApzrDo0/edit' target='_blank'>Coding Instructions</a></td></tr>" +
                "<tr style='background-color: azure;'>" +
                "<td colspan='1' style='padding: .5em; font-size: 16px; font-weight: bold;'>" +
                "Student" +
                "</td>" +
                "<td colspan='9' style='padding: 1em; font-size: 16px;'>" +
                row["student"] +
                "</td>" +
                "<tr style='background-color: azure;'>" +
                "<td colspan='1' style='padding: .5em; font-size: 16px; font-weight: bold;'>" +
                "Teacher" +
                "</td>" +
                "<td colspan='9' style='padding: 1em; font-size: 16px;'>" +
                row["teacher"] +
                "</td>" +
                "</tr>" +
                "<tr><td colspan='10' style='padding-top: 1em; padding-bottom: 1em;'>1. Validity<br/><i>If you check either of the boxes below, no need to code the example further.</i></td></tr>" +
                "<tr><td colspan='10'><input type=\"checkbox\" name=\"off_task\" id=\"off_task\" /><label for=\"off_task\">Teacher utterance is off task.</label></td></tr>" +
                "<tr><td colspan='10'><input type=\"checkbox\" name=\"no_student_idea\" id=\"no_student_idea\" /><label for=\"no_student_idea\">No student idea.</label></td></tr>" +
                "<tr><td colspan='10' style='padding-top: 1em; padding-bottom: 1em;'>2. Display of Active Listening<br/><i>To what degree does the teacher show that they are listening to the student’s idea?</i></td></tr>" +
                "<tr>" +
                "<td colspan='3'><input name=\"backward\" type=\"radio\" value=\"low\" class=\"obligatory\" id=\"backward\" /><label for=\"backward\">Low </label></td>" +
                "<td colspan='3'><input name=\"backward\" type=\"radio\" value=\"mid\" class=\"obligatory\" id=\"backward\" /><label for=\"backward\">Mid </label></td>" +
                "<td colspan='4'><input name=\"backward\" type=\"radio\" value=\"high\" class=\"obligatory\" id=\"backward\" /><label for=\"backward\">High </label></td>" +
                "</tr>" +
                "<tr><td colspan='10' style='padding-top: 1em; padding-bottom: 1em;'>3. Use of Student Contribution<br/><i>To what degree does the teacher use the student’s contribution to make a mathematical point?</i></td></tr>" +
                "<tr>" +
                "<td colspan='3'><input name=\"forward\" type=\"radio\" value=\"low\" class=\"obligatory\" id=\"forward\" /><label for=\"forward\">Low </label></td>" +
                "<td colspan='3'><input name=\"forward\" type=\"radio\" value=\"mid\" class=\"obligatory\" id=\"forward\" /><label for=\"forward\">Mid </label></td>" +
                "<td colspan='4'><input name=\"forward\" type=\"radio\" value=\"high\" class=\"obligatory\" id=\"forward\" /><label for=\"forward\">High </label></td>" +
                "</tr>" +
                "<tr><td colspan='10' style='padding-top: 1em; padding-bottom: 1em;'>4. Comments?</td></tr>" +
                "<tr><td colspan='10'><textarea name=\"comments\" rows=\"5\" cols=\"40\"></textarea></td></tr>" +
                "</table>"
        }],
    );
}