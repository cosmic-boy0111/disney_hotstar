const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')



const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    cpassword : {
        type : String,
        required : true
    },
    
    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ],

})

const mainHeader = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    path:{
        type : String,
        required : true
    },
    name:{
        type : String,
        required : true
    },
    desc1:{
        type : String,
        required : true
    },
    desc2:{
        type : String,
        required : true
    },
    hImg:{
        type: String,
        required: true
    }
    
})

const tvHeader = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    path:{
        type : String,
        required : true
    },
    name:{
        type : String,
        required : true
    },
    desc1:{
        type : String,
        required : true
    },
    desc2:{
        type : String,
        required : true
    },
    hImg:{
        type: String,
        required: true
    }
    
})

const moviesHeader = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    path:{
        type : String,
        required : true
    },
    name:{
        type : String,
        required : true
    },
    desc1:{
        type : String,
        required : true
    },
    desc2:{
        type : String,
        required : true
    },
    hImg:{
        type: String,
        required: true
    }
    
})

const disneyHeader = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    path:{
        type : String,
        required : true
    },
    name:{
        type : String,
        required : true
    },
    desc1:{
        type : String,
        required : true
    },
    desc2:{
        type : String,
        required : true
    },
    hImg:{
        type: String,
        required: true
    }
    
})



userSchema.pre('save', async function (next){
    console.log('i am insider');
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
})

userSchema.methods.generateAuthToken = async function() {
    try {
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        console.log(token);
        return token;
    } catch (err) {
        console.log(err);
    }
}




const User = mongoose.model('USER',userSchema);
const MainHeader = mongoose.model('MainHeader',mainHeader);
const TvHeader = mongoose.model('TvHeader',tvHeader);
const MoviesHeader = mongoose.model('MoviesHeader',moviesHeader);
const DisneyHeader = mongoose.model('DisneyHeader',disneyHeader);
    
module.exports = {User,MainHeader,TvHeader,MoviesHeader,DisneyHeader};
