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
    const result = await imgClient.ocrDrivingLicence({
        data: {
            url: imageUrl,
            type: event.type
        }
    });
    return JSON.parse(result.body).data;
};
