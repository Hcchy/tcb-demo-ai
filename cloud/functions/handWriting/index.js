const { ImageClient } = require('image-node-sdk');

const AppId = '';
const SecretId = '';
const SecretKey = '';

const imgClient = new ImageClient({
    AppId,
    SecretId,
    SecretKey,
});

exports.main = async (event) => {
    const imageUrl = event.url;
    const result = await imgClient.ocrHandWriting({
        data: {
            url: imageUrl,
        }
    });
    return JSON.parse(result.body).data;
};
