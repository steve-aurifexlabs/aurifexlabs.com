   document.querySelector('button[name="1"]').addEventListener('click', function() {
        document.querySelector('span[name="1"]').textContent = 'Hello, world!'
    })

    document.querySelector('button[name="2"]').addEventListener('click', function() {
        document.querySelector('span[name="2"]').textContent = 'This is an argument. ' + Math.random().toString()
    })

    document.querySelector('button[name="3"]').addEventListener('click', function() {
        document.querySelector('span[name="3"]').textContent = Math.floor(Math.random() * (1 + 9 - 3) + 3).toString()
    })

    document.querySelector('button[name="4"]').addEventListener('click', function() {
        document.querySelector('span[name="4"]').textContent = '12 12'
    })

    document.querySelector('button[name="5"]').addEventListener('click', function() {
        document.querySelector('span[name="5"]').textContent = '18'
    })

    document.querySelector('button[name="6"]').addEventListener('click', function() {
        if(Math.random() > 0.5) {
            document.querySelector('span[name="6"]').textContent = 'Heads'
        }
        
        else {
            document.querySelector('span[name="6"]').textContent = 'Tails'
        }
    })

    document.querySelector('button[name="7"]').addEventListener('click', function() {
        document.querySelector('span[name="7"]').textContent = 'loop loop loop 0 1 2 3 4'
    })

    document.querySelector('button[name="8"]').addEventListener('click', function() {
        document.querySelector('span[name="8"]').textContent = 'Asha is learning to program in 10 minutes.'
    })

    document.querySelector('button[name="9"]').addEventListener('click', function() {
        document.querySelector('span[name="9"]').textContent = 'Steve Steve Miranda Jenn Lincoln'
    })

    document.querySelector('button[name="10"]').addEventListener('click', function() {
        document.querySelector('span[name="10"]').textContent = 'You are logged in as: Bonnie (bonnie@aurifexlabs.com).'
    })
