describe('JsdoIt', function() {

    var testdata = {
        debug: true
    };

    it('default', function() {
        var doit = new JsdoIt();
        doit.api('/user/codes', {name: 'tetsuwo'}, function(response) {
            console.log(response);
        });
    });

    it('default', function() {
        var doit = new JsdoIt();
        doit.api('/user/codes', {name: 'tetsuwo'}, function(response) {
            console.log(response);
        });
    });

});
