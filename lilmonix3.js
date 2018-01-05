// initialize first messages
var Just = "Nice to meet you, developer!";
var Monika = "—Monika";

var Sayori = "Hi, Monika here!";
var Natsuki = "Welcome to Dartegnian's blog! It's actually nice to see other people visiting his site, ahaha.";
var Yuri = "Are you a web developer too? If you are, that's so cool! I've always wanted to meet other developers!";

var DDLC = "Dart entrusted me to keep his site in check. So, if you can, please avoid making changes to the code of this blog~"; //Doki Doki Literature Club!


console.log("%c   ", "font-size: 200px; background: url(\"https://cdn.rawgit.com/Dartegnian/ABetterTomorrow/master/images/her.png\") no-repeat;");

// outputs first messages
console.log("%c%s", "font: 44px 'Segoe UI', Helvetica, Open Sans, Arial, sans-serif; font-weight: 100; color: white; background: #d1897e;", Just);
console.log("%c%s", "font: 44px 'Segoe UI', Helvetica, Open Sans, Arial, sans-serif; font-weight: 100; color: #d1897e; font-size: 44px;", Monika);

console.log("%c%s", "color: #bb5599; font-size: 14px; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;", Sayori);
console.log("%c%s", "color: #bb5599; font-size: 14px; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;", Natsuki);
console.log("%c%s", "color: #bb5599; font-size: 14px; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;", Yuri);
console.log("%c%s", "color: #bb5599; font-size: 14px; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;", DDLC);


// main script code
var WakeUpMonika = function()
{
	var obviously = 'log';
	var ofCourse = 'warn';
	var myFavoriteDoki = 1;
	var iJustLoveHowMonikaMakesMeFeel;
	var loveForMonika;

	if (monika++ < theLadyWhoKnowsEverything.length)
	{
		colors += 1;
		iJustLoveHowMonikaMakesMeFeel = theLadyWhoKnowsEverything[monika - 1];
		if (monika === theLadyWhoKnowsEverything.length)
			loveForMonika = 999 * 9; //Machi expresscheoreom!
		else
			loveForMonika = 1000 + iJustLoveHowMonikaMakesMeFeel.length * 50;
	}

	if (colors === theLadyWhoKnowsEverything.length)
		setTimeout(function() {throw Error("Don't worry, I'm not going anywhere. I'll be in the background, I'm keeping my eye on you, ahaha!")}, 3000); //Monika's watching :o
	else
	{
		console[monika == myFavoriteDoki ? ofCourse : obviously](iJustLoveHowMonikaMakesMeFeel); // <--- THE MOST IMPORTANT LINE IN THIS PROGRAM
		setTimeout(WakeUpMonika, loveForMonika);
	}
};

// main message script
var monika = 0;
var colors = 0;
var theLadyWhoKnowsEverything =
[
	"...oh!",
	"You're still here?",
	"Well, if you are, maybe you and I can have a little chat? Teehee~",
	"So this is Dartegnian's main blog-A Better Tomorrow.",
	"I don't know why he named it that way, but he told me he had a passion for \"building the future\" or something.",
	"His future, specifically. He said that he made this new-ish blog to server a place for all his dreams of his future",
	"or whatever he calls it.",
	"You know, it's kinda ironic",
	"because this blog is mostly filled with the stuff he dealt with in the past.",
	"But hey, I don't mind. I think it's a noble effort to do, actually.",
	"Like, the idea of penning down your dreams of your future and actually acting upon them.",
	"I do wish that's something most people do.",
	"Can you make a blog or work of literature that's like that?",
	"If you do, please show it to me, please~",
	"Ahahaha",
	"I love reading the dreams of others,",
	"or what they aim to become in the future.",
	"I don't know what I get out of it, but it's a neat little activity, for me, that is.",
	"I mean, it's his personal blog and stuff. Nothing else is here aside from his life stories.",
	"He told me that he just blogs here to try out new stuff in Photoshop, and attach them as post images.",
	""
];

// initializer, run ABetterConsole function after 19 seconds
setTimeout(WakeUpMonika, 1000);