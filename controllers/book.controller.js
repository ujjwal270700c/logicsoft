const BookModel=require('../models/book.model')
exports.bookSearch = async (req, res) => {
    try {
        const { ISBN } = req.query;
        let findQuery = {};
        if (ISBN && ISBN !== "") {
          findQuery.ISBN = ISBN;
        }
        const bookByIsbn= await BookModel.find({ISBN:ISBN})
        if(bookByIsbn.length === 0){
            return res.status(401).json({
                Success: "false",
                data: null,
                message: "Enter valid ISBN ",
              });
        }else{
            const data = await BookModel.find(findQuery);
            return res.status(200).json({
                Query: {
                    isbn:ISBN
                },
                Success: true,
                ID: data[0]._id,
              })
            }
    } catch (error) {
        return res.status(400).json({
            Success: "false",
            data: null,
            message: "ERROR_HERE",
          });
    }
};

exports.bookCreate=async(req,res)=>{
    try {
        const {ISBN,Name,Author,Publisher}=req.body
        const data={
            ISBN,
            Name,
            Author,
            Publisher
        }
        const newBookList=await BookModel.create(data)
        return res.status(201).json({
            status:"Success",
            message:"Data saved successfully!",
            data:newBookList
        });
    } catch (error) {
        if(error.code && error.code == 11000){
            return res.status(400).json({
                Success: "false",
                data: null,
                message: "ISBN is already exist!",
              }) 
        }
        return res.status(400).json({
            status:false,
            data:error,
            Message: "ERROR_HERE"
        });
    }
}

exports.getById=async(req,res)=>{
  try {
     const {id}=req.params
     console.log(id);
      const data=await BookModel.findOne({_id:id})
      console.log(data);
      return res.status(200).json({
        Success: "true",
        data: data,
        message: "data search successfully",
      });
  } catch (error) {
    return res.status(400).json({
        Success: "false",
        data: null,
        message: "ERROR_HERE",
      });
  }
}