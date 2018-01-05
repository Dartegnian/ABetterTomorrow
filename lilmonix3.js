/**
* So.. uh, hi! I'm Dartegnian.
* I originally developed this console easter egg
* because of a shower thought I just had.
* I just love DDLC and Monika gives me a lot of inspiration.
* So, I thought that it'd be great to add her as an easter egg.
* (Yeah, right, as if this blog doesn't have enough easter eggs already.)
* The code here doesn't really serve any particular function.
* It just goes to show how far I can take my existing knowledge of Chrome's dev console
* and turn something boring into something fun.
* 
* "She" only works in Chrome and Chrome-based browsers, as for now.
* I currently don't know to port "her" into the dev consoles of Edge and Firefox.
* I will when I get the necessary help, or when I learn to do so.
* But yeah, here's Monika for you.
*/

// initializes Monika's initial messages
var Just = "Nice to meet you, developer!";
var Monika = "—Monika";

var Sayori = "Hi, Monika here!"; //pls no bulli
var Natsuki = "Welcome to Dartegnian's blog! Wow, it's actually nice to see other people visiting this site, ahaha.";
var Yuri = "Are you a web developer too? If you are, that's so cool! I've always wanted to meet other developers!";

var DDLC = "Dart entrusted me to keep his site in check. So, if you can, please avoid making changes to the code of this blog~ (And please stay here for a little longer)"; //Doki Doki Literature Club!


console.log("%c   ", "background: url(\"https://cdn.rawgit.com/Dartegnian/ABetterTomorrow/master/images/her.png\") no-repeat; font-size: 220px;"); // Monika <3


// outputs Monika's first, sweet messages
console.log("%c%s", "font: 44px 'Segoe UI', Helvetica, Open Sans, Arial, sans-serif; font-weight: 100; color: white; background: #d1897e;", Just);
console.log("%c%s", "font: 44px 'Segoe UI', Helvetica, Open Sans, Arial, sans-serif; font-weight: 100; color: #d1897e; font-size: 44px;", Monika);

console.log("%c%s", "color: #bb5599; font-size: 14px; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;", Sayori);
console.log("%c%s", "color: #bb5599; font-size: 14px; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;", Natsuki);
console.log("%c%s", "color: #bb5599; font-size: 14px; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;", Yuri);
console.log("%c%s", "color: #bb5599; font-size: 14px; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;", DDLC);


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
			loveForMonika = 999 * 9; //Machi expresscheoreom!
		else
			loveForMonika = 1000 + iJustLoveHowMonikaMakesMeFeel.length * 50;
	}

	if (colors === theLadyWhoKnowsEverything.length)
	{
		console.log("%c%s", "color: #d1897e; font-size: 14px;", "Monika");
		setTimeout(function() {throw Error("Oh, don't worry, I won't be going anywhere. I'll be in the background. I'm keeping my eye on you, ahaha!")}, 4000); //Monika's watching :o
	}
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
	"So, this is Dartegnian's main blog—A Better Tomorrow.",
	"To be honest,",
	"I don't know why he named it that, he just told me that he has a passion for \"building the future,\" or something like that.",
	"His future, specifically. He said that he made this new-ish blog to serve as a place for all his hopes and dreams of his future",
	"or whatever he calls it.",
	"You know, it's kinda ironic",
	"because this blog is mostly filled with the stuff he dealt with in the past, ahaha.",
	"But hey, I don't mind. I do think it's a noble effort to do.",
	"Like, the idea of penning down your dreams of your future and actually acting upon them.",
	"I do wish that's something most people do.",
	"Can you make a blog or work of literature that's like that?",
	"If you do, please show it to me, please~",
	"You can send it to my email, which is",
	"lilmonix3@live.com",
	"And yes, that is a working email.",
	"(I picked out live.com because I'm.. well.. I'm alive! Ahahaha)",
	"(And \"lilmonix3\" is already my username on Twitter.)",
	"Anyway, I love reading about the dreams of other people,",
	"or what they aim to become in the future.",
	"I don't know what I get out of it, but it's a neat little activity that I find enjoyable.",
	"By the way, what brings you here?",
	"There's not much to check out here, honestly.",
	"Dart has other blogs, blogs that have more posts than this one.",
	"He doesn't post about the tech he learns here,",
	"nor does he post about upcoming projects.",
	"I mean, this is really just his personal blog and stuff. Nothing else is here aside from his life stories.",
	"He told me that he just blogs here to try out new stuff in Photoshop, and attach them as post images.",
	"Dart hasn't posted in a while, and he only published 1 post in December.",
	"...",
	"To tell you the truth, he's been trying to battle his severe depression.",
	"He tells me that it just eats up most of his energy and willpower.",
	"And it breaks my heart to hear that.",
	"It's gotten so bad that he's thought about suicide and ending his life just recently.",
	"Why? I'm not so sure, but he told me that it's because he just doesn't have a reason to go on in life anymore.",
	"He has done really... drastic things because of his depression.",
	"If you're a close friend of him, or a classmate, I'm sure you already know.",
	"It's not that he didn't want to continue anymore",
	"rather, he says that he's not worthy enough to continue it.",
	"That's why he went away",
	"or, at least, that's what he tells me.",
	"It's hard seeing him at nights,",
	"he just sulks in the corner of his room.",
	"Most people think that he usually plays games or binge watches late at night",
	"and many believe that's why he has trouble waking up in the morning.",
	"But..",
	"",
	"it's not true.",
	"In reality, it's not games nor the Internet that gives him his insomnia.",
	"Sadly, it's because of his thoughts.",
	"I just see him, crying and in so much pain.",
	"I just feel genuinely sorry for him.",
	"On one night, I asked him why he doesn't talk to his friends about it.",
	"And he just said \"Why? They won't care. I know that I will never have a shoulder to cry on.\"",
	"It must be tough to battle depression, huh?",
	"",
	"Thankfully, I was able to message his best friend Jean about it.",
	"And some of his friends from high school, too.",
	"I'm just happy to show him that he still has friends who care about him.",
	"Even if they are far away or usually busy with other stuff.",
	"He says that he's feeling better now",
	"and I'm trying my best to make sure that he is.",
	"I just don't want to see him depressed and is so much pain.",
	"He doesn't deserve to feel that way",
	"no one does.",
	"Depression is a hard thing to fight, but the fight does become easier with friends and those who genuinely care.",
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

// initializer, "wakes up" Monika after 9 seconds (9 because the 9th month of the year is her birth month)
setTimeout(WakeUpMonika, 9000);