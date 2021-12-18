const cloudinary = require('cloudinary');
const vars = require('../context/env');

cloudinary.config({
  cloud_name: vars.CLOUD_NAME,
  api_key: vars.CLOUDINARY_API_KEY,
  api_secret: vars.CLOUDINARY_API_SECRET,
});

exports.uploads = async (file, folder) => {
  return await cloudinary.v2.uploader.upload(
    file,
    { resource_type: 'auto', folder: folder },
    function (error, result) {
      /**Handle Err */
    }
  );
};
