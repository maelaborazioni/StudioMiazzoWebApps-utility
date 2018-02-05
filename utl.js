/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C38E7CDE-73BE-408C-AA52-C0E3F4593CDB"}
 */
var TEMP_DIR = '%TEMP%';

/**
 * @type {JFTPclient}
 * 
 * @properties={typeid:35,uuid:"9F45478F-DF0A-4DE1-8E1B-76DFDE64C269",variableType:-4}
 */
var ftpClient = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5B2E4C81-B7D4-4CEC-A470-053BF2E6C52A"}
 */
var REPORT_DIR = 'C:/Report/';

/**
 * @properties={typeid:35,uuid:"2ED85699-186C-4CBA-99B0-57E5154D623D",variableType:-4}
 */
var ConversionError = function(message){ this.name = 'ConversionError'; this.prototype = Error.prototype; }; 

/**
 * @properties={typeid:35,uuid:"6703FDEF-0A6F-4C65-B46D-100B00CE57E5",variableType:-4}
 */
var ObjectExtensions =
		function(){
			if(!Object.prototype.isEmpty)
				Object.prototype.isEmpty = function(){ return globals.areEqual(this, { }); };			
		};
		
/**
 * @properties={typeid:35,uuid:"3AB97F76-A927-4774-8861-DC6DBDC8162E",variableType:-4}
 */
var Dictionary = function(TKey, TValue)
{
	var _ = function(_TKey, _TValue)
	{
		this.Dict   = new Object();
		this.TKey   = _TKey;
		this.TValue = _TValue;
	};
	
	_.prototype.Get = function(key)
	{
		return this.Dict[key];
	}
	
	_.prototype.Set = function(key, value)
	{
		if(!(key instanceof this.TKey && value instanceof this.TValue))
			throw new Error(scopes.string.Format('Type error: expected <@0, @1>, found <@2, @3>', this.TKey, this.TValue, key, value));
		
		this.Dict[key] = value;
	}
	
	return _(TKey, TValue);
};

/**
 * @properties={typeid:24,uuid:"D91549A6-0F16-4B27-A14A-AE799B3E889F"}
 */
function IsWebClient()
{
	return application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT;
}

/**
 * Converte la data fornita come parametro in un intero che rappresenta una timbratura
 * nel formato <code>yyyyMMddHHMM</code>. Se presenti, i parametri <strong>hh</strong> ed <strong>mm</strong>
 * hanno precedenza sulle ore ed i minuti della data.
 * <p>
 * 	<pre>
 *  var date = new Date(2014, 01, 01, 08, 30);
 *  var timbratura1 = scopes.utl.FromDateToTimbratura(date); // 201401010830
 *  var timbratura2 = scopes.utl.FromDateToTimbratura(date, 11, 45); // 201401011145
 *  </pre>
 * </p>
 * 
 * @param {Date}   date
 * @param {Number} [hh]
 * @param {Number} [mm]
 * 
 * @return {Number} l'intero che rappresenta la timbratura corrispondente ai parametri forniti
 * 
 * @throws {Error} se la data è null
 * @throws {Error} se i minuti sono specificati senza che lo siano anche le ore
 * @throws {Error} se le ore od i minuti non rientrano nell'intervallo consentito (dalle 00.00 alle 23.59)
 *
 * @properties={typeid:24,uuid:"511C0721-A7AB-4DCE-89D2-DD6572BB481A"}
 */
function FromDateToTimbratura(date, hh, mm)
{
	if(!date)
		throw new ConversionError("date cannot be null");
	if(mm && !hh)
		throw new ConversionError("if minutes are provided, hours need to be specified too");
	if(hh < 0 || hh > 23 || mm < 0 || mm > 59)
		throw new ConversionError("hours or minutes out of range: " + hh + "." + mm);
	
	hh = hh || date.getHours();
	mm = mm || date.getMinutes();
		
	return date.getFullYear() * 1e8 + (date.getMonth() + 1) * 1e6 + date.getDate() * 1e4 + hh * 1e2 + mm;
}

/**
 * Moves to the next element in the tab sequence. If the last element, moves to the first.
 * 
 * @param{String} formName
 * @param {JSEvent} event
 * 
 * @properties={typeid:24,uuid:"E7911D60-F3E5-495A-B03A-907A54F4704C"}
 */
function moveFocusToNextElement(formName, event)
{
	if(arguments.length == 1 && arguments[0] instanceof JSEvent)
		event = arguments[0];
	
	if(!event)
		return -1;
	
	var form = forms[formName || event.getFormName()];
	if(!form)
		return -1;
	
	var sequence = form.controller.getTabSequence();
	var elementIndex = sequence.indexOf(event.getElementName());
	if (elementIndex > -1)
	{
		// if the last element, move to the first
		var nextElementIndex = (elementIndex + 1) % sequence.length;
		form.controller.focusField(sequence[nextElementIndex], true);
		
		return nextElementIndex;
	}
	
	return -1;
}

/**
 * @param {{ host: String, username: String, password: String }} params
 * 
 * @return {JFTPclient}
 * 
 * @properties={typeid:24,uuid:"A8BBD190-458E-4CCA-B584-BD73B2E16A02"}
 */
function GetFTPClient(params)
{
	var host = params.host.replace('ftp://', '');
	if (host[host.length - 1] == '/')
		host = host.substr(0, host.length - 1);
	
	if(!ftpClient || ftpClient.host != params.host || ftpClient.userName != params.username)
		ftpClient = plugins.it2be_ftp.createJFTPclient(host, params.username, params.password);
	
	return ftpClient;
}

/**
 * Returns the elements which belongs to the difference between the left and righty, as a new array
 * 
 * @param {Array} left
 * @param {Array} right
 *
 * @properties={typeid:24,uuid:"1CFE5498-0346-4A17-BF75-1655399F9E1C"}
 */
function ArrayDifference(left, right)
{
	if(!left)
		return [];
	
	if(!right)
		return left;
	
	return left.filter(function(_){ return right.indexOf(_) == -1; });
}

/**
 * Returns the indexes, from the first array, of elements which belongs to the difference between left and right, as a new array
 * 
 * @param {Array} left
 * @param {Array} right
 *
 * @properties={typeid:24,uuid:"C3B11E0E-61AC-45F9-B7FC-0B0A427EC662"}
 */
function IndexesFromArrayDifference(left, right)
{
	if(!left)
		return [];
	
	return ArrayDifference(left, right).map(function(_){ return left.indexOf(_); });
}

/**
 * Returns a string to use in find mode to search for dates between <code>from</code> and <code>to</code>
 * 
 * @param {Date}    from
 * @param {Date}    to
 * @param {String} [format]
 *
 * @properties={typeid:24,uuid:"6FE6A5C1-0F76-479D-AF0F-2DFBA3DBA793"}
 */
function FormatForFind(from, to, format)
{
	if(!from || !to)
		throw new Error('Both [from] and [to] must be specified');
	
	format = format || globals.ISO_DATEFORMAT;
	
	return '#' + utils.dateFormat(from, format) + '...' + utils.dateFormat(to, format) + '|' + format;
}

/**
 * Vedi <a href="https://javamail.java.net/nonav/docs/api/com/sun/mail/smtp/package-summary.html">https://javamail.java.net/nonav/docs/api/com/sun/mail/smtp/package-summary.html</a> per un elenco delle proprietà supportate
 * 
 * @properties={typeid:24,uuid:"C0734362-9B93-4750-ABE5-758D0D69825C"}
 */
function GetSmtpProperties()
{
	var properties = 
	[
		'mail.smtp.host=smtpsend.studiomiazzo.it',
		'mail.smtp.port=25',
//		'mail.smtp.username=davide.bovio@studiomiazzo.it',
//		'mail.smtp.password=Pas$0729',
		'mail.smtp.auth=false',
		'mail.smtp.starttls.enable=false'		
	];
	
	return properties;
}

/**
 * @param {String} str
 *
 * @properties={typeid:24,uuid:"DA9726DA-6091-4A37-BD59-18DAE0FC2341"}
 */
function Trim(str)
{
	if(str)
		return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	
	return '';
}

/**
 * Pad a string from the left, until the specified length and with the specified char
 * 
 * @param {String} str the string to pad
 * @param {Number} length the number of characters of the final string
 * @param {String} [character=space] the character to use when padding
 *
 * @properties={typeid:24,uuid:"3B3F94B9-11F0-4436-81C1-81EA0F278E1D"}
 */
function PadLeft(str, length, character)
{
	character = character || ' ';
	return (new Array(1 + length - str.length).join(character)) + str;
}

/**
 * Pad a string from the left, until the specified length and with the specified char
 * 
 * @param {String} str the string to pad
 * @param {Number} length the number of characters of the final string
 * @param {String} [character=space] the character to use when padding
 *
 * @properties={typeid:24,uuid:"97AF027A-396F-409E-BA55-9C0F28FF30D4"}
 */
function PadRight(str, length, character)
{
	character = character || ' ';
	return str + (new Array(1 + length - str.length).join(character));
}

/**
 * Returns true if the given object is the empty object '{ }', false otherwise.
 * Note that a null or undefined reference returns false.
 * 
 * @param obj
 *
 * @properties={typeid:24,uuid:"D00953CC-2957-44A8-9E9A-75CAB2DE46AD"}
 */
function IsEmpty(obj)
{
	return obj && globals.areEqual(obj, { }); 
}

/**
 * Prints an array as the string [first, second, third, ..., last]
 * 
 * @param  {Array} array	the array to print
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"E9BEFDDF-C5DD-42B6-8463-5A1972566BA2"}
 */
function PrintArray(array)
{
	if(globals.ma_utl_isNullOrEmpty(array))
		return "[]";
	
	return scopes.string.Format("[@0]", array.join(", "));
}
