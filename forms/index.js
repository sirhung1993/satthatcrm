const name = $("#contact-name").val()
const phone = $("#contact-phone").val()
const address = $("#contact-address").val()

$("#submit-contact").click(function() {
	console.log(`NAME : ${name}`)
	console.log(`PHONE : ${phone}`)
	console.log(`address : ${address}`)
})

function insertContact() {

}