/**
 * @properties={typeid:35,uuid:"4F8EB90D-3178-48E1-BED8-7B84FC383CDD",variableType:-4}
 */
var ArgumentError = (function()
{
	var _class = function(message, arg)
	{
		this.message = message;
		this.arg     = arg;
	};
	
	_class.prototype = Error.prototype;
	_class.prototype.toString = function()
	{
		return scopes.string.Format('@0: @1', this.message, this.arg);
	}
	
	return _class;
})();

/**
 * @properties={typeid:35,uuid:"417D8EA4-0A7D-47E7-A316-71CF6DB8E9B7",variableType:-4}
 */
var NullReferenceError = (function()
{
	var _class = function(name)
	{
		this.arg = name;
	};
	
	_class.prototype = Error.prototype;
	_class.prototype.toString = function()
	{
		return scopes.string.Format('Null reference: @1', this.message, this.name);
	}
	
	return _class;
})();

/**
 * @properties={typeid:35,uuid:"CA14EDFF-EF97-4F89-A1A9-B19589CB8C67",variableType:-4}
 */
var ConnectionError = (function()
{
	var _class = function(message, url)
	{
		this.message = message;
		this.url     = url;
	};
	
	_class.prototype = Error.prototype;
	_class.prototype.toString = function()
	{
		return scopes.string.Format('@0: @1', this.message, this.url);
	}
	
	return _class;
})();

/**
 * Return a friendly string for the error provided, to show to the user. Useful when handling exceptions.
 * 
 * @param {String} message	the error message
 *
 * @properties={typeid:24,uuid:"41D281C6-87A5-42DF-9752-CB2002B7FF15"}
 */
function FormatError(message)
{
	return i18n.getI18NMessage('ma.err.exception', [message]);
}