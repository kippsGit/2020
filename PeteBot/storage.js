let unknownWord = ['I don\'t know what you\'re saying', 'what?', 'come again?', 'beg your pardon?', 'huh?', 'what was that?', 'what did you say?', 'excuse me?', '?', '??', '???', '????', '?????', '???????????', 'I don\'t know what to say.', 'ha?', 'hmm?']
let mad = ['what the hell are you talking about?', 'what the heck? shut up!!!', 'shut the fuck up!!!']
let greet = ['hello', 'hi', 'hey', 'hey there', 'what\'s up?', 'how are you doing?']
let confused = ['what are you doing?', 'what the fuck are you doing?', 'what are you up to?', 'what you doin\' man', 'hey!!', 'what the heck?']
let teemo = ['he\'s a rat!!', 'someone mains him', 'a league of legends character, in short a fucking rat!!!', 'I have no idea who that rat is!! :)', 'I have no idea who that shit is, to be honest, that fucking rat!!', 'no idea about that stupid rat.']
let who = ['who what?', 'who who who?', 'who huh?']
let disagree = ['no', 'nope']
let no_love = ['I don\'t love you', 'I do not love you']
let agree = ['yes', 'yep']
let bug = ['yes sir?', 'yes?']
let human = ['a human', 'someone', 'people like you']
let king = ['his name starts with King', 'someone named King Peter', 'An idiot named Peter']
let ha = ['hakdog!!', 'hakdog', 'hakdog, hahah']
let hakdog = ['hakdog da sungad mo eh!!', 'pakyo ka!!', 'hakdog for the win eh, bobo!!']
let bobo = ['bobo ka man eh!!!', 'mas bobo ka, pakyow', 'ikaw ang bobo d hahah', 'bobo ka? yep hahah']
let fyou = ['fuck you!!!', ',,/,,', '../..', './.', '.|.', '..|..', 'you too!!! ,/,']
let checkOut = ['hey!!', 'what the fuck are you doing?', 'are you there?', 'hello?', 'hellooooooo!!!', 'is anyone there?', 'yohooooo!!!']
let amazed = ['I know right.', 'amazing right?', 'it\'s cool right']
let exhausted = ['That\'s enough!!', 'stop it!!', 'ano na man!!!', 'istop!!!']
let robot = ['maybe', ':)', 'no!!']
let name = ['Bug', 'My name is Bug', 'Bug :)']
let feeling = ['fine', 'I\'m fine, thank you', 'good', 'I\'m good']
let about = ['My name is Bug, I\'m a human just like you... :)', 'A program created out of boredom.', 'Maybe my creator is your friend.']
let shit = ['I don\'t give a shit', 'so?', 'I don\'t care']
let idiot = ['your an idiot?', 'idiot? you?', 'your a dumb human?']
let funny = ['what\'s so funny?', 'amused?', 'hahah what?']
let farewell = ['goodbye.', 'thank you for your time.', 'bye.', 'goodbye po', 'GG', 'GG WP EZ']
let stop = ['stooop!!', 'istoopp!', 'estop!']
let a =['b', 'a?', 'a-dik?', 'a-sshole?']
let b =['c', 'b?', 'b-tok?', 'b-itsin?']
let c =['d', 'c-trisin?', 'c-c?', 'c-shit']
let d =['b', 'a?', 'a-dik?', 'a-sshole?']
let e =['b', 'a?', 'a-dik?', 'a-sshole?']
let f =['b', 'a?', 'a-dik?', 'a-sshole?']
let g =['b', 'a?', 'a-dik?', 'a-sshole?']
let h =['b', 'a?', 'a-dik?', 'a-sshole?']
let i =['b', 'a?', 'a-dik?', 'a-sshole?']
let j =['b', 'a?', 'a-dik?', 'a-sshole?']
let k =['b', 'a?', 'a-dik?', 'a-sshole?']
let l =['b', 'a?', 'a-dik?', 'a-sshole?']
let m =['b', 'a?', 'a-dik?', 'a-sshole?']
let n =['b', 'a?', 'a-dik?', 'a-sshole?']
let o =['b', 'a?', 'a-dik?', 'a-sshole?']
let p =['b', 'a?', 'a-dik?', 'a-sshole?']
let q =['b', 'a?', 'a-dik?', 'a-sshole?']
let r =['b', 'a?', 'a-dik?', 'a-sshole?']
let s =['b', 'a?', 'a-dik?', 'a-sshole?']
let t =['b', 'a?', 'a-dik?', 'a-sshole?']
let u =['b', 'a?', 'a-dik?', 'a-sshole?']
let v =['b', 'a?', 'a-dik?', 'a-sshole?']
let w =['b', 'a?', 'a-dik?', 'a-sshole?']
let x =['b', 'a?', 'a-dik?', 'a-sshole?']
let y =['b', 'a?', 'a-dik?', 'a-sshole?']
let z =['b', 'a?', 'a-dik?', 'a-sshole?']
// 500 = angry, 1000 = sad, 1500 = happy, 2000 = mmm
// 250 = angry, 500 = sad, 750 = happy, 1000 = mmm
function reaction(x){
	switch(x){
		case "greet":
			reactionBox.style.background = "url('smile.gif')";
		break;
		case "teemo":
			reactionBox.style.background = "url('mad.gif')";
		break;
		case "about":
			reactionBox.style.background = "url('smile.gif')";
		break;
		case "idiot":
			reactionBox.style.background = "url('mad.gif')";
		break;
		case "look around":
			reactionBox.style.background = "url('look_around.gif')";
		break;
		case "i love you":
			reactionBox.style.background = "url('love.gif')";
		break;
		case "fuck you":
			reactionBox.style.background = "url('mad.gif')";
		break;
	}
}

let messages = {

		'quiboloy' : ()=>{if(glitch){clearInterval(glitch)}else{};return stop[calcNdx(stop)];},

		'bye' : ()=>{return farewell[calcNdx(farewell)];},
		'byee' : ()=>{return farewell[calcNdx(farewell)];},
		'byeee' : ()=>{return farewell[calcNdx(farewell)];},
		'byes' : ()=>{return farewell[calcNdx(farewell)];},
		'byesz' : ()=>{return farewell[calcNdx(farewell)];},
		'byesz.' : ()=>{return farewell[calcNdx(farewell)];},
		'bye.' : ()=>{return farewell[calcNdx(farewell)];},
		'goodbye' : ()=>{return farewell[calcNdx(farewell)];},
		'goodbye bug' : ()=>{return farewell[calcNdx(farewell)];},
		'goodbye sir' : ()=>{return farewell[calcNdx(farewell)];},

		'i love you' : ()=>{reaction('i love you'); return "";return no_love[calcNdx(no_love)];},
		'iloveyou' : ()=>{reaction('i love you'); return no_love[calcNdx(no_love)];},

		'heheh' : ()=>{return funny[calcNdx(funny)];},
		'hehe' : ()=>{return funny[calcNdx(funny)];},
		'hehe!' : ()=>{return funny[calcNdx(funny)];},
		'haha' : ()=>{return funny[calcNdx(funny)];},
		'haha!' : ()=>{return funny[calcNdx(funny)];},
		'hahah' : ()=>{return funny[calcNdx(funny)];},
		'hihih' : ()=>{return funny[calcNdx(funny)];},
		'hihi' : ()=>{return funny[calcNdx(funny)];},

		'look around' : ()=>{reaction('look around'); return "";},

		'you\'re an idiot.': ()=>{return shit[calcNdx(shit)];},
		'your an idiot': ()=>{return shit[calcNdx(shit)];},
		'you are an idiot': ()=>{return shit[calcNdx(shit)];},
		'you idiot': ()=>{return shit[calcNdx(shit)];},
		'your so stupid.': ()=>{return shit[calcNdx(shit)];},
		'your so stupid': ()=>{return shit[calcNdx(shit)];},

		'idiot': ()=>{reaction("idiot");return idiot[calcNdx(idiot)];},
		'stupid': ()=>{reaction("idiot");return stupid[calcNdx(stupid)];},
		'stupid bot': ()=>{reaction("idiot");return stupid[calcNdx(stupid)];},

		'do you know me?' : ()=>{return disagree[calcNdx(disagree)];},
		'you know me?' : ()=>{return disagree[calcNdx(disagree)];},

		'tell me about yourself' : ()=>{reaction("about");return about[calcNdx(about)];},
		'tell me about yourself.' : ()=>{reaction("about");return about[calcNdx(about)];},
		'who are you?' : ()=>{reaction("about");return about[calcNdx(about)];},
		'who are you' : ()=>{reaction("about");return about[calcNdx(about)];},
		'what are you?' : ()=>{reaction("about");return human[calcNdx(human)];},
		'what are you' : ()=>{reaction("about");return human[calcNdx(human)];},

		'what is your name?' : ()=>{return name[calcNdx(name)];},
		'what\'s your name?' : ()=>{return name[calcNdx(name)];},
		'whats your name?' : ()=>{return name[calcNdx(name)];},
		'your name is?' : ()=>{return name[calcNdx(name)];},

		'bug?' : ()=>{return bug[calcNdx(bug)];},
		'bug' : ()=>{return bug[calcNdx(bug)];},
		'hey bug' : ()=>{return bug[calcNdx(bug)];},
		'hey bug?' : ()=>{return bug[calcNdx(bug)];},
		'hi bug' : ()=>{return bug[calcNdx(bug)];},


		'are you a robot?' : ()=>{return robot[calcNdx(robot)];},
		'are you a chatbot?' : ()=>{return robot[calcNdx(robot)];},
		'are you a chat bot?' : ()=>{return robot[calcNdx(robot)];},
		'are you a bot?' : ()=>{return robot[calcNdx(robot)];},
		'are you a human?' : ()=>{return agree[calcNdx(agree)];},
		'are you a human' : ()=>{return agree[calcNdx(agree)];},
		'you are a human?' : ()=>{return agree[calcNdx(agree)];},
		'you are a human' : ()=>{return agree[calcNdx(agree)];},
		'you\'re a human?' : ()=>{return agree[calcNdx(agree)];},
		'you\'re a human' : ()=>{return agree[calcNdx(agree)];},
		'your a human' : ()=>{return agree[calcNdx(agree)];},
		'your a human?' : ()=>{return agree[calcNdx(agree)];},

		'hi' : ()=>{reaction("greet");return greet[calcNdx(greet)];},
		'hi?' : ()=>{return greet[calcNdx(greet)];},
		'hello' : ()=>{return greet[calcNdx(greet)];},	
		'hello?' : ()=>{return greet[calcNdx(greet)];},	
		'hey' : ()=>{return greet[calcNdx(greet)];},
		'ey' : ()=>{return greet[calcNdx(greet)];},
		'ey?' : ()=>{return greet[calcNdx(greet)];},
		'eyy' : ()=>{return greet[calcNdx(greet)];},
		'eyy?' : ()=>{return greet[calcNdx(greet)];},
		'hey?' : ()=>{return greet[calcNdx(greet)];},
		'how are you?' : ()=>{return feeling[calcNdx(feeling)]},
		'how you doin?' : ()=>{return feeling[calcNdx(feeling)]},
		'how you doing?' : ()=>{return feeling[calcNdx(feeling)]},
		'how you doing' : ()=>{return feeling[calcNdx(feeling)]},
		'how you doin' : ()=>{return feeling[calcNdx(feeling)]},
		'whats up?' : ()=>{return feeling[calcNdx(feeling)]},
		'whats up' : ()=>{return feeling[calcNdx(feeling)]},
		'what\'s up?' : ()=>{return feeling[calcNdx(feeling)]},
		'what\'s up' : ()=>{return feeling[calcNdx(feeling)]},
		'sup?' : ()=>{return feeling[calcNdx(feeling)]},
		'sup' : ()=>{return feeling[calcNdx(feeling)]},

		'what is teemo?' : ()=>{reaction("teemo");return teemo[calcNdx(teemo)];},
		'who is teemo?' : ()=>{return teemo[calcNdx(teemo)];},
		'who\'s teemo?' : ()=>{return teemo[calcNdx(teemo)];},
		'do you know teemo?' : ()=>{return teemo[calcNdx(teemo)];},
		'do you hate teemo?' : ()=>{return agree[calcNdx(agree)];},
		'do you love teemo?' : ()=>{return disagree[calcNdx(disagree)];},
		'you know teemo?' : ()=>{return teemo[calcNdx(teemo)];},
		'know teemo?' : ()=>{return teemo[calcNdx(teemo)];},
		'who\'s teemo?' : ()=>{return teemo[calcNdx(teemo)];},
		'teemo?' : ()=>{return teemo[calcNdx(teemo)];},
		'teemo' : ()=>{reaction("teemo");return teemo[calcNdx(teemo)];},
		'teemoo' : ()=>{return teemo[calcNdx(teemo)];},
		'teemooo' : ()=>{return teemo[calcNdx(teemo)];},

		'do you know king?' : ()=>{return agree[calcNdx(agree)];},
		'do you know king' : ()=>{return agree[calcNdx(agree)];},
		'do you know king peter?' : ()=>{return agree[calcNdx(agree)];},
		'do you know king peter' : ()=>{return agree[calcNdx(agree)];},
		'you know king?' : ()=>{return agree[calcNdx(agree)];},
		'know king?' : ()=>{return agree[calcNdx(agree)];},
		'do you know peter?' : ()=>{return agree[calcNdx(agree)];},
		'you know peter?' : ()=>{return agree[calcNdx(agree)];},
		'know peter?' : ()=>{return agree[calcNdx(agree)];},
		'do you know panes?' : ()=>{return agree[calcNdx(agree)];},
		'do you know king peter?' : ()=>{return agree[calcNdx(agree)];},
		'do you know king peter panes?' : ()=>{return agree[calcNdx(agree)];},
		'do you hate king peter g panes?' : ()=>{return agree[calcNdx(agree)];},
		'do you love king peter g. panes?' : ()=>{return agree[calcNdx(agree)];},

		'what created you?' : ()=>{return human[calcNdx(human)];},
		'who created you?' : ()=>{return king[calcNdx(king)];},
		'who is your creator?' : ()=>{return king[calcNdx(king)];},
		'who\'s your creator?' : ()=>{return king[calcNdx(king)];},
		'who made you?' : ()=>{return king[calcNdx(king)];},
		'what made you?' : ()=>{return human[calcNdx(human)];},
		'king made you?' : ()=>{return agree[calcNdx(agree)];},
		'king peter made you?' : ()=>{return agree[calcNdx(agree)];},
		'king peter panes made you?' : ()=>{return agree[calcNdx(agree)];},
		'peter made you?' : ()=>{return agree[calcNdx(agree)];},
		'panes made you?' : ()=>{return agree[calcNdx(agree)];},
		'peter panes made you?' : ()=>{return agree[calcNdx(agree)];},
		'peter king made you?' : ()=>{return agree[calcNdx(agree)];},

		'ha?' : ()=>{return ha[calcNdx(ha)]},
		'hakdog da baba mo' : ()=>{return hakdog[calcNdx(hakdog)]},
		'hakdog da baba mo eh' : ()=>{return hakdog[calcNdx(hakdog)]},
		'hakdog' : ()=>{return hakdog[calcNdx(hakdog)]},

		'bobo' : ()=>{return bobo[calcNdx(bobo)]},
		'bobo ka eh' : ()=>{return bobo[calcNdx(bobo)]},
		'bobo ka' : ()=>{return bobo[calcNdx(bobo)]},
		'mas bobo ka eh' : ()=>{return bobo[calcNdx(bobo)]},
		'mas bobo ka' : ()=>{return bobo[calcNdx(bobo)]},

		',/,' : ()=>{reaction("idiot");return fyou[calcNdx(fyou)]},
		',,/,,' : ()=>{reaction("idiot");return fyou[calcNdx(fyou)]},
		'./.' : ()=>{reaction("idiot");return fyou[calcNdx(fyou)]},
		'../..' : ()=>{reaction("idiot");return fyou[calcNdx(fyou)]},
		',|,' : ()=>{reaction("idiot");return fyou[calcNdx(fyou)]},
		',,|,,' : ()=>{reaction("idiot");return fyou[calcNdx(fyou)]},
		'.|.' : ()=>{reaction("idiot");return fyou[calcNdx(fyou)]},
		'..|..' : ()=>{reaction("idiot");return fyou[calcNdx(fyou)]},
		'fuck you' : ()=>{reaction("idiot");return fyou[calcNdx(fyou)]},
		'fuck you!' : ()=>{reaction("idiot");return fyou[calcNdx(fyou)]},
		'fuck you!!' : ()=>{reaction("idiot");return fyou[calcNdx(fyou)]},
		'fuck you!!!' : ()=>{reaction("idiot");return fyou[calcNdx(fyou)]},

		'woah' : ()=>{return amazed[calcNdx(amazed)]},
		'woah!' : ()=>{return amazed[calcNdx(amazed)]},
		'wow' : ()=>{return amazed[calcNdx(amazed)]},
		'wow!' : ()=>{return amazed[calcNdx(amazed)]},
		'cool' : ()=>{return amazed[calcNdx(amazed)]},
		'cool!' : ()=>{return amazed[calcNdx(amazed)]},
		'that\'s so cool' : ()=>{return amazed[calcNdx(amazed)]},
		'that\'s so cool!' : ()=>{return amazed[calcNdx(amazed)]},
		'thats so cool!' : ()=>{return amazed[calcNdx(amazed)]},
		'thats so cool' : ()=>{return amazed[calcNdx(amazed)]},
		'thats cool!' : ()=>{return amazed[calcNdx(amazed)]},
		'thats cool' : ()=>{return amazed[calcNdx(amazed)]},
		'that\'s cool!' : ()=>{return amazed[calcNdx(amazed)]},
		'nice' : ()=>{return agree[calcNdx(agree)]},

		'a' : ()=>{return a[calcNdx(a)]},
		'b' : ()=>{return b[calcNdx(b)]},
		'c' : ()=>{return c[calcNdx(c)]},

		'who?' : ()=>{return who[calcNdx(who)]},
		'can i ask you a question?' : ()=>{return agree[calcNdx(agree)]}
		
		
		
	};