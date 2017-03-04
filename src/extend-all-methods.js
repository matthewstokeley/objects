(function(__) {

	/**
	 * extend all methods in a class
	 * @param  {[type]} obj        [description]
	 * @param  {[type]} middleware [description]
	 * @param  {[type]} context    [description]
	 * @return {[type]}            [description]
	 */

	var extendAllMethods = function extendAllMethods(oldClass, middleware) {

		if (!Array.isArray(middleware)) {
			console.log('middleware must be in an array');
		    return false;
		}

		if (typeof oldClass !== 'function') {
			console.log('class needs to be a function');
			return false;
		}

		var obj = function(options) { oldClass.call(this, options); };
		
		obj.prototype = Object.assign({}, oldClass.prototype, obj.prototype);
		obj.prototype = __.cloneObject(oldClass.prototype);

		context = this;

		/**
		 * [processMiddleware description]
		 * @param  {[type]} args [description]
		 * @return {[type]}      [description]
		 */
	    processMiddleware = function(args) {
		
			/**
			 * [description]
			 * @param  {[type]} method) 
			 * @return {[type]}         [description]
			 */
			middleware.forEach(function(method) { runMethod.call(this, method, args); }.bind(this));
			return this;
	    
	    };

	    /**
	     * [runMethod description]
	     * @param  {[type]} method [description]
	     * @param  {[type]} args   [description]
	     * @return {[type]}        [description]
	     */
	    runMethod = function(method, args) {
		    
		    if (typeof method !== 'function') {
				return false;
		    }
		    method.apply(this, args);
		    return this;
		    
	    };

	    /**
	     * [childMethod description]
	     * @param  {[type]} methods [description]
	     * @param  {[type]} prop    [description]
	     * @return {[type]}         [description]
	     */
	    childMethod = function(methods, prop) {
	    	return function() {
			    processMiddleware.call(this, arguments);
			    methods[prop].apply(this, arguments);
	    	};
		};

		var methods = {};

		/**
		 * [for description]
		 * @param  {[type]} var prop          in obj.prototype [description]
		 * @return {[type]}     [description]
		 */
	    for (var prop in obj.prototype) {
			if (obj.prototype.hasOwnProperty(prop)) {
			    if (typeof obj.prototype[prop] === 'function') {
					methods[prop] = obj.prototype[prop];
					obj.prototype[prop] = childMethod.call(context, methods, prop);
			    }
			}
	    }

    	return obj;
    	
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.extendAllMethods = extendAllMethods;

})(__);