//document.querySelector('video').play()


var courseForm = document.querySelector('#register-course')
var callForm = document.querySelector('#register-call')
var webinarForm = document.querySelector('#register-webinar')

handler(courseForm, '/register-course.html')
handler(callForm, '/register-call.html')
//handler(webinarForm, '/register-webinar.html')

    function handler(form, url) {
        form.addEventListener('submit', function (event) {
            event.preventDefault()

            form.querySelector('button').setAttribute('disabled', true)

            var message = form.querySelector('p[name="message"]')

            var email = form.querySelector('input[name="email"]').value
            if (!email || !email.includes('@') || email.length > 254) {
                message.textContent = 'Please enter a valid email address.'
                form.querySelector('button').removeAttribute('disabled')
                return false
            }

	    var name
            if(form.querySelector('input[name="name"]')) {
	            name = form.querySelector('input[name="name"]').value
	    }
	    else {
		name = 'none-given'
            }

	    var course
            if(form.querySelector('select[name="courses"]')) {
	            course = form.querySelector('select[name="courses"]').value
	    }
	    else {
		course = 'any'
            }

	    var inst
            if(form.querySelector('select[name="instructors"]')) {
	            inst = form.querySelector('select[name="instructors"]').value
	    }
	    else {
		inst = 'any'
            }

	    var time1
            if(form.querySelector('select[name="time1"]')) {
	            time1 = form.querySelector('select[name="time1"]').value
	    }
	    else {
		time1 = 'any'
            }

	    var time2
            if(form.querySelector('select[name="time2"]')) {
	            time2 = form.querySelector('select[name="time2"]').value
	    }
	    else {
		time2 = 'any'
            }

            message.textContent = 'Sending request...'
            fetch(url + '?email=' + encodeURIComponent(email) + '&name=' + encodeURIComponent(name) + '&course=' + encodeURIComponent(course) + '&instructor=' + encodeURIComponent(inst)  + '&time1=' + encodeURIComponent(time1)  + '&time2=' + encodeURIComponent(time2), {
                method: 'GET',
            }).then(function (response) {
                if (response.ok) {
                    message.textContent = ''

		    location.href = url
                }

                else {
                    form.querySelector('button').removeAttribute('disabled')
                    message.textContent = 'There was an error. Please email us to directly.'
                }
            })

            return false
        })
    }
