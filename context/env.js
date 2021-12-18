require('dotenv').config();
const envVar = process.env;

module.exports = {
  PORT: envVar.PORT,
  MONGO_URI: envVar.MONGO_URI,
  SESSION_SECRET: envVar.SESSION_SECRET,
  CLOUD_NAME: envVar.CLOUD_NAME,
  CLOUDINARY_API_KEY: envVar.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: envVar.CLOUDINARY_API_SECRET,
};
