(function(__) {

    /**
     * [extend description]
     * 
     * similiar to extends a method with another method
     * that accepts different arguments
     * 
     * @param  {[type]} method     [description]
     * @param  {[type]} middleware [description]
     * @param  {[type]} context    [description]
     * @return {[type]}            [description]
     * 
     */

    var extendNewMethod = function(method, extension, extensionArguments, context) {
 
    	if (!Array.isArray(extensionArguments)) {
    	    throw 'the extension arguments must be in an array';
    	}

        if (typeof method !== 'function') {
            return false;
        }

        if (typeof extension !== 'function') {
            return false;
        }
    	
    	/**
    	 * [runMiddleware description]
    	 * @return {[type]} [description]
    	 */
    	this.runExtension = function() {
            extension.apply(context, extensionArguments);
    		return this;
        };

        /**
         * [runMethod description]
         * @param  {[type]} method [description]
         * @return {[type]}        [description]
         */
        this.runMethod = function() {
        	method.apply(context, arguments);
        	return this;
        };

        /**
         * [description]
         * @return {[type]} [description]
         */
    	return function() {
    		context.runMethod().runExtension();
    	};

    };


    if (!__ || __ === 'undefined') {
        __ = {};
    }

    __.extendNewMethod = extendNewMethod;

})(__);
