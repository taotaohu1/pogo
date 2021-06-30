const tmi = require('tmi.js');
const settings = require('./settings.json');

const twitchclient = new tmi.client(
    {
        options: {debug:false},
        connection: {
            secure:true,
            reconnect:true
        },
        identity:{
            username:settings.TwitchUser,
            password:settings.TwitchAuth
        },
        channels: ["elmiillor"]
    }
)

twitchclient.connect();

twitchclient.on("connected",(address,port) => {
    console.log("twitch bot has started on port: " + port);
});

twitchclient.on('message',(channel, context, message, self) => {
    let username = context["display-name"];
    if(self) return;
    if(message.includes ("PogO")){
twitchclient.say(channel,"PogO ☝ ");
    };


});
