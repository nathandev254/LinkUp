
export const CreateLike = async (req,res) => {
    res.json({message:'You liked the post'})
}

export const Getlikes = async(req,res) => {
    res.json({message:'like accessed successfully'})
}

export const Deletelike = async(req,res) => {
    res.json({message:'like deleted successfully'})
}