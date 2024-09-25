const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "07026683728";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_17_53_09_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNixcbiAgICAgICAgMjIwLFxuICAgICAgICA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk4LFxuICAgICAgICA4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDgyLFxuICAgICAgICAzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkyLFxuICAgICAgICA3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDExLFxuICAgICAgICA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAsXG4gICAgICAgIDk5LFxuICAgICAgICA4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDg5LFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImhmQU5rc25zL0hUVWpiMThuM0JiY2pyNExCaSszaE52KzlQNEVCbTlKOEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkp2dGFTdTB2U25DYkVsUDY1RUJIaFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWQwZWVmZDctMzEwNi00OGQwLWE4NmYtN2E4ODFhY2Q5Y2VkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgNDgsXG4gICAgICAxMTksXG4gICAgICAxNjEsXG4gICAgICAyNDYsXG4gICAgICAxMTksXG4gICAgICA2MCxcbiAgICAgIDMzLFxuICAgICAgNjQsXG4gICAgICAxNyxcbiAgICAgIDExMSxcbiAgICAgIDQyLFxuICAgICAgNDcsXG4gICAgICA0NCxcbiAgICAgIDE4MSxcbiAgICAgIDIxOSxcbiAgICAgIDkyLFxuICAgICAgMTQ0LFxuICAgICAgMTk2LFxuICAgICAgMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgMTM0LFxuICAgICAgMzIsXG4gICAgICA0MixcbiAgICAgIDIxMixcbiAgICAgIDE5MCxcbiAgICAgIDE3MixcbiAgICAgIDE2MyxcbiAgICAgIDEwOSxcbiAgICAgIDIzMCxcbiAgICAgIDE3OCxcbiAgICAgIDkyLFxuICAgICAgMjIwLFxuICAgICAgMjE2LFxuICAgICAgMTk2LFxuICAgICAgNDgsXG4gICAgICA4NCxcbiAgICAgIDEwMSxcbiAgICAgIDIwMSxcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxBVzdFNlBCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI2NjgzNzI4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExMTYzNTMyNjg4NjEwODozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0liRGhZUUdFSmFjMGJjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieXJiQWJYb3dvbkpUaTVra0RvbFZoQzQ4enN1YVlVTHROUEwrU3VsS00xbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiUklOOFNCRnduQW9HT2NMaytHSExvWDF0blJOajZSMUhqYjhrKzZmdnBUd0hqVVk0WEliQWR0MlRKSnU1clg1d1RVZGdBL29jQzVvZzNJNSs1T1NEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1UzU2dnM5ZmhCNDh2K1JObGdKejJBQ1ZKZk5XcE14WEluTUIySGt3V1hrN0xnb3NLM3ArMTBLdzZLZ3ZuYzcrNVNUbVZvYzNJYys2ZjFEVzJJVlpodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDI2NjgzNzI4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3Mjg2ODEwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
