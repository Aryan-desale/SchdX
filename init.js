window.fbAsyncInit = function() {
	FB.init({
		appId   : '362578698783855',
		cookie  : true,
		xfbml   : true,
		version : 'v13.0',
		status  : true
	});

	// FB.Event.subscribe('auth.statusChange', ref);

	FB.Event.subscribe('auth.login', login);

	// FB.Event.subscribe('auth.logout', function() {
	// 	// a user logged out who was previously logged in
	// 	window.location.refresh(true); // ideally modify the page with JS rather than refreshing
	// });

	function login(response) {
		// response.status = 'connected';

		if (response.status == 'connected') {
			localStorage.status = 'connected';
			setElements(true);

			// console.log('Logged in');

			// instaInfo();

			console.log(response);
			statusChangeCallback(response);
		} else {
			setElements(false);

			return;
		}
	}

	// function ref() {
	// 	window.location.refresh(true);
	// }

	// FB.AppEvents.logPageView();

	// FB.getLoginStatus(function(response) {
	// 	statusChangeCallback(response);

	// 	console.log(response);
	// });
};

window.addEventListener('onload', function() {
	axios
		.get(
			'https://www.facebook.com/v12.0/dialog/oauth?app_id=362578698783855&auth_type=&cbt=1642491898037&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2290742d103658%26domain%3Dlocalhost%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Flocalhost%253A3000%252Ffba07b64f91d8%26relation%3Dopener&client_id=362578698783855&display=popup&domain=localhost&e2e=%7B%7D&fallback_redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fschedule.html&force_confirmation=false&id=f8830b2e09b474&locale=en_US&logger_id=e19609be-4fa0-42e2-b0f2-1e0a7a3a4e1e&messenger_page_id=&origin=1&plugin_prepare=true&redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df224ad77936e28c%26domain%3Dlocalhost%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Flocalhost%253A3000%252Ffba07b64f91d8%26relation%3Dopener.parent%26frame%3Df8830b2e09b474&ref=LoginButton&reset_messenger_state=false&response_type=signed_request%2Ctoken%2Cgraph_domain&scope=public_profile%2Cemail&sdk=joey&size=%7B%22width%22%3A600%2C%22height%22%3A679%7D&url=dialog%2Foauth&version=v13.0'
		)
		.then((res) => {
			setElements(true);

			// console.log('Logged in');

			instaInfo();

			console.log(res);
			statusChangeCallback(response);
		});

	// if (localStorage.status !== null) {
	// 	function login(response) {
	// 		// response.status = 'connected';
	// 	}
	// }
});

(function(d, s, id) {
	var js,
		fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://connect.facebook.net/en_US/sdk.js';
	fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
