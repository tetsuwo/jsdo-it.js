### initialize

    var doit = new JsdoItAPIv02();


### get the user codes

    doit.api('/user/codes', [ 'name=tetsuwo' ], function(res) {
        alert('callback [/user/codes]');
        console.log(res);
    });

