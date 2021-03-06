/** @global */
var interval = null;

/**
 * Gets a random number limited to the ceiling provided.
 * @name getRandomNumberFrom
 * @function
 * @param {int} length length of the "easter egg" titles
 * @returns a random number within the array length
 */
function getRandomNumFrom(length) {
  return Math.floor(Math.random() * length);
}

/**
 * Checks if the current tab is out of focus.
 * Sets the document title to a randomly-picked
 * "easter egg" title from the `string array` given.
 * @name inFocusChecker
 * @function
 * @listens window~event:blur
 * @param {array} documentTitles an array of "easter egg" titles
 */
function outFocusChecker(documentTitles) {
  $(window).on("blur", function () {
    document.title = documentTitles[getRandomNumFrom(documentTitles.length)];

    interval = setInterval(function () {
      document.title = documentTitles[getRandomNumFrom(documentTitles.length)];
    }, 3000);
  });
}

/**
 * Checks if the current tab is in focus.
 * Clears the interval and resets the
 * randomly-set easter egg document name
 * back to the original.
 * @name inFocusChecker
 * @function
 * @listens window~event:focus
 * @param {string} documentTitle the original title of the web document
 */
function inFocusChecker(documentTitle) {
  $(window).on("focus", function () {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }

    document.title = documentTitle;
  });
}
/**
 * Main method.
 * @name main
 * @function
 * @author Dartegnian <root@dartegnian.com>
 */
function main() {
  var documentTitle = document.title;
  var documentTitles = [
    /* Girls' Generation - Divine */
    "I suppose I'm too fragile, my heart wavers so easily",
    "Looking for an answer that fades as the dawn breaks",
    "The crossroads standing in my way",
    "The starlight guiding me",
    "Tell me where I'm supposed to go",
    "No matter how far, no matter how hard I falter",
    "I'm waiting for a sign from above, that's destiny",
    "Like I'm small and powerless against the raging tide",
    "But as long as the sea parts, I'll make a path there",
    "Until the day the light shines through the clouds,",
    "Don't say goodbye",
    "Surely, you would remember our wish, right?",
    "Let's make the journey we walked together be everlasting proof",
    "In front of the raging tide, what can we do?",
    "Let's meet the challenge in a close embrace",

    /* Girls' Generation - Tears */
    "Come to me as the wind",
    "Come back to me as the rain",
    "I only think about you",
    "You are always next to me",
    "You leave so many memories",
    "How can I convey it to you?",

    /* Girls' Generation - Honey/Perfect for You */
    "Tell me your wish, I will make it come true",
    "Whenever you're sad, if you just look upon my face",
    "You will suddenly smile joyfully",
    "I'm perfect for you",
    "This greedy and prideful person I am is slowly changing",
    "You make me happy",

    /* Girls Generation - My Child/Fairytale */
    "I draw of the future days of just you and I",
    "Let's fill a treasure chest full with our wishes",
    "And hide it underneath the tree that we chose",
    "The fairy tale of you and I",

    /* Girls' Generation - Ha Ha Ha */
    "When it's tough, ha ha ha",
    "Today was another hard day",
    "Even when the world is noisy",
    "If you just worry, nothing will get done",
    "Now, just shake everything off and stand up",
    "The main character on the skylight stage—that's us, it's you",

    /* Girls' Generation - Stay Girls */
    "After meeting you, I wonder how much I have changed",
    "Have I become closer to the person that I admire?",
    "No matter the day, no matter the time, your voice supported me",
    "Everyday, everyday, because I",
    "All the way, all the way, wasn't alone",
    "I was finally able to reach this place",
    "No matter what the future holds, don't change who you are",
    "I promised one thing. Until my dream comes true, I will never give up",

    /* Girls' Generation - My Best Friend */
    "Alright, let's make a promise. You are my best friend.",
    "There is only one of you in this world, my friend",
    "You're my joy and my soul",
    "I'll continue to treasure our importance",
    "I'll be your strength, I'll always be your best friend",
    "Let's not be stingy and buy each other meals",
    "For me, when you're not here, I really feel lonely",
    "You're my life's present, my friend",
    'The word "friendship" may sound awkward, but I think that word was created to describe us',

    /* Girls' Generation - Snowy Wish */
    "I felt lonely by myself",
    "I didn't know you were right next to me",

    /* Girls' Generation-TTS - Library */
    "How can you seem like a different person at each moment?",
    "My dictionary is filled up with you",
    "Even if the night grows deep, without knowing, I will fall into it",
    "On places I need to memorize, underline",
    "On things I want to see again, bookmark",

    /* Girls' Generation - Naengmyeon (botched romanization) */
    "Chagaweo neomuna",
    "Sokishiryeo neomuna",
    "Eebbali neomushiryeo",
    "Naengmyeon! Naengmyeon! Naengmyeon!",
    "Gaseumi neomushiryeo",
    "Neolbomyeon neomuna ddo dashibwado neomuna",
    "Geuraedo neol saranghae~",

    /* Sunny - FM Date Logo Song */
    "We'll get a little closer every day",
    "The two of us getting to know each other just by talking",
    "It'll be a happy time because we're together",
    "Moment by moment, we'll fill the day",
    "Every day is sweet because of you" /* <3 http://dartegnian.weebly.com */,

    /* Sunny - Second Drawer */ "Again today, I ask myself how I'm doing",
    "The dreams that I borrowed from this world",
    "They are wearing out day by day",
    "Will I be okay?",
    "Can I live with a heart that is like a star that never falls?",
    "Can I live with a heart that doesn't get wet from the rain?",
    "Is my hurt heart healing a little?",
    "If I wait again, if I go again, will we be together?",
    "I'm okay because I have you",

    /* Seohyun - I'll Wait For You */
    "I can't be seen, my words can't be heard",
    "But I am here, I will be waiting for you",
    "I am at the place where your memory remains",
    "Even when time and tears flow, I will only be waiting for you",

    /* Taeyeon - Lonely Night */
    "It's time I get used to it",
    "But the night is so long, I can't fall asleep",
    "What are you doing right now?",
    "I wanna go someplace unfamiliar",
    "I know, that you're not here",
    "I'm sick of lonely nights",

    /* Taeyeon - The Blue Night of Jeju Island */
    "Let's leave, the two of us abandoning everything",
    "Let's leave to Jeju Island, under the blue night sky",
    "Let's leave, together, it's not that difficult",

    /* Tiffany - Yellow Light */
    "If I wait a bit more, will you come back to your spot?",

    /* Jackson 5 - I Want You Back */
    "When I had you to myself, I didn't want you around",
    "Oh baby, give me one more chance",
    "Won't you please let me back in your heart",
    "Oh darlin', I was blind to let you go",
    "I want you back",
    "Trying to live without your love is one long sleepless night",

    /* AZN Pride - Got Rice? */
    "It's the AZN",
    "Philippines to Taiwan to Cambodia",
    "Got food, got soup, got spice?",
    "It's the AZN better recognize",
    "Anything you can show that is nice?",
    "No forks in the house, chopsticks only",
    "Have a taste, don't be scared, try the lemon tea",
    "You don't want? That's alright, try the Pho Com Le",
    "Got luck every time you roll the dice?",
    "Good luck is bad unless you run and hide, 'cause we're thugs for life baby.",
    "Asian Pride",

    /*Overwatch voice lines*/
    "AFK",
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
    "Would you like the sponge or the spray?",
    "Hard work and dedication pays off",
    "I'm simply following my programming",
    "Error 404: Sarcasm Module not found",
    "De pelos",
    "No le saques",
    "¿Qué pecs?",
    "C'est comme ça",
    "よし！",
    "게임을 하면 이겨야지",
    "APM 좀 올려볼까?",
    "완전 좋아!",
    "다시 한 판 해보자고!",
    "아우, 짜증 나",
    "아, 열받네!",
    "아파!",
    "어머... 안 미안",
    "大家都指望着我吶。",
    "替え玉!",
    "等等我！",
    "啊，抱歉了。",
    "哦, 太棒了！",
    "你好。",
    "这个世界值得我们奋战！",
    "أنا هاخد بالي منك",
    "لسه في ناس لازم احميهم",
    "إتعلم من الألم",
    "أزيك؟",
    "أنا هحميك",
    "العدالة نازلة من فوق",
    "عامل إيه ؟",
    "اففف، مش ممكن",
    "Огонь по готовности!",
    "Без труда не вытащишь и рыбку из пруда",
    "Привет",
    "Вместе мы сила",
    "В гостях хорошо, а дома лучше",

    /* Azumanga Daioh */
    "I ❤ Osaka (Ayumu Kasuga)",
    "Whut yew mean?",
    "Harro everynyan",
    "Oh my gah!",
    "Yukari Mobile",
    "Chiyo-chan's dad",

    /* Danganronpa */
    "Kazuichi Soda is best soda",
    "Chiaki!",
    "Ultimate Weeaboo",
    "Monokuma",
    "Monokuma appears!",
    "Puhuhuhu~",
    "Upupupupu~",
    "Fuck you, Junko Enoshima",
    "Nagito Naego",
    "Makoto Komaeda",
    "Chiaki is best girl",
    "Kaede Akamatsu tribute website",
    "Gonta here webpage!",
    "Chihiro Fujisaki is best girl",
    "Hope × Despair",

    /* Asobi Asobase */
    "Three Piece OP",
    "Suripisu!",
    "Asobi Asobase!",
    "Asobi Asobase",
    "Pastimers Club Website",
    "Hanako",
    "Kasumi",
    "Olivia",
    "Hanako, Kasumi, Olivia",
    "Maeda the butler",
    "Asobi masho",
    "Jankenpon!",
    "スリピス",

    /* Vocaloid */
    "Miku",
    "Miku Hatsune",
    "Luka",
    "Megurine Luka",
    "Margarine Luka",
    "Tako Luka",
    "IA",
    "ARIA ON THE PLANETES",
    "IA -ARIA ON THE PLANETES-",
    "Yes, I like Vocaloid. I did in high school and still do.",
    "Crypton Future Media",
    "A wild Miku appears!",

    /* Vocaloid Music */
    "♪ Just be friends",
    "All we gotta do is just be friends ♪",
    "♪ Dreamin chuchu",
    "choco la ta ta ta ta ♪",
    "Dreamin Chuchu",
    "dreamin chuchu",
    "dreaming chu chu",
    "Dreamin chuchu★",
    "Dreamin Chu Chu★",
    "Ratsatsaa ja ripidabi dilla",
    "Rolling Girl",
    "rolling girl",
    "rest in peace wowaka",
    "drop pop candy",
    "Torinoko City",
    "Left-Behind City",
    "Happy Synthesizer",
    "ハロ/ハワユ",
    "Hello/How Are You",
    "ハロ／ハワユ (Hello/How Are You)",
    "Kagamine Len and Rin - Servant of Evil",
    "Megurine Luka - Answer (アンサー)",
    "Megurine Luka - Dreamin Chuchu",
    "REOL - Drop Pop Candy",
    "巡音ルカ - どりーみんチュチュ",
    "初音ミク - Weekender Girl",
    "初音ミク - Two-Faced Lovers",
    "初音ミク - Tell Your World",
    "初音ミク - Yellow",
    "初音ミク - Once Upon A Me",
    "初音ミク - 千本桜 (Senbonzakura)",
    "I'm thinking Miku, Miku",
    "I'm thinking Miku, Miku (oo-ee-oo)",
    "♪ Blue hair, blue tie",
    "hiding in your Wi-Fi! ♪",

    /* Jigoku Shoujo */
    "地獄少女",
    "あ な た の 怨 み 、 晴 ら し ま す 。",
    "Hotline to Hell",
    "地獄通信",
    "Jigoku Shōjo",
    "Enma Ai",
    "If you really want retribution,",
    "untie that red thread.",
    "Curses come home to roost",
    "Your grievance shall be avenged",
    "Oh pitiful shadow lost in the darkness,",
    "Demeaning and bringing harm to others,",
    "A damned soul wallowing in sin...",
    "Care to give death a try?",
    "Avatar the Last Airbender IS an anime",

    /* Touhou */
    "IOSYS - Alice→Dere",
    "Remilia Scarlet",
    "Flandre Scarlet",
    "Patchouli Knowledge",
    "Scarlet Devil Mansion Website",
    "Embodiment of Scarlet Devil",
    "Touhou Website",

    /* Pokemon GO TO THE POLLS */
    "Pikachu, I choose you!",
    "Pokémon is my favorite anime. Seriously. No kidding.",
    "Latias is my favorite Pokémon",
    "Oh my Arceus",

    /* Catherine */
    "Stray Sheep",
    "Stray Sheep Website",
    "Catherine",
    "Katherine McBride",
    "Vincent",
    "It's a Golden Show",

    /* other weeb stuff that I like. Some were given by my ex-best friend </3 */
    "ME!ME!ME!",
    "TeddyLoid - ME!ME!ME!",
    "TeddyLoid — ME!ME!ME! (feat. daoko) Pt.1",
    "TeddyLoid — ME!ME!ME! (feat. daoko) Pt.2",
    "TeddyLoid — ME!ME!ME! (feat. daoko) Pt.3",
    "TrySail 『adrenaline!!!』",
    "LiSA 『crossing field』",
    "RADWIMPS 『Zen Zen Zense』",
    "Kanon Wakeshima - Still Doll",
    "I summon MY DARK MAGICIAN",
    "Let's go, BLUE EYES WHITE DRAGON",
    "POT OF GREED lets me draw 2 cards from my deck",
    "KUNAI WITH CHAIN",
    "Seto Kaiba = Brock",
    "Egyptian God Cards",
    "Heart of the Cards",
    "Kaiba Corporation Website",
    "Accel World",
    "Accel World Website",
    "Brain Burst",
    "Brain Burst Website",
    "Kimi No Na Wa",
    "Your Name",
    "your name.",
    "A Silent Voice",
    "Eiga Koe no Katachi",
    "Sprited Away Website",
    "Kirito",
    "Asuna",
    "Leafa",
    "Knights of the Blood Oath",
    "Moonlit Black Cats",
    "Goodbye, Sachi",
    "In remembrance of Sachi, who died on June 22, 2023",
    "Sword Art Online",
    "Aincrad Online",
    "ALfheim Online",
    "SAO got bad after episode 14 >:^(",
    "ALfheim Online was a mistake",
    "The ALfheim arc sucks!",
    "SAO Fairy Arc = trash",
    "SAO > GGO > ALO",
    "Why did they ruin Asuna in ALfheim?",
    "They ruined Asuna >:^(",
    "Why in the world did they ruin Asuna in ALO?",
    "The 2nd arc of SAO was really, REALLY bad",
    "The 2nd arc of SAO was really, REALLY distasteful",
    "The SAO 1st arc is good",
    "ALO sucks",
    "Aincrad is better lol",
    "login: heathcliff",
    "Asuna is best girl",
    "Asuna > Leafa",
    "Asuna is a badass!",
    "NerveGear 2022",
    "Sword Art Online 2022",
    "I actually watched Eromanga Sensei",
    "I didn't like Eromanga Sensei",
    "Still, Sagiri dancing is super cute!!!",

    /* Ye old Internet references */
    "Clippy was here",
    "Bonzi Buddy was here",
    "You've got mail!",
    "Kony 2012 was a joke",
    "Kony 2012 flopped so hard",
    "AZN Pride",
    "Give me some XANGA EPROPS and KUDOS",
    "JUST MONIKA - Netscape",
    "A Better Tomorrow - Netscape",
    "Add XxDartegnianxX on Asian Avenue!!!",
    "Welcome to Dartegnian's LiveJournal!",
    "AIM ID: dartegnian",
    "LEEEERROOYYY JEEENNKIINNSS!",
    "Remember MySpace Tom?",
    "My pictures have MySpace angles?",
    "Add me to your MySpace Top Friends!",
    "Built on existing MySpace code",
    "Built on existing Xanga code",
    "Dartegnian is in your extended network",
    "// UNDER CONSTRUCTION //",
    "Who I'd Like to Meet: F, around my age, as weird as me",
    "Profile song: Answer (アンサー)",
    "Dartegnian's GeoCities Page",
    "Dartegnian's Xanga Site",
    "Dartegnian's First Homepage",
    "Dartegnian's MySpace Page",
    "Dartegnian's Blurbs",
    "muNgsOoneE's Xanga Site",
    "D1S iS DA D1ARY 0F DA 0NE `N 0NLY M`FUKC1N iNN0CENZ",
    "think fun__ think flirty__ think STEPHO_!!",
    "stephanie in wonderland..*",
    "x [[ y  u  m  m  y ]] x",

    /* Twitch Plays Pokemon */
    "I discovered the secret of true power by staring at a Helix Fossil for days and days",
    "PRAISE LORD HELIX!",
    "༼ つ ◕_◕ ༽つ PRAISE HELIX ༼ つ ◕_◕ ༽つ",
    "PRAISE HELIX!",
    "The Church of Helix",
    "A Helix Today",
    "The Followers of Helix",
    "Praise the dome fossil!",
    "FollowersOfTheDomeFossil.com",
    "Flareon the False Prophet",
    "Lord Helix -> Omanyte",
    "Bird Jesus -> aaabaaajss",
    "Battery Jesus -> AA-J",
    "King Fonz -> AAAAAAAAA",
    "Air Jordan -> AIIIIIIRRR",
    "All-Terrain Venomoth -> AATTVVV",

    /* Girls' Generation/Sone */
    "Ebbali nomu",
    "Girls' Generation comeback ISRAEL!",
    "I'm still a S❤NE!",
    "Ho-ho-holiday~",
    "Blanc & Eclare == overpriced $h!t",
    "Sunshiner forever!",
    "Girls' Generation is still here!",
    "Right now, it's Girls' Generation!",
    "Jigeumeun So Nyeo Shi Dae!",
    "지금은 소녀시대!",
    "앞으로도 소녀시대!",
    "영원히 소녀시대!",
    "Tiffany's Xanga blogs are in my other blog :^)",

    /* Gaming */
    "Jeff Kaplan is best girl",
    "Nerf Jeff Kaplan on the PTR",
    ">forever stuck in silver hell in OW and CSGO",

    /* misc */
    "I love my Miku jacket",
    "I love my DevSquad jacket",
    "I love the jacket Andrea gave me~",
    'Although it doesn\'t fit me well, I still love my "Wonderland" jacket',
    "jackets > any other type of clothing",
    "NAKE FEWS",
    "Whoa mama",
    "Do you know da wei",
    "Dear Sunshine",
    "Ch-ch-ch-ch-changes",
    "You are my sunshine, my only sunshine",
    "I miss SS151 :(",
    "I shall return! ...to SS151!",
    "Goodbye, SS151. I'll miss you.",
    "Wait! Was it something I said?",
    "Everyone's got a song inside, waitin' to be free!",
    "I am Groot",
    "Where are you going?",
    "I'll be here if you need me",
    "Jack! Get back!",
    "You come back, mmkay?",
    "(T⌓T)",
    "; ~ ; )/",
    "And why did you click off?",
    "THE MAIN TAB HAS CHANGED",
    "Annyeong!~",
  ];

  outFocusChecker(documentTitles);
  inFocusChecker(documentTitle);
}

$(document.body).ready(main());
