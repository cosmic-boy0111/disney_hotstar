const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')



const userSchema = new mongoose.Schema({
    // name : {
    //     type : String,
    //     required : true
    // },
    user : {
        type : String,
        required : true
    },
    // phone : {
    //     type : String,
    //     required : true
    // },
    password : {
        type : String,
        required : true
    },
    // cpassword : {
    //     type : String,
    //     required : true
    // },
    
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
    },
    vImg:{
        type: String,
        required : true
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
    },
    vImg:{
        type: String,
        required : true
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
    },
    vImg:{
        type: String,
        required : true
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
    },
    vImg:{
        type: String,
        required : true
    }
    
})

const tv = new mongoose.Schema({
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
    },
    vImg:{
        type: String,
        required : true
    }
    
})


const movies = new mongoose.Schema({
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
    },
    vImg:{
        type: String,
        required : true
    }
    
})

const disney = new mongoose.Schema({
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
    },
    vImg:{
        type: String,
        required : true
    }
    
})

const pixar = new mongoose.Schema({
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
    },
    vImg:{
        type: String,
        required : true
    }
    
})

const marvel = new mongoose.Schema({
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
    },
    vImg:{
        type: String,
        required : true
    }
    
})

const starWars = new mongoose.Schema({
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
    },
    vImg:{
        type: String,
        required : true
    }
    
})

const geo = new mongoose.Schema({
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
    },
    vImg:{
        type: String,
        required : true
    }
    
})



userSchema.pre('save', async function (next){
    console.log('i am insider');
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
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
const Tv = mongoose.model('TV',tv);
const Movies = mongoose.model('Movies',movies);
const Disney = mongoose.model('Disney',disney);
const Pixar = mongoose.model('Pixar',pixar);
const Marvel = mongoose.model('Marvel',marvel);
const StarWars = mongoose.model('StarWars',starWars);
const Geo = mongoose.model('Geo',geo);
    
module.exports = {
    User,
    MainHeader,
    TvHeader,
    MoviesHeader,
    DisneyHeader,
    Tv,
    Movies,
    Disney,
    Pixar,
    Marvel,
    StarWars,
    Geo
};
