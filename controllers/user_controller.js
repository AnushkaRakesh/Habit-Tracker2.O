const User = require('../models/User');
//handle registration
module.exports.userRegistration = function(req,res){
    // console.log(req.body);
    const { name , email} = req.body;
    const errors = [];
    //check required fields
    if(!name || !email ){
        res.redirect('back');
    }
    else{
        //validation passed
        User.findOne({email:email})
        .then(user => {
            if(user){
                //user exists
                res.redirect('/users/login');
            }else{
                const newUser = new User({name,email});
                newUser.save()
                .then(user => {
                    res.redirect('/users/login');

                })
                .catch(err => console.log(err));
                

                }
            
        })
    
    }

}

//login handle
module.exports.logIn = (req,res,next)=>{
    const { name, email } = req.body;
    //Checking user in database
    User.findOne({
        email: email
    }).then(user => {
        if (!user) {
           
            res.render('login', {
                title:'Login',
                name,
                email
            });
        }
        //Redirect to dashboard
        else {
            res.redirect(`/dashboard?user=${user.email}`);
        }
    });
   
}
