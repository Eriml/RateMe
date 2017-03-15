module.exports = (app) => {
	app.get('/',function(req,res, next){
	res.render('index'),{title: 'Rate Me'};
	})

	app.get('/signup',function(req,res){
	res.render('user/signup'),{title: 'Sign Up'};
	})

	app.get('/login',function(req,res){
	res.render('user/login'),{title: 'Log In'};
	})
}