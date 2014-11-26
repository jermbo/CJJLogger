var CJJLogger = {
	init : function () {
		return {
			logs       : [],
			showTypes  : [],
			showLevels : [],
			outputType : 'CONSOLE',
			enabled    : true,
			callback   : null,
			autoOutput : true,

			add : function ( type, message, source ) {
				var log = {
					type    : type,
					//level   : typeof level == 'undefined' ? 1 : level,
					message : message,
					source  : source
				};
				this.logs.push( log );
				if ( typeof this.callback == 'function' ) this.callback( log );
				if ( this.autoOutput ) this.output( log );
				return this;
			},

			setTypes : function ( types ) {
				if ( typeof types != 'undefined' ) this.showTypes = types;
				return this;
			},

			setOutputType : function ( outputType ) {
				if ( typeof outputType != 'undefined' ) this.outputType = outputType;
				return this;
			},

			setCallback : function ( callback ) {
				if ( typeof callback == 'function' ) this.callback = callback;
				return this;
			},

			getLogs : function () {
				return this.logs;
			},

			output : function ( log ) {
				var text;
				if ( this.showTypes.length > 0 ) {
					if ( this.showTypes.indexOf( log.type ) >= 0 ) {
						text = '[' + log.type.toUpperCase() + ']: ' + log.message + ' |  Line ' + log.source.number + ' in ' + log.source.file;
					}
				} else {
					text = '[' + log.type.toUpperCase() + ']: ' + log.message + ' |  Line ' + log.source.number + ' in ' + log.source.file;
				}


				switch ( this.outputType.toLowerCase() ) {
					case 'html':
						break;
					case 'console':
					default:
						if( text != undefined ) console.log( text );
						break;
				}


				//if ( this.enabled ) {
				//	for ( var i = 0; i < this.logs.length; i++ ) {
				//		var text;
				//
				//		if ( this.showTypes.length > 0 ) {
				//			if ( this.showTypes.indexOf( this.logs[ i ].type ) >= 0 ) {
				//				console.log( this.showTypes );
				//				text = '[' + this.logs[ i ].type.toUpperCase() + ']: ' + this.logs[ i ].message;
				//			}
				//		}// else {
				//		//	text = '[' + this.logs[ i ].type.toUpperCase() + ']: ' + this.logs[ i ].message;
				//		//}
				//	}
				//
				//	switch ( this.outputType.toLowerCase() ) {
				//		case 'html':
				//			break;
				//		case 'console':
				//		default:
				//			console.log( text );
				//			break;
				//	}
				//}
			},

			clear : function () {
				console.clear();
				this.logs = [];
				return this;
			}
		}
	}
};

