    document.querySelector('button[name="1"]').addEventListener('click', function() {
        document.querySelector('div[name="1"]').innerHTML = '<h1>Introduction</h1><p>h1-h7 are header tags. p is for paragraph. a is for <a href="https://aurifexlabs.com">link</a>. img is for image.</p>'
    })
    
    document.querySelector('button[name="2"]').addEventListener('click', function() {
        var div2 = document.querySelector('div[name="2"]')
        div2.innerHTML = '<h1>Introduction</h1>'
        var h1 = div2.querySelector('h1')
        h1.style.color = 'red'
        h1.style.fontSize = '300%'
        h1.style.marginLeft = '100px'
    })

    document.querySelector('button[name="3"]').addEventListener('click', function() {
        console.log('Press F12 to open the developer tools and see the console.')
    })

    document.querySelector('button[name="4"]').addEventListener('click', function() {
        var output = document.querySelector('div[name="4"]')
        output.innerHTML = '<form><label name="email">Email</label><input type="text" name="email"><button>Login</button><p class="error"></p></form>'
        var form = output.querySelector('form')
        form.style.border = '1px solid grey'
        form.style.width = '50%'
        form.style.borderRadius = '1em'
        form.style.padding = '0.5em'
        form.style.boxShadow = '0px 0px 3px 3px #ddd'
        form.style.margin = '1em'
        form.style.backgroundColor = 'white';

        var errorElement = form.querySelector('.error')
        errorElement.style.color = 'red'

        // Wait 5 seconds (5000 milliseconds)
        setTimeout(function() {
            errorElement.textContent = '5 seconds have passed.'
            errorElement.style.display = 'block'
        }, 5000)
    })


    document.querySelector('button[name="5"]').addEventListener('click', function() {
        var output = document.querySelector('div[name="5"]')
        output.innerHTML = '<form><label name="email">Email</label><input type="text" name="email"><button>Login</button><p class="error"></p></form>'
        var form = output.querySelector('form')
        form.style.border = '1px solid grey'
        form.style.width = '50%'
        form.style.borderRadius = '1em'
        form.style.padding = '0.5em'
        form.style.boxShadow = '0px 0px 3px 3px #ddd'
        form.style.margin = '1em'
        form.style.backgroundColor = 'white';

        form.addEventListener('submit', function(event) {
            event.preventDefault()

            var email = form.querySelector('input[name="email"]').value
            login(email)

            return false
        })

        function login(email) {
            console.log('Email:', email)
        }
    })

    document.querySelector('button[name="6"]').addEventListener('click', function() {
        var output = document.querySelector('div[name="6"]')
        output.innerHTML = '<form><label name="email">Email</label><input type="text" name="email"><button>Login</button><p>Name: <span name="name"></span></p><p class="error"></p></form>'
        var form = output.querySelector('form')
        form.style.border = '1px solid grey'
        form.style.width = '50%'
        form.style.borderRadius = '1em'
        form.style.padding = '0.5em'
        form.style.boxShadow = '0px 0px 3px 3px #ddd'
        form.style.margin = '1em'
        form.style.backgroundColor = 'white';

        var errorElement = form.querySelector('.error')
        errorElement.style.color = 'red'

        form.addEventListener('submit', function(event) {
            event.preventDefault()

            var email = form.querySelector('input[name="email"]').value
            login(email)

            return false
        })

        function login(email) {
            if(email && email.includes('@')) {
                console.log('You are logged in!')
                var nameElement = form.querySelector('[name="name"]')
                nameElement.textContent = email.split('@')[0]
                form.querySelector('.error').style.display = 'none'
            }
            
            else {
                console.log('Error!')
                form.querySelector('.error').textContent = 'You must enter a valid email address.'
            }
        }
    })

    document.querySelector('button[name="7"]').addEventListener('click', function() {
        var output = document.querySelector('div[name="7"]')
        output.innerHTML = '<form><label name="email">Message</label><input type="text" name="message"><button>Send</button></form>'
        var form = output.querySelector('form')
        form.style.border = '1px solid grey'
        form.style.width = '50%'
        form.style.borderRadius = '1em'
        form.style.padding = '0.5em'
        form.style.boxShadow = '0px 0px 3px 3px #ddd'
        form.style.margin = '1em'
        form.style.backgroundColor = 'white';

        form.addEventListener('submit', function(event) {
            event.preventDefault()

            
            var message = form.querySelector('input[name="message"]').value
            form.querySelector('input[name="message"]').value = ''

            var p = document.createElement('p')
            p.textContent = (new Date()).toLocaleString() + ': ' + message
            form.appendChild(p)

            return false
        })
    })
