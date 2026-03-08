import fs from "fs"
 
const logger=(req,res,next)=>{
    const log=`Request: ${req.method} ${req.url}`
    fs.writeFileSync("logs.txt",log)
    next()
}

export default logger