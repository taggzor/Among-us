const config = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone:true});


var servers= {};
let conncheck={};

bot.on("ready", async () =>{
    console.log(`Logged in as ${bot.user.tag}!`);
    
});
//bot.on("guildMemberSpeaking", async ktos =>{
//    console.log(`Mówca ${ktos.voice.member.nickname} na ${ktos.voice.guild.name}`);
//}); 

bot.on("message" , async msg =>{
    if(msg.member.roles.cache.some(r => r.name ==="Among Us")){
        if(msg.content=="shh"){
            msg.channel.send("Shhhh");
            if (msg.member.voice.channel) {
                let channel = msg.guild.channels.cache.get(msg.member.voice.channel.id);
                for (const [memberID, member] of channel.members) {
                  
                  // if (member != message.member)
              
                  
                  member.voice.setMute(true);
                }
              } else {
                return;
              }

            
        }
        if(msg.content=="qq"){
            msg.channel.send("Talk time!");
            if (msg.member.voice.channel) {
                let channel = msg.guild.channels.cache.get(msg.member.voice.channel.id);
                for (const [memberID, member] of channel.members) {
                  
                  // if (member != message.member)
              
                  
                  member.voice.setMute(false);
                }
              } else {
                return;
              }
        }
    }
    return;
});









bot.login(config.token);