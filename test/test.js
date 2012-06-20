describe('JsdoIt', function() {

    var testdata = {
        debug: true
    };

    it('default', function() {
        var tumblr = new JsdoIt();
        expect(tumblr.debug).toBeFalsy();
        expect(tumblr.config.apiKey).toBeNull();
        expect(tumblr.config.baseHostname).toBeNull();
    });

});
