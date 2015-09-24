var user = new UserModel();
var App = Backbone.Router.extend({
	routes: {
		'': 'profile', // what goes into the url is on the left.
		'edit': 'edit',
		'home': 'home',

	},
	profile: function() {
		$('.page').hide();
		$('#profile').show();
	},
	edit: function() {
		$('.page').hide();
		$('#edit').show();
		edit();
	},
	home: function() {
		$('.page').hide();
		$('#home').show();
	}
});

var app = new App();
Backbone.history.start();

function edit(){
	$('#name').val(user.get('name'));
	$('#inputEmail3').val(user.get('email'));
	$('#role').val(user.get('role'));
	$('#inputPassword3').val(user.get('password'));
}

	$('#saveButton').on('click', function(){
		user.set('name',$('#name').val()); 
		user.set('email',$('#inputEmail3').val());
		user.set('role',$('#role').val());
		user.set('password',$('#inputPassword3').val()); 
	})



