(function($) {
    
      
        var app = $.sammy('#main', function() {
            
            this.use('Mustache','mst');
            
          this.get('#/', function(context) {
            context.log('Yo yo yo');
          });
          
          this.get('#/about', function(context) {
              if (true) { 
                  return this.notFound();
              }
          });
          
          this.get('#/contact', function(context) {

            this.load('http://localhost:4711/class/1D').then(function(items) {
                    $.each(JSON.parse(items), function (i, heat) {
                        context.render('templates/heat.mst', {driverNo: heat.driverNo, heatNo: heat.heatNo, timeTotal: heat.timeTotal}).appendTo(context.$element());
                    });
            });
            
            
          });
        });
      
        $(function() {
          app.run('#/');
        });
      
      })(jQuery);