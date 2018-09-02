const https = require('https');
const { ImageClient } = require('image-node-sdk');

const AppId = '';
const SecretId = '';
const SecretKey = '';

let imgClient = new ImageClient({
    AppId,
    SecretId,
    SecretKey
});

function get(option) {
    return new Promise((resolve, reject) => {
        https.get(option, (res) => {
            const body = [];
            let length = 0;

            res.on('data', function (data) {
                length += data.length;
                body.push(data);
            });

            res.on('end', function () {
                const bodyBuffer = Buffer.concat(body, length);
                resolve(bodyBuffer);
            });
        });
    });
}

exports.main = async (event) => {
    const imageUrl = event.url;
    const image = await get(imageUrl);
    const imageBase64 = image.toString('base64');
    const result = await imgClient.faceFuse({
        data: {
            uin: '',
            project_id: '',
            model_id: '',
            img_data: imageBase64,
            rsp_img_type: 'url'
        },
    });
    return JSON.parse(result.body);
};
