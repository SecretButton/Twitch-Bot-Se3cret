const tmi = require('tmi.js')
const pd = require("node-pandas")
const express = require('express');
const app = express ();
//const router = express.Router();
const path = require ('path');
//const indexRoute = require('./routes/index.js')
//˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅ CONNECTION ˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
// SETTINGS
app.set('port',4000);
app.set('src', path.join(__dirname, 'src'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//ROUTES
//app.use(indexRoute);
//static files
app.use(express.static(path.join(__dirname, 'public')))

///////////////
// router.get('/',(req,res) =>{
//     res.render('index.html', {title: "Se3cret's Website"});
// });
// router.get('/contact',(req,res) =>{
//     res.render('contact.html', {title: 'Contact Paged', size: 48 } );
// });
// module.exports = router;
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/contact',(req, res)=>{
    res.sendFile(path.join(__dirname, 'contact.html'));
});
///////////////
//LISTENING TO THE SERVER
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: 'superrng',
        password: 'kzj62zzab4fsm4g0antbvnk5j542h5'
    },
    channels: ['se3cret']
}
const client = new tmi.client(options)
client.connect();
client.on('connected', (address, port) => {
    client.action('se3cret', `Hello, Good Luck. BegWan`)
})
//^^^^^^^^^^^^^^^^^^^^^^^^^^ CONNECTION ^^^^^^^^^^^^^^^^^^^^^^^^^^^^//

//˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅ VARIABLES-AND-ARRAYS-DEFINITION ˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
var a = 0;
var b = 0;
var c = 0;
var EE = 0;
let UserName = [];
let UserGuess = [];
let Winners = [];
let RoundWinners = [];
let Repeaters = [];
let Points = [];

//^^^^^^^^^^^^^^^^^^ VARIABLES-AND-ARRAYS-DEFINITION ^^^^^^^^^^^^^^^^^^^^^//

//˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅ CSV-READ ˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
df = pd.readCsv("UsersAndPoints.csv")
for(var d = 0; d < df.index.length;d++){
    Winners[d] = df[d]['User'];
    Points[d] = df[d]['Points'];                  
}
df.show
//^^^^^^^^^^^^^^^^^^^^^^^^^^ CSV-READ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^//

//˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅ USER-MESSAGE-LISTENING ˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    
    //˅˅˅˅˅˅˅˅˅˅˅˅ CLIENT-PROPERTIES-AND-RNG-DEFINITION ˅˅˅˅˅˅˅˅˅˅˅˅˅//
    client.on('chat', (target, ctx, message, self) => {
        console.log(`entered read message`)
        if (self) return;
        const UserType = ctx["user-type"];
        const UserMessage = message.trim();
        const DisplayName = ctx["display-name"];
        const GuessMessage = UserMessage.substring(0,6,);
        const RNGUserMessage = UserMessage.replace("!guess ", "");
        const IsNameRegistered = UserName.includes(DisplayName, 0)
        const IsRepeaterRegistered = Repeaters.includes(DisplayName,0)
        const A = (UserMessage === '!RNGclose 0131')
        const B = (UserMessage === '!RNGclose 4011')
        const C = (UserMessage === '!RNGclose 0513')
        const D = (UserMessage === '!RNGclose 4312')
        const E = (UserMessage === '!RNGclose safsprin')
        const F = (UserMessage === '!RNGclose adravil')
        const G = (UserMessage === '!RNGclose aquacure')
        const H = (UserMessage === '!RNGclose early-powders')
        const I = (UserMessage === '!RNGclose late-powders')
        const J = (UserMessage === '!RNGclose 1-change')
        const K = (UserMessage === '!RNGclose 2-changes')
        const L = (UserMessage === '!RNGclose 3-changes')
        const M = (UserMessage === '!RNGclose 4-changes')
        const N = (UserMessage === '!RNGclose 5-changes')
        const O = (UserMessage === '!RNGclose 6-changes')
        const P = (UserMessage === '!RNGclose 5pm')
        const Q = (UserMessage === '!RNGclose 7pm')
        const R = (UserMessage === '!RNGclose 9pm')
        const S = (UserMessage === '!RNGclose 11pm')
        const T = (UserMessage === '!RNGclose 531')
        const V = (UserMessage === '!RNGclose 253')
        const W = (UserMessage === '!RNGclose 325')
        const X = (UserMessage === '!RNGclose 104')
        const Y = (UserMessage === '!RNGclose good-worm')
        const Z = (UserMessage === '!RNGclose bad-worm')
        const AA = (UserMessage === '!RNGclose high-empty')
        const BB = (UserMessage === '!RNGclose medium-low')
        const CC = (UserMessage === '!RNGclose medium-empty')
        const DD = (UserMessage === '!RNGclose high-low')
        
    //^^^^^^^^^^^^ CLIENT-PROPERTIES-AND-RNG-DEFINITION ^^^^^^^^^^^^^^^//

        //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅ USER-MESSAGE-GUESS-RNG-IDENTIFICATION ˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
        if(EE === 0 && a===1 && GuessMessage === '!guess' && IsNameRegistered === false){
                    switch (RNGUserMessage) {

                        //˅˅˅˅˅˅˅˅˅˅ LOCKER-RNG ˅˅˅˅˅˅˅˅˅˅˅˅//
                        case '0131':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case '4011':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case '0513':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                         case '4312':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        //^^^^^^^^^^ LOCKER-RNG ^^^^^^^^^^^//
                        
                        //˅˅˅˅˅˅˅˅˅ PHARMACY-RNG ˅˅˅˅˅˅˅˅˅˅//
                        case 'safsprin':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case 'adravil':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case 'aquacure':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        //^^^^^^^^^ PHARMACY-RNG ^^^^^^^^^//

                        //˅˅˅˅˅˅˅˅˅ POWDERS-RNG ˅˅˅˅˅˅˅˅˅˅//
                        case 'early-powders':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case 'late-powders':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        //^^^^^^^^^ POWDERS-RNG ^^^^^^^^^//
                        
                        //˅˅˅˅˅˅˅˅ MUSIC-BOX-RNG ˅˅˅˅˅˅˅˅//
                        case '1-change':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case '2-changes':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case '3-changes':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case '4-changes':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case '5-changes':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case '6-changes':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        //^^^^^^^^ MUSIC-BOX-RNG ^^^^^^^^//
                        
                        //˅˅˅˅˅˅˅˅˅˅ CLOCK-RNG ˅˅˅˅˅˅˅˅˅˅//
                        case '5pm':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case '7pm':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case '9pm':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case '11pm':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        //^^^^^^^^^^ CLOCK-RNG ^^^^^^^^^^//

                        //˅˅˅˅˅˅˅ YOLO-CARLOS-RNG ˅˅˅˅˅˅˅//
                        case '531':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case '253':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case '325':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case '104':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        //^^^^^^^ YOLO-CARLOS-RNG ^^^^^^^//

                        //˅˅˅˅˅˅˅˅˅˅ WORM-RNG ˅˅˅˅˅˅˅˅˅˅˅//
                        case 'good-worm':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case 'bad-worm':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        //^^^^^^^^^^^ WORM-RNG ^^^^^^^^^^//

                        //˅˅˅˅˅˅˅ WATER-PUZZLE-RNG ˅˅˅˅˅˅//
                        case 'high-empty':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case 'medium-low':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case 'medium-empty':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        case 'high-low':
                            UserName.push(DisplayName)
                            UserGuess.push(RNGUserMessage)
                            b = b + 1;
                            break;
                        //^^^^^^^ WATER-PUZZLE-RNG ^^^^^^//  
        
                             // 29 RNG'S IN TOTAL //

                        default:
                            const InvalidIndex = UserName.indexOf(DisplayName, 0)
                            client.say(target, `${DisplayName} INVALID guess`)    
                    }
        }
        //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ USER-MESSAGE-GUESS-RNG-IDENTIFICATION ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//  
        
        //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅ USER-MESSAGE-GUESS-RNG-REPEATITION ˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
        if(a===1 && GuessMessage === '!guess' && IsNameRegistered === true && IsRepeaterRegistered === false) {
            const UserNameIndex = UserName.indexOf(DisplayName, 0)
            Repeaters.push(DisplayName)
            client.say(target, `${DisplayName} your answer ${UserGuess[UserNameIndex]} was already registered`) 
        }
        //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ USER-MESSAGE-GUESS-RNG-REPEATITION ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^// 

        //˅˅˅˅˅˅˅˅˅ MOD-OPENING-THE-GUESSING ˅˅˅˅˅˅˅˅//
        if(a === 0 && UserMessage === '!RNGopen' ) {
            if (UserType === 'mod'){
                client.say(target, `Guessing is now OPEN`) 
                a = 1;
            }                       
        }
        else if (a === 1 && UserMessage === '!RNGopen'){
            if (UserType === 'mod'){
                client.say(target, `Guessing is already OPEN!`) 
                a = 1;
            } 
        }
        //^^^^^^^^ MOD-OPENING-THE-GUESSING ^^^^^^^^//

        //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅ MOD-CLOSING-THE-GUESSING ˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
        if(EE===0 && a===1 && UserMessage === '!RNGclose'){
            if (UserType === 'mod'){
            client.say(target, `Guessing is now CLOSE`)
            EE = 1;
            }
        }
        
        if(EE === 1 && a === 1 && (A||B||C||D||E||F||G||H||I||J||K||L||M||N||O||P||Q||R||S||T||V||W||X||Y||Z||AA||BB||CC||DD)) {    
            if (UserType === 'mod'){
                const RNGCloseMessage = UserMessage.replace("!RNGclose ", "");
                client.say(target, `The RNG was ${RNGCloseMessage}`)
                const UserGuessLength = UserGuess.length;
                const UserNameLength = UserName.length;
        //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ MOD-CLOSING-THE-GUESSING ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^// 

                //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅   WINNERS-HANDLING ˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
                while (c != UserGuessLength) {
                    const IsWinnerRegistered = Winners.includes(UserName[c],0)
                    if (UserGuess[c] === RNGCloseMessage){                       
                        if (IsWinnerRegistered === true) {
                            const WinnersIndex = Winners.indexOf(UserName[c], 0)
                            Winners.splice(WinnersIndex,1,(UserName[c]));
                            RoundWinners.splice(c,1,(UserName[c]));
                            const PointsIndex = Winners.indexOf(UserName[c], 0)
                            Points.splice(PointsIndex,1, (Points[PointsIndex]+1));
                        }
                        if (IsWinnerRegistered === false) {
                            Winners.push(UserName[c])
                            RoundWinners.push(UserName[c])
                            const PointsIndexUnregistered = Winners.indexOf(UserName[c], 0)
                            Points.splice(PointsIndexUnregistered,1, (1));
                        }
                        const PointsTwitchIndex= Winners.indexOf(UserName[c], 0)
                        //client.say(target, `${UserName[j]} now has ${Points[PointsTwitchIndex]} points`)
                    }                    
                    c = c + 1;
                }
                //^^^^^^^^^^^^^^^^^^^^^^^^^^^ WINNERS-HANDLING ^^^^^^^^^^^^^^^^^^^^^^^^^^//
                
                //˅˅˅˅˅˅˅˅˅˅˅˅˅ CSV-WRITE ˅˅˅˅˅˅˅˅˅˅˅˅˅// 
                columns = ['User', 'Points']
                let WinnersDataFrame = [];
                for(var e = 0; e < Winners.length;e++){
                    WinnersDataFrame[e] = [Winners[e],Points[e]];                  
                }
                df = pd.DataFrame(WinnersDataFrame,columns) 
                df.show     
                df.toCsv("UsersAndPoints.csv")
                //^^^^^^^^^^^^^ CSV-WRITE ^^^^^^^^^^^^^//

                //˅˅˅˅˅ BOT-CHAT-MESSAGES-&&-ARRAYS-CLEANING ˅˅˅˅˅//
                if ( RoundWinners.length > 0) {
                    let RoundWinnersChat = [];
                    for(var f = 0; f < RoundWinners.length;f++){
                        RoundWinnersChat[f] = ['\n@'+RoundWinners[f]]
                    }
                    client.say(target, `Winners: ${RoundWinnersChat}`) 
                }
                else {
                    client.say(target, `No Winners in this round`)
                }
                UserName = [];
                UserGuess = [];
                RoundWinners = []; 
                Repeaters = [];
                a = 0;
                b = 0;
                c = 0;
                EE = 0;
                //^^^^^ BOT-CHAT-MESSAGES-&&-ARRAYS-CLEANING ^^^^^//
            }                          
        }
    })  
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ USER-MESSAGE-LISTENING ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//