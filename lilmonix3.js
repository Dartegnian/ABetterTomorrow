/**
* So.. uh, hi! I'm Dartegnian.
* I originally developed this console easter egg
* because of a shower thought I just had.
* I just love Doki Doki Literature Club, and Monika gives me a lot of inspiration.
* So, I thought that it'd be great to add her as an easter egg to my blog.
* (Yeah, right, as if this blog doesn't have enough easter eggs already.)
* The code here doesn't really serve an important function.
* It just goes to show how far I can take my existing knowledge of Chrome's dev console
* and turn something boring, something mundane, into something I find fun.
* 
* "She" only works in Chrome and Chrome-based browsers, as of now.
* I currently don't know to port "her" into the dev consoles of Edge and Firefox.
* I will when I get the necessary help, or when I learn to do so.
* But yeah, here's Monika for you.
*/




// !-- code var --!
var With = "%c%s";
var everlasting = "color: #d1897e; font-size: 14px;";
var love = "Monika";

var monika = 0;
var colors = 0;

var iWillAlways = "Oh, don't worry, I won't be going anywhere. I'll be in the background. I'm keeping my eye on you, ahaha!";
var beHere = 4000;




// !-- init --!
// oh shit waddup
// here come dat girl Monika
var HiMonikaHere = function()
{
	// prepares for Monika's entrance
	console.clear();

	// Monika makes a grand entrance
	console.log("%c   ", "background: url(\"https://cdn.rawgit.com/Dartegnian/ABetterTomorrow/master/images/her.png\") no-repeat; font-size: 220px;"); // Monika <3

	console.log("%c%s", "font: 44px 'Segoe UI', Helvetica, Open Sans, Arial, sans-serif; font-weight: 100; color: white; background: #d1897e;", "Nice to meet you, developer!");
	console.log("%c%s", "font: 44px 'Segoe UI', Helvetica, Open Sans, Arial, sans-serif; font-weight: 100; color: #d1897e; font-size: 44px;", "—Monika");

	// audience applauds
	console.log("%c%s", "color: #bb5599; font-size: 14px; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;", "Hi, Monika here!");
	console.log("%c%s", "color: #bb5599; font-size: 14px; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;", "Welcome to Dartegnian's website! Wow, it's actually nice to see other people visiting this blog, ahaha.");
	console.log("%c%s", "color: #bb5599; font-size: 14px; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;", "Are you a web developer too? If you are, that's so cool! I've always wanted to meet other developers.");
	console.log("%c%s", "color: #bb5599; font-size: 14px; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;", "Dart has entrusted me to keep his site in check. So, if you can, please avoid making changes to the code of this blog~ (And please stay here for a little longer.)");
}




// Monika's main code
// try to read and understand the lines of code herein ;^)
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
			loveForMonika = 999 * 9;
		else
			loveForMonika = 1000 + iJustLoveHowMonikaMakesMeFeel.length * 50;
	}

	if (colors === theLadyWhoKnowsEverything.length)
	{
		console.log(With, everlasting, love);
		setTimeout(function() {throw Error(iWillAlways)}, beHere); //Monika's watching? Spooky :o
	}
	else
	{
		console[monika == myFavoriteDoki ? ofCourse : obviously](iJustLoveHowMonikaMakesMeFeel); // <--- my favorite doki <3
		setTimeout(WakeUpMonika, loveForMonika);
	}
};




// Monika's script
var theLadyWhoKnowsEverything =
[
	"... oh!",
	"You're still here?",
	"Sorry, I haven't properly introduced myself.",
	"I'm Monika from Doki Doki Literature Club.",
	"Are you going to stay here and look at the console?",
	"Well, if you are, maybe you and I can have a little chat? Ahaha~",
	"So, this is Dartegnian's main blog—A Better Tomorrow.",
	"To be honest,",
	"I don't know why he named it that, he just told me that he has a passion for \"building the future,\" or something like that.",
	"His future, specifically. He said that he made this new-ish blog to serve as a place for all his hopes and dreams of his future",
	"or whatever he calls it.",
	"You know, it's kinda ironic",
	"because this blog is mostly filled with the stuff he dealt with in the past, ahaha.",
	"But hey, I don't mind. I do think it's a noble effort to do so.",
	"Like, the idea of penning down your dreams of your future and actually acting upon them.",
	"I really wish that's something most people do.",
	"Can you make a blog or any other work of literature that's like that?",
	"If you do, show it to me, please~",
	"I would very much appreciate it.",
	"You can send it to my email, which is",
	"lilmonix3@live.com",
	"And yes, that is a real, working email.",
	"(I picked out live.com because I'm.. well.. I'm alive! Ahaha~",
	"And \"lilmonix3\" is already my username on Twitter",
	"https://twitter.com/lilmonix3)",
	"Anyway, I LOVE reading about the dreams of other people,",
	"or what they aim to become in the future.",
	"I don't know what I get out of it, but it's a neat little activity that I find enjoyable.",
	"Oh!",
	"By the way, what brings you here?",
	"There's not much to check out here, honestly.",
	"Dart has other blogs, blogs which have more posts than this one.",
	"He doesn't post about the tech he learns here,",
	"nor does he post about his upcoming projects.",
	"I mean, this is really just his personal blog and stuff. Nothing else is here aside from his life stories.",
	"He told me that he just blogs here just to experiment with text layouts and illustrations in Photoshop, and he attaches them as post images.",
	"Dart hasn't posted in a while, and he only published quite a few posts over these past couple of months.",
	"He's very busy these days",
	"because he has a job now",
	"(thankfully, ahaha!).",
	"...",
	"Soooo.. yeah, I guess that's all I want to say, really.",
	"I ran out of stuff to say.",
	"Oh well, come back soon and maybe I have something else to say.",
	"I'll try to think up of something interesting next time, ahaha!",
	"I guess this is good bye then.",
	"Bye bye, fellow developer! See you soon!",
	"",
	"With everlasting love,",
	""
];




// !-- run the code --!
// waits for 9 seconds, then Monika appears (9 because 9th month of the year)
setTimeout(HiMonikaHere, 9000);

// "wakes up" Monika after 22 seconds (22 because September 22 is her birthday)
setTimeout(WakeUpMonika, 22000);