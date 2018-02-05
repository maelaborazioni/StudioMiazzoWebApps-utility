/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"9BF6F30C-A016-4225-BCBE-AC73F45749D4",variableType:-4}
 */
var vClose = true;

/**
 * @properties={typeid:35,uuid:"6045AC5D-2AB0-43BE-AA02-28C5B2DF9B22",variableType:-4}
 */
var sortDone = false;

/**
 * @type {Continuation}
 * 
 * @properties={typeid:35,uuid:"CE867103-E451-4127-96D1-6ADE4F4A400D",variableType:-4}
 */
var dialogContinuation = null;

/**
 * @properties={typeid:35,uuid:"EF48A2C3-FF46-45A6-8BF0-D74BF7AC34C0",variableType:-4}
 */
var returnValue = null;

/**
 * @properties={typeid:35,uuid:"67E19E3C-23E3-46D2-8A35-D17304D8D134",variableType:-4}
 */
var status = globals.Status.BROWSE;

/**
 * @type {{
 * 			set_status: Array<Function>,
 * 			error: Array<Function>, 
 * 			warning: Array<Function>, 
 * 			success: Array<Function>, 
 * 			reset: Array<Function>, 
 * 			save_successful: Array<Function>, 
 * 			newRecord: Array<Function>
 *		}}
 *
 * @properties={typeid:35,uuid:"159489E4-191B-4CD9-9B45-396C50ADA9B1",variableType:-4}
 */
var listeners = { set_status: [], error: [], warning: [], success: [], reset: [], save_successful: [], newRecord: [] };

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D32ED462-E4AB-4118-95BD-89796DCA3C41"}
 */
var vStatusMessage = '';

/**
 * @properties={typeid:24,uuid:"B36ED615-9C28-4A67-8C24-0C3747DEFEFF"}
 */
function gotoEdit()
{
	_super.gotoEdit();
	globals.ma_utl_setReadOnlyFields(controller.getName(), true, true);
}

/**
 * @properties={typeid:24,uuid:"A0C8600D-67F4-4996-B08C-C7ECF6554EEC"}
 */
function gotoBrowse()
{
	_super.gotoBrowse();
	globals.ma_utl_unsetRequiredFields(controller.getName());
	globals.ma_utl_setReadOnlyFields(controller.getName(), false, true);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 * @param {Boolean} [svyNavBaseOnShow]
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"2B85FC8D-2752-4485-8AA6-C84458505F9B"}
 */
function onShowForm(firstShow, event, svyNavBaseOnShow)
{
	if(svyNavBaseOnShow)
		_super.onShowForm(firstShow, event);
	
	if(controller.readOnly)
		gotoBrowse();
	
	init(firstShow);
	
	plugins.busy.prepare();
}

/**
 * @param {Boolean} firstShow
 * 
 * @properties={typeid:24,uuid:"969E9035-0499-481A-9A95-B82C6B73A145"}
 */
function init(firstShow)
{
	if(!controller.readOnly)
		controller.focusFirstField();
}

/**
 * @param {JSFoundset} fs
 * @param {Function}   sortFunction
 * 
 * @properties={typeid:24,uuid:"B654B104-9D10-4348-877C-F6D1F1396C52"}
 */
function sort(fs, sortFunction)
{
	/**
	 * Keep track of sort to prevent unwanted processing, e.g. in onRecordSelection
	 */
	if(fs.getSize())
	   fs.sort(sortFunction);
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
 * @properties={typeid:24,uuid:"628B8DDB-800C-47C6-8212-935306C562E4"}
 */
function onHide(event)
{
	if(_super.onHide(event))
	{
	 	// Prevent the window from closing if necessary
		if(vClose)
		{
			// Check whether we're closing a dialog. If so, put it back into browse from edit
			var isInEdit = globals.nav.mode !== globals.Status.BROWSE || !controller.readOnly;
			if (isInEdit)
				globals.ma_utl_setStatus(globals.Status.BROWSE, event.getFormName());
			
			return true;
		}
	}
	
	return false;
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"FD81EC9F-52EC-495C-BE75-8A7ED90D514E"}
 */
function closeAndContinue(event)
{
	vClose = true;	
	globals.svy_mod_closeForm(event);
	
	// allow the user to use continuations if defined
	if(dialogContinuation && application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
		dialogContinuation(returnValue);
}

/**
 * Re-color the fields according to the status
 * 
 * @param {String} [mode] can be one of 'add', 'edit' or 'browse'
 *
 * @properties={typeid:24,uuid:"A749C97F-4407-4347-9E80-93E19B1A65E2"}
 */
function updateUI(mode)
{
	globals.svy_nav_setFieldsColor(controller.getName(), mode || status);
	globals.ma_utl_setReadOnlyFields(controller.getName(), (mode || status) !== globals.Status.BROWSE, true);
}

/**
 * @param {JSFoundset} 	fs
 * @param {String} 		program
 * @param {Boolean} 	[multiple]
 * @param {Function}	[validator]
 * 
 * @properties={typeid:24,uuid:"2D3F9AB4-D24E-44BB-A46C-CF6F64F75252"}
 */
function dc_save_validate(fs, program, multiple, validator)
{
	try
	{
		var success = _super.dc_save_validate(fs, program) !== -1;
		
		/**
		 * Validate all records, not just the current one, if requested
		 */
		if(success && multiple)
		{
			fs = fs.duplicateFoundSet();
			for(var r = 1; r <= fs.getSize() && success; r++)
			{
				fs.setSelectedIndex(r);
				if(_super.dc_save_validate(fs, program) === -1 || (validator && !validator(fs.getSelectedRecord(), program)))
					success = false;
			}		
		}
		
		return success ? 0 : -1;
	}
	catch(ex)
	{
		application.output(ex.message, LOGGINGLEVEL.ERROR);
		setStatusError(ex.message, ex.message);
		
		return -1;
	}
}

/**
 * @properties={typeid:24,uuid:"7C92CEAE-AF1F-455C-BE42-9D6899B96052"}
 */
function dc_cancel(_event, _triggerForm, _noConfirm)
{
	_super.dc_cancel(_event, _triggerForm, _noConfirm);
	resetStatus();
}

/**
 * @param {String} message
 * @param {String} [tooltip]
 * @param {Number} [hideAfterMs]
 * 
 * @properties={typeid:24,uuid:"DAA102E0-4D02-44CC-992C-222FBD1977E0"}
 */
function setStatusSuccess(message, tooltip, hideAfterMs)
{
	message = message || 'i18n:ma.msg.save_successful';
	tooltip = tooltip || 'i18n:ma.msg.save_successful';
	
	setStatus(message, tooltip, hideAfterMs || 5000);
	
	var successListeners = listeners.success;
	for(var l = 0; l < successListeners.length; l++)
		successListeners[l](message);
}

/**
 * @param {String} message
 * @param {String} [tooltip]
 * @param {Number} [hideAfterMs]
 * 
 * @properties={typeid:24,uuid:"758359E9-35B2-44FA-9C94-AEE170FD3D76"}
 */
function setStatusError(message, tooltip, hideAfterMs)
{
	setStatus(message, tooltip, hideAfterMs);
	
	var errorListeners = listeners.error;

	for(var l = 0; errorListeners && l < errorListeners.length; l++)
		errorListeners[l](new Error(message));
}

/**
 * @param {String} message
 * @param {String} [tooltip]
 * @param {Number} [hideAfterMs]
 *
 * @properties={typeid:24,uuid:"174151E6-2125-4EED-8939-0BBE1A1EFFB9"}
 */
function setStatusWarning(message, tooltip, hideAfterMs)
{
	setStatus(message, tooltip, hideAfterMs >= 0 ? hideAfterMs : 5000);
	
	var warningListeners = listeners.warning;
	for(var l = 0; l < warningListeners.length; l++)
		warningListeners[l](new Error(message));
}

/**
 * @param {String} message
 * @param {String} [tooltip]
 * @param {Number} [hideAfterMs]
 *
 * @properties={typeid:24,uuid:"1A801331-1133-4ED7-B280-4421BA9D756B"}
 */
function setStatusNeutral(message, tooltip, hideAfterMs)
{
	setStatus(message, tooltip, hideAfterMs >= 0 ? hideAfterMs : 5000);
	
	var statusListener = listeners.set_status;
	for(var l = 0; l < statusListener.length; l++)
		statusListener[l](new Error(message));
}

/**
 * @properties={typeid:24,uuid:"002D3DC0-C5AD-4CE3-B97B-67EED11FD7CF"}
 */
function resetStatus()
{
	setStatusNeutral('','');
	
	var resetListeners = listeners.reset;
	for(var l = 0; l < resetListeners.length; l++)
		resetListeners[l]();
}

/**
 * @param {String} message
 * @param {String} [tooltip]
 * @param {Number} [hideAfterMs]
 * 
 * @properties={typeid:24,uuid:"32268F3B-4100-4DBC-9C3B-0B3B1BCD1684"}
 */
function setStatus(message, tooltip, hideAfterMs)
{
	//get i18n value if i18n is used
	if(utils.stringPatternCount(message,'i18n:') > 0)
		message = i18n.getI18NMessage(message.replace('i18n:', ''));
	
	if(utils.stringPatternCount(tooltip,'i18n:') > 0)
		tooltip = i18n.getI18NMessage(tooltip.replace('i18n:', ''));
	
	vStatusMessage = message;
	
	var jobname = 'reset_status_job';
	plugins.scheduler.removeJob(jobname);
	
	if(hideAfterMs && hideAfterMs > 0)
	{
		var startDate = new Date();
			startDate.setMilliseconds(startDate.getMilliseconds() + hideAfterMs);
			
		plugins.scheduler.addJob(jobname, startDate, resetStatus, 1e9, 0, null, null);
	}
}

/**
 * @param 				requiredFields
 * @param {JSFoundset} 	fs
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"781E3815-4A0A-4B17-A32D-45F980B69537"}
 */
function validateRequiredFields(requiredFields, fs)
{
	if(!requiredFields || !fs)
		return true;
	
	var msg   = globals.nav.validation_msg = '';
	var error = false;
	for(var r = 1; r <= fs.getSize(); r++)
	{
		var record = fs.getRecord(r);
		
		for(var rf in requiredFields)
		{
			var found 		 = false;
			var dataprovider = rf;
			// Don't consider 0 or false as not entered
			if (record[dataprovider] !== 0 && record[dataprovider] !== false && !record[dataprovider]) 
			{
				//field is not entered				
				msg += requiredFields[rf].original_dp + i18n.getI18NMessage('svy.fr.dlg.is_required') + '\n';
				error = found = true;
			}
		}
		
		if(found)
			msg += '\n';
	}
	
	if(error)
	{
		globals.nav.validation_msg = msg;
		globals.ma_utl_showErrorDialog(globals.nav.validation_msg);
	}
	
	return !error;
}

/**
 * @properties={typeid:24,uuid:"76123371-0EB6-47C0-AC0B-558FB851BCFA"}
 */
function sortFunction(first, second)
{
	if(first < second)
		return -1;
	else
	if(first > second)
		return 1;
	else
		return 0;
}

/**
 * @properties={typeid:24,uuid:"A35EF5E8-7C00-499B-A3E4-2C5B992F8074"}
 */
function registerListener(events, listener)
{
	for(var e = 0; events && e < events.length; e++)
	{
		var event = events[e];
		
		if(!listeners[event])
			throw new Error('Event ' + event + ' does not exist. Available options are: ', globals.ma_utl_getObjectPropertiesNames(listeners).join(', '));
	
		if(listener && listeners[event].indexOf(listener) < 0 && listeners[event].push(listener) > 0)
			return true;
	}
	
	return false;
}

/**
 * @properties={typeid:24,uuid:"CD8BC369-BE2F-4AC4-99A5-7C9886BE5D6F"}
 */
function logAndShowGenericError(error)
{
//	globals.ma_utl_logError(error);
	setStatusError(error.message || 'i18n:ma.err.generic_error');
}

/**
 * TODO generated, please specify type and doc for the params
 * @param error
 *
 * @properties={typeid:24,uuid:"A7E03B17-071A-4B51-B79C-111E404A102F"}
 */
function showGenericError(error)
{
	setStatusError(error.message || 'i18n:ma.err.generic_error');
}

/**
 * @properties={typeid:24,uuid:"25EA36F4-289B-404E-A5A9-FD3820A5ECD2"}
 */
function dc_save(event, triggerForm, forceForm)
{
	var result = _super.dc_save(event, triggerForm, forceForm);
	if (result !== -1)
	{
		var saveListeners = listeners.success;
		for(var l = 0; l < saveListeners.length; l++)
			saveListeners[l]();
	}
	
	return result;
}

/**
 * @param {JSFoundset} [fs]
 * 
 * @properties={typeid:24,uuid:"8A2BC78A-ED5A-460F-B264-7923CB90FF8B"}
 */
function filterData(fs)
{
	fs && fs.loadAllRecords() && fs.sort(sortFunction);
}

/**
 * @param {JSFoundset} [fs]
 * 
 * @properties={typeid:24,uuid:"27EF9B37-FF84-43DD-B9FF-B0512E3D5A8D"}
 */
function unfilterData(fs)
{
	if(fs && fs.loadAllRecords())
		sortFoundset(fs, sortFunction);
	
	return fs;
}

/**
 * @param {JSFoundset} fs
 * @param {Function} [_sort]
 *
 * @properties={typeid:24,uuid:"C47A4CEE-8017-484D-96CB-433BA40AFFA3"}
 */
function sortFoundset(fs, _sort)
{
	if(fs && fs.getSize() > 0)
		fs.sort(sort ? sort : sortFunction);
	
	return fs;
}