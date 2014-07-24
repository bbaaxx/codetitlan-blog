/*
 * server/config/env/production.js
 */
 'use strict';

var detectPlatform = function(){
  if(process.env.OPENSHIFT_APP_NAME) { return 'openshift'; }
  else if(process.env.VCAP_APPLICATION) { return 'bluemix'; }
  // TODO - Heroku
  else { return 'local'; }
};

var makeDbString = function(platform){
  if(platform === 'openshift') {
    return process.env.OPENSHIFT_MONGODB_DB_URL || null;
  } else if (platform === 'bluemix') {
    return process.env.VCAP_SERVICES.mongolab.uri || null;
  } else {
    // TODO - Heroku
    return 'mongodb://localhost/codetitlan-blog';
  }
};

module.exports = {
  env: 'production',
  app: {
      name: 'Codetitilan Application Server'
  },
  port: process.env.OPENSHIFT_INTERNAL_PORT || process.env.OPENSHIFT_NODEJS_PORT || process.env.VCAP_APP_PORT || 8080,
  hostname: process.env.HOSTNAME || 'localhost',
  ipaddr: process.env.OPENSHIFT_INTERNAL_IP || process.env.OPENSHIFT_NODEJS_IP || process.env.VCAP_APP_HOST || '127.0.0.1',
  host: process.env.HOST || process.env.VCAP_APP_HOST || 'localhost',
	mongo: {
    uri: makeDbString(detectPlatform)
  },

	terminatorHandlers: function() {
		//  Process on exit and signals.
    var signals = ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
                  'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'];
    var terminator = function(sig){
      if (typeof sig === 'string') {
         console.log('%s: Received %s - terminating ...',
                     Date(Date.now()), sig);
         process.exit(1);
      }
      console.warn('%s: Node server stopped.', Date(Date.now()) );
    };

    process.on('exit', function() { terminator(); });
    signals.forEach(function(sig) {
        process.on(sig, function() { terminator(sig); });
    });
  }

};
