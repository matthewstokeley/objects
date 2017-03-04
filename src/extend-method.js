(function(__) {

    /**
     * [extend description]
     * 
     * similiar to chaining methods, this function allows methods to utilize
     * common utility functions without manually adding them to the class or 
     * calling them from within class methods. 
     * 
     * @param  {[type]} method     [description]
     * @param  {[type]} middleware [description]
     * @param  {[type]} context    [description]
     * @return {[type]}            [description]
     * 
     */

    var extendMethod = function(method, middleware, context) {

    	if (!Array.isArray(middleware)) {
    	   console.log('the middleware functions must be in an array');
    	}

        if (!context) {
            context = this;
        }

        /**
         * [description]
         * @return {[type]} [description]
         */
    	return function() {
            var args = arguments;

            /**
             * [runMiddleware description]
             * @return {[type]} [description]
             */
            this.runMiddleware = function() {
                middleware.forEach(this.runMethod.bind(this));
                return this;
            };

            /**
             * [runMethod description]
             * @param  {[type]} method [description]
             * @return {[type]}        [description]
             */
            this.runMethod = function(method) {
                
                if (typeof method !== 'function') {
                    return false;
                }
                
                //
                method.apply(context, args);
                return this;
            
            };


    		this.runMiddleware();
            this.runMethod(method);
    	};

    };


    if (!__ || __ === 'undefined') {
        __ = {};
    }

    __.extendMethod = extendMethod;

})(__);
