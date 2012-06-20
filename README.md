### initialize

    var doit = new JsdoIt();


### get the user codes

    doit.api('/user/codes', {name: 'tetsuwo'}, function(response) {
        alert('callback [/user/codes]');
        console.log(response);
    });

