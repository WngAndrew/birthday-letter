
var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;

function showImage(){
	//document.getElementById("imgTxt").style.opacity = 0;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	//document.getElementById("imgTxt").style.opacity = 1 - flag;
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function showText() {
    var textOverlay = document.getElementById("textOverlay");
    textOverlay.innerText = longText;
    textOverlay.style.display = "block"; // Show the scrollable overlay
}

function preshowImage(){
	document.getElementById("imgTxt").style.opacity = 0;
}

function play() {
    // Toggle the visibility of the text overlay when the heart is clicked
    var textOverlay = document.getElementById("textOverlay");
    if (textOverlay.style.display === "block") {
        textOverlay.style.display = "none"; // Hide the overlay
    } else {
        showText(); // Show the overlay
    }
}

function buttonFadeIn() {
    if (btnVal < 1) {
        btnVal += 0.025;
        btn.style.opacity = btnVal;
    } else {
        clearInterval(buttonInterval);
        if (ok == 3) {
            ok += 1;
        }
    }
}

function event() {

	showImageInterval = setInterval(preshowImage, 100);

	imgInterval = setInterval(function (){
		if(ok == 3){
			setTimeout(function(){buttonInterval = setInterval(buttonFadeIn, 50);}, 1000);
			clearInterval(imgInterval);
		}
	}, 50);
}

var buttonInterval;

event();

var longText = `
One hundred seventeen things: 
1 - That you're passionate 
2 - You're confidence
3 - You have patience
4 - You listen
5 - You're ADORABLE
6 - Your giggle 
7 - Your laugh but when you really laugh 
8 - That you give me space and time
9 - You're kind and considerate
10 - You're caring
11 - That you read 
12 - That you dance
13 - That you climb
14 - That you like math??
15 - That you're willing to go out of your way to do the things you love, that you'll fearlessly go through the trouble of going climbing or dancing in a new country
16 - Your smile
17 - The way you hum when it's quiet
18 - The way we have conversations that are complete jibber jabber 
19 - The way sit at dinner and say nothing and just stare
20 - The way you play guitar
21 - The fact that you play guitar 
22 - And piano too??
23 - The way you stand on your tip toes to kiss me
24 - How you look in my arms
25 - how you feel in my arms
26 - How your hand feels in mine
27 - The way you say "choose day" 
28 - Super b!
29 - Dis Heveled
30 - Frank Antonio
31 - Twinnenenem
32 - That you like doing things that are challenging and hard
33 - That you're smart 
34 - That you play sudoku before you sleep
35 - That we both like shitty sitcoms 
36 - The way you look when you want me to make a move
37 - How close you were with your grandma
38 - That you're close with your family even though they can be frustrating
39 - 1000 day duolingo streak?? Talk about consistency
40 - That you're able to let things go and be happy
41 - The way that you don't take life too seriously
42 - That your goal in life is to be happy
43 - That you're sharp and have good attention to detail
44 - You understand quality and have good taste
45 - How you look and talk when you get excited about something 
46 - Your accents and impressions
47 - That one you said "we both know what ___ (I forgot what it was) leads to" and we both said genocide, which was the start of the wavelength
48 - The wavelength
49 - How you take things slow and enjoy them
50 - The way you look in my hoodie
51 - The way you smell
52 - That you have all sorts of silly goofy dreams like being a magician or cup stacking
53 - That you have all sorts of not silly dreams like being a director or working in fashion
54 - That you're a curious person
55 - That our birthdays are 7/11 7/11
56 - How you look curled up in a blanket
57 - Our pre sleep speeches
58- How it takes 20 minutes to hang up because I love hearing you talk
59 - Hearing you talk
60 - Your voice 
61 - That you went to Japan to do research? So cool (This one is a love hate relationship)
62 - That you're a cool person just in general 
63 - Telling you I love you
64 - Hearing you say it back
65 - That you're independent 
66 - Trespassing with you in Del Mar and looking over the beach
67 - Walking around the zoo while holding your hand
68 - That you love gift shops it's so funny
69 - That you like the "I heart __ " shirts
70 - The way you like movies
71 - How well you've adjusted to life in Japan and that you're having the time of your life there
72 - Sitting on the rocks at seaport village with you
73 - Sitting on the rocks at La Jolla Cove (even though you got mad at me whoops)
74 - Beach day at pacific beach
75 - Listening to you read out loud to me
76 - 6am breakfast at chic fil a
77 - 4am denny's
78 - Studying at Flower Pot with you
79 - Walking around La Jolla Shores after
80 - First dinner wtih you in north park at that vietnamese place
81 - The moment you got up to leave in office hours and I got up to follow you
82 - Reading your letter after coming home from cabo
83 - The first time I hugged you in my apartment parking lot
84 - McDonald's in the parking lot talking about life
85 - Getting bit a million times on Soledad (worth it)
86 - Kissing in the elevator (for some reason it's so fun)
87 - Kissing you
88 - Finally eating at Din Tai Fung
89 - Waiting egregiously long to get our food
90 - Sitting in front of glider port listening to your monologue
91 - Thai food when we talked about what love is
92 - That we eat an irregular amount Thai and Vietnamese food
93 - Daves after beach day
94 - Dinner at the katsu place when we sat at the bar and ate next to each other
95 - Watching you climb
96 - Sitting in line at ans and feeling you get closer to me
97 - "See you whenever" and we actually did see each other whenever
98 - You falling asleep in my arms and me knowing because you start twitching
99 - Calling you while I was in Europe and Mexico
100 - Your calves ahahah
101 - Cuddling
102 - That you're willing to open up to me even though it's hard for you talk about your feelings
103 - That you like talking about me to Lissi
104 - Your friendship with Lissi - so wholesome
105 - That we write letters to each other
106 - That you're willing to do long distance with me
107 - That we get to call almost everyday 
108 - How you heard me say that I don't like it when people do other things on facetime and after that you never did it again even though I didn't ask you to
109 - Learning random cantonese words
110 - The way we say hey to each other 
111 - Playing wordle with you at night
112 - When you asked if I liked you and I told you that my attraction to you was magnetic
113 - Holding your hand at the beach
114 - Kissing you for the first time (and every time after)
115 - Your mind
116 - Your body
117 - Your soul (whatever that means)
`;