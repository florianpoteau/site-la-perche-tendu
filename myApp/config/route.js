module.exports = [
    {
        method: 'POST',
        path: '/Contact',
        handler: 'ContactController.send',
    }

]

// path: config/route.js

module.exports = [

    {
        "routes": [
            {
                "method": "POST",
                "path": "/email",
                "handler": "Email.send",
                "config": {}
            }
        ]
    }
]