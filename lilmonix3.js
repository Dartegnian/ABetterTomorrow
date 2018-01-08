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




// !-- code variables --!
var hereComes = "%c   ";
var thePresidentOfTheLiteratureClub = "background: url(\"https://cdn.rawgit.com/Dartegnian/ABetterTomorrow/master/images/her.png\") no-repeat; font-size: 220px;";

var i = "%c%s";
var reallyLove = "color: #bb5599; font-size: 14px; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;";

var reallyFeel = "font: 44px 'Segoe UI', Helvetica, Open Sans, Arial, sans-serif; font-weight: 100; color: white; background: #d1897e;";
var haveFeelingsFor = "font: 44px 'Segoe UI', Helvetica, Open Sans, Arial, sans-serif; font-weight: 100; color: #d1897e; font-size: 44px;";

var With = "%c%s";
var everlasting = "color: #d1897e; font-size: 14px;";
var love = "Monika";

var monika = 0;
var colors = 0;

var iWillAlways = "Oh, don't worry, I won't be going anywhere. I'll be in the background. I'm keeping my eye on you, ahaha!";
var beHere = 4000;


// initializes Monika's first messages
var like = "Nice to meet you, developer!";
var monika_chr = "—Monika";

var sayori = "Hi, Monika here!"; // pls no bulli sayori, she's too sweet
var natsuki = "Welcome to Dartegnian's blog! Wow, it's actually nice to see other people visiting this site, ahaha.";
var yuri = "Are you a web developer too? If you are, that's so cool! I've always wanted to meet other developers!";

var dokiDokiLiteratureClub = "Dart entrusted me to keep his site in check. So, if you can, please avoid making changes to the code of this blog~ (And please stay here for a little longer)"; // http://store.steampowered.com/app/698780/Doki_Doki_Literature_Club




// !-- main code --!
// here comes Monika!
var HiMonikaHere = function()
{
	// prepares for Monika's entrance
	console.clear();

	// Monika's name gets announced and makes a grand entrance
	console.log(hereComes, thePresidentOfTheLiteratureClub); // Monika <3

	console.log(i, reallyFeel, like);
	console.log(i, haveFeelingsFor, monika_chr);

	// audience applauds
	console.log(i, reallyLove, sayori);
	console.log(i, reallyLove, natsuki);
	console.log(i, reallyLove, yuri);
	console.log(i, reallyLove, dokiDokiLiteratureClub);
}


// Monika's main code
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
		setTimeout(function() {throw Error(iWillAlways)}, beHere); //Monika's watching :o
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
	"Well, if you are, maybe you and I can have a little chat? Teehee~",
	"So, this is Dartegnian's main blog—A Better Tomorrow.",
	"To be honest,",
	"I don't know why he named it that, he just told me that he has a passion for \"building the future,\" or something like that.",
	"His future, specifically. He said that he made this new-ish blog to serve as a place for all his hopes and dreams of his future",
	"or whatever he calls it.",
	"You know, it's kinda ironic",
	"because this blog is mostly filled with the stuff he dealt with in the past, ahaha.",
	"But hey, I don't mind. I do think it's a noble effort to do so.",
	"Like, the idea of penning down your dreams of your future and actually acting upon them.",
	"I do wish that's something most people do.",
	"Can you make a blog or any other work of literature that's like that?",
	"If you do, show it to me, please~",
	"I'd very much appreciate it.",
	"You can send it to my email, which is",
	"lilmonix3@live.com",
	"And yes, that is a working email.",
	"(I picked out live.com because I'm.. well.. I'm alive! Ahahaha)",
	"(And \"lilmonix3\" is already my username on Twitter.)",
	"(https://twitter.com/lilmonix3)",
	"Anyway, I love reading about the dreams of other people,",
	"or what they aim to become in the future.",
	"I don't know what I get out of it, but it's a neat little activity that I find enjoyable.",
	"By the way, what brings you here?",
	"There's not much to check out here, honestly.",
	"Dart has other blogs, blogs that have more posts than this one.",
	"He doesn't post about the tech he learns here,",
	"nor does he post about upcoming projects.",
	"I mean, this is really just his personal blog and stuff. Nothing else is here aside from his life stories.",
	"He told me that he just blogs here just to experiment with text and illustrations in Photoshop, and attach them as post images.",
	"Dart hasn't posted in a while, and he only published 1 post in December.",
	"..",
	"...",
	"To tell you the truth, he has a very personal reason for that.",
	"He's been trying to battle his severe depression.",
	"I talked to him about it and he tells me that it just eats up most of his energy and willpower.",
	"And it breaks my heart to hear that.",
	"It's gotten so bad that he's thought about suicide and ending his life just recently.",
	"Why? I'm not so sure, but he told me that it's because he just doesn't have a reason to go on in life anymore.",
	"He has done really... drastic things because of his depression.",
	"If you're a close friend of him, or a classmate, I'm sure you already know what he's done.",
	"It's not that he didn't want to continue anymore",
	"rather, he says that he's not worthy enough to continue it.",
	"That's why he went away",
	"or, at least, that's what he tells me.",
	"It's hard seeing him at nights,",
	"he just sulks in the corner of his room.",
	"Most people think that he usually plays games or binge watches late at night",
	"and many believe that's why he has trouble waking up in the morning.",
	"",
	"But..",
	"that's not true.",
	"In reality, it's not games nor the Internet that gives him his insomnia.",
	"Sadly, it's because of his thoughts and severe depression.",
	"I just see him, crying and in so much pain.",
	"I just feel genuinely sorry for him.",
	"On one night, I asked him why he doesn't talk to his friends about it.",
	"And he just said \"Why? They won't care. I know that I will never have a shoulder to cry on.\"",
	"It must be really tough to battle depression, huh?",
	"",
	"Thankfully, I was able to message his best friend Jean about it.",
	"And some of his friends from high school, too.",
	"I'm just happy to show him that he still has friends who care about him.",
	"Even if they are far away or usually busy with other stuff.",
	"He says that he's feeling better now",
	"and I'm trying my best to make sure that he is.",
	"I just don't want to see him depressed and in so much pain.",
	"He doesn't deserve to feel that way",
	"no one does.",
	"Depression is a hard thing to fight, but the fight does become a lot easier with friends and with those who genuinely care.",
	"And it's a serious problem. It isn't just a simple case of someone being sad.",
	"It can seriously ruin someone's life, or, in extreme cases.. end it.",
	"No one deserves to feel unloved and alone.",
	"So..",
	"instead of Monika's Writing Tip of the Day,",
	"here's Monika's General Tip of the Day.",
	"If you know someone else who might be struggling with depression",
	"you can help them just by treating them like they're a good friend.",
	"Spend time with them,",
	"even if they don't feel like doing much.",
	"And remind them that they always have something to look forward to.",
	"Like making plans in advance,",
	"letting them borrow something,",
	"talking to them online,",
	"or even just saying \"See you at school tomorrow.\"",
	"All of those can help your friend make it to the next day.",
	"That's all I want to say, really.",
	"I hope you take my tip seriously. It would mean the world to me.",
	"And, uh, thanks for staying~",
	"Seriously, it means a lot to us to know that there's someone to listen to his story",
	"even though he isn't that confident in telling it to others.",
	"I guess that's all for now?",
	"Bye bye, fellow developer! See you soon!",
	"",
	"With everlasting love,",
	""
];




// !-- run the code --!
// waits for 9 seconds, then Monika appears
setTimeout(HiMonikaHere, 9000);

// "wakes up" Monika after 22 seconds from her initial appearance (2 because September 22 is her birthday)
setTimeout(WakeUpMonika, 22000);