const kaustav = "Kaustav";
const yashika = "Yashika";

const loveWords = [
	"love",
	"heart",
	"passion",
	"desire",
	"romance",
	"forever",
	"eternity",
	"soulmate",
	"beloved",
	"cherish",
	"devotion",
	"intimacy",
	"kiss",
	"hug",
	"embrace",
	"affection",
	"adore",
	"treasure",
	"commitment",
	"together",
	"unity",
	"bond",
	"harmony",
	"loyalty",
	"dedication",
	"adoration",
	"infatuation",
	"yearning",
	"longing",
	"bliss",
	"passionately",
	"endlessly",
	"unconditionally",
	"completely",
	"totally",
	"absolutely",
	"entirely",
	"deeply",
	"truly",
	"madly",
	"wildly",
	"sincerely",
	"passionately",
	"tenderly",
	"intensely",
	"amazingly"
];

const poemTemplates = [
	`${kaustav}, my ${loveWord}, my ${loveWord},
	You are the ${loveWord} that fills my heart.
	${yashika}, my ${loveWord}, my ${loveWord},
	You are the ${loveWord} that makes me smart.`
	${kaustav}, my ${loveWord}, my ${loveWord},
	With you, I am never alone.
	${yashika}, my ${loveWord}, my ${loveWord},
	Our love is forever known.
	
	${kaustav}, my ${loveWord}, my ${loveWord},
	You are the ${loveWord} that lights up my life.
	${yashika}, my ${loveWord}, my ${loveWord},
	You are the ${loveWord} that ends all strife.
	
	${kaustav}, my ${loveWord}, my ${loveWord},
	Together we can conquer anything.
	${yashika}, my ${loveWord}, my ${loveWord},
	In your arms is where my heart takes wing.
`;

const generatePoem = () => {
	const randomName1 = Math.random() < 0.5 ? kaustav : yashika;
	const randomName2 = Math.random() < 0.5 ? kaustav : yashika;
	const randomLoveWord = loveWords[Math.floor(Math.random() * loveWords.length)];
	const randomTemplate = poemTemplates[Math.floor(Math.random() * poemTemplates.length)];
	
	const poem = randomTemplate
		.replace(/kaustav/g, randomName1)
		.replace(/yashika/g, randomName2)
		.replace(/loveWord/g, randomLoveWord);
	
	document.getElementById("poem-container").innerHTML = `<p>${poem}</p>`;
}

document.getElementById("generate-btn").addEventListener("click", generatePoem);
