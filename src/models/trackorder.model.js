const {Schema,model} = require("mongoose")

const trackproductSchema = new Schema({
    
        product_id:[{ 
            type:mongoose.Schema.Types.ObjectId,
            ref:"cartpage",
            required: true
        }]
    
},{
    versionKey:false,
    timestamps:true
})


module.exports = model("trackpage",trackproductSchema)