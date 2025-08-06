async function fetchUserData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	return await res.json()
}
function loadStylesheet(url) {
	const link = document.createElement('link')
	link.rel = 'stylesheet'
	link.type = 'text/css'
	link.href = url
	document.head.appendChild(link)
}
loadStylesheet('/src/css/test.css')
fetchUserData().then((data) => console.log(data))
