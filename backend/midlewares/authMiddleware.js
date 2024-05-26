const {verify} =require("jsonwebtoken");

const validateToken=(req,res,next)=>{
    const accessToken=req.header("accessToken");

    if(!accessToken)
    {
        return res.json({msg:"User not Logged In"})
    }

    try{
        const checkValidity=verify(accessToken,process.env.JWT_SECRET);
        req.user=checkValidity;
        if(checkValidity)
        {
            console.log("Validation Done");
            return next();
        }
    }
    catch(err)
    {
        return res.json({error: err})
    }

}

module.exports={validateToken}; 