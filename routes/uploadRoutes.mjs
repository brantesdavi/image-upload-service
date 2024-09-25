import express from "express";
import multer from "multer";
import { uploadImage } from '../controller/uploadController.mjs'

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage});

router.post('/upload', upload.single('image'), uploadImage);

export default router;