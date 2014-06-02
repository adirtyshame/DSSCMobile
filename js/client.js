(function($) {


    var app = $.sammy('#main', function() {

        this.use('Mustache', 'mst');

        this.get('#/', function(context) {
            context.app.swap('');
            context.render('templates/home.mst', {}).appendTo(context.$element());
        });

        this.get('#/class/:id', function(context) {
            context.app.swap('');
            var id = this.params['id'];
            this.load('http://localhost:4711/class/' + this.params['id']).then(function(items) {
                var counter = 1;
                var test = {class: id,
                    count: function() {
                        return function(text, render) {
                            // note that counter is in the enclosing scope
                            return counter++;
                        }
                    },
                    items: items};
                context.render('templates/class.mst', {class: test.class, count: test.count, heats: JSON.parse(test.items)}).appendTo(context.$element());
            });
        });

        this.get('#/driver/:id', function(context) {
            context.app.swap('');
            var id = this.params['id'];
            this.load('http://localhost:4711/driver/' + this.params['id']).then(function(items) {
                var counter = 1;
                var test = {driver: id,
                    items: items};
                context.render('templates/driver.mst', {driver: test.driver, count: test.count, heats: JSON.parse(test.items)}).appendTo(context.$element());
            });
        });
    });

    $(function() {
        app.run('#/');
    });

})(jQuery);