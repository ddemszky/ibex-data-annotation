//var shuffleSequence = seq("intro",
//    sepWith("sep", seq("practice", rshuffle("s1", "s2"))), sepWith("sep", rshuffle("q1", "q2")));
var shuffleSequence = seq("intro", seq("task"));
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
        saveReactionTime: false
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

var data_names = [courteney, monica, keith, justin, mariah, shannon, carol, max, chris, lisa, helen, kelsey, cassie];

for (var j = 0; j < data_names.length; j++) {
    data_entries = data_names[j];
    var new_item = [["task", 1]];
    for (var i = 0; i < data_entries.length; i++) {
        row = data_entries[i];
        new_item.push("Form");
        new_item.push({
                html:
                    "<div style='display: none;'>" +
                    "<input type='text' name='uidx' value='" + row["uidx"] + "'>" +
                    "<input type='text' name='obs_id' value='" + row["obs_id"] + "'>" +
                    "<input type='text' name='exchange_idx' value='" + row["exchange_idx"] + "'>" +
                    "<input type='text' name='student_text' value='" + row["student"].replace(/'/g, "\u2019") + "'>" +
                    "<input type='text' name='teacher_text' value='" + row["teacher"].replace(/'/g, "\u2019") + "'>" +
                    "</div>" +
                    "<table>" +
                    "<tr><td colspan='10' style='padding-bottom: 1em;'><span class='instructions'><a href='https://docs.google.com/document/d/1UGAXW3H-bV1m0PWcDM7aGcRgkdrY-fovcPstB4YphvA/edit' target='_blank' class='instructions'>Coding Instructions</a></span></td></tr>" +
                    "<tr>" +
                    "<td colspan='10' style='border: 1px solid black; padding=1em; background-color: #B0DBFF;'>" +
                    "<table>" +
                    "<tr>" +
                    "<td colspan='10' style='width: 40em; padding: .5em;'><i>Lesson topic: " + row["topic"] + "</i>" +
                    "</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td colspan='10' style='width: 40em; padding: .5em;'>" +
                    "<div class='tooltip'>Conversation history" +
                    "<span class='tooltiptext'>" + row["hist_2"] + "<br>" + row["hist_3"] +
                    "</span>" +
                    "</div>" +
                    "</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td colspan='1' style='width: 4em; padding: .5em;'>" +
                    "Student" +
                    "</td>" +
                    "<td colspan='9' style='padding: .5em;'>" +
                    row["student"] +
                    "</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td colspan='1' style='width: 4em; padding: .5em;'>" +
                    "Teacher" +
                    "</td>" +
                    "<td colspan='9' style='padding: .5em;'>" +
                    row["teacher"] +
                    "</td>" +
                    "</tr>" +
                    "</table>" +
                    "</td>" +
                    "</tr>" +
                    "<tr><td colspan='10' style='padding-top: 1em; padding-bottom: 1em;'><b>1. Validity</b><br/><i>If any of the conditions below is not met, you can stop coding the example.</i></td></tr>" +
                    "<tr><td colspan='10'><input type=\"checkbox\" name=\"student_on_task\" id='student_on_task' class='validity'/><label for=\"student_on_task\">Student utterance relates to mathematics.</label></td></tr>" +
                    "<tr><td colspan='10'><input type=\"checkbox\" name=\"teacher_on_task\" id='teacher_on_task' class='validity'/><label for=\"teacher_on_task\">Teacher utterance relates to mathematics.</label></td></tr>" +
                    "<tr class='item2' style='display: none;'><td colspan='10' style='padding-top: 1em; padding-bottom: 1em;'><b>2. Display of Active Listening</b><br/><i>To what degree does the teacher show that they are listening to the student’s idea?</i></td></tr>" +
                    "<tr class='item2' style='display: none;'>" +
                    "<td colspan='3'><input name=\"active_listening\" type=\"radio\" value=\"low\" id=\"active_listening\"/><label for=\"active_listening\">Low </label></td>" +
                    "<td colspan='3'><input name=\"active_listening\" type=\"radio\" value=\"mid\" id=\"active_listening\"/><label for=\"active_listening\">Mid </label></td>" +
                    "<td colspan='4'><input name=\"active_listening\" type=\"radio\" value=\"high\" id=\"active_listening\"/><label for=\"active_listening\">High </label></td>" +
                    "</tr>" +
                    "<tr class='item3' style='display: none;'><td colspan='10' style='padding-top: 1em; padding-bottom: 1em;'><b>3. Type of Follow-Up</b><br/><i>Since you selected 'Mid' or 'High' for Item 2, please select the type of follow-up prompt.</i></td></tr>" +
                    "<tr class='item3' style='display: none;'>" +
                    "<td colspan='3'><input name=\"follow_up\" type=\"radio\" value=\"none\" id=\"follow_up\"/><label for=\"follow_up\">No follow-up prompt </label></td>" +
                    "<td colspan='3'><input name=\"follow_up\" type=\"radio\" value=\"funnel\" id=\"follow_up\"/><label for=\"follow_up\">Funneling </label></td>" +
                    "<td colspan='4'><input name=\"follow_up\" type=\"radio\" value=\"focus\" id=\"follow_up\"/><label for=\"follow_up\">Focusing </label></td>" +
                    "</tr>" +
                    "<tr><td colspan='10' style='padding-top: 1em;'><b>4. Comments?</b><br><i>Optional, only add if necessary.</i></td></tr>" +
                    "<tr><td colspan='10'><textarea name=\"comments\" rows=\"5\" cols=\"40\"></textarea></td></tr>" +
                    "</table>"
            });
    }
    items.push(new_item);
    console.log(j, new_item.length /2);
}