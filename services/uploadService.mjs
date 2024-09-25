import { PutObjectCommand  } from "@aws-sdk/client-s3"; 
import s3 from '../config/awsConfig.mjs';

export const uploadImageToS3 = async (file) => {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: Date.now().toString() + file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype
    };
    const command = new PutObjectCommand(params);
    await s3.send(command);
    return `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${params.Key}`
}