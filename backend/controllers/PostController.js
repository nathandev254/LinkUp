

export const CreatePost = async(req,res) => {
    res.json({message:'Post created successfully'})
} 

export const GetPosts = async (req,res) => {
    res.json({message:'Posts Accessed successfully'})
}

export const UpdatePosts = async (req,res) => {
    res.json({message:'Post Updated successfully'})
}

export const DeletePost = async (req,res) => {
    res.json({message:"Post Deleted successfully"})
}