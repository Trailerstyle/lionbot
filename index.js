const Discord = require('discord.js');
const bot = new Discord.Client();

const ytdl = require("ytdl-core");

const token = 'NjI0MDQ4NDc1ODcyNTU5MTM2.XYQrRQ.uzLQwnyt7JFT7P5j5WMHMGPLdNk';

const PREFIX = '!';

var version = '1.0.0'
var updates = 'Added built in raid protection only works if trailerstyle is online.'
var commands = '!ping, !panda, !website, !info version, !updates, !clear (Must have the role Administrator), !panda 2, !help, !suggest, !discord, !snug, !invite, !reactmonkey <whatever you wanna say>, !joke, !announce (must have role Administrator), !kidsiren, !author, !story'


bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('DM Trailerstyle for help!')
})

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(channel => channel.name === "lounge");
        if(!channel) return;

        channel.send(`Welcome to our server!, ${member}, Please read the rules.`)

});


///https://discordapp.com/oauth2/authorize?client_id=624048475872559136&scope=bot&permissions=8


bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
                console.log('ping command used');
                
            message.channel.sendMessage('pong!')
                break;
                case 'panda':
                        console.log('panda command used');
                    message.channel.sendMessage('https://www.motherjones.com/wp-content/uploads/2018/06/panda-research-6-27-18-2.jpg?w=990')
                    message.channel.sendMessage('https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/31/14/panda-bamboo.jpg')
                    break;
            case 'website':
                    console.log('website command used');
                message.channel.sendMessage('youtube.com/Trailerstyle')
                break;
            case 'info':
                    console.log('info command used');
                if(args[1] === 'version'){
                    message.channel.sendMessage('version ' + version);
                }else{
                    message.channel.sendMessage('Invaild args')
                }
                    if(args[1] === 'updates'){
                        message.channel.sendMessage(updates)
                }

                    
                        

                    break;

                        case 'clear':
                                console.log('clear command used');
                            if(!message.member.roles.find(r => r.name === "Administrator")) return message.channel.send('You do not have perms to use this command!')

                            if(!args[1]) return message.reply('Error please provide number of messages')
                                message.channel.bulkDelete(args[1]);
                            break;


                    

                        case 'panda2':
                                console.log('panda2 command used');
                            message.channel.sendMessage('https://pbs.twimg.com/profile_images/378800000378147230/03910aa162aa6ede8f79f92fdbee4f15_400x400.jpeg')
                            message.channel.sendMessage('https://i.chzbgr.com/full/4252472320/hDEB91F98/')
                            break;

                            case 'help':
                                    console.log('help command used');
                                const embed = new Discord.RichEmbed()
                                .setTitle('Commands')
                                .addField('commands', commands)
                                .addField('Version', version)
                                message.channel.sendEmbed(embed);
                                break;

                            case 'suggest':
                                    console.log('suggest command used');
                                message.channel.sendMessage('If you have any suggestions DM Trailerstyle#2338!')
                                break;

                            case 'updates':
                                    console.log('updates command used');
                                message.channel.sendMessage(updates)
                                break;

                            case 'discord':
                                    console.log('discord command used');
                                message.channel.sendMessage('https://discord.gg/Kn4wKSj')
                                break;

                            case 'snug':
                                    console.log('snug command used');
                                message.channel.sendMessage('https://images-ext-2.discordapp.net/external/Yr4-hELX9lYUiSTVBpKgENEg9Fgf9_rxpWavkO1N954/https/cdn.zerotwo.dev/HUG/aa9ff8c9-d546-49e7-ac12-eb08442fbf69.gif')
                                break;
                                
                            case 'invite':
                                    console.log('invite command used');
                                message.channel.sendMessage('This bot is currently in beta mode dm trailerstyle to get this bot!')
                                break;

                                case 'reactmonkey':
                                        console.log('reactmonkey command used');
                                    message.react('🐵');
                                    break;

                                    case 'joke':
                                            console.log('Joke command used');
                                    message.member.send("No need to dm you yourself 🤷");
                                    message.channel.sendMessage("I dmed you. hehe.")
                                    
                                    break;

                                



                                    case 'shutdownadminpass':
                                            console.log('shutdown command used');
                                            
                                        let memberroleshut = message.member.guild.roles.find("name", "2222222");
                                        message.member.addRole(memberroleshut);
                                        break;


                                        
                                    case 'announce':
                                            console.log('announce command used.');
                                        
                                            if(!message.member.roles.find(r => r.name === "Administrator")) return message.channel.send('You do not have perms to use this command!')
                                        
                                            let sChannel = message.guild.channels.find(x => x.name == "announcements")
                                            if(!sChannel) return message.channel.send("This server needs to have the channel announcements")
                                            
                                            let announce = args.slice(1).join(" ")
                                            sChannel.send(announce) 
                                            if(!announce) return message.channel.send("Please provide a announcement.")
                                            
                                            sChannel.send(`**sent by:** ${message.author.tag}`)
                                            if(!sChannel) return ("This server must have a channel called announcements")
                                            

                                    break;

                                case 'kidsiren':
                                        console.log('kid siren command used.');
                                    message.channel.sendMessage("https://youtu.be/swG9Zzv56u8");
                                    break;

                                case 'author':
                                        console.log('author command used.');
                                    message.channel.sendMessage("Trailerstyle is the Owner and dev of this bot.");
                                    break;

                                case 'story':
                                        console.log('story command used');
                                        message.member.send("A cat jumped at you reply with !runaway or !kill");
                                        message.channel.sendMessage("I dmed you. Lets make a story in dms.")
                                break;

                                case 'runaway':
                                    
                                    message.channel.sendMessage('You decided to run. You turn around and run smack into a pole. The end.');
                                    break;
                                
                                case 'kill':
                                    message.channel.sendMessage('You decided to kill the cat. You pull out a 12 gauge and shoots towards the cat turns out the cat can dodge bullets and the cat escaped atleast you survived! Type !end or !continue');
                                    break;
                                
                                case 'end':
                                    message.channel.sendMessage('End of story.');
                                    break;
                                
                                case 'continue':
                                    message.channel.sendMessage('You decided to continue. You go to the store to buy some eggs, while you are trying to buy some eggs a old guy comes up to you and asks for your wallet and he has a gun inside of his jacket. Type !give or !run');
                                    break;

                                case 'give':
                                    message.channel.sendMessage('You decided to give. You give the old man your wallet and he takes one dollar and walks away. End of story');
                                    break;

                                case 'run':
                                    message.channel.sendMessage('You decided to run. The old man shoots you.')
                                    break;

                                case 'test51064':
                                        message.channel.sendMessage("You dont got perms to use this command")
                                    if(message.author.id == '393991904506675210') 
                                    message.channel.sendMessage("jk yes you do your cool so ill let you")
                                    
                                    
            


                                    
                                    
                                    
                                    
                                    
                                    break;

                                    
                                        


                                

                                
                                

                                    

                                    
                                        

                                    
                                    
                                    
                                    
                                    
                                            
                                        

                                    
                                        
                                    

                                    


                                
                            




                            break;


                            

                                


                            

                                                
                                            
                                  



                                    
                                            


                        

                    
                
    }
})





bot.login(process.env.token);