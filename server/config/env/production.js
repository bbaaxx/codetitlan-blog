'use strict';

module.exports = {
  app: {
      name: 'Codetitilan Application Server & Backend'
  },
  port: process.env.OPENSHIFT_INTERNAL_PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  hostname: process.env.HOSTNAME || 'localhost',
  ipaddr: process.env.OPENSHIFT_INTERNAL_IP || process.env.OPENSHIFT_NODEJS_IP || '127.31.10.81',
  host: process.env.HOST || 'localhost',
	db: 'Nothing here yet',
	openshift_terminator_handlers: function() {
		//  Process on exit and signals.
    var signals = ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
                  'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM']
    var terminator = function(sig){
      if (typeof sig === "string") {
         console.log('%s: Received %s - terminating ...',
                     Date(Date.now()), sig);
         process.exit(1);
      }
      console.warn('%s: Node server stopped.', Date(Date.now()) );
    };

    process.on('exit', function() { terminator(); });
    signals.forEach(function(sig, index, array) {
        process.on(sig, function() { terminator(sig); });
    });
  }
};