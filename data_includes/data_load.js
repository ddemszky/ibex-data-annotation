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


var teacher = ["a ruler for one inch?",
    "okay. he's gonna go to boy scouts and he's taking half. so instead of dividing by two, we're gonna do the opposite. what's the opposite of divide?",
    "fabulous. very good. okay, now i'm gonna fill it in. do i know the area yet?",
    "you can't round it. rounding up means you need eight. so, remember, like, when there was school buses i had to get more. i have 58 friends coming for thanksgiving. i want them all to have 8 - no, i have - let's see. you want to round up. all right.",
    "oh, really. we're just going to - okay, i'm glad i'm not paying for that.",
    "remember yesterday we discussed do you need to count each individual cube? when you look at an array, for example -",
    "i hear what you're saying. student s, tell me what's happening down here.",
    "ok, this one is not sprinkles, you can't see it clearly but the dot dot dot on the cone represents a sugar cone, you know, sugar on the cone? and the number one, that looks like number lines, miss e is representing that, she's showing you that's plain cones.",
    "well 45 divided by 5, didn't we already talk about this in this group? what does 45 divided by 5 get you?",
    "all the way up to ten? what's a ten called?",
    "3. mm-hmm.",
    "okay, then you go sit with student i. student i, you and student e go up to the desk for a minute. when you do it i want you to stick it on your desk, okay? okay, student a, go sit up at your desk. okay, unfortunately things have changed, yeah. okay, now, miss h, went to the store - she wanted to share with all of her students, so she brought 24 boxes -",
    "okay.",
    "if the maximum is 8 and the minimum is -",
    "i've heard one fourth and three fourths and three eighths. what's correct?",
    "i'm sorry. i'm not very scary. that's so cute, where did you get that?",
    "two times twenty-five times two? sure.",
    "what does he say? consider this?",
    "it doesn't say all together, but that's the feeling. that's what you're thinking as you read this. you read enough of these problems. this is sounds like an all together problem. and all together is usually addition.",
    "awesome, very, very carefully, student b, help him carry that over to the cookie plate, and you may have to break it in half to get it to fit on the plate, and that's fine. we have to remember what we're doing, sitting properly. we're about to get in groups in just a minute. so her sister, amy, has more on. we're working backwards. and now tommy - student d, read about tommy.",
    "no, you should. that is why the rate is all right. you chose six thirds so this third -- this one is -- you have more. put it on that side. are you recording it somewhere in your journal? everybody should record it so that you have something to work with later on. record, record, record. why you doing that, student v? no. no, i want you to take your hand off because you are switching cards around. leave it there. don't do that. it's sneaky and i don't like it. pull out the card. once you pull it out put it on the center. the other one puts in on the center. move it fast. this one is what?"];



for (var i = 0; i < 20; i++) {
    row = data_entries[i];
    items.push(
        ["task", "Form", {
            html: "<table>" +
                "<tr style='background-color: azure;'>" +
                "<td colspan='1' style='padding: .5em; font-size: 16px; font-weight: bold;'>" +
                "Student" +
                "</td>" +
                "<td colspan='2' style='padding: 1em; font-size: 16px;'>" +
                row["student"] +
                "</td>" +
                "<tr style='background-color: azure;'>" +
                "<td colspan='1' style='padding: .5em; font-size: 16px; font-weight: bold;'>" +
                "Teacher" +
                "</td>" +
                "<td colspan='2' style='padding: 1em; font-size: 16px;'>" +
                row["teacher"] +
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