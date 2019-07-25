document.addEventListener('DOMContentLoaded', init)

function init() {
	console.log('works')
	contactList()
}


function contactList() {
	let target = document.getElementById('target')
	function getListData(e) {
		let str = e.target.dataset.content
		
		target.innerHTML = str
		
	}

	let items = Array.from(document.querySelectorAll('.contact-item'))
	items.forEach((item) => {
		item.addEventListener('click', getListData)
	})
	

}
