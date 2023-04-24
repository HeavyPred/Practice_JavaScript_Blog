function writeBlog(){
	let data = new FormData();
	data.append('nev', document.getElementById('name').value);
	data.append('targy', document.getElementById('about').value);
	data.append('uzenet', document.getElementById('message').value);
	let error = document.getElementById("error");
	error.innerHTML = "";

	if(data.get('nev') != "" && data.get('targy') != "" && data.get('uzenet') != ""){
		const newBlog = document.createElement("div");
		const newAbout = document.createElement("h2");
		const newName = document.createElement("h3");
		const newMessage = document.createElement("p");
		const newDate = document.createElement("p");
		
		let section = document.getElementById("mainsect");
		section.appendChild(newBlog);
		newBlog.appendChild(newAbout);
		newBlog.appendChild(newName);
		newBlog.appendChild(newMessage);
		newBlog.appendChild(newDate);

		newName.innerHTML = data.get('nev');
		newAbout.innerHTML = data.get('targy');
		newMessage.innerHTML = data.get('uzenet');
		newDate.innerHTML = new Date();
		newDate.classList.add('date');

		if (section.childElementCount % 2 == 0) {
			newBlog.classList.add('even-blog');
		}
		else {
			newBlog.classList.add('odd-blog');
		}
	}
	else {
		
		error.innerHTML = "Tölts ki minden mezőt!";
	}
}