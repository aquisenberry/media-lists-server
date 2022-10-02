export const getRoot = async (req,res) =>{
    try{
        res.status(200).json({mesage: "All good here"})
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}