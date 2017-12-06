/**
* Code "borrowed" from somewhere else.
* Even I think this is a little immature, but
* I like SNSD references anyway, so I squeezed
* this little thing here just for laughs and
* stuff.
* It's my personal site/blog anyway, I can do
* whatever I want with it. But yeah, I think
* this is a little immature, even for me.
*/

function HelloSoshi()
{
	var mistake = null;
	var bluejeans = document.title;
	var howgreatisyourlove =
	[
		/* Seohyun - I'll Wait For You */
		"I can't be seen, my words can't be heard",
		"But I am here, I will be waiting for you",
		"I am at the place where your memory remains",
		"Even when time and tears flow, I will only be waiting for you",

		/* Girls' Generation - Tears */
		"Come to me as the wind",
		"Come back to me as the rain",
		"I only think about you",
		"You are always next to me",
		"You leave so many memories",
		"How can I convey it to you?",

		/* Tiffany - Yellow Light */
		"If I wait a bit more, will you come back to your spot?",

		/* Girls' Generation - Snowy Wish */
		"I felt lonely by myself",
		"I didn't know you were right next to me",

		/* Sunny - Second Drawer */ /* <3 http://dartegnian.weebly.com */
		"Again today, I ask myself how I'm doing",
		"The dreams that I borrowed from this world",
		"They are wearing out day by day",
		"Will I be okay?",
		"Can I live with a heart that is like a star that never falls?",
		"Can I live with a heart that doesn't get wet from the rain?",
		"Is my hurt heart healing a little?",
		"If I wait again, if I go again, will we be together?",
		"I'm okay because I have you",
		
		/* Taeyeon - Lonely Night */
		"It’s time I get used to it",
		"But the night is so long, I can’t fall asleep",
		"What are you doing right now?",
		"I wanna go someplace unfamiliar",
		"I know, that you’re not here",
		"I’m sick of lonely nights",

		/* Girls' Generation - My Best Friend */
		"Alright, let's make a promise. You are my best friend.",
		"There is only one of you in this world, my friend",
		"You're my joy and my soul",
		"I'll continue to treasure our importance",
		"I'll be your strength, I'll always be your best friend",
		"Let's not be stingy and buy each other meals",
		"For me, when you're not here, I really feel lonely",
		"You're my life's present, my friend",
		"The word \"friendship\" may sound awkward, but I think that word was created to describe us",

		/* Taeyeon - The Blue Night of Jeju Island */
		"Let’s leave, the two of us abandoning everything",
		"Let’s leave to Jeju Island, under the blue night sky",
		"Let’s leave, together, it’s not that difficult",

		/* Jackson 5 - I Want You Back */
		"When I had you to myself, I didn't want you around",
		"Oh baby, give me one more chance",
		"Won't you please let me back in your heart",
		"Oh darlin', I was blind to let you go",
		"I want you back",
		"Trying to live without your love is one long sleepless night",

		/*Overwatch voice lines*/
		"AFK",
		"这个世界值得我们奋战！",
		"You have to let it go",
		"I'm not a miracle worker. Well, not always.",
		"Take two and call me in the morning",
		"Do You Need A Hug?",
		"Play Nice, Play Pharah",
		"Welcome to my reality",
		"Everything by design",
		"People always underestimate the engineers",
		"Peace and blessings be upon you all",
		"Hello, world!",
		"替え玉!",
		"Would you like the sponge or the spray?",
		"Hard work and dedication pays off",
		"أنا هحميك",
		"No le saques",
		"I'm simply following my programming",
		"العدالة نازلة من فوق",
		"게임을 하면 이겨야지",
		"よし！",
		"Error 404: Sarcasm Module not found",
		"De pelos",
		"C'est comme ça",
		"Вместе мы сила",
		"¿Qué pecs?",
		"اففف، مش ممكن",
		"APM 좀 올려볼까?",
		"완전 좋아!",
		"다시 한 판 해보자고!",
		"아우, 짜증 나",
		"아, 열받네!",
		"아파!",
		"어머... 안 미안",
		"大家都指望着我吶。",
		"等等我！",
		"啊，抱歉了。",
		"哦, 太棒了！",
		"你好。",
		"أنا هاخد بالي منك",
		"لسه في ناس لازم احميهم",
		"إتعلم من الألم",
		"أزيك؟",
		"عامل إيه ؟",
		"Огонь по готовности!",
		"Без труда не вытащишь и рыбку из пруда",
		"Привет",
		"В гостях хорошо, а дома лучше",


		"PRAISE LORD HELIX!",
		"I am Groot",
		"Wew lad",
		"Jack! Come back!",
		"You come back, mmkay?",
		"(T⌓T)",
		"And why did you click off?",
		"THE MAIN TAB HAS CHANGED",
		"Annyeong!~"
	];
		
	// check if window is moved out of focus
	$(window).on('blur', function()
	{
		// pick random string from array for the title
		document.title = howgreatisyourlove[Math.floor(Math.random() * howgreatisyourlove.length)];

		// change window title every 5 seconds
		mistake = setInterval(function() {
			document.title = howgreatisyourlove[Math.floor(Math.random() * howgreatisyourlove.length)];
		}, 5000);
	});

	// check if window is in focus
	$(window).on('focus', function()
	{
		if(mistake)
		{
			clearInterval(mistake);
			mistake = null;
		}

		// reset tab title to original
		document.title = bluejeans;
	});
}

//initializes code
$(document.body).ready(HelloSoshi());