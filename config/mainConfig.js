/*
* Information
* Creator / Developer: Dani Ramdani (Dani Techno.) - FullStack Engineer
* Contact creator / developer: 0882 9633 9447 (WhatsApp), contact@danitechno.com (Email)
* Note: Mau beli script no enc? silahkan hubungi developer via WhatsApp/Email
*/

/* Thanks
* Dani Techno. - FullStack Engineer (Creator / Developer)
* daniapi.my.id / api.danitechno.com (API provider)
* @danitech/scraper (Scraper provider)
* @whiskeysockets/baileys (Library "Baileys" provider)
* @adiwajshing/keyed-db
* @hapi/boom
* pino
* qrcode-terminal
* chalk
* mongoose
* node-cron
* nodemon
*/

module.exports = {
  session_folder_name: '.session',
  prefix: '.',
  image_url: 'https://ibb.co/0CS7s73',
  audio_url: 'https://cdn.danitechno.com/audio/dj-joanna-breakbeat.mp3',
  public_mode: true,
  auto_read: true,
  mongodb_uri: process.env.MONGOD_URL|| 'Your_MongoDb_URI', // Register here: https://mongodb.com/#sign-up
  api: {
    url: 'https://api.danitechno.com',
    key: process.env.API_KEY|| 'Your_API_key' // Register here: https://daniapi.my.id/#sign-up
  },
  bot: {
    name: 'ITwZY'
  },
  owner: {
    name: ["manu"],
    number: ["628222358226"]
  },
  daily_limit: {
    free: infinity,
    premium: Infinity
  },
  react: {
    process: '⏳',
    success: '✅',
    failed: '❌'
  },
  cron_jobs: {
    time: '0 0 * * *',
    timzone: 'Asia/Jakarta'
  }
}
