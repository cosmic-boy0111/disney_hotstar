const { response } = require('express');
const express = require('express')



const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate');

const router = express.Router();

require('../db/conn');
const {
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
} = require('../model/userSchema')

router.get('/', (req,res)=>{
    res.send(`hello world from the server router js`)
})

///////////////// user //////////////// 

router.post('/register',async(req,res)=>{
    const { name,email,phone,password,cpassword } = req.body
    if( !name || !phone || !email || !password || !cpassword ){
        return res.status(422).json({error:'error'});
    }

    try {
        const userExits =  await  User.findOne({email:email});

        if(userExits){
            return res.status(422).json({error:'email already exist'})
        }

        const user = new User({ name,email,phone,password,cpassword});
        await user.save();

        res.status(201).json({ message: 'user registered' })

    } catch (error) {
        console.log(error);
    }
});


// login route

router.post('/signin', async (req,res)=>{
    console.log('in signin');
    try {
        let token;
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                error:'plz fill the data'
            })
        }

        const userLogin = await User.findOne({email:email});

        // console.log(userLogin);
        if(userLogin){
            console.log(User);
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();

            console.log(token);

            res.cookie("jwToken",token,{
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            })

            if(!isMatch){
                res.status(400).json({
                    error:'invalid credentials'
                });
            }else{
                res.json({
                    message:'user sign in successfully'
                });
            }
        }else{
            res.status(400).json({
                error:'invalid credentials'
            });
        }

    } catch (error) {
        res.json({
            error:'error'
        });
    }
})

// get user data for contact us and home page

router.get('/about', authenticate , (req,res)=>{
    console.log(`hello my about`);
    res.send(req.rootUser);
})


router.get('/getdata', authenticate , (req,res)=>{
    console.log(`hello my about`);
    res.send(req.rootUser);
})

// contact us page


////////// log out ///////////
router.get('/logout', (req,res)=>{
    console.log(`hello my logout page`);
    res.clearCookie('jwToken',{path:'/'})
    res.status(200).json({ message:'user logout'});
})


////////////// main header //////////////////

router.post('/mainHeader',async(req,res)=>{
    const { title,path,name,desc1,desc2,hImg } = req.body
    try {
        const data = new MainHeader({title,path,name,desc1,desc2,hImg});
        await data.save();
        res.status(200).send({
            message:'added'
        })
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

router.get('/mainHeader',async(req,res)=>{

    try {
        const data = await MainHeader.find({title:'mainheader'})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})


///////////// tvHeader /////////////////


router.post('/tvHeader',async(req,res)=>{
    const { title,path,name,desc1,desc2,hImg } = req.body
    try {
        const data = new TvHeader({title,path,name,desc1,desc2,hImg});
        await data.save();
        res.status(200).send({
            message:'added'
        })
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

router.get('/tvHeader',async(req,res)=>{

    try {
        const data = await TvHeader.find({title:'tvheader'})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})


///////////// moviesHeader /////////////////


router.post('/moviesHeader',async(req,res)=>{
    const { title,path,name,desc1,desc2,hImg } = req.body
    try {
        const data = new MoviesHeader({title,path,name,desc1,desc2,hImg});
        await data.save();
        res.status(200).send({
            message:'added'
        })
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

router.get('/moviesHeader',async(req,res)=>{

    try {
        const data = await MoviesHeader.find({title:'moviesheader'})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

///////////// disneyHeader /////////////////


router.post('/disneyHeader',async(req,res)=>{
    const { title,path,name,desc1,desc2,hImg } = req.body
    try {
        const data = new DisneyHeader({title,path,name,desc1,desc2,hImg});
        await data.save();
        res.status(200).send({
            message:'added'
        })
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

router.get('/disneyHeader',async(req,res)=>{

    try {
        const data = await DisneyHeader.find({title:'disneyheader'})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})


///////////////////// TV /////////////

router.post('/tv',async(req,res)=>{
    const { path,name,desc1,desc2,hImg,vImg } = req.body
    try {
        const data = new Tv({path,name,desc1,desc2,hImg,vImg});
        await data.save();
        res.status(200).send({
            message:'added'
        })
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

router.get('/tv',async(req,res)=>{

    try {
        const data = await Tv.find({path:'tv'})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

///////////////////// Movies /////////////

router.post('/movies',async(req,res)=>{
    const { path,name,desc1,desc2,hImg,vImg } = req.body
    try {
        const data = new Movies({path,name,desc1,desc2,hImg,vImg});
        await data.save();
        res.status(200).send({
            message:'added'
        })
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

router.get('/movies',async(req,res)=>{

    try {
        const data = await Movies.find({path:'movies'})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

///////////////////// Disney /////////////

router.post('/disney',async(req,res)=>{
    const { path,name,desc1,desc2,hImg,vImg } = req.body
    try {
        const data = new Disney({path,name,desc1,desc2,hImg,vImg});
        await data.save();
        res.status(200).send({
            message:'added'
        })
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

router.get('/disney',async(req,res)=>{

    try {
        const data = await Disney.find({path:'disney'})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

///////////////////// Pixar /////////////

router.post('/pixar',async(req,res)=>{
    const { path,name,desc1,desc2,hImg,vImg } = req.body
    try {
        const data = new Pixar({path,name,desc1,desc2,hImg,vImg});
        await data.save();
        res.status(200).send({
            message:'added'
        })
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

router.get('/pixar',async(req,res)=>{

    try {
        const data = await Pixar.find({path:'pixar'})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

///////////////////// Pixar /////////////

router.post('/marvel',async(req,res)=>{
    const { path,name,desc1,desc2,hImg,vImg } = req.body
    try {
        const data = new Marvel({path,name,desc1,desc2,hImg,vImg});
        await data.save();
        res.status(200).send({
            message:'added'
        })
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

router.get('/marvel',async(req,res)=>{

    try {
        const data = await Marvel.find({path:'marvel'})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

///////////////////// star Wars /////////////

router.post('/starWars',async(req,res)=>{
    const { path,name,desc1,desc2,hImg,vImg } = req.body
    try {
        const data = new StarWars({path,name,desc1,desc2,hImg,vImg});
        await data.save();
        res.status(200).send({
            message:'added'
        })
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

router.get('/starWars',async(req,res)=>{

    try {
        const data = await StarWars.find({path:"starWars"})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

///////////////////// Geo /////////////

router.post('/geo',async(req,res)=>{
    const { path,name,desc1,desc2,hImg,vImg } = req.body
    try {
        const data = new Geo({path,name,desc1,desc2,hImg,vImg});
        await data.save();
        res.status(200).send({
            message:'added'
        })
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})

router.get('/geo',async(req,res)=>{

    try {
        const data = await Geo.find({path:"geo"})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            message:'not added'
        })
    }
})



module.exports = router