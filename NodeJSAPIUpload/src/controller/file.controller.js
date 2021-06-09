
const fs = require("fs")

const baseUrl="http://localhost:9000/files/";
//to list already uploaded file 
const getListOfFiles =(req,res)=>{
    const directoryPath = "C:/Users/ACER/OneDrive/Desktop/Setp-02-Nodejs/resources/static/assets/upload" 
    console.log("Path "+directoryPath)
    fs.readdir(directoryPath, function(err,files){
        if(err){
            res.status(500).send({
                message:"unable to list files "+err
            });
        }

        let fileInfos =[]
        files.forEach((file)=>{
            if(file.toString().endsWith(".jpg")){
            fileInfos.push({
                name:file,
                url:baseUrl+file
            });
        }
        })
        res.status(200).send(fileInfos)
    })

}

module.exports={
    getListOfFiles
}