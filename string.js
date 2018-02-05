/**
 * Performs an index(0)-based substitution of a formatted string with
 * the provided arguments, similar to .Net <code>string.Format</code> (https://msdn.microsoft.com/en-us/library/system.string.format(v=vs.110).aspx)
 * <p>The format uses the character '@' as a placeholder, followed by the
 * index of the corresponding parameter. For example, the call to
 * <code>scopes.string.Format("string with a &#64;0, &#64;1, and &#64;2 parameter", "1st", "2nd", "3rd")</code>
 * would produce <code>"string with a 1st, 2nd and 3rd parameter"</code>.</p>
 * 
 * @param {String} string the formatted string
 * @param {...*} [args] a vararg list of arguments which values would be substituted
 *
 * @properties={typeid:24,uuid:"E49B0E19-FC31-4EA0-8E06-8310E63DA943"}
 */
function Format(string)
{
	if(!string)
		return string;
	
	var args = Array.prototype.slice.call(arguments, 1);
	var replacedString = string;

	args.forEach(function(arg, index)
	{
		var placeHolderWithFormatRegex = new RegExp("@" + index + "(?::((?:\\:|[^:])*?):)?", "ig");	// matches @0:<format>:
		
		// If the argument being substituted is a date, format it according to the format before 
		// actually replacing it.
		/** @type {String} */
		var   match = placeHolderWithFormatRegex.exec(replacedString);
		while(match)
		{
			var formattedArg = arg;
			// Dates can specify a format
			if(arg instanceof Date && match[1])
				formattedArg = utils.dateFormat(arg, match[1].replace("\:", ":"));
				
			// Perform the replacement and search for the next match
			replacedString = replacedString.replace(match[0], formattedArg.toString());
			
			// Search for the next match
			match = placeHolderWithFormatRegex.exec(replacedString);
		}
	});
	
	return replacedString;
}

/**
 * @param {String} str
 * @param {Number} length
 * @param {String} [paddingChar]
 *
 * @properties={typeid:24,uuid:"788316F6-E56D-4984-836B-C2B589A1F93B"}
 */
function PadLeft(str, length, paddingChar)
{
	if(!(str instanceof String))
		str = str.toString();
	
	paddingChar = paddingChar || ' ';
	
    while (str.length < length * paddingChar.length)
        str = paddingChar + str;
    
    return str;
}
 
/**
 * @param {String} str
 * @param {Number} length
 * @param {String} [paddingChar]
 *
 * @properties={typeid:24,uuid:"548103E8-D0F7-44AD-B26B-E30952614E62"}
 */
function PadRight(str, length, paddingChar) 
{
	if(!(str instanceof String))
		str = str.toString();
	
	paddingChar = paddingChar || ' ';
	
	// if paddingChar is longer than one character, consider it as a single char
    while (str.length < length * paddingChar.length)
        str = str + paddingChar;
    
    return str;
}