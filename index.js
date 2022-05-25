const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '!'
client.on('ready', async() => {
  console.log('로그인되었습니다!')
  console.log(client.user.tag)
  console.log(client.user.id)
  console.log('JS 버전')
  console.log('====================================')
})

client.on('message', async message => {
  if (message.content == prefix + 'js') {
    message.channel.send('js TESTING')
  }
  else if (message.content == prefix + '태이고') {
    const embed = new Discord.MessageEmbed()
       .setTitle('**태이고(TAEGO)**')
       .setColor('#F39720')
       .setImage('https://d1x1dwimk2qkzk.cloudfront.net/uploads/2021/06/29113030/tiger_minimap.jpg')
    message.channel.send(embed)
    let logwho = message.author.tag
    let logwhere = message.guild.name
    const logembed = new Discord.MessageEmbed()
       .setTitle('**로그(LOGS)**')
       .setColor('#F39720')
       .addField('이름', logwho)
       .addField('서버', logwhere)
       .addField('명령어', message.content)
       .setThumbnail('https://i.ibb.co/pz3KMxJ/199292472-1789793414562648-8252515587359354901-n.jpg')
    client.channels.cache.get("876436998456492042").send(logembed)
}
  else if (message.content == prefix + '비켄디') {
    const embed = new Discord.MessageEmbed()
       .setTitle('**비켄디(VIKENDI)**')
       .setColor('#F39720')
       .setImage('https://d1x1dwimk2qkzk.cloudfront.net/uploads/2021/06/02160030/vikendi-minimap-scaled-1.jpg')
    message.channel.send(embed)
    let logwho = message.author.tag
    let logwhere = message.guild.name
    const logembed = new Discord.MessageEmbed()
       .setTitle('**로그(LOGS)**')
       .setColor('#F39720')
       .addField('이름', logwho)
       .addField('서버', logwhere)
       .addField('명령어', message.content)
       .setThumbnail('https://i.ibb.co/pz3KMxJ/199292472-1789793414562648-8252515587359354901-n.jpg')
    client.channels.cache.get("876436998456492042").send(logembed)
}
  else if (message.content == prefix + '미라마') {
    const embed = new Discord.MessageEmbed()
       .setTitle('**미라마(MIRAMAR)**')
       .setColor('#F39720')
       .setImage('https://d1x1dwimk2qkzk.cloudfront.net/uploads/2021/06/02160018/miramar-minimap-scaled-1.jpg')
    message.channel.send(embed)
    let logwho = message.author.tag
    let logwhere = message.guild.name
    const logembed = new Discord.MessageEmbed()
       .setTitle('**로그(LOGS)**')
       .setColor('#F39720')
       .addField('이름', logwho)
       .addField('서버', logwhere)
       .addField('명령어', message.content)
       .setThumbnail('https://i.ibb.co/pz3KMxJ/199292472-1789793414562648-8252515587359354901-n.jpg')
    client.channels.cache.get("876436998456492042").send(logembed)
}
  else if (message.content == prefix + '헤이븐') {
    const embed = new Discord.MessageEmbed()
       .setTitle('**헤이븐(HAVEN)**')
       .setColor('#F39720')
       .setImage('https://d1x1dwimk2qkzk.cloudfront.net/uploads/2021/06/02160012/haven-minimap-scaled-1.jpg')
    message.channel.send(embed)
    let logwho = message.author.tag
    let logwhere = message.guild.name
    const logembed = new Discord.MessageEmbed()
       .setTitle('**로그(LOGS)**')
       .setColor('#F39720')
       .addField('이름', logwho)
       .addField('서버', logwhere)
       .addField('명령어', message.content)
       .setThumbnail('https://i.ibb.co/pz3KMxJ/199292472-1789793414562648-8252515587359354901-n.jpg')
    client.channels.cache.get("876436998456492042").send(logembed)
}
  else if (message.content == prefix + '파라모') {
    const embed = new Discord.MessageEmbed()
       .setTitle('**파라모(PARAMO)**')
       .setColor('#F39720')
       .setImage('https://d1x1dwimk2qkzk.cloudfront.net/uploads/2021/06/02160022/paramo-minimap-scaled-1.jpg')
    message.channel.send(embed)
    let logwho = message.author.tag
    let logwhere = message.guild.name
    const logembed = new Discord.MessageEmbed()
       .setTitle('**로그(LOGS)**')
       .setColor('#F39720')
       .addField('이름', logwho)
       .addField('서버', logwhere)
       .addField('명령어', message.content)
       .setThumbnail('https://i.ibb.co/pz3KMxJ/199292472-1789793414562648-8252515587359354901-n.jpg')
    client.channels.cache.get("876436998456492042").send(logembed)
}
  else if (message.content == prefix + '카라킨') {
    const embed = new Discord.MessageEmbed()
       .setTitle('**카라킨(KARAKIN)**')
       .setColor('#F39720')
       .setImage('https://d1x1dwimk2qkzk.cloudfront.net/uploads/2021/06/02160015/karakin-minimap-scaled-1.jpg')
    message.channel.send(embed)
    let logwho = message.author.tag
    let logwhere = message.guild.name
    const logembed = new Discord.MessageEmbed()
       .setTitle('**로그(LOGS)**')
       .setColor('#F39720')
       .addField('이름', logwho)
       .addField('서버', logwhere)
       .addField('명령어', message.content)
       .setThumbnail('https://i.ibb.co/pz3KMxJ/199292472-1789793414562648-8252515587359354901-n.jpg')
    client.channels.cache.get("876436998456492042").send(logembed)
}
  else if (message.content == prefix + '사녹') {
    const embed = new Discord.MessageEmbed()
       .setTitle('**사녹(SANHOK)**')
       .setColor('#F39720')
       .setImage('https://d1x1dwimk2qkzk.cloudfront.net/uploads/2021/06/02160026/sanhok-minimap-scaled-1.jpg')
    message.channel.send(embed)
    let logwho = message.author.tag
    let logwhere = message.guild.name
    const logembed = new Discord.MessageEmbed()
       .setTitle('**로그(LOGS)**')
       .setColor('#F39720')
       .addField('이름', logwho)
       .addField('서버', logwhere)
       .addField('명령어', message.content)
       .setThumbnail('https://i.ibb.co/pz3KMxJ/199292472-1789793414562648-8252515587359354901-n.jpg')
    client.channels.cache.get("876436998456492042").send(logembed)
}
  else if (message.content == prefix + '에란겔') {
    const embed = new Discord.MessageEmbed()
       .setTitle('**에란겔(ERANGEL)**')
       .setColor('#F39720')
       .setImage('https://d1x1dwimk2qkzk.cloudfront.net/uploads/2021/06/02160009/erangel-minimap-scaled-1.jpg')
    message.channel.send(embed)
    let logwho = message.author.tag
    let logwhere = message.guild.name
    const logembed = new Discord.MessageEmbed()
       .setTitle('**로그(LOGS)**')
       .setColor('#F39720')
       .addField('이름', logwho)
       .addField('서버', logwhere)
       .addField('명령어', message.content)
       .setThumbnail('https://i.ibb.co/pz3KMxJ/199292472-1789793414562648-8252515587359354901-n.jpg')
    client.channels.cache.get("876436998456492042").send(logembed)
}
})

client.on('guild_join', async guild => {
  let joinwhere = guild.name
  let count = len(client.guilds)
  const logembed = new Discord.MessageEmbed()
     .setTitle('**서버 가입(JOINED)**')
     .setColor('#F39720')
     .addField('이름', joinwhere)
     .addField('서버 수', count)
     .setThumbnail('https://i.ibb.co/pz3KMxJ/199292472-1789793414562648-8252515587359354901-n.jpg')
  client.channels.cache.get("876436998456492042").send(logembed)
})

client.login('token')
