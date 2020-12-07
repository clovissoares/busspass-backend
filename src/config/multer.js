const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
//const multerS3 = require('multer-s3');
//const aws = require('aws-sdk');
require('dotenv').config();

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, "uploads"));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`;
            
                cb(null, file.key);
            });
        }
    })/*,
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'sse-upload',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`;
            
                cb(null, file.key);
            });
        }
    })*/
};

module.exports = {
    dest: path.resolve(__dirname, "uploads"),
    storage: storageTypes[local],
    limits: {
        filesize: 5 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "application/pdf"
        ];

        if(allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Tipo de arquivo invalido"));
        }
    }
}