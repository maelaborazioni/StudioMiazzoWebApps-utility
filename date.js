/**
 * Returns an array of dates for the provided month, e.g. 1, 2, ... 31.
 * 
 * @param {Date} month
 * 
 * @return {Array<Number>}
 *
 * @properties={typeid:24,uuid:"77B6D998-C76E-4D23-BD9A-A706DE327F04"}
 */
function GetDates(month)
{
	var dates = [];
	for(var d = 1; d <= LastDayOfMonth(month).getDate(); d++)
		dates.push(d);
	
	return dates;
}

/**
 * Returns the date part of the given object, or a new one representing the current date if none is provided.
 * The original object is left untouched, and a new one is returned instead.
 * <pre>
 * var date = utils.parseDate('2015-01-01 12:34:56.789', 'yyyy-MM-dd HH:mm:ss.SSS');
 * 		
 * var datePart = scopes.date.GetDate(date);
 * utils.dateFormat(date, 'yyyy-MM-dd HH:mm:ss.mmm');  // 2015-01-01 12:34:56.789
 * utils.dateFormat(datePart, 'yyyy-MM-dd HH:mm:ss.mmm');  // 2015-01-01 00:00:00.000
 * </pre>
 * 
 * @param {Date} [date]
 * 
 * @return {Date}
 * 
 * @properties={typeid:24,uuid:"922E7822-5299-43F4-B776-612D238C1494"}
 */
function GetDatePart(date)
{
	var returnDate;
	
	if(!date)
		returnDate = new Date();
	else
		returnDate = new Date(date);
		
	returnDate.setHours(0, 0, 0, 0);
		
	return returnDate;
}

/**
 * @properties={typeid:24,uuid:"FAA71268-DDEF-46C2-B12E-4F078333EF7F"}
 */
function GetDateTime()
{
	return new Date();
}

/**
 * Returns the number of days in the given month.
 * 
 * @param {Number} year		the four-digits year
 * @param {Number} month	the month (1-12)
 * 
 * @throws {scopes.error.ArgumentError}  if the year is negative or greater than 9999
 * @throws {scopes.error.ArgumentError}  if the month is not between 1 and 12
 *
 * @properties={typeid:24,uuid:"F439A50D-E3E2-4643-BCF1-E8AF850580DE"}
 */
function DaysInMonth(year, month)
{
	if(month < 1 || month > 12)
		throw new scopes.error.ArgumentError(scopes.string.Format('Month must be between 1 and 12 but was @0', month), "month");
	
	if(year < 0 || year > 9999)
		throw new scopes.error.ArgumentError(scopes.string.Format('Year must be between 0 and 9999, but was @0', year), "year");
	
	var date = LastDayOfMonth(new Date(year, month - 1, 1));
	
	return date.getDate();
}

/**
 * Returns the string representing the day of week, with the specified number of letters.
 * If the second parameter is not specified, the full form is returned.
 * 
 * @param {Date} 	date
 * @param {Number} 	[numberOfLetters]
 * 
 * @return {String}
 *
 * @properties={typeid:24,uuid:"40291F78-782F-46FA-8833-BAEA12DA5C69"}
 */
function DayOfWeek(date, numberOfLetters)
{
	var dayOfWeek = utils.dateFormat(date, 'EEEE');
	if(numberOfLetters)
		return dayOfWeek.slice(0, numberOfLetters);
	else
		return dayOfWeek;
}

/**
 * Returns the string representing the number of the day within the month, prepended with 0 if necessary
 * 
 * @param {Date} 	date
 * 
 * @return {String}
 *
 * @properties={typeid:24,uuid:"32970793-8C66-4828-85A4-E3DA764AF49D"}
 */
function DayNumber(date)
{
	var toReturn;
	if(date.getDate() < 10)
		toReturn = '0' + date.getDate();
	else
		toReturn = date.getDate().toString();
	
	return toReturn;
}

/**
 * Returns a date object representing the last day of month for the provided argument.
 * 
 * @param {Date} date
 *
 * @properties={typeid:24,uuid:"3ECE61F0-22D3-44D8-B4FE-1109D9F6FFFC"}
 */
function LastDayOfMonth(date)
{
	var lastDayOfMonth = new Date(date);
		lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1);
		lastDayOfMonth.setDate(0);
	
	return GetDatePart(lastDayOfMonth);
}

/**
 * Returns a date object representing the first day of month for the provided date.
 * 
 * @param {Date} date
 *
 * @properties={typeid:24,uuid:"E4AE4D46-C10F-4A3A-9437-A6B0A0A193FF"}
 */
function FirstDayOfMonth(date)
{
	var firstDayOfMonth = new Date(date);
		firstDayOfMonth.setDate(1);
	
	return GetDatePart(firstDayOfMonth);
}

/**
 * @param {Date} date
 *
 * @properties={typeid:24,uuid:"50F15443-F117-4101-A778-0020926667E8"}
 */
function AddDay(date)
{
	return AddDays(date, 1);
}

/**
 * Add or subtruct days from a date
 * 
 * @param {Date} date
 * @param {Number} numberOfDays
 * 
 * @return {Date} a new date object
 *
 * @properties={typeid:24,uuid:"0B66D681-D453-4DB6-80F5-625CF26441E7"}
 */
function AddDays(date, numberOfDays)
{
	var toReturn = new Date(date);
		toReturn.setDate(date.getDate() + numberOfDays);
		
	return toReturn;
}

/**
 * Add a single month to a date
 * 
 * @param {Date} date
 * 
 * @return {Date} a new date object
 *
 * @properties={typeid:24,uuid:"04AC1B0A-D2B2-4061-804A-F075C9E4478C"}
 */
function AddMonth(date)
{
	return AddMonths(date, 1);
}

/**
 * Add or subtract months from a date
 * 
 * @param {Date} date
 * @param {Number} numberOfMonths
 * 
 * @return {Date} a new date object
 *
 * @properties={typeid:24,uuid:"AFCCF609-F00B-4EC2-A462-DC4461FA79A5"}
 */
function AddMonths(date, numberOfMonths)
{
	var toReturn = new Date(date);
		toReturn.setMonth(date.getMonth() + numberOfMonths);
		
	return toReturn;
}

/**
 * Set the specified day of month for the provided date, and return a new object
 * 
 * @param {Date}   	date
 * @param {Number}	dayOfMonth
 * 
 * @return {Date} a new date object
 *
 * @properties={typeid:24,uuid:"1EDC08AA-36E8-48A9-82BF-595BCA3DEFE0"}
 */
function SetDayOfMonth(date, dayOfMonth)
{
	var toReturn = new Date(date);
		toReturn.setDate(dayOfMonth);
		
	return toReturn;
}

/**
 * Returns an interger of the form yyyyMM
 * 
 * @param {Date} date
 *
 * @properties={typeid:24,uuid:"45D72A18-4C58-4A2F-BFAA-938CF0DC361F"}
 */
function ToIntMonth(date)
{
	if(!date)
		return 0;
	
	return (date.getFullYear() * 1e2) + (date.getMonth() + 1);
}

/**
 * Returns a date from a month represented as an integer of the form yyyyMM
 * 
 * @param month
 *
 * @properties={typeid:24,uuid:"00D30FC6-28B4-4835-83AB-A8C46112288C"}
 */
function FromIntMonth(month)
{
	return month && new Date(month / 100, (month % 100) - 1);
}

/**
 * @param {Number} period	the integer representing the month in the format yyyyMM
 * 
 * @return {Number} the year part (1-12)
 *
 * @properties={typeid:24,uuid:"F6A45C01-FB93-4648-9EE1-DA6CCD055E30"}
 */
function GetYear(period)
{
	return globals.trunc(period / 100);
}

/**
 * @param {Number} period	the integer representing the month in the format yyyyMM
 * 
 * @return {Number} the month part (1-12)
 *
 * @properties={typeid:24,uuid:"2B79C147-D563-4A21-BA51-3E31835A790F"}
 */
function GetMonth(period)
{
	return globals.trunc(period % 100);
}

/**
 * Ritorna il nome del giorno nel formato per l'indicazione in giornaliera
 * 
 * @param {Date} day
 * @type {String}
 * 
 * @properties={typeid:24,uuid:"8F4DD225-1A8B-4A83-84F8-49544F1D494F"}
 */
function GetDayName(day){

	/** @type {Date} */
	var dgiorno = day 
	
    switch (dgiorno.getDay()){
     
        case 0 : return 'DO'
                 break
        case 1 : return 'LU'
                 break
        case 2 : return 'MA'
                 break                      
        case 3 : return 'ME'
                 break
        case 4 : return 'GI'
                 break                      
        case 5 : return 'VE'
                 break                      
        case 6 : return 'SA'
                 break                      
        default : return 'default'
    }
}