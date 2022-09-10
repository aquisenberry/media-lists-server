import mongoose from "mongoose";

const mediaListSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const MediaListMessage = mongoose.model('MediaListMessage',mediaListSchema)

export default mediaListSchema