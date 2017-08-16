function HelloSoshi() {
        var mistake = null,
            bluejeans = document.title,
            howgreatisyourlove = [
                /* Seohyun - I'll Wait For You */
                "I can't be seen, my words can't be heard",
                "But I am here, I will be waiting for you",
                "I am at the place where your memory remains",
                "Even when time and tears flow, I will only be waiting for you",

                /* Girls' Generation - Tears */
                "Come to me as the wind",
                "Come back to me as the rain",
                "I only think about you",

                /* Tiffany - Yellow Light */
                "If I wait a bit more, will you come back to your spot?",

                /* Girls' Generation - Snowy Wish */
                "I felt lonely by myself",

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

                'Annyeong!~'
            ];

        $(window).on('blur', function () {
            document.title = howgreatisyourlove[Math.floor(Math.random() * howgreatisyourlove.length)];

            mistake = setInterval(function() {
                document.title = howgreatisyourlove[Math.floor(Math.random() * howgreatisyourlove.length)];
            }, 9000);
        });

        $(window).on('focus', function () {
            if(mistake) {
                clearInterval(mistake);
                mistake = null;
            }

            document.title = bluejeans;
        });
}
$(document.body).ready(HelloSoshi());
