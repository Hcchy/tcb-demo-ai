const { ImageClient } = require('image-node-sdk');

const AppId = '';
const SecretId = '';
const SecretKey = '';

const imgClient = new ImageClient({
  AppId,
  SecretId: process.env.SecretId,
  SecretKey: process.env.SecretKey,
});

exports.main = async (event) => {
  const imageUrl = event.url;
  const result = await imgClient.ocrBankCard({
      data: {
          url: imageUrl,
      },
  });
  return JSON.parse(result.body).data;
};
