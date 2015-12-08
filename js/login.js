let login = (username, password) => {
	if(username !== 'admine' || password != 'radical') {
		console.log('incorrect login');
	}
}

// login('admin', 'dunno');

export {login};