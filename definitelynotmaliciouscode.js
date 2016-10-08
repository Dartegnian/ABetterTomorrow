var car = 0;
var mina = 0;
var messages = [
    "Sailing into the night~",
    "Eodum soge someotherkoreanwords",
    "Kkeutkkaji hamkke hagiro wordidontunderstand",
    "Urin again",
    "And again",
    "And again~",
    "Nan SAILING (it's actually \"sewori\") jinalsurok",
    "Verylongkoreanword haedo jikyeogal geoya",
    "Geu yeoreum eoneu narui yaksokcheoreom",
    "Ah, I love SNSD's new song!",
    "ESPECIALLY the music video.",
    "I love the very concept of it.",
    "The way that the bottle moves through different backgrounds,",
    "Passing through SNSD's previous concepts.",
    "Argh, I love it so much.",
    "I should do a similar thing with my blog.",
    "When I turn 18, I'll make a post in a similar fashion.",
    "Going through the various stages in my life,",
    "With lots of hidden symbology and meanings.",
    "SAILING INTO THE NIGHT~",
    "Excuse me for that one, I just love the song so much.",
    "Anyways, what are you doing here?",
    "Are you a developer, too?",
    "If (ThatsTheCase == true) {",
	"Message.Show(\"Feel free to look around!\");",
	"}",
    "Just don't mess with any of my code, haha.",
	"Or, you know, any part of the blog itself.",
    "What brings you here anyway?",
    "I mean, what brings you to my blog?",
    "Nothing's really worth checking out here, in my opinion.",
    "I just post here from time to time because I don't want to post on Facebook",
    "And also because Twitter has that 140 character limit.",
    "Oh, since you're here, I'm sure you won't mind",
    "If I thank certain persons in my life.",
    "To all of whom have helped me become who I am today:",
    "First on the list is my EGRAMCM professor, Miss Mina.",
    "(She's a really, really kind and supportive professor.)",
    "(Plus she's SUPER cute lmao.)",
    "(Is she of Korean descent?)",
    "(Or is she of Japanese descent?)",
    "(Or is she a pure Filipina?)",
    "(Either way, she's ADORBZ lol.)",
    "#professorgoals",
    "Next on the list is Sir Jeff.",
    "Who's been the kindest teacher to me thus far.",
    "That guy is so cool.",
    "Who else? Oh, um, David Malan from Harvard University.",
    "I LOVE his CS50 lessons.",
    "Hmmm who else...",
    "My bros, Loy and JR.",
    "They've been with me through thick and thin.",
    "Especially Loy, him and I have a long story behind us.",
    "and, hopefully, the same is true for the future.",
    "The same applies to my other bros as well.",
    "I'm talking about you, RC Crew.",	
    "Oh, and Girls' Generation.. I-I mean SNSD (it sounds less girly that way).",
    "They're a Korean girl group and I shouldn't be liking them, I know.",
    "But dang dude, the girls there are so...",
    "yeppuda, haha.",
    "Also, I've been a Sone since, like, forever.",
	"So I'm inclined to say this:",
	"Jigeumeun SONEyeoshidae~",
    "Props to the Sooyoung, Taeyeon, Jessica, Sunny, and Seobby.",
    "Especially Jessica Jung",
    "(even though she left)",
    "because that girl is H-A-W-T, grrr.",
    "Hmmm.. who else?",
    "Oh, definitely my Big Sister Elaine. (Yes, I know I shouldn't capitalize \"big sister\")",
    "(But I often do because she's special.)",
    "Also my Little Sister, too.",
    "Last but not least . . .",
    "A HUGE SHOUTOUT to ALL of the people who've helped me when my days got rough!",
    "Andrea, I've never met you in real life and I didn't get to talk to you much at school.",
    "But, damn, you really know how to cheer me up, haha.",
    "If you're reading this, we should totally hang out sometime.",
    "My treat lmao.",
    "Ate Betina, the girl who's helped me when I was feeling down at the library.",
    "You were the one who taught me how to not get pushed around and get used by others.",
    "I appreciate you SO MUCH for telling me that.",
    "Thank you so much, Ate Betina.",
    "Oh, and Mae as well.",
    "She's cool and she helped me out through Twitter.",
    "Also Paula, she helps me out whenever.",
    "I owe that girl so much, haha.",
    "Finally, to ALL of the families of my bros.",
    "ESPECIALLY Loy's family",
    "they're the happiest and nicest family I could think of.",
    "I'm so thankful to them for helping me out during prom, Christmas, and a bunch of other stuff.",
    "That's all of the people I want to thank, I guess,",
    "And I'm pretty sure you've dozed off by now lmao.",
    "I'm going to end it here.",
    "Annyeong! Really, really good goodbye.",
    "Goodbye, Space Cowboy. See you on the other side, Coop."
];
var ABetterConsole = function() {
    var AAGGParadiseInPhuket;
    var HarvardAcceptanceLetterArrival;
	console.log("Good things (or easter eggs) come to those who wait :^)");

    if (mina++ < messages.length) {
		car += 1;
        AAGGParadiseInPhuket = messages[mina - 1];
        if (mina === messages.length) {
            HarvardAcceptanceLetterArrival = 999 * 9; //Machi expresscheoreom
        }
        else {
            HarvardAcceptanceLetterArrival = 1000 + AAGGParadiseInPhuket.length * 50;
        }
    }
    if (car === messages.length){
        setTimeout(function() {throw Error("Ijeneun annyeong. Really, really good goodbye.")}, 5000);
    }
    else {
        console[mina == 1 ? 'warn' : 'log'](AAGGParadiseInPhuket);
        setTimeout(ABetterConsole, HarvardAcceptanceLetterArrival);
    }
};

setTimeout(ABetterConsole, 19000);
