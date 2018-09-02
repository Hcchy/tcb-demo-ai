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
    const idCardImageUrl = event.url;
    const result = await imgClient.ocrBizCard({
        data: {
            url_list: [idCardImageUrl],
        },
    });
    return JSON.parse(result.body).result_list[0];
};
