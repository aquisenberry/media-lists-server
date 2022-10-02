import app from './app.js'
import mongoose from 'mongoose'


const PORT = process.env.PORT || 5000
const uri = process.env.CONNECTION_STRING
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
.catch((error) => console.log(error))
