

const { response } = require('express');
const express = require('express')
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET_KEY);
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate');

const router = express.Router();

require('../db/conn');
const {User,Messages,NewUser,Chart,Polar} = require('../model/userSchema')



router.post('/register',async(req,res)=>{
    const { name,email,phone,password,cpassword } = req.body
    if( !name || !email || !phone || !password || !cpassword ){
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

router.post('/newUser',async(req,res)=>{
    const { name,email,phone,password,cpassword } = req.body
    if( !name || !email || !phone || !password || !cpassword ){
        return res.status(422).json({error:'error'});
    }

    try {
        const userExits =  await  NewUser.findOne({email:email});

        if(userExits){
            return res.status(422).json({error:'email already exist'})
        }

        const user = new NewUser({ name,email,phone,password,cpassword});
        await user.save();

        res.status(201).json({ message: 'new user registered' })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            error:'invalid credentials'
        });
    }
});


// login route

router.post('/signin', async (req,res)=>{
    console.log('in signin');
    try {
        let token;
        const {email,password} = req.body;
        // if(!email || !password){
        //     return res.status(400).json({
        //         error:'plz fill the data'
        //     })
        // }

        const userLogin = await User.findOne({email:email});

        // console.log(userLogin);
        if(userLogin){
            console.log(User);
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();

            console.log(token);

            res.cookie("jwtoken",token,{
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            })

            if(!isMatch){
                res.status(400).json({
                    error:'invalid credentials'
                });
            }else{
                res.status(200).json({
                    message:'user sign in successfully'
                });
            }
        }else{
            console.log('not sign in');
            res.status(400).json({
                error:'invalid credentials'
            });
        }

        

    } catch (error) {
        console.log('not sign in 2');
        res.status(400).json({
            error:'error'
        });
    }
})


router.post('/isAd',async(req,res)=>{
    const {email,isAd} = req.body;
    try {
        const user = await User.findOne({email:email});
        if(user){
            
            console.log(email);

            const check = await user.checkIsAdmin(isAd);
            user.save();

            res.status(201).json({
                message:'admin added'
            })

            console.log('admin added');
        }else{
            res.status(400).json({
                error:'invalid credentials'
            });
        }

        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error:'invalid credentials'
        });
    }
})


// get user data for contact us and home page

router.get('/getdata', authenticate , (req,res)=>{
    console.log(`hello my about`);
    res.send(req.rootUser);
})

router.get('/getUsers', async (req,res)=>{
    
    try {
        const data = await User.find({title:'user'});
        res.send(data);
    } catch (error) {
        console.log(error);
    }

})

router.get('/getNewUsers', async (req,res)=>{
    
    try {
        const data = await NewUser.find({title:'user'});
        res.send(data);
    } catch (error) {
        console.log(error);
    }

})


// logout

router.get('/logout', (req,res)=>{
    console.log(`hello my logout page`);
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).json({ message:'user logout'});
})

router.post('/addimg', authenticate ,  async (req,res)=>{
    try {
        const {img} = req.body;
        // console.log(img);
        const user = await User.findOne({_id:req.userID});
        if(user){
            const add = await user.addImg(img);
            await user.save();

            res.status(201).json({
                message:'img added'
            })

            console.log('img added');
        }

    
        
    } catch (error) {
        console.log(error);
    }
})


router.post('/addMessage', async (req,res)=>{

    try {

        const {email,name,img} = req.body;
        var {message} = req.body;

        message = cryptr.encrypt(message)

        const msg = new Messages({email,message,name,img});
        msg.save();
        res.status(200).json({ message: 'message send' })

    } catch (error) {
        console.log(error);
    }
})

router.get('/getMessage', async (req,res)=>{
    try {
        var data = await Messages.find({title:'messages'})
        data.forEach(e=>e.message = cryptr.decrypt(e.message));
        // console.log(data);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})

router.post('/deleteUser', async(req,res)=>{
    const {id} = req.body;
    try {
        const user = await User.deleteOne({_id:id})
        res.status(200).json({
            msg:'user delete'
        });
    } catch (error) {
        console.log(error);
    }
})

router.post('/deleteNewUser', async(req,res)=>{
    const {id} = req.body;
    try {
        const user = await NewUser.deleteOne({_id:id})
        res.status(200).json({
            msg:'user delete'
        });
    } catch (error) {
        console.log(error);
    }
})


// router.post('/addCount',async(req,res)=>{
//     const {idx} = req.body
//     try {
//         const userExits =  await Chart.findOne({title:'count'});

//         const user = new Chart({ idx});
//         await user.save();

//         res.status(201).json({ message: 'new user registered' })

//     } catch (error) {
//         console.log(error);
//         res.status(400).json({
//             error:'invalid credentials'
//         });
//     }
// });


router.get('/getCount',async(req,res)=>{
    try {
        const data = await Chart.findOne({title:'count'})
        res.send(data.count);
    } catch (error) {
        console.log(error);
    }
})

router.post('/addCount',async(req,res)=>{
    const {count,idx} = req.body;
    try {
        const user = await Chart.findOne({title:'count'});
        const add = await user.Inc(count,idx);
        await user.save();
        // console.log(user);
        res.status(201).json({
            message:'count inc'
        })

        
    } catch (error) {
        console.log(error);
    }
})




router.get('/getPolar',async(req,res)=>{
    try {
        const data = await Polar.findOne({title:'count'})
        res.send(data.count);
    } catch (error) {
        console.log(error);
    }
})

router.post('/addPolar',async(req,res)=>{
    const {count} = req.body;
    try {
        const user = await Polar.findOne({title:'count'});
        const add = await user.Inc(count);
        await user.save();
        // console.log(user);
        res.status(201).json({
            message:'count inc'
        })

        
    } catch (error) {
        console.log(error);
    }
})








module.exports = router
