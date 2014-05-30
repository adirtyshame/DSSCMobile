(function($) {
      
        var app = $.sammy('#main', function() {
      
          this.get('#/', function(context) {
            context.log('Yo yo yo');
          });
          this.get('#/about', function(context) {
            context.log('about');
          });
          this.get('#/contact', function(context) {
            context.log('contact');
          });
      
        });
      
        $(function() {
          app.run('#/');
        });
      
      })(jQuery);