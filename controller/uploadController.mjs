import { uploadImageToS3 } from '../services/uploadService.mjs';

export const uploadImage = async (req, res) => {
    try{
        if(!req.file) {
            return res.status(400).json({error: 'Nenhum arquivo encontrado'})
        }

        const allowerTypes = ['image/jpeg', 'image/png', 'image/gif'];
        const maxSize = 2 * 1024 * 1024

        if (!allowerTypes.includes(req.file.mimetype)) {
            return res.status(400).json({ error: 'Tipo de arquivo não é permitido.'});
        }

        if (req.file.size > maxSize) {
            return res.status(400).json({ error: 'O arquivo deve ter no máximo 2MB.'});
        }

        const url = await uploadImageToS3(req.file);
        res.json({
            message: "Upload realizado com sucesso",
            url: url
        });
    } catch(er) {
        console.error('Upload Error: ', er);
        res.status(500).json({error: 'Erro ao realizar upload', details: er.message});
    }
}