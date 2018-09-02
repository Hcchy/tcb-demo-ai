/* global wx, Component */
Component({
    data: {
        hasUploaded: false,
    },

    methods: {
        handleUploadTap() {
            this.uploadImage();
        },

        handleRecognizeTap() {
            this.callFunction();
        },

        uploadImage() {
            wx.chooseImage({
                success: (dRes) => {
                    wx.showLoading({
                        title: '上传中',
                    });

                    const fileName = dRes.tempFilePaths[0];
                    const dotPosition = fileName.lastIndexOf('.');
                    const extension = fileName.slice(dotPosition);
                    const cloudPath = `mileslei/${Date.now()}-${Math.floor(Math.random(0, 1) * 10000000)}${extension}`;

                    wx.cloud.uploadFile({
                        cloudPath,
                        filePath: dRes.tempFilePaths[0],
                        success: (res) => {
                            this.setData({
                                fileID: res.fileID,
                            }, () => {
                                this.getTempFileURL();
                            });
                        },
                        fail: () => {
                            wx.hideLoading();
                            wx.showToast({
                                title: '上传失败',
                                icon: 'none',
                            });
                        },
                    });
                },
            });
        },

        getTempFileURL() {
            wx.cloud.getTempFileURL({
                fileList: [{
                    fileID: this.data.fileID,
                }],
            }).then((res) => {
                wx.hideLoading();
                const files = res.fileList;

                if (!files.length) {
                    wx.showToast({
                        title: '图片上传失败',
                        icon: 'none',
                    });
                    return;
                }

                this.setData({
                    customImgUrl: files[0].tempFileURL,
                    resultImgUrl: '',
                    hasUploaded: true
                });

            }).catch(() => {
                wx.hideLoading();
                wx.showToast({
                    title: '图片上传失败',
                    icon: 'none',
                });
            });
        },

        callFunction() {
            wx.showLoading({
                title: '融合中',
                icon: 'none',
            });

            wx.cloud.callFunction({
                name: 'faceFuse',
                data: {
                    url: this.data.customImgUrl,
                },
            }).then(({ result }) => {
                wx.hideLoading();
                if (!result || !result.img_url) {
                    wx.showToast({
                        title: '融合失败',
                        icon: 'none',
                    });
                    return;
                }
                this.setData({
                    resultImgUrl: result.img_url
                });
                this.triggerEvent('finish', result.img_url);
            }).catch((err) => {
                console.error(err);
                wx.hideLoading();
                wx.showToast({
                    title: '识别失败',
                    icon: 'none',
                });
            });
        },
    },

    properties: {
        uploadText: {
            type: String,
            value: '上传图片',
        },
        recognizeText: {
            type: String,
            value: '识别图片',
        },
        customImgUrl: {
            type: String,
            value: 'https://10.url.cn/eth/ajNVdqHZLLBn1TC6loURIX2GB5GB36NBNZtycXDXKGARFHnJwhHD8URMvyibLIRBTJrdcONEsVHc/',
        },
        templateImgUrl: String,
        hideTemplate: {
            type: Boolean,
            value: false
        },
        mode: {
            type: String,
            value: 'idCard'
        },
    },
});
