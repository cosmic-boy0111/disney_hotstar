const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    title : {
        type : String,
        default:'user'
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    img : {
        type : String,
        default : ''
    },
    isAdmin : {
        type : Boolean,
        default : false
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
    ]
})

const newUserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    title : {
        type : String,
        default:'user'
    },
    img : {
        type : String,
        default : ''
    },
    phone : {
        type : Number,
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
})

const messages = new mongoose.Schema({
    title:{
        type : String,
        default: 'messages'
    },
            email : {
                type : String,
                required : true
            },
            message : {
                type : String,
                required : true
            },
            name : {
                type : String,
                required : true
            },
            img : {
                type : String,
                default:''
            }
    
})

const chart = new mongoose.Schema({
    idx:{
        type:Number,
        default:1
    },
    title:{
        type: String,
        default : 'count'
    },
    count : {
        type : Array,
    }
})

const polar = new mongoose.Schema({
    idx:{
        type:Number,
        default:1
    },
    title:{
        type: String,
        default : 'count'
    },
    count : {
        type : Array,
        // default : [0,0,0]
    }
})

// we are hashing the password

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
        return token;
    } catch (err) {
        console.log(err);
    }
}

////// store the message

userSchema.methods.addImg = async function(img){
    try{

        this.img = img;
        await this.save();
        return this.img;
    } catch(err){
        console.log(err);
    }
}

userSchema.methods.checkIsAdmin = async function(isAd){
    try{
        this.isAdmin = isAd;
        await this.save();
        return this.isAdmin;
    } catch(err){
        console.log(err);
    }
}

chart.methods.Inc = async function(ar,idx){
    try{
        
        ar[idx] = ar[idx]+1;
        this.count = ar;
        await this.save();
        return this.count;
    } catch(err){
        console.log(err);
    }
}

polar.methods.Inc = async function(ar){
    try{
        
        // ar[idx] = ar[idx]+1;
        this.count = ar;
        await this.save();
        return this.count;
    } catch(err){
        console.log(err);
    }
}



const User = mongoose.model('USER',userSchema);
const NewUser = mongoose.model('NEWUSER',newUserSchema);
const Messages = mongoose.model('MESSAGES',messages);
const Chart = mongoose.model('CHARTDATA',chart);
const Polar = mongoose.model('POLARDATA',polar);
    
module.exports = {User,Messages,NewUser,Chart,Polar};
