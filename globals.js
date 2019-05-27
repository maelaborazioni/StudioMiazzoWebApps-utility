/**
 * @properties={typeid:35,uuid:"CB0948BC-443B-4458-97D8-B184098CCD74",variableType:-4}
 */
var terminator = (APPLICATION_TYPES.WEB_CLIENT == application.getApplicationType() ? new Continuation() : null);

/**
 * @properties={typeid:35,uuid:"8D5A22CE-E594-448B-ABC7-6B42C4665849",variableType:-4}
 */
var customer_db_name = null;

/**
 * String constants for dialogs. Values are properties' name in lowercase.
 * 
 * @properties={typeid:35,uuid:"AA2B54C2-90AB-4284-BC2B-C39BD1C5D3CA",variableType:-4}
 */
var Dialog = 
{
	INFO: 'info',
	WARNING: 'warning',
	ERROR: 'error',
	QUESTION: 'question'
};

/**
 * @properties={typeid:35,uuid:"C5B54D62-0BF2-4341-ABA8-B73909B34D7D",variableType:-4}
 */
var Event =
{
	SET_STATUS		: 'set_status',
	ERROR			: 'error',
	WARNING			: 'warning',
	SUCCESS			: 'success',
	RESET			: 'reset',
	SAVE_SUCCESSFUL	: 'save_successful'
};

/**
 * @properties={typeid:35,uuid:"4CB50A4B-2152-4223-B41E-06593B5AD291",variableType:-4}
 */
var FieldType = 
{
	BOOLEAN		: 'BOOLEAN', 
	STRING		: 'STRING', 
	TEXT		: 'TEXT', 
	INTEGER		: 'INTEGER', 
	TRISTATE	: 'TRISTATE', 
	DATETIME	: 'DATETIME',
	NUMBER		: 'NUMBER'
};

/**
 * @properties={typeid:35,uuid:"B2B641CB-5C3B-48D1-ADE3-E8EA36B14D1F",variableType:-4}
 */
var JSObjectType = 
{
	OBJECT		: 'object', 
	STRING		: 'string', 
	NUMBER		: 'number', 
	BOOLEAN		: 'boolean'
};

/**
 * @properties={typeid:35,uuid:"980AC86D-435B-4438-A35B-E6A0C0F085CB",variableType:-4}
 */
var Status = { BROWSE: 'browse', EDIT: 'edit', ADD: 'add' };

/**
 * @properties={typeid:35,uuid:"D1BE46B7-991F-447F-B3B3-DBB6F9918409",variableType:-4}
 */
var OrderType = { ASC: 1, DESC: -1 };

/**
 * @properties={typeid:35,uuid:"9CDE1870-D014-4184-9212-08BD2B9AF826",variableType:-4}
 */
var FileFormats = { PDF: 0, EXCEL: 1, CSV: 2 };

/**
 * @properties={typeid:35,uuid:"7FFE7F12-CE5B-46B9-9B32-232BE37DED02",variableType:-4}
 */
var MimeTypes =
{ 
	 PDF	: 'application/pdf'
	,EXCEL	: 'application/vnd.ms-excel'
	,ZIP	: 'application/zip'
	,CSV	: 'text/csv'
	,GENERIC: 'binary/octet-stream' 
};

/**
 * An object containing extensions for the most common file types. The strings include the dot.
 * 
 * @properties={typeid:35,uuid:"E3B73038-6B03-42AC-8D57-C59E90DE8DE3",variableType:-4}
 */
var FileExtension =
{
	PDF : '.pdf',
	RTF : '.rtf',
	TXT : '.txt',
	TRK : '.trk'
}

/**
 * Costanti di confronto:
 * <ul>
 * 	<li>LT: minore</li>
 * 	<li>LE: minore o uguale</li>
 * 	<li>EQ: uguale</li>
 * 	<li>GE: maggiore o uguale</li>
 * 	<li>GT: maggiore</li>
 *  <li>NE: diverso da</li>
 * 	<li>IN: contenuto in (un array di valori)</li>
 * </ul>
 *
 * @properties={typeid:35,uuid:"438D0FB3-90EB-4598-8601-72C50B95104A",variableType:-4}
 */
var ComparisonOperator = 
{
	/**
	 * Uguale (=)
	 */
	EQ: '=',
	/**
	 * Diverso (!=)
	 */
	NE: '!=', 
	/**
	 * Minore (<)
	 */
	LT: '<', 
	/**
	 * Minore o uguale (<=)
	 */
	LE: '<=', 
	/**
	 * Maggiore di (>)
	 */
	GT: '>',  
	/**
	 * Maggiore o uguale (>=)
	 */
	 GE: '>=',
	/**
	 * Contenuto in (IN)
	 */
	IN: 'IN',
	/**
	 * Non contenuto in (NOT IN)
	 */
	NIN: 'NOT IN'
};

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0949F933-156A-4D53-961A-4EF3C7C861B9"}
 */
var MA_LOG = 'ma_log';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3462D7D5-196B-4D54-A949-85844D3A731C"}
 */
var DIR_PERCORSO_TRACCIATO = 'F:\\';

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"01DB4DDA-F6AC-4B5D-970F-689EE297EB63",variableType:8}
 */
var DEFAULT_TIMEOUT = 300000;

/**
 * @private 
 * 
 * @type {plugins.http.HttpClient}
 * 
 * @properties={typeid:35,uuid:"BBC9771C-8CE8-4FF3-9788-61ACFE31961C",variableType:-4}
 */
var httpClient = null;

/**
 * @type {plugins.headlessclient.JSClient}
 * 
 * @properties={typeid:35,uuid:"8713C5CF-08B8-4702-841A-8A08AB217250",variableType:-4}
 */
var hclient = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AE965AF5-9B61-477E-989D-BEF83739B6C9"}
 */
var SERVER_TMPDIR = 'server/work/';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E088C8E9-3835-4612-83F1-F2B9A131CC90"}
 */
var TAB_PANEL = 'TABPANEL';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EDB0EA15-D6C7-41E4-82FB-D20C49DE738E"}
 */
var CHECK = 'CHECK';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2E17AF1F-8384-40E5-A9A5-731F19C213F6"}
 */
var TEXT_FIELD = 'TEXT_FIELD';

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"069679EA-1533-40B4-AA12-1ED6DA0114FB"}
 */
var EU_DATEFORMAT = 'dd/MM/yyyy';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7165DF60-CDB7-4954-AB76-302B75964A25"}
 */
var MMYYYY_DATEFORMAT = 'MM/yyyy';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1281DFA9-7935-4CAA-8DBD-4C8A617E062B"}
 */
var ISO_DATEFORMAT = 'yyyyMMdd';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5A7A068A-F204-4BB5-87CF-9A6D6D808220"}
 */
var LOG_DATEFORMAT = 'yyyyMMddHHmmssSSSS';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5EC901A0-8392-426F-BA12-FB24F24DD5C3"}
 */
var LOGINFO_DATEFORMAT = 'dd/MM/yyyy HH:mm:ss'
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4BDE1A10-7EC1-49C5-8193-2F17D14458A1"}
 */
var US_DATEFORMAT = 'MM/dd/yyyy';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"18F79005-06B1-4974-8D6D-104896E42579"}
 */
var PERIODO_DATEFORMAT = 'yyyyMM';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8E0C6D7B-A82A-4994-A1DF-C8694AF2C88C"}
 */
var EXCEL_DATEFORMAT = 'yyyy-MM-dd';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E232D870-05AD-45BF-BA4D-542F3561089F"}
 */
var MESE_ANNO_DATEFORMAT = 'MMM yyyy';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2D18C1FA-BAD7-42AF-9612-29DF2CF11CBB"}
 */
var OREMINUTI_DATEFORMAT = 'HH:mm';

/**
 * @properties={typeid:35,uuid:"0F5CAF35-A4E5-4245-A48A-6174C1F4C54E",variableType:-4}
 */
var TipoConnessione = { SEDE: 0, CLIENTE: 1 };

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2C644F08-F032-44A5-8C38-E9E486344052",variableType:4}
 */
var _tipoConnessione = 1;

/**
 * @properties={typeid:24,uuid:"3BFD2C40-6DA4-4286-9721-FDD19C557182"}
 */
function ma_utl_onSolutionOpen(arg)
{
	// load object extensions
//	scopes.utl.ObjectExtensions();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Boolean} [destroy] true if you want to destroy the form after saving
 * @param {Boolean} [closeForm] true if you want to close the calling form. Defaults to true
 * 
 * @return {Boolean} true on success, false otherwise
 *
 * @properties={typeid:24,uuid:"AA6EB55F-AC80-4AE7-8B31-458B60374D2A"}
 */
function save(event, destroy, closeForm)
{
	/** @type {RuntimeForm<svy_nav_base>} */
	var form = forms[event.getFormName()];
	if(!form.dc_save)
		throw new Error(scopes.string.Format("Form @0 does not support method: dc_save", form.controller.getName()));
	
	var formName = form.controller.getName();
	
	var success = form.dc_save(event, formName, formName) !== -1;
	if (success)
	{
		if(closeForm !== false)
		{
			form['vClose'] = true;
			form['_close'] = true;	// for retrocompatibility
			
			globals.svy_mod_closeForm(event);
			
			if(!history.removeForm(formName))
				application.output('Error removing from history form ' + formName, LOGGINGLEVEL.WARNING);
			else if(!solutionModel.removeForm(formName))
				application.output('Error removing from solution form ' + formName, LOGGINGLEVEL.WARNING);
		}
	}
	
	return success;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Boolean} [destroy] true if you want to destroy the form after canceling
 * 
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"B41DEA57-7710-452B-A409-D29C306BFC0D"}
 */
function cancel(event, destroy) 
{
	var success  = false;
	var autoSave = databaseManager.getAutoSave();
	
	if(null == destroy || undefined == destroy)
		destroy = true;
	
	var answer = globals.ma_utl_showYesNoQuestion(i18n.getI18NMessage('i18n:svy.fr.dlg.cancel_record'), 'i18n:svy.fr.lbl.cancel');
	if (answer)
	{
		/** @type {RuntimeForm<svy_nav_base>} */
		var form = forms[event.getFormName()];
		if(!form.dc_cancel)
			throw new Error(scopes.string.Format("Form @0 does not support method: dc_cancel", form.controller.getName()));
		
		var formName = form.controller.getName();
		
		// First close the dialog (so the status is not changed)
		form['_close'] = true;		// RETRO to remove
		form['vClose'] = true;
		
		globals.svy_mod_closeForm(event);
		
		// Then cancel the operation
		form.dc_cancel(event, formName, true);
				
		var isClone = globals.endsWith('_clone', formName, true);
		if (destroy && isClone)
			success = history.removeForm(formName) && solutionModel.removeForm(formName);
		
		return success;
	}
	else
		success = false
	
	// restore autosave
	databaseManager.setAutoSave(autoSave);
	return success;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event 				the event that triggered the action
 * @param {String} 	[form]				the form the data to save is in
 * @param {Boolean}	[deferSave]			false if the data should be saved immediately, true otherwise
 * @param			[dataproviders]		an array containing dataproviders to copy
 *
 * @properties={typeid:24,uuid:"555A3554-1403-4A43-9EC5-3B235AA01384"}
 * @AllowToRunInFind
 */
function copyAll(event, form, deferSave, dataproviders)
{
	var answer = globals.ma_utl_showYesNoQuestion('i18n:ma.msg.copy_all', 'i18n:hr.msg.attention');
	if (answer)
	{
		form = form || event.getFormName();
		var formFs = forms[form].foundset;
		
		if(dataproviders && dataproviders.length > 0)
		{
			dataproviders.forEach
			(
				function(_dp)
				{
					for(var _r = 1; _r <= formFs.getSize(); _r++)
						if(_r !== formFs.getSelectedIndex())
							formFs.getRecord(_r)[_dp] = formFs[_dp]; 
				}
			);
		}
		else
		{
			var elems = forms[form].elements;
			for(var e = 0; e < elems.length; e++)
			{
				var elem = elems[e];
				if(elem.enabled && elem.editable)
				{
					var dp = elem.getDataProviderID();
					for(var __r = 1; __r <= formFs.getSize(); __r++)
					{
						if(__r !== formFs.getSelectedIndex())
							formFs.getRecord(__r)[dp] = formFs[dp];
					}
				}
			}
		}
		
	    if(!deferSave)
	    	globals.save(event);
	}
}

/**
 * Starts a new transaction
 * 
 * @properties={typeid:24,uuid:"E3CD2AC5-6668-496A-9F30-3DBC8838D3E5"}
 */
function ma_utl_startTransaction()
{
	databaseManager.startTransaction();
}

/**
 * Commits the last open transaction. Throws at the first error encountered.
 * 
 * @param {Boolean} [saveFirst]
 * 
 * @return {Boolean} true if everything went fine;
 * 
 * @throws {Error} the first error encountered, if there was an error
 *
 * @properties={typeid:24,uuid:"9665075E-9903-41D1-BF94-BAEDE4F276AB"}
 */
function ma_utl_commitTransaction(saveFirst)
{
	if(!databaseManager.commitTransaction(saveFirst || true))
	{
		var error = globals.ma_utl_getDatabaseErrors();
		if (!globals.ma_utl_isNullOrEmpty(error))
			throw error[0];
	}
	
	return true;
}

/**
 * Rollback the last open transaction
 * 
 * @param {Boolean} [rollbackEdited]
 *
 * @properties={typeid:24,uuid:"A8560E2C-AB98-410F-AF50-2EE5DA7AB57D"}
 */
function ma_utl_rollbackTransaction(rollbackEdited)
{
	databaseManager.rollbackTransaction(rollbackEdited || true);
}

/**
 * Returns the array of errors that occured while performing database operations.
 * 
 * @return {Array<Error>}
 *
 * @properties={typeid:24,uuid:"219E7A9C-2D29-4753-86E8-991E24C6FC26"}
 */
function ma_utl_getDatabaseErrors()
{
	/** @type {Array<Error>} */
	var errors = [];
	
	var failedRecords = databaseManager.getFailedRecords();
	if (failedRecords)
		failedRecords.forEach
		(
			function(err)
			{ 
				var ex = err.exception;
				errors.push(new Error(i18n.getI18NMessage('ma.msg.operation_error', [ex['getMessage']()]))); 
			}
		);
		
	return errors;
}

/**
 * @properties={typeid:24,uuid:"F0A4AC81-C239-473B-A961-A3D2A582E95F"}
 */
function saveSingle(event)
{
	var form = event.getFormName();
	var elems = forms[form].elements;
	var fs = forms[form].foundset;
	
	var success = false;
	
	if(!elems['navigator'] || !elems['navigator'].visible)
	{
		success = globals.save(event);
	}
	else
	{
		success = forms[form].dc_save_validate(fs) !== -1;
		if(success)
		{
			if(databaseManager.saveData(fs.getSelectedRecord()))
			{
//				globals.ma_utl_showInfoDialog('i18n:ma.lbl.save_successfull');
				
				// Go to the next record if any remains
				// If on the last record, call dc_save
				if(fs.getSelectedIndex() === fs.getSize())//databaseManager.getFoundSetCount(fs))
					globals.save(event);
				else
					fs.setSelectedIndex(fs.getSelectedIndex() + 1);
				
				forms[elems['navigator'].getTabFormNameAt(1)].updateIndex();
			}
			else
			{
				globals.ma_utl_showErrorDialog('i18n:ma.lbl.save_error');
			}
		}
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSEvent} _event
 * @param {String} _lkp
 * @param {String} _returnField
 * @param {String} [_returnForm]
 * @param {String} [_methodToAddFoundsetFilter]
 * @param {String} [_methodToExecuteAfterSelection]
 * @param {Boolean} [_allowInBrowse]
 * @param {String} [_fieldToReturn]
 * @param {Number} [_lkpWidth]
 * @param {Number} [_lkpHeight]
 * @param {Boolean} [_multiSelect]
 *
 * @properties={typeid:24,uuid:"238B14A8-9DC7-4E44-8CD1-C14A645BC806"}
 */
function _showLkp(_event, _lkp, _returnField, _returnForm, _methodToAddFoundsetFilter, _methodToExecuteAfterSelection, _allowInBrowse, _fieldToReturn, _lkpWidth, _lkpHeight, _multiSelect)
{
	return globals.svy_nav_showLookupWindow(_returnForm ? _returnForm : _event, _returnField, _lkp, _methodToExecuteAfterSelection, _methodToAddFoundsetFilter, null, null, _fieldToReturn, _allowInBrowse, _lkpWidth, _lkpHeight, _multiSelect)
}

/**
 * Show a blocking lookup window, and return the selected element(s), if any.
 * 
 * @param {{
 * 			[event]: JSEvent,
 * 			[returnForm]: String,
 * 			[returnField]: String,
 * 			lookup: String,
 * 			[methodToExecuteAfterSelection]: String,
 * 			[methodToExecuteAfterMultipleSelection]: String,
 * 			[methodToAddFoundsetFilter]: String,
 * 			[params]: Object,
 * 			[svy_nav_fr_recursivecall]: Array,
 * 			[fieldToReturn]: String,
 * 			[allowInBrowse]: Boolean,
 * 			[lkpWidth]: Number,
 * 			[lkpHeight]: Number,
 * 			[multiSelect]: Boolean,
 * 			[dateFormat]: String,
 * 			[verbose]: Boolean,
 * 			[noRecordMessage]: String,
 * 			[returnFullRecords]: Boolean,
 * 			[sortMethod]: String,
 * 			[blocking]: Boolean,
 * 			[selectedElements]: Array,
 * 			[disabledElements]: Array,
 * 			[customLookupName]: String,
 * 			[styleName]: String,
 *          [unselectableElements] : Array
 * 		}} params <p>an object containing the required parameters</p>
 * 
 * @return {Object|Array} the selected element/field. An array if multiple selection is enabled
 * 
 * @properties={typeid:24,uuid:"8D1915FA-6594-4B58-B427-3B25E2451D2F"}
 */
function ma_utl_showLkpWindow(params)
{
	if(params)
	{
		return globals.svy_nav_showLookupWindow
		(
			 params.returnForm || params.event
			,params.returnField
			,params.lookup
			,params.methodToExecuteAfterSelection
			,params.methodToAddFoundsetFilter
			,params.params
			,params.svy_nav_fr_recursivecall
			,params.fieldToReturn
			,params.allowInBrowse
			,params.lkpWidth
			,params.lkpHeight
			,params.multiSelect
			,params.methodToExecuteAfterMultipleSelection
			,params.dateFormat
			,params.verbose
			,params.noRecordMessage
			,params.returnFullRecords
			,params.sortMethod
			,params.blocking
			,params.selectedElements
			,params.disabledElements
			,params.customLookupName
			,params.styleName
			,params.unselectableElements
		);
	}
	
	return null;
}

/**
 * Ritorna un array contenente i valori del campo specificato per tutti i record presenti nel foundset
 * 
 * @param {JSFoundset}   _foundset
 * @param {String} 		[_field]	il nome del campo da ritornare. Se 'pkey', è ritornata la chiave primaria
 * 									<strong>(non funziona in caso di chiava primaria composta)</strong>
 *
 * @return {Array}
 * 
 * @properties={typeid:24,uuid:"8B04C93E-FBCB-4D58-87D6-8487A664B0C1"}
 */
function foundsetToArray(_foundset, _field)
{
	if(!_foundset || _foundset.getSize() == 0)
		return [];
	
	if(_field === 'pkey')
		_field = databaseManager.getTable(_foundset).getRowIdentifierColumnNames()[0];
	
	var _array = new Array(_foundset.getSize());
	for(var i = 1; i <= _foundset.getSize(); i++)
		_array[i-1] = _field ? _foundset.getRecord(i)[_field] : _foundset.getRecord(i);
		
	return _array;
}

/**
 * @properties={typeid:24,uuid:"FE9884FF-72A5-440D-A2F4-231D5793959F"}
 */
function foundsetToObject(fs)
{
	var ret = [];
	for(var r = 1; r <= fs.getSize(); r++)
	{
		ret[r] = { };
		for(var dp in fs.alldataproviders)
			ret[r][dp] = fs[dp];
	}
	
	return ret;			
}

/**
 * Ritorna un array contenente i valori della colonna di indice specificato per tutti i record presenti nel dataset
 * @param {JSDataSet} _dataset
 * @param {Number} [_index]
 *
 * @properties={typeid:24,uuid:"8F5D0189-7EF6-4238-9AA0-EF5AA4D2A132"}
 */
function datasetToArray(_dataset, _index)
{
	var _array = [];
	for(var i = 1; i <= _dataset.getMaxRowIndex(); i++)
		_array[i-1] = _index ? _dataset.getValue(i, _index) : _dataset.getRowAsArray(i);
		
	return _array;
}

/**
 * Convert the provided record into an array
 * @param {JSRecord}	record		the record to convert
 * @param {Array}		[providers]	the array of data providers to include
 * 
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"4DD4A2C3-B193-4807-A09D-DCDEA5692C4F"}
 */
function ma_utl_recordToArray(record, providers)
{
	var array = new Array((providers || record.foundset.alldataproviders).length);
	var fields = providers || record.foundset.alldataproviders;
	for(var field in fields)
		array[field] = record[fields[field]];
	
	return array;
}

/**
 * @param {String} _formName
 * @param {UUID} _UUID
 * @param {String} _title
 * @param {Number} _height
 * @param {String} [_parentformName]
 * @param {JSFoundset} [_foundset]
 * 
 * @return {String}
 *
 * @properties={typeid:24,uuid:"87BC448D-0868-45B4-AC3C-1607C3CAB220"}
 */
function showFormIstanceInNewWindow(_formName, _UUID, _title, _height, _parentformName, _foundset)
{	
//	var _newWindow = null
//	
//	if (_parentformName)
//		_newWindow = application.createWindow('win_' + _formName + _UUID, JSWindow.MODAL_DIALOG,
//					                          application.getWindow('win_' + _parentformName))
//	else
//		_newWindow = application.createWindow('win_' + _formName + _UUID, JSWindow.MODAL_DIALOG)
															      
	var _width = forms[_formName].controller.getFormWidth()
															  
//	_newWindow.title = _title
//	_newWindow.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, _width, _height)	
//	solutionModel.cloneForm(_formName + _UUID, solutionModel.getForm(_formName))
	application.createNewFormInstance(_formName, _formName + _UUID)
	
	// daniele: if specified, load the records from _foundset
	var _formObj = forms[_formName + _UUID]
	if(_foundset)
		_formObj.foundset.loadRecords(_foundset)
	
	// Show the new window
//	_newWindow.show(_formName + _UUID)
	globals.svy_mod_showFormInDialog(_formObj,-1,-1,_width,_height,_title,false,false)
	
	return _formName + _UUID
}

/**
 * @param {Form} _form
 * @return {Number} the height of the provided form
 *
 * @properties={typeid:24,uuid:"9820B3AF-F173-42DF-AFDE-E05060EC33CB"}
 */
function _getHeight(_form)
{
	var _jsForm = solutionModel.getForm(_form.controller.getName())
	return _jsForm.getBodyPart().height
}

/**
 * Add records to the specified form. The user can specify an array of default values
 * to assign to the newly created records, either for the current form or for related ones.
 * See comments for more details.
 * 
 * @param {String} _formname
 * 		the form to add records to
 * @param {Array} [_defaultvalues]
 * 		the array of default values to assign to newly created records, if any.
 * 		It is associative by _formname and tabs' relations' names at the first level, and by data provider name
 * 		at the second level.
 * 		For example, you could have something like _defaultvalues['customer_dtl_form']['customer_gender'] = 'M'
 * 		or _defaultvalues['customers_to_orders']['order_size'] = 1
 * @param {Boolean} [_recursiveCall]
 * 		if true, the method will call itself recursively on forms contained in related tab panels, if any
 * @param {Boolean} [_selectedOnly]
 * 		if true, the method will only add records to the currently selected tab for each tab panel found
 * @param {Boolean} [_ignoreEmptyFoundsets]
 * 		true if you want to create records for non empty related foundsets too
 *
 * @properties={typeid:24,uuid:"6B63D9BB-3497-4D16-8C9E-43636DACD75A"}
 */
function AddRecordOnEditIfNeeded(_formname, _defaultvalues, _recursiveCall, _selectedOnly, _ignoreEmptyFoundsets) 
{	
	if(_recursiveCall == null)
		_recursiveCall = true
		
	/** @type {Array<JSFoundset>} */
	var _affectedFoundsets = new Array()
	var _nomeform = ''
	
	// For each element in the form, search the tab panel
	for (var i = 0; i < forms[_formname].elements.length; i++) {
		if (forms[_formname].elements[i].getElementType() == globals.TAB_PANEL && forms[_formname].elements[i].getName() !== 'navigator')
		{
			// For each tab in the tab panel
			for (var j = 1; j <= forms[_formname].elements[i].getMaxTabIndex(); j++)
			{
				if(_selectedOnly)
					j = forms[_formname].elements[i].tabIndex
					
				_nomeform = forms[_formname].elements[i].getTabFormNameAt(j)
				// Find the related foundset
				/** @type {String} */
				var _relation = forms[_formname].elements[i].getTabRelationNameAt(j)
				/** @type {JSFoundset} */
				var _tabFoundset = null
				
				// Split if a multiple relation
				if(_relation)
				{
					var _rels = _relation.split('.')
					_tabFoundset = forms[_formname].foundset[_rels[0]]
					
					if(_rels.length > 1)
					{
						for(var r = 1; r < _rels.length; r++)
						{
							if(_tabFoundset[_rels[r]])
								_tabFoundset = _tabFoundset[_rels[r]]
							else
								break
						}
					}
				}
				else if(!_tabFoundset)
				{
					_tabFoundset = forms[_nomeform].foundset
				}
					
				// Only if the related foundset is empty or there is a relation, it's empty and not a self relation
				if(_tabFoundset && _tabFoundset.getDataSource() != forms[_formname].foundset.getDataSource() && (_tabFoundset.getSize() == 0 || _ignoreEmptyFoundsets))
				{
						_affectedFoundsets[_relation] = _tabFoundset
						
						// Create new record						
						var _newRecord = _tabFoundset.getRecord(_tabFoundset.newRecord())
						
						// Add some default values for the new record according to the tab's relation name, if any
						if(_defaultvalues)
						{
							/** @type {Array} */
							var _tabdefaultvalues = _defaultvalues[_relation/*_nomeform*/]
							for (var _dataProvider in _tabdefaultvalues)
								_newRecord[_dataProvider] = _tabdefaultvalues[_dataProvider]
						}
				}
				
				// Go recursive if asked to
				if(_recursiveCall)
				{
					if(_defaultvalues)
						AddRecordOnEditIfNeeded(_nomeform,_defaultvalues, _recursiveCall,_selectedOnly)
					else
						AddRecordOnEditIfNeeded(_nomeform, null, _recursiveCall, _selectedOnly)
				}
				
				if(_selectedOnly)
					break
			}
		}
	}
	
	return _affectedFoundsets
}

/**
 * @param {String} _formname
 * @param {String} _program
 * @param {Boolean} [_newrecord]
 * @param {Object} [_params]
 *
 * @properties={typeid:24,uuid:"AFE073CE-18DE-417F-997B-6C9DA37FEF59"}
 */
function OpenLookupForModify(_formname, _program, _newrecord, _params) {
	
	if ((globals.nav.mode == 'browse' && globals.nav_program_name && !globals.nav.program[globals.nav_program_name].noreadonly) != true)
		return
				
	// Store the parameter into a global object
	if (_params) {
		globals.svy_nav_fr_solutionModelObject = _params;
		globals.svy_nav_fr_solutionModelObject.mode = globals.svy_nav_fr_solutionModelObject.mode.toLowerCase();
	}
	
	globals.svy_nav_lkp_showRecord(forms[_formname].foundset, _program, _newrecord)		
}

/**
 * @properties={typeid:24,uuid:"D677A456-EA01-4A21-B13A-A28B00EB58AF"}
 * 
 * @param elems
 * 
 * @return {Array<RuntimeTabPanel>}
 */
function getTabs(elems) {
	/** @type {Array<RuntimeTabPanel>} */
	var tabs = [];
	for(var i = 0; i < elems.length; i++)
	{
		/** @type {RuntimeTabPanel}*/
		var currElement = elems[i]
		if(currElement.getElementType() === globals.TAB_PANEL)
			tabs.push(currElement)
	}
	
	return tabs
}

/**
 * @param {RuntimeTabPanel} panel
 * 
 * @return {Array<String>} the array of forms names
 *
 * @properties={typeid:24,uuid:"3074AD74-2CEE-45B0-85D5-61A6E98B617A"}
 */
function getPanelForms(panel)
{
	var tabs = [];
	for(var t = 1; t <= panel.getMaxTabIndex(); t++)
	{
		tabs.push(panel.getTabFormNameAt(t));
	}
	
	return tabs;
}

/**
 * 
 * @param {JSEvent} _event
 * @param {String} _tabName
 * @param {String} _tabPanelName
 *
 * @properties={typeid:24,uuid:"F734B63B-4056-470D-BB12-7FEAA89961AA"}
 */
function _showTab(_event,_tabPanelName,_tabName) {
	var _form = forms[_event.getFormName()]
	/** @type {RuntimeTabPanel} */
	var _tabPanel = _form.elements[_tabPanelName]
	if(_tabPanel) _tabPanel.tabIndex = _tabName
//	for(var i = 1; i <= _tabPanel.getMaxTabIndex(); i++)
//	{
//		if(_tabPanel.getTabNameAt(i) == _tabName)
//		{
//			_tabPanel.setTabEnabledAt(i,true)
//			return;
//		}
//		else
//		{
//			_tabPanel.setTabEnabledAt(i,false)
//		}
//	}
//	if(_formName == null || _formName == '') _formName = controller.getName()
//	forms[_formName].showHistory()
}

/**
 * @param {JSEvent} _event
 * @param {Array<string>} _tabs
 * @param {boolean} _condition
 *
 * @properties={typeid:24,uuid:"2179069E-7D85-4D04-B7FE-80813A86C64A"}
 */
function _showTabs(_event,_tabs,_condition)
{
	var _tabPos = _condition ? 1 : 2		
	for(var i = 0; i < _tabs.length; i++)
	{
		globals._showTab(_event,_tabs[i][0],_tabs[i][_tabPos])
	}
}

/**
 * @param {string} _formToDisplay the name of the form to display.
 * @param {String} [_requiredFieldsProgram] the program to use when setting the form's status.
 * @param {Array<Object>}
 * 			[_defaultvalues] an associative array of array containing default values to set when the record
 * 			is created. Values are considered if the following are present:
 * 			_defaultvalues[_formToDisplay] or _defaultvalues[relationName].
 * 			In turn, each of the two above must contains another associative array of the form array[dataprovider] = value,
 * 			where dataprovider must be compatible with the form's foundset or its related foundset, respectively.
 * @param {string} [_windowTitle] the title to set when the window is displayed.
 * @param {Boolean} [_relatedTabOnly] true if if you want to create related records only, false otherwise.
 * 
 * @properties={typeid:24,uuid:"87662B07-B7CF-4A21-9E07-91B33C0E7FCE"}
 * @SuppressWarnings(unused)
 */
function _addRecords(_formToDisplay, _requiredFieldsProgram, _defaultvalues, _windowTitle, _relatedTabOnly) 
{
	databaseManager.setAutoSave(false)

	var _formToDisplayObj = forms[_formToDisplay]
	var _formToDisplayFoundset = _formToDisplayObj.foundset;//.duplicateFoundSet()
	var _affectedFoundsets = []
	
	if(!_relatedTabOnly)
	{
		var _newRecord, _dataprovider;
		
		// Set some default values for the newly created record
		/** @type {Array}*/
		var _formdefaultvalues = _defaultvalues ? _defaultvalues[_formToDisplay] : null;
		if(_formdefaultvalues && _formdefaultvalues.length > 0)
		{
			for(var i = 0; i < _formdefaultvalues.length; i++)
			{
				_newRecord = _formToDisplayFoundset.getRecord(_formToDisplayFoundset.newRecord(_formToDisplayFoundset.getSelectedIndex() + 1, false))
				for(_dataprovider in _formdefaultvalues[i])
					_newRecord[_dataprovider] = _formdefaultvalues[i][_dataprovider]
			
				_affectedFoundsets = AddRecordOnEditIfNeeded(_formToDisplay, _defaultvalues)
			}
		}
		else if(_formdefaultvalues)
		{
			_newRecord = _formToDisplayFoundset.getRecord(_formToDisplayFoundset.newRecord())
			for(_dataprovider in _formdefaultvalues)
				_newRecord[_dataprovider] = _formdefaultvalues[_dataprovider]
		
		_affectedFoundsets = AddRecordOnEditIfNeeded(_formToDisplay, _defaultvalues)
        }
	}
	else
	{
		_affectedFoundsets = AddRecordOnEditIfNeeded(_formToDisplay, _defaultvalues, true, false, true)	// recursive, all tabs, ignore empty foundsets
	}
	
	globals.ma_utl_showEditDialog(_formToDisplay, null, _requiredFieldsProgram, _windowTitle, 'edit');
}

/**
 * Call globals.svy_nav_dc_setStatus on the specified form and all related forms it contains
 * @param {string} _status
 * @param {string} _formName
 * @param {String} [_requiredFieldsProgram] this program is used when looking for required fields
 * @param {Boolean} [currentFormOnly] true if the main windows need not be udpated
 *
 * @properties={typeid:24,uuid:"2CC04C67-1BA6-411F-BCE5-E5895D0F6D1E"}
 */
function _setFormStatus(_status, _formName, _requiredFieldsProgram, currentFormOnly)
{
	// Change the status of the parent, if any
//	var _parent = solutionModel.getForm(_formName).extendsForm.name
//	if(_parent)
//		globals.svy_nav_dc_setStatus(_status, _parent, _program)
	
	// Change the status of the form itself
	globals.svy_nav_dc_setStatus(_status,_formName, currentFormOnly, _requiredFieldsProgram)
	
	// Also change the status of related forms, if any
	var _tabPanels = globals.getTabs(forms[_formName].elements)
	for(var i = 0; i < _tabPanels.length; i++)
	{
		var _currTabPanel = _tabPanels[i]
		for(var j = 1; j <= _currTabPanel.getMaxTabIndex(); j++)
		{
			var _tabForm = _currTabPanel.getTabFormNameAt(j)
			_setFormStatus(_status, _tabForm, _requiredFieldsProgram, currentFormOnly)
		}
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {RuntimeTabPanel} _tabPanel
 * @param {Number} _index
 * 
 * @return {Array} an associative array with the following information:
 * ['form' => the tab's form name,
 *  'name' => the tab's name,
 *  'text' => the tab's text,
 *  'relation' => the tab's relation,
 *  'fg' => the tab's foreground colour]
 *
 * @properties={typeid:24,uuid:"71EFBC30-0AF7-4BE1-90CD-9E7D4503F56A"}
 */
function _getTabProperties(_tabPanel,_index)
{
	var _props = new Array
	_props['form'] = _tabPanel.getTabFormNameAt(_index)
	_props['name'] = _tabPanel.getTabNameAt(_index)
	_props['text'] = _tabPanel.getTabTextAt(_index)
	_props['relation'] = _tabPanel.getTabRelationNameAt(_index)
	_props['fg'] = _tabPanel.getTabFGColorAt(_index)
	
	return _props
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {string} _stringToMatch
 * @param {string} _string
 * @param {Boolean} [_ignoreCase] whether to ignore case, false by default
 * 
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"307C68AC-E928-447A-9C69-BC749CBA2EF6"}
 */
function endsWith(_stringToMatch,_string,_ignoreCase)
{
	var _stringToMatchLength = _stringToMatch.length
	if(_stringToMatchLength > _string.length)
		return false
		
	var _subString = utils.stringRight(_string, _stringToMatchLength)
	
	if(_ignoreCase == null || _ignoreCase == 'undefined')
		_ignoreCase = false
	return _ignoreCase ? _subString.equalsIgnoreCase(_stringToMatch) : _subString.equals(_stringToMatch)
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {string} _stringToMatch
 * @param {string} _string
 * @param {Boolean} [_ignoreCase]
 * 
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"245CC507-6DAB-4D16-9E1B-4EA72DFB3261"}
 */
function startsWith(_stringToMatch,_string,_ignoreCase)
{
	var _stringToMatchLength = _stringToMatch.length
	if(_stringToMatchLength > _string.length)
		return false
		
	var _subString = utils.stringLeft(_string, _stringToMatchLength)
	
	return _ignoreCase ? _subString.equalsIgnoreCase(_stringToMatch) : _subString.equals(_stringToMatch)
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {String} _relName
 *
 * @properties={typeid:24,uuid:"41DB1375-4840-4D09-A471-61ACD93907F1"}
 */
function _isSelfRelation(_relName)
{
	var _relObj = solutionModel.getRelation(_relName)
	return _relObj ? _relObj.primaryDataSource.equalsIgnoreCase(_relObj.foreignDataSource) : false
}

/**
 * Search for a record by primary key in the specified form's foundset.
 * Actually doubles the size of the foundset each time the record
 * could not be found.
 * If no form is provided it uses the top one.
 * 
 * @param {Object} _pks
 * @param {String} [_form]
 *
 * @properties={typeid:24,uuid:"75002B12-672A-496C-8EB2-58F251E27D3F"}
 */
function lookup(_pks, _form)
{
	var _formObj = forms[_form ? _form : globals.nav.form_view_01]
	if(_formObj != null && _pks != null)
	{
		lookupFoundset(_pks,_formObj.foundset)
	}
}

/**
 * Search for a record by primary key in the specified foundset.
 * Actually doubles the size of the foundset each time the record
 * could not be found.
 * If the foundset's empty, no search is performed
 * 
 * @param {Object} _pks the primary key to look for. Multiple keys are not supported
 * @param {JSFoundset} _foundset the foundset to look into
 *
 * @properties={typeid:24,uuid:"86D39DDC-1CF2-4283-8398-F499F26C2BD6"}
 */
function lookupFoundset(_pks, _foundset)
{
	var _oldSize = 0;
	
	// Don't even try if already selected
	if(!globals.ma_utl_isFoundSetNullOrEmpty(_foundset) && _foundset.getSelectedRecord().getPKs()[0] === _pks)
		return false;
	
	if(globals.ma_utl_isFoundSetNullOrEmpty(_foundset))
		_foundset.loadAllRecords();
	
	while(!_foundset.selectRecord(_pks) && _foundset.getSize() > _oldSize)
	{
		_oldSize = _foundset.getSize();
		_foundset.getRecord(2 * _oldSize);
	}
	
	// We've either found it or at least tried
	return true;
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSEvent} _event
 * @param {String} [_methodToAddFoundsetFilter]
 * @param {String} [_methodToExecuteAfterSelection]
 * @param {String} [_lkpProgramName]
 *
 * @properties={typeid:24,uuid:"08309257-12DB-4439-83A6-9E3696B98633"}
 * @AllowToRunInFind
 */
function dc_lkp(_event, _methodToAddFoundsetFilter, _methodToExecuteAfterSelection, _lkpProgramName)
{
    var _form = _event.getFormName()
	
    var _formObj = forms[_form]
	
	if(forms[_form].foundset.isInFind())
		return
		
	var _lkpPrefix = 'Lkp'
	var _lkpProgram = null
	
	if(_lkpProgramName)
	{
		_lkpProgram = _lkpProgramName
	}
	else
	{	
		var _programs = globals.nav.program
		for(var _program in _programs)
		{
			var _programDataSource = 'db:/' + _programs[_program].server_name + '/' + _programs[_program].table_name
			if(_program.match(_lkpPrefix) && (_programDataSource.equals(_formObj.controller.getDataSource())))
			{
				_lkpProgram = _program
				break
			}
		}
	}
	
	globals.ma_utl_showLkpWindow({ event: _event, lookup: _lkpProgram, returnField: '_lkpPk', returnForm: _form, methodToAddFoundsetFilter: _methodToAddFoundsetFilter, methodToExecuteAfterSelection: _methodToExecuteAfterSelection, allowInBrowse: true })
	lookup(forms[_form]['_lkpPk'], _form)
		
	return
}

/**
 * Truncate a number to the greatest integer lesser than or equal that number (e.g. 3.2 becomes 3.0)
 * 
 * @param {Number} _number
 *
 * @properties={typeid:24,uuid:"0622510C-75F2-42E9-9D84-E04FFF4A5DE3"}
 */
function trunc(_number)
{
	return ~~_number
}

/**
 * Shows a yes/no question dialog for the specified message.
 * 
 * @param {String} message the message to show
 * @param {String} [title] the title of the dialog
 * 
 * @return {Boolean} true if answered yes, false otherwise
 *
 * @properties={typeid:24,uuid:"F232B15F-3278-4C37-B0DA-111607E69625"}
 */
function ma_utl_showYesNoQuestion(message, title)
{
	message = "<html><head></head><body>" + message + "</html></body>";
	
	var yes = i18n.getI18NMessage('svy.fr.lbl.yes');
	var values = Array.prototype.slice.call(arguments, 2);
	var retValue = ma_utl_showDialog(Dialog.QUESTION, message, title || i18n.getI18NMessage('servoy.general.info'), values);
	
	return retValue == yes;
}

/**
 * Shows an error dialog.
 * 
 * @param {String|Error} message
 * @param {String} [title]
 *
 * @properties={typeid:24,uuid:"ADCAEBED-17BE-4F5C-9E49-0D457A4ECE48"}
 */
function ma_utl_showErrorDialog(message, title)
{
	/** @type {String} */
	var msg;
	if(message instanceof Error)
		msg = message.message;
	else
		msg = message;
	
	msg = "<html><head></head><body>" + msg + "</html></body>";
	
	var values = Array.prototype.slice.call(arguments, 2);
	return ma_utl_showDialog(Dialog.ERROR, msg, title || i18n.getI18NMessage('servoy.general.error'), values);
}

/**
 * Shows a warning dialog.
 * 
 * @param {String} message
 * @param {String} [title]
 *
 * @properties={typeid:24,uuid:"43E25450-DF34-464A-BEEB-E4EBAE312F26"}
 */
function ma_utl_showWarningDialog(message, title)
{
	var values = Array.prototype.slice.call(arguments, 2);
	
	message = getHtmlString(message);
	
	return ma_utl_showDialog(Dialog.WARNING, message, title || i18n.getI18NMessage('servoy.general.warning'), values);
}

/**
 * Shows an info dialog.
 * 
 * @param {String} message
 * @param {String} [title]
 *
 * @properties={typeid:24,uuid:"05680274-2932-4CC0-A825-C28AE935DC76"}
 */
function ma_utl_showInfoDialog(message, title)
{
	var values = Array.prototype.slice.call(arguments, 2);
	
	message = "<html><head></head><body>" + message + "</html></body>";
	
	return ma_utl_showDialog(Dialog.INFO, message, title || i18n.getI18NMessage('servoy.general.info'), values);
}

/**
 * Handler method to show info/warning/error dialogs
 * 
 * @param {String}       type		a string representing the dialog's type (see globals.Dialog)
 * @param {String} message
 * @param {String}       [title]
 * @param {Array}        [values]	an array of values to substitute in case of dynamic i18n messages
 *
 * @properties={typeid:24,uuid:"92A6DE72-09B7-43EB-8182-D65053D89400"}
 */
function ma_utl_showDialog(type, message, title, values)
{
	var msg = from_i18n(message, values);
	
	var ok = i18n.getI18NMessage('svy.fr.lbl.ok');
	switch(type)
	{
		case Dialog.INFO:
			return globals.DIALOGS.showInfoDialog(title || i18n.getI18NMessage('servoy.general.info'), msg, ok);
			
		case Dialog.WARNING:
			return globals.DIALOGS.showWarningDialog(title || i18n.getI18NMessage('servoy.general.warning'), msg, ok);
			
		case Dialog.ERROR:
			return globals.DIALOGS.showErrorDialog(title || i18n.getI18NMessage('servoy.general.error'), msg, ok);
		
		case Dialog.QUESTION:
			var yes = i18n.getI18NMessage('svy.fr.lbl.yes');
			var no = i18n.getI18NMessage('svy.fr.lbl.no');
			return globals.DIALOGS.showQuestionDialog(title, msg, yes, no);
		
		default:
			throw new Error("Dialog type not recognized: " + type);
	}
}

/**
 * Returns the i18n value for the provided string, or the original string if not an i18n identifier
 * 
 * @param {String} i18n_id the i18n identifier, in the format 'i18n:identifier'
 * @param {Array}  [values] an array of values to replace in dynamic i18n strings
 * 
 * @return {String}
 *
 * @properties={typeid:24,uuid:"322B94EB-3252-4374-A2DF-6583CC99F9F6"}
 */
function from_i18n(i18n_id, values)
{
	/** @type{Array<String>} */
	var matches = i18n_id && i18n_id.match(/^i18n:(.+)$/i);
	if (matches)
	{
		if(values)
			i18n_id = i18n.getI18NMessage(matches[1], values.map(function(v){ return from_i18n(v); }));
		else
			i18n_id = i18n.getI18NMessage(matches[1]);
	}
	
	return i18n_id;
}

/**
 * Shows a modal dialog with the specified message and title, plus a loading gif image.
 * Useful when calling long procedures (e.g. through the headless client) and you want
 * to provide the user with a minimum of feedback.<br/>
 * Note that the dialog can't be closed by the user and must be dealt with programmatically,
 * usually on returning from the batch process. In particular, the dialog defines an integer
 * variable named <code>vIsDone</code> which has to be set to 1 for the window to be closed.
 * 
 * @param {String}	[title]
 * @param {String}	[message]
 * @param {String}	[imgUrl]
 * 
 * @return {String}	the name of the window containing the dialog, which is the same as the name
 * 					of the dialog
 *
 * @properties={typeid:24,uuid:"F01AEA23-FBA1-4FC0-AF60-F0EE64A97C5D"}
 */
function _showProgressDialog(title, message, imgUrl)
{
	var _formName = 'progressDialog';
//	var _form = solutionModel.getForm(_formName);
//	if(!_form)
//	{	
	var _form = solutionModel.newForm(_formName, null, '', false, 330, SVY_MOD_DIALOGS_GLOBAL_DIALOGHEIGHT);
	
	_form.extendsForm = solutionModel.getForm(forms.svy_nav_base.controller.getName());
	_form.styleName = 'leaf_style';
	_form.navigator = SM_DEFAULTS.NONE;
	_form.titleText = title ? title : '';
	
	_form.newVariable('vIsDone',JSVariable.INTEGER).defaultValue = '0';
	_form.onHide = _form.newMethod("\
			function onHide(event)\
			{\
				return _super.onHide(event) && vIsDone === 1;\
			}\
		");

	var img = _form.newLabel('', Math.ceil((_form.width - 200 - 48 - 20) / 2), Math.ceil((_form.getBodyPart().height - 48) / 2), 48, 48);
	img.horizontalAlignment = SM_ALIGNMENT.CENTER;
	img.verticalAlignment = SM_ALIGNMENT.CENTER;
	img.name = 'img';
	img.mediaOptions = SM_MEDIAOPTION.CROP;

	var msglabel = _form.newLabel('', img.x + 48 + 20, Math.ceil((_form.getBodyPart().height - 48) / 2), 200, 48);
	msglabel.horizontalAlignment = SM_ALIGNMENT.LEFT;
	msglabel.verticalAlignment = SM_ALIGNMENT.CENTER;
	msglabel.text = message ? message : 'i18n:hr.msg.processing';
	
	forms[_form.name].elements['img'].setImageURL(imgUrl ? imgUrl : 'media:///loader_48.gif');
//	}
	
	return globals.ma_utl_showFormInDialog(_form.name,title);
}

/**
 * Shows the provided form and put it in edit. If a foundset is provided,
 * the currently selected records are loaded into the form.
 * The autosave option is automatically set to false.
 * 
 * @param {String} _form
 * @param {JSFoundset} [_foundset] the foundset to load the data from
 * @param {String} [_requiredFieldsProgram] the program to use when looking for required fields
 * @param {String} [_title] the dialog's title
 * @param {String} [mode] the mode to set the form to (edit/add). Defaults to edit
 *
 * @properties={typeid:24,uuid:"F9B1F0A8-81EA-45BE-9874-AD8723275124"}
 */
function ma_utl_showEditDialog(_form, _foundset, _requiredFieldsProgram, _title, mode)
{
	databaseManager.getAutoSave() && databaseManager.setAutoSave(false);
	
	if(mode === globals.Status.ADD)
		forms[_form].foundset.clear();
	else 
	if(mode === globals.Status.EDIT && _foundset && _foundset.getSize() === 0)
	{
		globals.ma_utl_showInfoDialog('Nessun record presente', 'Info');
		return;
	}
	
	if(_foundset && _foundset.getSize() > 0)
		forms[_form].foundset.loadRecords(_foundset);

	globals.ma_utl_setStatus(mode || globals.Status.EDIT, _form, _requiredFieldsProgram, _requiredFieldsProgram);
	globals.ma_utl_showFormInDialog(_form, _title);
}

/**
 * Shows a form in a dialog window.
 * 
 * @param {String} formName
 * @param {String} title
 * @param {JSFoundset} [fs] if present, load records into the form's foundset from this one
 * @param {Boolean} [blocking] whether to use a blocking dialog (like error and info dialogs, for example).
 * 							   Only used if in web-client
 * @param {Number} [width]
 * @param {Number} [height]
 * 
 * @return {String} the name of the window the dialog is shown into.
 *
 * @properties={typeid:24,uuid:"1016ADC0-7969-48FC-B2A9-88FD700EA4E1"}
 */
function ma_utl_showFormInDialog(formName, title, fs, blocking, width, height)
{
	if(fs && fs.getSize() > 0)
		forms[formName].foundset.loadRecords(fs)
		
	title = globals.from_i18n(title);
		
	var jsForm = solutionModel.getForm(formName);
	
	width = width || jsForm.width;
	height = height || (jsForm.getFooterPart() && jsForm.getFooterPart().height) || (jsForm.getBodyPart() && jsForm.getBodyPart().height);
	
	if(application.getApplicationType() === APPLICATION_TYPES.WEB_CLIENT && blocking)		
		return ma_utl_showBlockingDialog(formName, true, width, height, title);
	else
		globals.svy_mod_showFormInDialog(forms[formName], -1, -1, width, height, title, true, false, formName, true)
	
	return formName;
}

/**
 * Sum the values in the provided array, considering each item's sign.
 * 
 * @param {Array} _values
 * 
 * @return {Number}
 *
 * @properties={typeid:24,uuid:"07B1A089-0285-4973-B997-4B8137DCAC2C"}
 * @SuppressWarnings(wrongparameters)
 */
function _sum(_values)
{
	var _tmpSum = 0
	for(var _idx in _values)
	{
		if(_values[_idx] instanceof Number)
			_tmpSum += _values[_idx]
		else
			_tmpSum += parseFloat(_values[_idx]);
	}
		
	return _tmpSum
}

/**
 * Copy the contents of the _from record to the _to records.
 * Field names contained within the provided array of names are not copied.
 * 
 * @param {JSRecord} _from
 * @param {JSRecord} _to
 * @param {Array<String>} _excludedFields
 * 
 * @return {JSRecord} the _to record filled in
 * 
 * @properties={typeid:24,uuid:"AD26740A-FE7C-40FE-B4EC-F060A4500B38"}
 */
function _copyRecord(_from, _to, _excludedFields) {
	/** @type {Array} */
	var _providers = _from.foundset.alldataproviders
	for(var i = 0; i < _providers.length; i++)
	{
		if(_providers[i] && !(_providers[i] in arrayToObject(_excludedFields)) && _from[_providers[i]] != null)
			_to[_providers[i]] = _from[_providers[i]]
	}
		
	return _to
}

/**
 * Transform the provided array into an object. Each field in the object is named
 * after the i-th value in the array.
 * 
 * @param {Array} array
 *
 * @properties={typeid:24,uuid:"99B0E635-A2F0-482A-827B-88D0944C502C"}
 */
function arrayToObject(array)
{
  var o = {};
  for(var i = 0; i < array.length; i++)
  {
    o[array[i]]='';
  }
  return o;
}

/**
 * Compare the provided records based on the provided field.
 * 
 * @param {JSRecord} _record1
 * @param {JSRecord} _record2
 * @param {String} _fieldName
 * 
 * @return {Number} -1 if _record1 < _record2, 1 if _record1 > _record2, 0 otherwise
 *
 * @properties={typeid:24,uuid:"5345443C-97B9-4B5C-ACD3-488A915E8471"}
 */
function _compareByField(_record1, _record2, _fieldName)
{
	var _fieldValue1 = parseInt(_record1[_fieldName], 10)
	var _fieldValue2 = parseInt(_record2[_fieldName], 10)
	
	if(_fieldValue1 == null || _fieldValue2 == null)
		throw new Error('The field ' + _fieldName + ' was not found')
	
	if(_fieldValue1 > _fieldValue2)
	{
		return 1
	}
	else if(_fieldValue1 < _fieldValue2)
	{
		return -1
	}
	else
	{
		return 0
	}
}

/**
 * Search for the specified item object within the provided array
 * 
 * @param {Array} _array
 * @param {Object} _item
 * @return {Boolean} true if _item was found, false otherwise
 * 
 * @properties={typeid:24,uuid:"C224E576-04F1-4A34-8A96-37B095723087"}
 */
function _search(_array, _item) {
	for(var i = 0; _array != null && _item != null && i < _array.length; i++)
	{
		if(_array[i] == _item)
			return true
	}
	
	return false
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSRenderEvent} event
 *
 * @properties={typeid:24,uuid:"52FAADDA-1615-487B-8B35-DD71BF4BE004"}
 */
function onRenderNoSelection(event) 
{
	var recInd = event.getRecordIndex()
	var recRen = event.getRenderable()
   
	if( (recInd % 2) == 0)
	   recRen.bgcolor = '#EC1C24'
	else
		recRen.bgcolor = '#FFFFFF'   
}

/**
 * @param {String} _servername
 * @param {String} _asql
 * @param {String} _fieldname
 * @param {Array} [_arguments]
 *
 * @return {Object}
 *
 * @properties={typeid:24,uuid:"BF861092-0CD2-402B-A037-6A1C261A90E4"}
 */
function RetrieveValueFromQuery(_servername, _asql, _fieldname, _arguments) {		
	var ds = databaseManager.getDataSetByQuery(_servername, _asql, (_arguments ? _arguments : null), 1)
	
	for (var i = 1; i <= ds.getMaxColumnIndex(); i++)
		if (ds.getColumnName(i).toLowerCase() == _fieldname.toLocaleLowerCase())				
			return ds.getValue(1, i)
			
	return null
}

/**
 * @param {String} 	form
 * @param {Boolean} enabled
 * @param {Boolean} [returnInheritedElements]
 * 
 * @properties={typeid:24,uuid:"5A2245F7-CC8C-4DBD-B4D5-DCD3C0888895"}
 */
function ma_utl_setReadOnlyFields(form, enabled, returnInheritedElements)
{
	if(form)
	{
		var formLabels = solutionModel.getForm(form).getLabels(returnInheritedElements || false);
		for(var lbl in formLabels)
		{
			if(formLabels[lbl] &&
			   formLabels[lbl].name &&
			   forms[form].elements[formLabels[lbl].name] &&
			   formLabels[lbl].styleClass &&
			   (
				   formLabels[lbl].styleClass.equalsIgnoreCase('HideIfReadOnly') || 
				   formLabels[lbl].styleClass.equalsIgnoreCase('DisableInBrowse')
			    )
			)
			{
				/** @type {RuntimeLabel} */
				var formBtn = forms[form].elements[formLabels[lbl].name];
				
				/**
				 * Enable/Disable buttons. Also be sure the field the button's
				 * attached to is enabled.
				 */
				
				if (formLabels[lbl].styleClass.equalsIgnoreCase('DisableInBrowse')) 
					formBtn.enabled = enabled;
				else
				{
					var labelFor = forms[form].elements[formBtn.getLabelForElementName()];
					formBtn.enabled = (labelFor && labelFor.enabled && enabled) || false;
				}
			}
		}
		
		// Go recursive
		var panels = solutionModel.getForm(form).getTabPanels(true);
		for(var p in panels)
		{
			var tabs = panels[p].getTabs();
			for(var t in tabs)
				if(tabs[t].containsForm)
					ma_utl_setReadOnlyFields(tabs[t].containsForm.name, enabled, returnInheritedElements);
		}
			
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {String} _form
 *
 * @properties={typeid:24,uuid:"18C2D800-74E9-4F23-B490-951B7E46B5CF"}
 */
function ma_utl_unsetRequiredFields(_form)
{
	var _jsForm = solutionModel.getForm(_form)
	var _fields = _jsForm.getFields(true)
	var _formObj = forms[_form]
	
	var _fieldName, _label
	for (var i = 0; i < _fields.length; i++) {
		_fieldName = _fields[i].name;
		if(_formObj.elements[_fieldName])
		{
			/** @type {Array} */
			var labelFor = _formObj.elements[_fieldName].getLabelForElementNames && _formObj.elements[_fieldName].getLabelForElementNames()
			if(!labelFor)
				return;
		
			for(var lbl = 0; lbl < labelFor.length; lbl++)
			{
				_label = labelFor[lbl];
				if(_label && _formObj.elements[_label]['text']) {				
					// MAVariazione - first remove any previously addedd star
					_formObj.elements[_label]['text'] = _formObj.elements[_label]['text'].replace(/\*+\s*/, "");
				}
			}
		}
	}
	
	// Do the same for tabs
	var _panels = _jsForm.getTabPanels(true)
	for(var _panel in _panels)
	{
		var _tabs = _panels[_panel].getTabs()
		for(var _tab = 0; _tab < _tabs.length; _tabs++)
			if(_tabs[_tab].containsForm)
				ma_utl_unsetRequiredFields(_tabs[_tab].containsForm.name)
		}
	}

/**
 * @param {JSDataSet}		ds 
 * @param {String}			filename
 * @param {Boolean}			[local]
 * @param {Boolean} 		[showDialog]
 * @param {Boolean}			[textFormat] set this to true if you want to export to csv
 * @param 					[formatObject]
 * @param {String}			[sheetName] the name of the sheet where to import data
 * @param {Array<byte>}		[template] the xls template file to use as a model
 * @param {Array<String>}	[colNames] the columns to export
 * @param {Array<Number>} 	[colTypes] the types of the columns to export
 * 
 * @return {Array<byte>}
 * 
 * @properties={typeid:24,uuid:"A997044A-0369-4D76-9248-3E16E7971FFB"}
 */
function xls_export(ds, filename, local, showDialog, textFormat, formatObject, sheetName, template, colNames, colTypes) 
{
	var success = true;
	
	if(showDialog == null || showDialog == 'undefined')
		showDialog = true;
	
	/** @type {Array<byte>} */
	var output = [];
	var csv    = "";

	/** @type {Array} */
	var _colList = new Array();		
	for (var iInt = 1; iInt <= ds.getMaxColumnIndex(); iInt++)
		_colList[iInt-1] = ds.getColumnName(iInt);
	
	var _maxCols = _colList.length;
	
	// Export to csv
	if(textFormat)
	{	
		var _maxRow = ds.getMaxRowIndex();
		var _format;
		var row = [];
	
		if (_colList.length > 0) 
		{
			//output the column names first
			csv  = 'sep=\t\n';
			csv += _colList.join('\t') + '\n';
	
			//loop through foundset of form and get all the columns and data
			for (var i = 1; i <= _maxRow; i++) 
			{			
				row = [];
				
				for (var c = 0; c < _maxCols; c++) 
				{
					var _value = ds.getValue(i, c + 1)								
					
					if (_value instanceof Date)
					{
						if(formatObject && formatObject[ds.getValue(i, -1)])
						{
							_format =  formatObject[_colList[c]];
							row.push('"' + utils.dateFormat(_value, _format) + '"');
						}
						else
							row.push('"' + utils.dateFormat(_value, globals.EXCEL_DATEFORMAT) + '"');
					}
					else if(_value instanceof Number)
					{
						if(formatObject && formatObject[_colList[c]])
						{
							_format =  formatObject[_colList[i - 1]];
							row.push('"' + utils.numberFormat(_value, _format) + '"');
						}
						else
							row.push('"' + _value + '"');
					}
					else
						row.push('"' + _value + '"');
				}
				// add the current row
				csv += row.join('\t') + '\n';
			}
		}
		else
			return [];
	}
	else if(ds && ds.getRowAsArray(1))
	{
		// Export to excel
		var types = colTypes || ds.getRowAsArray(1).map(
									function(item){
										if(item instanceof Number)
											{ return JSColumn.NUMBER }
										else if(item instanceof Date)
											{ return JSColumn.DATETIME }
										else
											{ return JSColumn.TEXT }
									});
		
		var excelExportDataSource = ds.createDataSource('excelExportDataSource_' + application.getUUID(), types);
		var	fsToExport = databaseManager.getFoundSet(excelExportDataSource);
			fsToExport.loadAllRecords();
		
		plugins.excelxport.exportEnabled = plugins.excelxport.exportEnabled || true;
		output = plugins.excelxport.excelExport(fsToExport, colNames || fsToExport.alldataproviders.slice(1), template, sheetName);
	}
	else
		/**
		 * No data, just return the empty output
		 */
		return [];

	var fileName = filename;// + '_' + utils.dateFormat(new Date(), globals.ISO_DATEFORMAT) + '.xls'
	
	//prompt for the fileName is smart client
	if(application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
		fileName = plugins.file.showFileSaveDialog(fileName)
	
	//see if they chose an export name
	success = !!output || !!csv;
	if (success && fileName && local)
	{
		/**
		 * Create some resources first
		 */
		var dirUri = globals.SERVER_TMPDIR.replace(/\\/g,'/') + '/export/';
		var jsDir = plugins.file.convertToJSFile(dirUri);
		if(!jsDir.exists())
			success = plugins.file.createFolder(jsDir);
		
		var extension = textFormat ? '.csv' : '.xls';
		
		var jsFile = plugins.file.createFile(dirUri + fileName + extension);
		if(success && jsFile.exists())
			success = jsFile.deleteFile();
		
		if(success && jsFile.createNewFile())
			success = textFormat ? plugins.file.writeTXTFile(jsFile, csv) : plugins.file.writeFile(jsFile, output);
	}
		
	if(!success)
		return [];
	
	return (jsFile && jsFile.getBytes()) || output;
}

/**
 * @param {String}	form			the form to add multiple selection to
 * @param {Boolean}	[checked]		whether the new form must have all elements checked. Defaults to false
 * @param {Boolean}	[last]			whether the checkboxes should be placed last. Defaults to false
 * @param {String}	[titleText]		the checkbox's header
 * @param {String}	[fieldToReturn]	the name of the foundset's dataprovider to return when calling getSelectedElements. Defaults to the primary key
 * @param {Boolean} [forceCreation] whether to force the creation of the form. Defaults to true
 * 
 * @return {JSForm} the modified form
 * 
 * @properties={typeid:24,uuid:"A6C88E24-221D-4CDC-8509-BBA3560C5E1A"}
 * @AllowToRunInFind
 */
function ma_utl_addMultipleSelection(form,checked,last,titleText,fieldToReturn,forceCreation) 
{
	var _jsForm = solutionModel.getForm(form)
	if(_jsForm.view != JSForm.LOCKED_TABLE_VIEW && _jsForm.view != JSForm.LOCKED_LIST_VIEW)
	{
		var _err = new Error()
		_err.name = 'viewtype_error'
		_err.message = '_addMultipleSelection: only locked list and table view types are supported'
		
		throw _err
	}
	
	var _msName = [form,'ms'].join('_')
	var _msForm = solutionModel.getForm(_msName)
	var _msDataSource = _jsForm.dataSource;
	
	/////////////////////////////////////////////////////////////////////////////////
	// 1. Modify the form's foundset so that it can keep track of multiple records //
	/////////////////////////////////////////////////////////////////////////////////
	var _fs = forms[form].foundset;
	_fs.loadAllRecords();
	
	var _fs_table = databaseManager.getTable(_fs.getDataSource());
	
	if(!globals.contains(_fs.alldataproviders, 'checked'))
	{
		// Add a fake column to use for multiple selection
		var _types = [];
		var _ds = databaseManager.convertToDataSet(_fs,_fs.alldataproviders)
		if(_ds)
		{
			// Throws a SQLException if not provided with columns' types
			for(var col = 0; col < _fs.alldataproviders.length; col++)
			{
				var table_column = _fs_table.getColumn(_fs.alldataproviders[col]);
				if(table_column)
				{
					_types.push(table_column.getType());
				}
				else
				{
					var calc_column = solutionModel.getDataSourceNode(_fs.getDataSource()).getCalculation(_fs.alldataproviders[col]);
					if(calc_column)
						_types.push(calc_column.variableType);
				}
			}
		
			_ds.addColumn('checked',_ds.getMaxColumnIndex() + 1,JSColumn.INTEGER);
			_msDataSource = _ds.createDataSource('ms_datasource_' + application.getUUID(), _types.concat([JSColumn.INTEGER]));
		}
	}
	
	// If the form already exists or forced, skip its creation
	if(!_msForm || forceCreation !== false)
	{
		if(_msForm)
		{
			history.removeForm(_msForm.name);
			solutionModel.removeForm(_msForm.name);
		}
		
		_msForm = solutionModel.cloneForm(_msName,_jsForm);
		_msForm.dataSource = _msDataSource;
		
		// Add a var to the form to keep track of the primary key
		var vPrimaryKey = _msForm.newVariable('vPrimaryKey',JSVariable.MEDIA);
		vPrimaryKey.defaultValue = '[\'' + (_fs_table ? _fs_table.getRowIdentifierColumnNames().join(',') : '_sv_rowid') + '\']';
		
		// Add a var to keep track of the dataprovider to return
		var vFieldToReturn = _msForm.newVariable('vFieldToReturn',JSVariable.TEXT);
		vFieldToReturn.defaultValue = fieldToReturn ? '\'' + fieldToReturn + '\'' : null;
		
		// Add a var to know whether the elements are all checked
		var vAllChecked = _msForm.newVariable('vAllChecked',JSVariable.INTEGER);
		vAllChecked.defaultValue = '0';
		
		///////////////////////////////////////////////////////////////////////
		// 2. Add the checkbox to the form and create needed vars and method //
		///////////////////////////////////////////////////////////////////////
		_msForm.onRender = null;
		
		var _checked_field = _msForm.getField('fld_checked');
		if(!_checked_field)
		{		
			// Add a checkbox for multiple selection
			var _checked_width = (titleText && titleText.length > 0) ? (titleText.length + 1) * 6 : 20;
			var _checked_height = 20;
			var _x_field = 0;
			var _y_field = 0;
			
			_msForm.width += _checked_width;
			
			var _elements = _msForm.getFields();
			var e;
			if(last)
			{
				// Get the last element's position and append the check
				for(e in _elements)
				{
					_x_field += _elements[e].width;
				}
			}
			else
			{
				// Move all the elements forward by the check's width
				for(e in _elements)
				{
					_elements[e].x += _checked_width;
				}
			}
			
			// Actually add the checkbox
			_checked_field = _msForm.newField('checked',JSField.CHECKS,_x_field,_y_field,_checked_width,_checked_height);
			_checked_field.name = 'fld_checked';
			_checked_field.styleClass = last ? 'table_last' : 'table';
		}		
		
		_checked_field.dataProviderID = 'checked';
		_checked_field.anchors = SM_ANCHOR.NORTH | SM_ANCHOR.WEST | SM_ANCHOR.EAST;
		_checked_field.enabled = true;
		_checked_field.editable = true;
		_checked_field.horizontalAlignment = SM_ALIGNMENT.CENTER;
		
		if(titleText)
			_checked_field.titleText = titleText;
		
		_msForm.newMethod("\
			function getSelectedElements(returnFullRecords, forceChecked)\
			{\
				var returnValue = [];\
				\
				var fs = foundset.duplicateFoundSet();\
				var selectedRecord = fs.getSelectedRecord();\
				\
				if(!databaseManager.getAutoSave())\
					databaseManager.saveData(fs);\
				\
				for(var i = 1; i <= fs.getSize(); i++)\
				{\
					if(fs.getRecord(i)['checked'])\
					{\
					   if(returnFullRecords)\
					      returnValue.push(fs.getRecord(i));\
					   else\
					   {\
					      var fieldToReturn = vFieldToReturn ? vFieldToReturn : vPrimaryKey[0];\
					      returnValue.push(fs.getRecord(i)[fieldToReturn]);\
					   }\
					}\
			    }\
				if(returnValue.length === 0)\
				{\
					if(selectedRecord && !forceChecked)\
						returnValue.push(selectedRecord.getPKs()[0]);\
					else\
						return null;\
				}\
				\
				return returnValue;\
			}"
		);
		
		var checkAll = _msForm.getMethod('checkAll');
		if(!checkAll) 
		{
			// Add the method to check/uncheck all the checkboxes at once
			checkAll = _msForm.newMethod("\
				function checkAll(event)\
				{\
					var fsUpdater = databaseManager.getFoundSetUpdater(foundset);\
					if(vAllChecked)\
						fsUpdater.setColumn('checked', 0);\
					else\
						fsUpdater.setColumn('checked', 1);\
					\
					fsUpdater.performUpdate();\
					vAllChecked = !vAllChecked;\
				}\
			");
		}
		
		_msForm.getLabel('lbl_checkAll').onAction = checkAll;
		
		// Enable the checkboxes even if we're not in edit mode
		_msForm.onShow = _msForm.newMethod("\
			function onShowForm(_firstShow, _event)\
			{\
				controller.readOnly = false;\
			}\
		")
	}
	
	// Set all elements checked if asked to
	if(checked)
	{
		var foundsetUpdater = databaseManager.getFoundSetUpdater(forms[_msName].foundset);
			foundsetUpdater.setColumn('checked', 1);
			foundsetUpdater.performUpdate();
	}
				
	return _msForm;
}

/**
 * Extracts the provided field from the array of objects and return an array
 * containing the values.
 * 
 * @param {Array} objectsArray the array of objects to convert
 * @param {String} field the object's field to extract
 * 
 * @return {Array}
 * 
 * @properties={typeid:24,uuid:"6592A52F-58F7-4AB1-B96E-DDC6BB4B0B3D"}
 */
function objectsToArray(objectsArray,field) {
	var _retArray = []
	
	if(objectsArray)
	{
		for(var i in objectsArray)
			_retArray.push(objectsArray[i][field])
	}
	
	return _retArray
}

/**
 * @properties={typeid:24,uuid:"1DA368FC-5054-42DB-BF37-93D269378CCE"}
 */
function objectToArray(object)
{
	var array = [];
	
	if(object)
	{	
		for(var p in object)
			array.push(object[p]);
	}
	
	return array;
}

/**
 * Returns the difference between the second and the first date provided, using the specified scale.
 * 
 * @param {Date} dateFrom the first date
 * @param {Date} dateTo the second date
 * @param {Number} scale the time scale on which to compare dates. Can be one of SECOND, MINUTE, HOUR, DAY or YEAR
 * 
 * @properties={typeid:24,uuid:"4A2CF947-C098-44D5-B474-643D187D8C0E"}
 */
function dateDiff(dateFrom, dateTo, scale)
{
	return Math.round((dateTo - dateFrom) / scale) + 1;//Math.floor((dateTo - dateFrom) / scale)
}

/**
 * Basically the same as utils.dateFormat, but optionally appends a mask
 * of the form '|&lt;format&gt;' if converting to string. Mainly useful when
 * inside the find() method of a foundset/controller.
 * <p>
 * <code>
 * // Suppose date is a date object representing the 1st of January, 2012.<br/>
 * // Returns '20120101|yyyyMMdd'.<br/>
 * var dateString = globals.dateFormat(date, 'yyyyMMdd', true);
 * </code>
 * </p>
 * 
 * @param {Date|String} date the date/string to convert
 * @param {String} [format] the format to use when converting. Defaults to 'dd/MM/yyyy'
 * @param {Boolean} [appendMask] whether to append the format as a mask
 * 
 * @return {Object} date or string according to the parameter passed <code>date</code>
 * 
 * @properties={typeid:24,uuid:"29092908-05F5-410A-B2CF-6BD701B82831"}
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 */
function dateFormat(date, format, appendMask) 
{
	var ret = null;
	if(date instanceof Date)
		ret = utils.dateFormat(date, format || globals.EU_DATEFORMAT);
	else
	if(date instanceof String)
		ret = utils.parseDate(date, format || globals.EU_DATEFORMAT);
	
	if(ret && typeof(ret) === 'string' && appendMask)
		ret += '|' + format;
	
	return ret;
}

/**
 * @properties={typeid:24,uuid:"3181048A-6964-4530-9418-4DA2D5352B60"}
 */
function execAsyncMethod(solutionName, context, methodName, methodArgs, callback, user, password)
{
	/**
	 * Launch the actual operation
	 */
	var client = globals.getHeadlessClientInstance(solutionName, user, password);
		client.queueMethod(context, methodName, (methodArgs || []), callback || doNothingCallback);
}

/**
 * @properties={typeid:24,uuid:"865D7CDB-E2D5-4642-95EB-D6BDE1BF1AE5"}
 */
function doNothingCallback()
{
}

/**
 * Call a method in the specified solution through the headless client. The user to use when
 * opening the solution can also be specified.<br/>
 * Note that in the web-client, the call is blocking and returns the same data as would a direct
 * method call. In the smart client, however, the call is equivalent to a direct queueMethod call
 * on a headless client object and the provided callback will get executed after the method is done.
 * 
 * @param {String}		solutionName				the name of the solution the method is defined into
 * @param {String}		methodName					the name of the method you want to call
 * @param {Array}		[methodArgs]				the array of arguments to pass to the method
 * @param {Function}	[callback]					the callback to call when done (used only when in the smart client)
 * @param {String}		[context]					the context to call the method from. <code>null</code> if global, or the form's name
 * @param {String}		[user]						the user to login with, if any
 * @param {String}		[password]					the password of the user to login with, if any
 * @param {Array}		[solutionOpenMethodArgs]	the array of arguments to pass to the solution's onOpen method
 * 
 * @properties={typeid:24,uuid:"8104ADF2-D5ED-4150-B4A4-2D907435FCAB"}
 * @SuppressWarnings(unused)
 */
function callHeadlessClientMethod(solutionName, methodName, methodArgs, callback, context, user, password, solutionOpenMethodArgs)
{
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		var hclientContinuation = new Continuation();
	
		// Reuse existing valid clients
		hclient = hclient && hclient.isValid() ? hclient : plugins.headlessclient.createClient(solutionName, user ? user : 'hcuser', password ? password : 'hcpassword', solutionOpenMethodArgs ? solutionOpenMethodArgs : null);
		hclient.queueMethod(context,methodName,methodArgs,headlessClientComputationDone);
		
		new Continuation();
	}
	else
	{
		hclient = plugins.headlessclient.createClient(solutionName, user, password, solutionOpenMethodArgs);
		hclient.queueMethod(context,methodName,methodArgs,callback);
	}
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"DBD2363E-79D4-4F29-B863-CF654E0B0833"}
 */
function headlessClientComputationDone(event)
{
	if(hclient && hclient.isValid())
	{
		if(event.getType() == JSClient.CALLBACK_EVENT)
		{
			hclientContinuation(event.data);
		}
		else if(JSClient.CALLBACK_EXCEPTION_EVENT)
		{
			application.output('Error when calling headless client callback: ' + event.data, LOGGINGLEVEL.ERROR);
		}
		
		hclient.shutdown();
	}
}

/**
 * @param {String} solutionName
 * @param {String} [username]
 * @param {String} [password]
 * 
 * @return JSClient
 *
 * @properties={typeid:24,uuid:"308463D2-83B3-4DA0-961E-7C4B2EE8C82A"}
 */
function getHeadlessClientInstance(solutionName, username, password)
{
	return hclient || (hclient = plugins.headlessclient.createClient(solutionName, username, password, null));
}

/**
 * @param {String|JSWindow} 	window
 * @param {boolean} 			[destroy]
 * 
 * @properties={typeid:24,uuid:"01C4DC0A-E64E-4829-9BB9-E62FDE3196DD"}
 * @SuppressWarnings(wrongparameters)
 */
function ma_utl_closeWindow(window, destroy) 
{
	if(!(window instanceof JSWindow))
		window = application.getWindow(window);
	
	if(window)
	{
		if(window.hide())
		{
			if(destroy)
				window.destroy();
		}
		else
			application.output('Error hiding window ' + window.getName(), LOGGINGLEVEL.WARNING);	// not a fatal error
	}
}

/**
 * Algoritmo di Mergesort 
 * 
 * @param {Array} arr
 * @return{Array}
 * 
 * @properties={typeid:24,uuid:"EF592010-3D80-4BE9-8510-C5C2F18B73C9"}
 * @SuppressWarnings(wrongparameters)
 */
function mergeSort(arr) 
{
	if (arr.length < 2)
		return arr;

	var middle = parseInt(arr.length / 2);
	var left = arr.slice(0, middle);
	var right = arr.slice(middle, arr.length);

	return merge(mergeSort(left), mergeSort(right));
}

/**
 * @param {Array} items
 * @param {Object} value
 * 
 * @return {Number}
 *
 * @properties={typeid:24,uuid:"59FB75C7-00B4-49AE-A4C9-E3FE74B94795"}
 */
function binarySearch(items, value)
{
	var startIndex = 0;
	var stopIndex = items.length - 1;

	while(startIndex < stopIndex)
	{
		var middle = Math.floor((stopIndex + startIndex) / 2);
		if (items[middle] === value)
			return middle;
	
		//adjust search area
		if (value < items[middle])
		{
			stopIndex = middle - 1;
		}
		else
		{
			startIndex = middle + 1;
		}
	}

	return -1;
}

/**
 * Effettua il merging tra due arrays
 * 
 * @param {Array} left
 * @param {Array} right
 *
 * @properties={typeid:24,uuid:"AC9EA6E0-561C-48C8-B221-D1031B07DFF8"}
 */
function merge(left, right) {
	var result = [];

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	while (left.length)
		result.push(left.shift());

	while (right.length)
		result.push(right.shift());

	return result;
}

/**
 * @param {Array} array
 * @param {Object} item
 * 
 * @properties={typeid:24,uuid:"0962A38E-A090-4116-8388-CDD2EFBF51BD"}
 */
function contains(array, item)
{
	return array.indexOf(item) > -1;
}

/**
 * Format the date object provided in order to use it in find mode. Internally it calls
 * <code>globals.dateFormat</code>
 * 
 * @see globals.dateFormat
 * @properties={typeid:24,uuid:"E110E418-0FE0-433C-BF24-829536BAC828"}
 */
function formatForFind(date) {
	return globals.dateFormat(date,globals.ISO_DATEFORMAT,true);
}

/**
 * @return {plugins.http.HttpClient}
 * 
 * @properties={typeid:24,uuid:"01550858-769B-4F16-BD3A-F592C863DC17"}
 */
function getHttpClient()
{
	if(!httpClient)
		httpClient = plugins.http.createNewHttpClient();
	
	return httpClient;
}

/**
 * @param {String} formName
 * @param {Boolean} status
 * @param {Array<String>} [excludedTabs]
 * 
 * @properties={typeid:24,uuid:"0FAD2029-456B-48C4-A232-2490B14DA4AA"}
 */
function setTabs(formName, status, excludedTabs) 
{
	var jsForm = solutionModel.getForm(formName);
	if(!jsForm)
		throw new Error("Form not found: " + formName);
	
	var panels = jsForm.getTabPanels();
	for(var i = 0; i < panels.length; i++)
	{
		if(!globals.contains(excludedTabs, panels[i].name))
			forms[formName].elements[panels[i].name].enabled = status;
	}	
}

/**
 * @param {Object} event_or_form could either be an event or the name of the return form
 * @param {String} returnField
 * @param {String} program
 * @param {String} [afterInsertMethodName]
 * @param {String} [methodToAddFoundsetFilters]
 * @param {String} [afterMultiSelectMethodName]
 * @param {Boolean} [allowInBrowse]
 * @param {String} [fieldKey]
 *
 * @properties={typeid:24,uuid:"ABB8EDE2-C31D-4443-A4DA-5AE31921F805"}
 * @SuppressWarnings(wrongparameters)
 */
function ma_utl_showMultiSelectLookup(event_or_form, returnField, program, afterInsertMethodName, methodToAddFoundsetFilters, afterMultiSelectMethodName, allowInBrowse, fieldKey)
{
	return globals.svy_nav_showLookupWindow(event_or_form, returnField, program, afterInsertMethodName, methodToAddFoundsetFilters, null, null, fieldKey, allowInBrowse, null, null, true, afterMultiSelectMethodName);
}

/**
 * Copy the source foundset's filter to the destination foundset. No check is made on the already existing filters
 * 
 * @param {JSFoundset} from
 * @param {JSFoundset} to
 * @param {Boolean} [reset]
 * 
 * @return {JSFoundset} the destination foundset
 * 
 * @properties={typeid:24,uuid:"640787D6-2A97-4D80-ABB7-2F0AF7DBED1E"}
 */
function ma_utl_copyFoundSetFilters(from, to, reset)
{
	if(from.getDataSource() !== to.getDataSource())
		throw new Error("Source and destination datasources must be the same");
	
	var filters = from.getFoundSetFilterParams();
	for(var f = 0; f < filters.length; f++)
	{
		if(reset)
			to.removeFoundSetFilterParam(filters[f][4]);
		
		to.addFoundSetFilterParam(filters[f][1], filters[f][2], filters[f][3], filters[f][4]);
	}
	
	return to;
}

/**
 * @param {String} program the name of the program to open
 * @param [params] the parameters to set on the program
 * @param {Boolean} [searchInOpenTabs]
 * @param {Boolean} [setPeriodoAttivo]
 * 
 * @properties={typeid:24,uuid:"D7038C22-BAB0-40D8-945F-5B1BC27D2DF7"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function openProgram(program, params, searchInOpenTabs,setPeriodoAttivo)
{
	//ricerca tra i program aperti
	var programIndex = searchInOpenTabs 
	          && (params && params.forcedTabNo > -1 ? params.forcedTabNo : findProgramTab(program,params));
	if(programIndex > -1)
	   forms.svy_nav_fr_openTabs.openProgram(null, programIndex);
	else
	{
		// Scopiazzato dal framework...
		/** @type {{	view:Number,
		 * 				foundset:JSFoundset,
		 * 				divider_height:Number,
		 * 				base_form_name:String,
		 * 				path:Array,
		 * 				filter:Array,
		 * 				nobuttonbar:Number,
		 * 				form:Array,
		 * 				divider_locked:Number,
		 * 				tab:Array}}*/
		var progObj = globals.nav.program[program];
		var template = globals.nav.template_types[progObj.view];
		var form = progObj.form[forms[template].has1()][2];
		
		if(params)
			globals.svy_nav_showForm(form, program, params['showAll'], params['orgTableView'], params['selected_tab'], params['dontOpenNewTab'], params, params['onCloseTab']);
		else
			globals.svy_nav_showForm(form, program);
			
		return form;	
	}
	
	return null;
}

/**
 * @param {Date} date
 * 
 * @return {Date}
 *
 * @properties={typeid:24,uuid:"058DE594-D8E1-471D-82F2-FD9BA72CF220"}
 */
function getFirstDate(date)
{
	/** @type {Date} */
	var d = null;
	
	d = date;//globals.dateFormat(date, globals.PERIODO_DATEFORMAT);
	d.setDate(1);
	d.setHours(0, 0, 0, 0);
	
	return d;
}
	
/**
 * @param {Number} periodo
 *
 * @return {Date}
 * 
 * @properties={typeid:24,uuid:"F08513D8-2913-4981-8E60-CEA424C40113"}
 */
function getFirstDatePeriodo(periodo)
{
	/** @type {Date} */
	var d = null;
	
	d = globals.dateFormat(periodo.toString(), globals.PERIODO_DATEFORMAT);
	
	d.setDate(1);
	d.setHours(0, 0, 0, 0);
	
	return d;

}

/**
 * @param {Date}    date
 * @param {Boolean} [includeTimePart] true if the time part should be included (i.e. set to 23:59:59.999)
 * 
 * @return {Date}
 *
 * @properties={typeid:24,uuid:"E3CA3875-72E4-4511-9B2F-1E4582490B12"}
 */
function getLastDate(date, includeTimePart)
{
	/** @type {Date} */
	var d = new Date(date.getFullYear(),date.getMonth(),date.getDate());
	
	d.setMonth(d.getMonth() + 1, 0);
	
	if(includeTimePart)
	{
		d.setDate(d.getDate() + 1);
		d.setMilliseconds(d.getMilliseconds() - 1);
	}
	else
		d.setHours(0, 0, 0, 0);
	
	return d;
}

/**
 * @param {Number} periodo
 * @param {Boolean} [includeTimePart] true if the time part should be included (i.e. set to 23:59:59.999)
 *
 * @return Date
 * 
 * @properties={typeid:24,uuid:"9C477DE1-650C-4D0C-88E3-3EFDAB0AD06B"}
 */
function getLastDatePeriodo(periodo,includeTimePart)
{
	var periodoStr = periodo.toString();
	var anno = parseInt(utils.stringLeft(periodoStr,4),10);
	var mese = parseInt(utils.stringRight(periodoStr,2),10);
	
	/** @type {Date} */
	var d = null;
	
	d = new Date(anno,mese - 1,1);
	
	d.setMonth(d.getMonth() + 1, 0);
	
	if(includeTimePart)
	{
		d.setDate(d.getDate() + 1);
		d.setMilliseconds(d.getMilliseconds() - 1);
	}
	else
		d.setHours(0, 0, 0, 0);
	
	return d;
}

/**
 * @param {Date} day
 * 
 * @return Date
 * 
 *
 * @properties={typeid:24,uuid:"ADDAEB08-A0F4-46A9-A1D1-414085C884E9"}
 */
function getNextPeriodFirstDate(day)
{
	var y = day.getFullYear();
	var m = day.getMonth();
	var d = null;
	
	d = y == 12 ? new Date(y + 1, 1, 1) : new Date(y , m + 1, 1) ;
	
	return d;
}

/**
 * @param {{ name: String, [fs]: JSFoundset, [width]: Number, [blocking]: Boolean, [height]: Number, [title]: String }} params
 * 
 * @properties={typeid:24,uuid:"F483E5E9-73B9-4411-B0B7-948C8939673D"}
 */
function ma_utl_showFormDialog(params)
{
	return ma_utl_showFormInDialog(params.name, params.title, params.fs, params.blocking, params.width, params.height)
}

/**
 * Shows a dialog on the clients screen. If called from a web client, it uses JavaScript Continuation to save the execution state.
 *
 *
 * @author Bogdan Diaconescu
 * @since 02 March 2009
 *
 * @param {String} fm The form created with the SolutionModel
 * @param {Boolean} [modal]
 * @param {Number} [width]
 * @param {Number} [height]
 * @param {String} [title]
 *
 * @returns {String} The dialog returned value
 *
 * @properties={typeid:24,uuid:"02B79D66-EAF9-4A42-88A8-0C557DDFFEA5"}
 */
function ma_utl_showBlockingDialog(fm, modal, width, height, title)
{
	forms[fm]['dialogName'] = fm;
	forms[fm]['dialogTitle'] = title;
	forms[fm]['returnValue'] = null;
	
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
	{
		var dialogContinuation = new Continuation();
		forms[fm]['dialogContinuation'] = dialogContinuation;
		globals.svy_mod_showFormInDialog(forms[fm], -1, -1, width, height, title, false, false, fm, modal);
		terminator();
	}
	else
	{
		return globals.svy_mod_showFormInDialog(forms[fm], -1, -1, width, height, title, false, false, fm, modal);
	}
	
	return null;
}

/**
 * Return the tab index of the specified programs, comparing the provided params, if any.
 *  
 * @param {String} program
 * @param [progParams] the program's parameters object to compare against
 * 
 * @return {Number} the index of the tab containing the program, or -1 if none is found
 *
 * @properties={typeid:24,uuid:"477C782A-B568-432A-AF30-FD7B70310609"}
 */
function findProgramTab(program, progParams)
{
	var programIndex = forms.svy_nav_fr_openTabs.vOpenTabs.indexOf(program);

	if(progParams
			&& programIndex > -1)
	{
		var programTabName = forms.svy_nav_fr_openTabs.vTabNames[programIndex];
		var objParam = globals.objGiornParams[programTabName];
		while(objParam 
			  && programIndex > -1 
			  && !(globals.compareObjects(progParams.idditta,objParam['idditta'],ComparisonOperator.EQ)
	    		   && globals.compareObjects(progParams.periodo, objParam['periodo'], ComparisonOperator.EQ)
	    		   && globals.compareObjects(progParams.gruppo_inst, objParam['gruppo_inst'], ComparisonOperator.EQ)
				   && globals.compareObjects(progParams.gruppo_lav, objParam['gruppo_lav'], ComparisonOperator.EQ)))
		{
			programIndex = forms.svy_nav_fr_openTabs.vOpenTabs.indexOf(program, programIndex + 1);
			if(programIndex > -1)
			   programTabName = forms.svy_nav_fr_openTabs.vTabNames[programIndex];
			
		}
	}
	
	return programIndex;
}

/**
 * Compare two objects against each other. Returns true if the two are the same, i.e. have the same properties with the same value.
 * <br/>If an array of properties is provided, that one is used when comparing the two objects. Note that an empty array means no property, i.e. the comparison automatically returns true.
 * 
 * @param {Object} o1
 * @param {Object} o2
 * @param {Array} [properties]
 * 
 * @return {Boolean} true if the objects share the same set of key/value pairs, false otherwise
 *
 * @properties={typeid:24,uuid:"CDDB4C9B-9505-47D5-8F12-9E6A84CDF10F"}
 */
function areEqual(o1, o2, properties)
{
	var props = properties ? properties : o1;
	for(var p in props)
	{
		if(o1[p] !== o2[p])
			return false;
	}
	
	return true;
}

/**
 * Save the provided object into the foundset
 * 
 * @param {Object} obj
 * @param {JSFoundset} fs
 * 
 * @return {JSRecord}
 *
 * @properties={typeid:24,uuid:"1DBB1F93-9446-4028-96F0-7BC26A27858E"}
 */
function saveObject(obj, fs)
{
	var rec = fs.getRecord(fs.newRecord());
	for(var p in obj)
		rec[p] = obj[p];
	
	return rec;
}

/***
 * Finds the intersection of two arrays.
 * Should have O(n) operations, where <code>n = MIN(a.length(), b.length())</code>
 *
 * @param {Array} _a first array, must already be sorted
 * @param {Array} _b second array, must already be sorted
 *
 * @properties={typeid:24,uuid:"EB58FE39-7518-498F-9951-B06B0DEA2073"}
 */
function intersect(_a, _b)
{
  var ai = 0, bi = 0;
  var result = [];

  while( ai < _a.length && bi < _b.length )
  {
     if      (_a[ai] < _b[bi] ){ ai++; }
     else if (_a[ai] > _b[bi] ){ bi++; }
     else /* they're equal */
     {
       result.push(a[ai]);
       ai++;
       bi++;
     }
  }

  return result;
}

/**
 * Compare two objects given the specified operator (see <code>globals.COMPARISON_OPERATOR</code>)
 * 
 * @param {Object} o1
 * @param {Object} o2
 * @param {String} operator
 * 
 * @return {Boolean} the result of <code>o1 &lang;operator&rang; o2</code>
 *
 * @properties={typeid:24,uuid:"17CCCA5F-4ACD-4547-8AFA-792BE3B78DDF"}
 */
function compareObjects(o1, o2, operator)
{
	switch(operator)
	{
		case ComparisonOperator.LT:
			return o1 < o2;
		case ComparisonOperator.LE:
			return o1 <= o2;
		case ComparisonOperator.EQ:
			return o1 === o2;
		case ComparisonOperator.GE:
			return o1 >= o2;
		case ComparisonOperator.GT:
			return o1 > o2;
			
		default:
			throw new Error('Operator not recognized');
	}
}

/**
 * Ritorna il nome del form padre
 * 
 * @param {String} form
 *
 * @properties={typeid:24,uuid:"B6C5E940-12F5-4909-86ED-1CBBC154F40A"}
 */
function ma_utl_getParentForm(form)
{
	var formContext = forms[form].controller.getFormContext();
	if (formContext)
	{
		var formDepth = formContext.getMaxRowIndex();
		return formContext.getValue(formDepth > 1 ? formDepth - 1 : formDepth, 2);
	}
	
	return null;
}

/**
 * Ritorna l'array ottenuto rimuovendo l'elemento specificato dall'array. Se l'elemento non esiste ritorna l'array originale
 * 
 * @param {Array} array
 * @param {Object} item
 * 
 * @return {Array}
 *
 * @properties={typeid:24,uuid:"7C055A14-BDE6-44E1-BA10-BAD665B50036"}
 */
function remove(array, item)
{
	var itemIndex = array.indexOf(item);
	if(itemIndex != -1)
	{
		return array.slice(0, itemIndex).concat(array.slice(itemIndex + 1, array.length));
	}
	
	return array;
}

/**
 * Ritorna la stringa passata come parametro con i tags html
 * (per recuperare messaggi di ritorno da Vb6)
 * 
 * @param {String} str
 * 
 * @return {String}
 *
 * @properties={typeid:24,uuid:"374E1116-10E9-4F35-AC28-F3FDB96BACAE"}
 */
function getHtmlString(str)
{
	return '<html><head></head><body>' + str + '</body></html>';
}

/**
 * Recupera il nome della detail form a partire dal nome del program
 *  
 * @param {String} program
 *
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"93F322AE-DC94-4B00-84D7-67DD041E469C"}
 */
function getDetailFormNameFromProgram(program)
{
	var progObj = globals.nav.program[program];
	var template = globals.nav.template_types[progObj['view']];
	var form = progObj['form'][forms[template].has1()][2];
	
	return form
}

/**
 * @param {String} _lookup the lookup program
 *
 * @properties={typeid:24,uuid:"6D9A72CE-7FEE-42F7-98E2-5093F7CC113D"}
 */
function clearLookup(_lookup)
{
	var program = globals.nav.program[_lookup];
	if(program && program.paramsArrObj && program.paramsArrObj['selectedElements'])
		program.paramsArrObj['selectedElements'] = null;
}

/**
 * Show a calendar in a new form. Substitues the default calendar.
 * 
 * @param {JSEvent} event
 * @param {String} [title]
 * @param {Boolean} [showWeek]
 * @param {Boolean} [showOnlyFirstCharacterOfDayName]
 * @param {Number} [firstDayOfWeek]
 * @param {Boolean} [disableDayOfWeek]
 * @param {Date} [allowedDateRangeFrom]
 * @param {Date} [allowedDateRangeTo]
 *
 * @properties={typeid:24,uuid:"763FDDFF-2CFE-46E2-A447-E7F60173BC57"}
 */
function ma_utl_showCalendar(event, title, showWeek, showOnlyFirstCharacterOfDayName, firstDayOfWeek, disableDayOfWeek, allowedDateRangeFrom, allowedDateRangeTo)
{
	var eventSource = event.getElementName();
	var formName = event.getFormName();
	var formFields = solutionModel.getForm(formName).getFields(true);
	
	var dataProvider = null;
	for(var f = 0; f < formFields.length && !dataProvider; f++)
	{
		if(formFields[f].name && forms[formName].elements[formFields[f].name] && forms[formName].elements[formFields[f].name].getLabelForElementNames)
		{
			/** @type {Array} */
			var labelFor = forms[formName].elements[formFields[f].name].getLabelForElementNames();
			for(var lbl = 0; lbl < labelFor.length && !dataProvider; lbl++)
			{
				if(labelFor[lbl] === eventSource)
					dataProvider = formFields[f].dataProviderID;
			}
		}
	}
	
	openJSDatePicker(
		event,
		{
			formName: event.getFormName(),
			columnName: dataProvider,
			title: title,
			showWeek: !!showWeek,
			showOnlyFirstCharacterOfDayName: !!showOnlyFirstCharacterOfDayName ? !!showOnlyFirstCharacterOfDayName : 1,
			firstDayOfWeek: firstDayOfWeek ? firstDayOfWeek : 1,
			disableDayOfWeek: disableDayOfWeek ? disableDayOfWeek : '',
			allowedDateRangeFrom: allowedDateRangeFrom ? utils.dateFormat(allowedDateRangeFrom, ISO_DATEFORMAT) : dateFormat('19000101', ISO_DATEFORMAT),
			allowedDateRangeTo: allowedDateRangeTo ? utils.dateFormat(allowedDateRangeTo, ISO_DATEFORMAT) : dateFormat('29991231', ISO_DATEFORMAT)
		}
	);
}

/**
 * Apre il nuovo calendario (JSDatePicker)
 * 
 * @param {JSEvent} event
 * @param params
 * 			<pre>
 * 				{
 * 					formName: 							String,
 * 					columnName: 						String,
 * 					title: 								String,
 * 					showWeek:							Boolean,
 * 					showOnlyFirstCharacterOfDayName:	Boolean,
 * 					firstDayOfWeek:						Number,
 * 					disableDayOfWeek:					String,
 * 					allowedDateRangeFrom:				Date,
 * 					allowedDateRangeTo:					Date
 * 				}
 * 			</pre>
 * @properties={typeid:24,uuid:"A59B903C-5585-4D16-A313-AFEC49BB236C"}
 */
function openJSDatePicker(event, params)
{		
	var datePicker = new JSDatePicker();
	
	var winX = application.getWindow().getX();
	var winY = application.getWindow().getY();
	var elemX = forms[event.getFormName()].elements[event.getElementName()].getLocationX();
	var elemY = forms[event.getFormName()].elements[event.getElementName()].getLocationY();
	var elemW = forms[event.getFormName()].elements[event.getElementName()].getWidth();
	var elemH = forms[event.getFormName()].elements[event.getElementName()].getHeight();

	// required parameters
	datePicker.callback.formName = params.formName ;
	datePicker.callback.columnName = params.columnName;

	// optional parameter(s)
	datePicker.form.title = params.title ? params.title : 'Scegli una data';
	
	datePicker.form.showWeek = params.showWeek;
	datePicker.form.showOnlyFirstCharacterOfDayName = params.showOnlyFirstCharacterOfDayName;
	datePicker.form.firstDayOfWeek = params.firstDayOfWeek;
	
	if ( params.disableDayOfWeek ) 
	{
		var days = params.disableDayOfWeek.split(',');
		for ( var i = 0 ; i < days.length ; i++ )
		{
			datePicker.disableDayOfWeek(days[i]);
		}
	}
	datePicker.setAllowedDateRange(params.allowedDateRangeFrom, params.allowedDateRangeTo);

	// lets show the dialog right on top of the button pressed
	datePicker.show(-1, -1);
}

/**
 * Compare two records according to the specified field. The null is greater than everything.
 * 
 * @param {JSRecord}	first
 * @param {JSRecord}	second
 * @param {String}		field
 * @param {Number}		[order]	The order type, 1 for ASC, -1 for DESC. You can also use <code>globals.ORDER_TYPE</code>. Defaults to ASC.
 * 
 * @properties={typeid:24,uuid:"5CD93043-13DE-4672-B796-B9B057DA4B81"}
 */
function nullLastComparator(first, second, field, order)
{
	// Confronta i valori per l'uguaglianza (null === null -> true)
	if(first[field] === second[field])
		return 0;
	
	// Se entrambi i valori sono impostati, confrontali
	if(first[field] && second[field] && first[field] < second[field])
		return (order || OrderType.ASC) * -1;
	// Altrimenti, il null vince
	else if(!first[field])
		return 1;
	else if(!second[field])
		return -1;
	
	return order || OrderType.ASC;
}

/**
 * Compare two records according to the specified field. The null is lesser than everything.
 * 
 * @param {JSRecord}	first
 * @param {JSRecord}	second
 * @param {String}		field
 * @param {Number}		[order]	The order type, 1 for ASC, -1 for DESC. You can also use <code>globals.ORDER_TYPE</code>. Defaults to ASC.
 * 
 * @properties={typeid:24,uuid:"6A29FC35-75BD-4A32-92A9-168299AD63D6"}
 */
function nullFirstComparator(first, second, field, order)
{
	// Confronta i valori per l'uguaglianza (null === null -> true)
	if(first[field] === second[field])
		return 0;
	
	// Se entrambi i valori sono impostati, confrontali
	if(first[field] && second[field] && first[field] < second[field])
		return (order || OrderType.ASC) * -1;
	// Altrimenti, il null perde
	else if(!first[field])
		return -1;
	else if(!second[field])
		return 1;
	
	return order || OrderType.ASC;
}

/**
 * @param {JSFoundset} fs
 * @param {Number} [index]
 *
 * @properties={typeid:24,uuid:"28B6CA2E-D05D-4151-93B0-5AD92CB376C6"}
 */
function deleteRecord(fs, index)
{
	var answer = globals.ma_utl_showYesNoQuestion('i18n:svy.dlg.delete_record');
	if (answer && fs && fs.deleteRecord)
	{
		if(index)
			return fs.deleteRecord(index);
		else
			return fs.deleteRecord();
	}
	
	return true;
}

/**
 * @param {JSFoundset} fs
 *
 * @properties={typeid:24,uuid:"D55532F1-D548-404D-A7B7-956604A007D1"}
 */
function deleteAllRecords(fs)
{
	var answer = globals.ma_utl_showYesNoQuestion('i18n:servoy.formPanel.deleteall.warning');
	if(answer && fs && fs.deleteAllRecords)
	{
		databaseManager.setAutoSave(false);
		databaseManager.startTransaction();
		
		var success = fs.deleteAllRecords();
		if (success)
			databaseManager.commitTransaction();
		else
		{
			databaseManager.rollbackTransaction();
			var failedRecords = databaseManager.getFailedRecords();
			if (failedRecords && failedRecords.length > 0)
				application.output(failedRecords[0].exception.getMessage(), LOGGINGLEVEL.ERROR);
		}
		
		databaseManager.setAutoSave(true);
	}
	
	return true;
}

/**
 * @param {String} string
 *
 * @properties={typeid:24,uuid:"87D19C24-F563-4844-BE34-8F22F98461E6"}
 */
function formatForHtml(string)
{
	if(string && typeof(string) === 'string')
	{
		var split = string.split('\n');
		if(split.length > 1)
			string = split.join('<br/>');
		
		return '<html>' + string + '</html>';
	}
	
	return null;
}

/**
 *	Sets the status of a form, different status are find/browse/edit/add
 *	This method is used by a lot of methods like svy_nav_dc_new, svy_nav_dc_save ect.
 *
 * @author Sanneke Aleman
 * @since 2007-07-03
 * @param {String} 	status can be  [find/browse/edit/add]
 * @param {String}	form name of the form
 * @param {String}  [program] name of the program if you want to override it  
 * @param {String}  [requiredFieldsProgram] name of the program to use for required fields
 * @param {Boolean} [ignoreGlobalStatus] if true, the change of status won't affect the framework as a whole
 * @param {Boolean} [recursive]	if true, call this method recursively on the form's tab panels
 *
 * @return  none
 *
 * @properties={typeid:24,uuid:"D8A9C2E2-2E12-44B0-80B4-118C7757A874"}
 * @SuppressWarnings(unused)
 */
function ma_utl_setStatus(status, form, program, requiredFieldsProgram, ignoreGlobalStatus, recursive)
{
	if (!form) return;
	
	if(!ignoreGlobalStatus)
		globals.nav.mode = status;
	
	forms[form]['status'] = status;

	// set _browse and fieldcoloring
	var _browse
	// allow to override the program to use
	program = program || globals.nav_program_name;
	
	/** @type {{required_fields:Object,noreadonly:Number,program_name:String,tab:Array}} */
	var _progObj = globals.nav.program[program];
	if (status == 'edit' || status == 'add' || status == 'find') 
	{
		forms[form].controller.readOnly = false;
		_browse = false;

		forms[form].controller.focusFirstField();
	} 
	else
	if(status == 'required_fields' && _progObj) // MAVariazione - a program must also be present to use required fields
		_browse = false;
	else
	{
		forms[form].controller.readOnly = (_progObj && !_progObj.noreadonly) || true;
		_browse = true;
	}
	
	if(status == 'browse')
	{
		if (forms[form].gotoBrowse)
			forms[form].gotoBrowse()
	}
	else 
	if(status == 'edit' || status == 'add' ) 
		if (forms[form].gotoEdit)
			forms[form].gotoEdit()
	
	// Set fields colours only after gotoEdit/Browse
	// MAVariazione - only set colors on detail forms
	if (status != 'find' && forms[form].controller.view == JSForm.RECORD_VIEW) 
	{
		globals.svy_nav_setFieldsColor(form, status);
		if(_progObj)
			globals.svy_nav_setRequiredFields(requiredFieldsProgram ? globals.nav.program[requiredFieldsProgram] : _progObj,form, status)
	}
	
	// Convert anything to boolean
	if(!!recursive)
	{
		// Go recursive
		var panels = solutionModel.getForm(form).getTabPanels(true);
		for(var p in panels)
		{
			var tabs = panels[p].getTabs();
			for(var t in tabs)
				if(tabs[t].containsForm)
					ma_utl_setStatus(status, tabs[t].containsForm.name, program, requiredFieldsProgram, ignoreGlobalStatus, recursive);
		}
	}
}

/**
 * @param {String} program the program to open
 * @param {Boolean} showLookup true if you want to show a particular lookup before opening the program
 * @param {{
 * 			[event]: JSEvent,
 * 			[returnForm]: String,
 * 			[returnField]: String,
 * 			lookup: String,
 * 			[methodToExecuteAfterSelection]: String,
 * 			[methodToAddFoundsetFilter]: String,
 * 			[params]: Object,
 * 			[svy_nav_fr_recursivecall]: Array,
 * 			[fieldToReturn]: String,
 * 			[allowInBrowse]: Boolean,
 * 			[lkpWidth]: Number,
 * 			[lkpHeight]: Number,
 * 			[multiSelect]: Boolean
 * 		}} lookupParams <p>an object containing the required parameters for the lookup</p>
 * @properties={typeid:24,uuid:"5D59E67A-8E46-47D8-AF3F-693B84CE4F76"}
 */
function ma_utl_openProgram(program, showLookup, lookupParams)
{
	if (globals._filtroSuDitta)
	{
		var form = globals.openProgram(program);
		lookup(globals._filtroSuDitta, form);
	} 
	else if(showLookup)
	{
		globals.ma_utl_showLkpWindow(lookupParams);
	}
}

/**
 * Returns the parent object containing the provided form, if any
 
 * @param {String} form the form's name
 * 
 * @return {String} the name of the parent form
 *
 * @properties={typeid:24,uuid:"4518FDED-9C05-4D6E-8046-39C8E2FFAC34"}
 */
function ma_utl_getFormContainer(form)
{
	if(!form)
		return null;
	
	var parent = globals.ma_utl_getParentForm(form);
	
	return parent;
}

/**
 * @return {JSWindow}
 * 
 * @properties={typeid:24,uuid:"61089331-FBAF-42E9-B8F9-1CC705E0560D"}
 */
function ma_utl_getFormWindow(form)
{
	if(!form)
		return null;
	
	var mainform = forms[form].controller.getFormContext().getValue(1, 2);
	if (mainform)
		return application.getWindow(mainform);
	
	return null;
}

/**
 * @properties={typeid:24,uuid:"99957E4F-151F-4D65-85C4-92A726EFA8F6"}
 */
function ma_utl_setProgramTabs(program, enabled, tabList)
{
	/** @type {Array} */
	var programTabs  = globals.nav.program[program] && globals.nav.program[program].tab;
	
	if(!programTabs)
		return;
	
	// set tabs enabled/disabled so user can not get to other tab if in edit
	var tab_form = program + '_tab';
	var tabsArray = globals.objectsToArray(programTabs, 'program_name');
	
	if (forms[tab_form] && forms[tab_form].elements['tabs'] && programTabs.length > 0)
	{
		/** @type {RuntimeTabPanel} */
		var tabs = forms[tab_form].elements['tabs'];
		
		for (var i = 1; i <= programTabs.length && (tabList && i <= tabList.length); i++) 
		{
			var indexOf = tabsArray.indexOf(tabList[i-1]);
			if(indexOf > -1)
			{
				tabs.setTabEnabledAt(indexOf+1, enabled);
				
				// Move to the first tab if on a disabled one
				tabs.tabIndex = 1;
			}
		}
	}
}

/**
 * Chiude il tab avente indice _tabIndex (creato ad hoc per chiusura tab giornaliera nel caso
 * di dipendenti senza regole associate durante il cambio di periodo)
 * 
 * @param {Number} _tabIndex
 *
 * @properties={typeid:24,uuid:"5D4A99E8-AFA3-4B03-972E-37B41AABDC0E"}
 */
function closeTab(_tabIndex) {
	
		var _frm = forms.svy_nav_fr_openTabs;
	var _tab = _tabIndex;
	var _previous = _frm.vSelectedTab;
	
	_frm.vTabNames = _frm.vTabNames.slice(0,_tab).concat(_frm.vTabNames.slice(_tab+1));
	_frm.vOpenTabs = _frm.vOpenTabs.slice(0,_tab).concat(_frm.vOpenTabs.slice(_tab+1));
	if (_frm.vExtraTabs.length > 0) {
		_frm.vOpenTabs.push(_frm.vExtraTabs.shift());
	}
	
	var _event = new JSEvent
	_frm.rebuildTabs(_event);

	if (_frm.vOpenTabs.length == 0) { //last tab closed
		_frm.loadStartForm(_event)
	} else if (_tab == _previous) { //selected tab closed
		if (_previous == _frm.vOpenTabs.length) { //the closed tab was the last tab -> open the new last tab
			_frm.openProgram(_event, _previous-1, true); 
		} else {
			_frm.openProgram(_event, _previous, true);
		}
	}
}

/**
 * Completely clear the variables for the provided form
 * 
 * @param {String} form
 *
 * @properties={typeid:24,uuid:"4E9D2851-7CF5-483E-B3FE-FE6C03C220E3"}
 */
function resetAll(form)
{
	var _jsForm = solutionModel.getForm(form);
	var _formVars = _jsForm.getVariables();
	for(var _var in _formVars)
	{
		var resetValue;
		switch(_formVars[_var].variableType)
		{
			case JSVariable.INTEGER:
			case JSVariable.NUMBER:
				resetValue = 0;
				break;
			case JSVariable.TEXT:
				resetValue = '';
				break;
			default:
				resetValue = null;
		}
		
		forms[form][_formVars[_var].name] = resetValue;
	}
}

/**
 * Return an array of types (see <code>JSColumn</code>) for the given data providers' names
 * 
 * @param {String}	dataSource				the datasource to start the search from
 * @param {Array}	providers				an array of data providers to search for
 * @param {Boolean} [includeCalculation]	true if search should include calculations, false otherwise. Defaults to true
 * @param {Boolean} [includeRelated]		true if search should include related columns, false otherwise. Default to true
 * 
 * @return {Array}	the array of types
 *
 * @properties={typeid:24,uuid:"A004C278-15E5-4293-983C-FFDE02D5F7D9"}
 */
function ma_utl_getProvidersType(dataSource, providers, includeCalculation, includeRelated)
{
	if(!providers)
		throw 'No data providers specified';
	
	var table = databaseManager.getTable(dataSource);
	if(!table)
		throw 'Table not found for datasource: ' + dataSource;
	
	var types = [];
	providers.forEach
	(
		function(c)
		{
			/**
			 * 1. The column belongs to the current table
			 */
			var column = table.getColumn(c);
			if(column)
				types.push(column.getType());
			else
			{
				if(includeCalculation !== false)
				{
					/**
					 * 2. The column is a calculation
					 */
					var calc = solutionModel.getDataSourceNode(dataSource).getCalculation(c);
					if(calc)
						types.push(calc.variableType);
				}
				
				if(includeRelated !== false && !calc)
				{
					/**
					 * 3. The column is a related column. Go looking for it recursively
					 */
					/** @type {Array<String>} */
					var split = c.split('.');
					if(split && split.length > 0)
					{
						// Get the related datasource (the last but one element)
						var relDataSource = solutionModel.getRelation(split[split.length - 2]).foreignDataSource;
						if (relDataSource)
							types = types.concat(globals.ma_utl_getProvidersType(relDataSource, [split[split.length - 1]]));
					}
				}
			}
		}
	);
	
	return types;
}

/**
 * Search for <code>value</value> in the program named by <code>lookup</code>. Returns the found record, if any.
 * 
 * @param {String} 	lookupProgram	the lookup program
 * @param {Object} 	value			the value to search
 * @param {String} 	field			the field to search
 * @param {Boolean} [ignoreCase]	true to perform a case insensitive search, false otherwise
 * 
 * @return {JSRecord}
 *
 * @properties={typeid:24,uuid:"4868B6D9-5BE8-49F8-A1AA-D89E50CA683C"}
 * @AllowToRunInFind
 */
function ma_utl_find(lookupProgram, value, field, ignoreCase)
{
	if(!lookupProgram)
		throw 'Specificare il nome della lookup';
	if(!field)
		throw 'Specificare il campo'	
	if(!value)
		return null;
		
	var programObj = globals.nav.program[lookupProgram];
	if(!programObj)
		throw 'No program found for: ' + lookupProgram;
	
	var fs = databaseManager.getFoundSet(programObj['server_name'], programObj['table_name']);
	if(fs && fs.find())
	{
		if(typeof(value) === 'String' && ignoreCase)
			value = '#' + value;
		
		fs[field] = value;
		fs.search();
		
		return fs.getSelectedRecord();
	}
	
	return null;
}

/**
 * Convert the provided type, as defined by <code>globals.FieldType</code>, into
 * Servoy's correspondent <code>JSColumn</code> type
 * 
 * @param {String} type
 *
 * @properties={typeid:24,uuid:"7AE03C6A-8C9D-484F-A94E-6A03D485748F"}
 */
function fieldTypeToJSColumn(type)
{
	switch(type)
	{
		case globals.FieldType.TRISTATE:
		case globals.FieldType.INTEGER:
		case globals.FieldType.BOOLEAN:
			return JSColumn.INTEGER;
		
		case globals.FieldType.DATETIME:
			return JSColumn.DATETIME;

		case globals.FieldType.NUMBER:
			return JSColumn.NUMBER;
			
		case globals.FieldType.TEXT:
		case globals.FieldType.STRING:
			return JSColumn.TEXT;
			
		default:
			throw 'Type ' + type + ' not recognized';
	}
}

/**
 * Get the default value for the provider JSColumn type
 * 
 * @param {Number} type
 *
 * @properties={typeid:24,uuid:"8238785D-5E4B-49D1-859A-DE553FE9FC79"}
 */
function getDefaultValue(type)
{
	switch(type)
	{
		case JSColumn.INTEGER:
		case JSColumn.NUMBER:
			return 0;
		
		case JSColumn.TEXT:
		case JSColumn.DATETIME:
			return null;
			
		default:
			throw 'Type ' + type + ' not recognized';
	}
}

/**
 * Copy all properties of an object to another
 * 
 * @param {Object} source 		the object to copy from
 * @param {Object} destination 	the object to copy to
 * 
 * @return {Object} the destination
 *
 * @properties={typeid:24,uuid:"B9F71BF4-5DEA-40A9-8D14-0AD04DB1FA3D"}
 */
function copyObject(source, destination)
{
	for (var p in source)
	{
		// handle nested objects. Arrays are treated like primitive types
		if(typeof(source[p]) == 'object' && !(source[p] instanceof Array))
			destination[p] = globals.copyObject(source[p], { });
		else
			destination[p] = source[p];
	}
	
	return destination;
}

/**
 * Performs a deep copy of an object. See http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object#728694
 * 
 * @param source 		the object to copy from
 * 
 * @return the copy
 *
 * @properties={typeid:24,uuid:"916742C4-4F1F-411E-8FA0-B5B565D18C04"}
 */
function clone(source)
{
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == source || "object" != typeof source) 
    	return source;

    // Handle Date
    if (source instanceof Date) 
    {
        copy = new Date();
        copy.setTime(source.getTime());
        return copy;
    }

    // Handle Array
    if (source instanceof Array)
    {
        copy = source.map(function(_){ return clone(_); });
        return copy;
    }

    // Handle Object
    if (source instanceof Object) 
    {
        copy = { };
        for (var p in source) 
            if (source.hasOwnProperty(p)) 
            	copy[p] = clone(source[p]);

        return copy;
    }

    throw new scopes.error.ArgumentError(scopes.string.Format("Unable to copy obj: type @0 not supported", typeof source), "source");
}

/**
 * @param {Object} source
 * @param {Object} destination
 * 
 * @return {Object} the destination
 *
 * @properties={typeid:24,uuid:"4D901FEF-CC04-4032-A6A3-9AD316D89E6F"}
 */
function copyOwnProperties(source, destination)
{
	for(var p in source)
		if(source.hasOwnProperty(p))
			destination[p] = source[p];
	
	return destination;
}

/**
 * Convert a month to its string representation, always using two figures (jan -> 01, ..., dec -> 12)
 * 
 * @param {Number} mese
 * 
 * @return {String}
 *
 * @properties={typeid:24,uuid:"402D713A-F883-4B25-B53E-210BBB004EA6"}
 */
function convertMese(mese)
{
	if(mese < 10)
		return '0' + mese;
	else
		return mese.toString();
}

/**
 * Check whether the given foundset is empty. A foundset is considered to be empty
 * when it's not defined (either undefined or null), or its size amounts to zero.
 * 
 * @param {JSFoundset} fs
 * 
 * @return {Boolean} true if the foundset is empty, false otherwise
 *
 * @properties={typeid:24,uuid:"18AE7141-FBCC-4A17-89B5-5283AEAD8989"}
 */
function isEmpty(fs)
{
	return !fs || fs.getSize() === 0;
}

/**
 * Returns true if the provided array (or string) is either null, undefined, or actually empty.
 * 
 * @param {Array|String} object
 * 
 * @return {Boolean} true if the object is null, undefined or empty. False otherwise
 *
 * @properties={typeid:24,uuid:"5E99E00A-5999-4D11-8F51-AA453CDEDA41"}
 */
function ma_utl_isNullOrEmpty(object)
{
	return !object || object.length === 0;
}

/**
 * Returns true if the provided foundset is either null, undefined, or actually empty.
 * 
 * @param {JSFoundset} fs
 * 
 * @return {Boolean} true if the foundset is null, undefined or empty. False otherwise
 *
 * @properties={typeid:24,uuid:"5AB958BD-DEB3-48AD-87E0-C6837C1EEF10"}
 */
function ma_utl_isFoundSetNullOrEmpty(fs)
{
	return !fs || fs.getSize() === 0;
}

/**
 * @properties={typeid:24,uuid:"420D2380-2BBD-4087-AF15-31D80727EF63"}
 */
function ma_utl_getObjectPropertiesNames(object)
{
	var names = [];
	
	if(object)
		for(var p in object)
			names.push(p);
	
	return names;
}

/**
 * Writes the error to the log, prepending the caller's name
 * 
 * @param {String|Error|ServoyException}  error
 * @param {Number} 						 [level]
 * 
 * @return {String} a friendly message to display
 *
 * @properties={typeid:24,uuid:"6DD53D04-738D-4831-8CD1-302AB91B7549"}
 */
function ma_utl_logError(error, level)
{
	var message = null;
	var friendlyMessage = from_i18n('i18n:ma.err.generic_error');
	
	if(globals.ma_utl_isNullOrUndefined(level))
		level = LOGGINGLEVEL.ERROR;
	
	if(error instanceof ServoyException)
		message = error.getMessage();
	else
	if(error instanceof Error)
		message = error.message;
	else
	if(error instanceof String)
	{
		error = new Error(error);
		message = error.message;
	}
		
	application.output(from_i18n(message), level);
	
	if(error instanceof ServoyException)
	{
		application.output('error ' + error.getErrorCode() + ': ' + error.getMessage(), level);
		application.output('script stack trace: ' + error.getScriptStackTrace(), level);
		application.output(error.getStackTrace(), level);
		
		if(error instanceof DataException)
		{
			/** @type {DataException} */
			var dataEx = error;
			
            application.output('SQL: ' + dataEx.getSQL(), level);
            application.output('SQLState: ' + dataEx.getSQLState(), level);
            application.output('VendorErrorCode: ' + dataEx.getVendorErrorCode(), level);
			
			if([2601, 2627].indexOf(dataEx.getVendorErrorCode()) > -1) // unique constraint violation for SqlServer
				friendlyMessage = from_i18n('i18n:ma.err.save.duplicate');
		}
	}
	else
	if (error.stack)
		application.output(error.stack, level);
	
	return friendlyMessage;
}

/**
 * Returns true if the provided object is <code>null</code> or <code>undefined</code>,
 * false otherwise.
 * 
 * @param {Object} object
 * 
 * @properties={typeid:24,uuid:"0DBC15AA-4D5F-4922-9BA8-7A1FF5596E08"}
 */
function ma_utl_isNullOrUndefined(object)
{
	return null === object || undefined === object;
}

/**
 * Returns true if the provided object is neither <code>null</code> or <code>undefined</code>,
 * false otherwise.
 * 
 * @param {Object} object
 *
 * @properties={typeid:24,uuid:"52F53F44-E09D-430A-9024-116C9EC3DE34"}
 */
function ma_utl_isDefined(object)
{
	return null !== object && undefined !== object;
}

/**
 * Compares two objects element-wise.
 * 
 * @param firstArray
 * @param secondArray
 * 
 * @return {Boolean} false if at least one element differs, false otherwise
 * 
 * @properties={typeid:24,uuid:"583939C4-16A9-476A-B075-D3031B927AA8"}
 */
function ma_utl_areArraysEqual(firstArray, secondArray)
{
	var argsNullOrUndefined =    globals.ma_utl_isNullOrUndefined(firstArray)  
							  || globals.ma_utl_isNullOrUndefined(secondArray);
		
	if(argsNullOrUndefined || firstArray.length !== secondArray.length)
		return false;
	
	for(var i = 0; i < firstArray.length; i++)
		if(firstArray[i] !== secondArray[i])
			return false;
	
	return true;
}

/**
 * Compares two objects property-wise
 * 
 * @param firstObject
 * @param secondObject
 * 
 * @return {Boolean} true if the objects have the same properties with the same values, false otherwise
 *
 * @properties={typeid:24,uuid:"99C38044-9B3E-4483-8FC8-92DBD8960B5B"}
 */
function ma_utl_areObjectsEqual(firstObject, secondObject)
{
	return globals.ma_utl_arePropertiesEqual(firstObject, secondObject) && globals.ma_utl_arePropertiesEqual(secondObject, firstObject);
}

/**
 * Compares the properties of the first object (and only these) to those of the second.
 * 
 * @param firstObject
 * @param secondObject
 * 
 * @return {Boolean} false if at least one property from the first object differs or
 * 					 is not present on the second, false otherwise
 * 
 * @properties={typeid:24,uuid:"483FF864-AFA7-4531-BA5E-92376EB59612"}
 */
function ma_utl_arePropertiesEqual(firstObject, secondObject)
{
	var argsNullOrUndefined =    globals.ma_utl_isNullOrUndefined(firstObject)  
							  || globals.ma_utl_isNullOrUndefined(secondObject);
		
	if(argsNullOrUndefined)
		return false;
	
	for(var p in firstObject)
	{
		var firstProperty  = firstObject[p];
//		var secondProperty = secondObject[p];
		
		var propertiesNullOrUndefined =    globals.ma_utl_isNullOrUndefined(firstObject[p])  
		  								|| globals.ma_utl_isNullOrUndefined(secondObject[p]);
		
		if(!propertiesNullOrUndefined && typeof(firstProperty) === globals.JSObjectType.OBJECT && !(firstProperty instanceof Date))
			return ma_utl_arePropertiesEqual(firstObject[p], secondObject[p]);
		else 
		if(firstObject[p] !== secondObject[p])
			return false;
	}
	
	return true;
}

/**
 * @properties={typeid:24,uuid:"13319BD8-DA54-41F0-A794-38D7CA129D0E"}
 */
function ma_utl_getColumnsNames(dataset)
{
	var names = [];
	
	if(!globals.ma_utl_isNullOrUndefined(dataset))
		for(var c = 1; c <= dataset.getMaxColumnIndex(); c++)
			names.push(dataset.getColumnName(c));
	
	return names;
}

/**
 * @properties={typeid:24,uuid:"3274D34D-7C77-4C0A-AF71-A07B9284E4BF"}
 */
function ma_utl_parseDecimalString(string) 
{
	return string && parseFloat(string.replace(',', '.'));
}

/**
 * Simply calls databaseManager.refreshRecordFromDatabase
 * 
 * @param {JSFoundset} 	fs
 * @param {Number} 		type 0 for the current record, -1 for all records, or the index of the record
 *
 * @properties={typeid:24,uuid:"A18A7454-4E2C-4794-B999-A45F5E81B3AB"}
 */
function refreshRecords(fs, type)
{
	return databaseManager.refreshRecordFromDatabase(fs, type);
}

/**
 * Vedi <a href="https://javamail.java.net/nonav/docs/api/com/sun/mail/smtp/package-summary.html">qui</a> per un elenco delle proprietà supportate
 * 
 * @return {Array<String>}
 * 
 * @properties={typeid:24,uuid:"905BEED0-6FA2-462F-9F6B-09A605224BD5"}
 */
function setSmtpProperties()
{
	var properties = new Array();
	properties[0] = 'mail.smtp.host=smtp.gmail.com';
	properties[1] = 'mail.smtp.port=587';
	properties[2] = 'mail.smtp.auth=true';
	properties[3] = 'mail.smtp.username=studiomiazzo@gmail.com';
	properties[4] = 'mail.smtp.password=Mae165SM';
	properties[5] = 'mail.smtp.starttls.enable=true';
	
	return properties;
}

/**
 * @properties={typeid:24,uuid:"BA54D228-8FED-48B0-9880-D206DE03529B"}
 */
function setSparkPostSmtpProperties()
{	
	var properties = new Array();
	properties[0] = 'mail.smtp.host=smtp.sparkpostmail.com';
	properties[1] = 'mail.smtp.port=587';
	properties[2] = 'mail.smtp.auth=true';
	properties[3] = 'mail.smtp.username=SMTP_Injection';
	properties[4] = 'mail.smtp.password=015e2b306072ac4b7de06a8143a98e16cc550ae6';
	properties[5] = 'mail.smtp.starttls.enable=true';
	
	return properties;
}

/**
 * @properties={typeid:24,uuid:"FBF38AC2-5A2E-4D03-83F0-E077EF3BC898"}
 */
function setTestSmtpProperties()
{
	var properties = new Array();
	properties[0] = 'mail.smtp.host=smtp.sparkpostmail.com';
	properties[1] = 'mail.smtp.port=587';
	properties[2] = 'mail.smtp.auth=true';
	properties[3] = 'mail.smtp.username=SMTP_Injection';
	properties[4] = 'mail.smtp.password=61e505505434a613b7068f33fb434b3745a9f6e9';
	properties[5] = 'mail.smtp.starttls.enable=true';
	
	return properties;
}

/**
 * 
 * @param {Number} mese
 * 
 * @return {String}
 *
 * @properties={typeid:24,uuid:"DAE3BDEC-E3BC-4FBE-B7FA-6B2B1276776E"}
 */
function getNumMese(mese){
	
	if(mese < 10)
		return '0' + mese.toString()
	else 
		return mese.toString()
}

/**
 * @param {Date} giorno
 * 
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"F7229B0E-0CF6-4846-B7B4-1E8FC1E01D5E"}
 */
function getNumGiorno(giorno){      

	/** @type {Date} */
	var dgiorno = giorno
	
    if(dgiorno.getDate() < 10)
    	return '0' + dgiorno.getDate()
    else 
        return dgiorno.getDate().toString()
}

/**
 * Calcola il totale dei giorni del mese nel particolare anno
 * 
 * @param {Number} mese
 * @param {Number} anno
 * 
 * @type {Number}
 * @properties={typeid:24,uuid:"9A2F5001-EA48-477D-806F-CBB0E53F0D5E"}
 */
function getTotGiorniMese(mese, anno){
	
	var ggMese = 0
	if (mese == 4 || mese == 6 || mese == 9 || mese == 11)
		ggMese = 30
	else if (mese == 2)
	{
		if ((anno % 4) == 0)
		{
			if ((anno % 100) == 0)
			{
			   if ((anno % 400) == 0) ggMese = 29
			   else ggMese = 28
			}
			else ggMese = 29   
		}
		else ggMese = 28
	}
	else ggMese = 31

    return ggMese
}

/**
 * Returns a string representing the datasource for the provider server and table.
 * e.g. <code>db:/server/table</code>.
 * 
 * @properties={typeid:24,uuid:"8A05F27B-6CE2-4629-AE53-B7A8D8F000E7"}
 */
function ma_utl_getDataSource(server, table)
{
	return ['db:', server, table].join('/');
}

/**
 * @param tabName
 * @param propertyName
 * @param value
 *
 * @properties={typeid:24,uuid:"7044C439-8C7F-4584-89AD-44F9AEB39A5D"}
 */
function ma_utl_setTabProperty(tabName, propertyName, value)
{
	var tabParams = globals.objGiornParams[tabName];
	if (tabParams)
		tabParams[propertyName] = value;
}

/**
 * @param tabName
 * @param propertyName
 *
 * @properties={typeid:24,uuid:"2B182725-F62A-42CE-81B2-00C39C671127"}
 */
function ma_utl_getTabProperty(tabName, propertyName)
{
	var tabParams = globals.objGiornParams[tabName];
	if (tabParams)
		return tabParams[propertyName];
	
	return null;
}

/**
 * @properties={typeid:24,uuid:"0D8A7A17-A3EA-4503-8129-AED198B77B23"}
 */
function ma_utl_getCurrentTabName()
{
	return forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab] || null;
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"EC9ED6D6-D6F9-4817-96B6-33BE0954D4F4"}
 */
function sendMailAdviceToUser(mailAddress,subject,message,from)
{
	if (mailAddress && plugins.mail.isValidEmailAddress(mailAddress)) 
	{
		var properties = globals.setSparkPostSmtpProperties();
		
		// invia il messaggio all'indirizzo mail specificato 
		var success = plugins.mail.sendMail
		    (mailAddress,
			from,
			subject,
			message,
			null,
			null,
			null,
			properties);
		if (!success)
			globals.ma_utl_showWarningDialog(plugins.mail.getLastSendMailExceptionMsg(), 'Comunicazione gestione richiesta');
		
	}
	else
		globals.ma_utl_showWarningDialog('i18n:ma.msg.notValidEmailAddress', 'Comunicazione gestione richiesta');
}
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"A395C81A-535A-42A3-8E3F-4BC864F84EC7"}
 */
function sendMailAdviceToUsers(subject,message,from)
{
	/** @type {JSFoundSet<db:/svy_framework/sec_user>} */
	var fs = databaseManager.getFoundSet('svy_framework','sec_user');
	if(fs.find())
	{
		// filtri su utenti ai quali inviare la comunicazione
		fs.user_locked = '^';
		var numUsers = fs.search();
		if(numUsers)
		{
			var outputForm = forms.communication_form;
			for(var u = 1; u <= numUsers; u++)
			{
				// gestione invio mail di avviso
				var emailaddress = fs.getRecord(u).com_email;
				var outputMsg = 'Invio comunicazione non riuscito a : ' + emailaddress + ' (Utente : ' + fs.getRecord(u).user_name + ', Proprietario : '  + fs.getRecord(u).sec_user_to_sec_owner.name + ')\n';
				
				if (emailaddress) 
				{
					if (emailaddress && plugins.mail.isValidEmailAddress(emailaddress)) 
					{
						var properties = globals.setSparkPostSmtpProperties();
						
						// inviare agli utenti dei livelli inferiori specificati 
						var success = plugins.mail.sendMail
						(emailaddress,
							from,
							subject,
							message,
							null,
							null,
							null,
							properties);
						if (!success)
						{							 
							application.output(outputMsg,LOGGINGLEVEL.ERROR);
							outputForm.vOutput += outputMsg + '\n' ;
						}
						else
							application.sleep(500);
					}
					else
					{
						application.output(outputMsg,LOGGINGLEVEL.ERROR);
						outputForm.vOutput += outputMsg + '\n' ;
					}
				}
		    }
		}
	}
}

/**
 * Replaces 'MA_Anagrafiche' and 'MA_Presenze' with the client's db name in the provided string.
 * Note the replacement is globals and case insensitive.
 * 
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"1FDD5B35-9E9D-47D2-BB49-44C27D10933A"}
 */
function ma_utl_replaceCatalogs(string)
{
	if(getTipoConnessione() == TipoConnessione.CLIENTE)
		return string.replace(/MA_Anagrafiche|MA_Presenze|MA_Richieste/gi, customer_db_name);
	
	return string;
}

/**
 * @properties={typeid:24,uuid:"9C6DBB60-4CD0-42DF-9A57-40A8BDAF6AC7"}
 */
function isCliente()
{
	return _tipoConnessione == TipoConnessione.CLIENTE;
}

/**
 * @properties={typeid:24,uuid:"EB37EF8B-3E7C-453B-9201-0DEB371D9D93"}
 * 
 * @return {Number}
 */
function getTipoConnessione()
{
	return globals.isCliente() ? TipoConnessione.CLIENTE : TipoConnessione.SEDE;
}

/**
 * @properties={typeid:24,uuid:"FC9E3867-F1F0-49C0-89CE-106AB6821BF5"}
 */
function manageCommunications()
{
	globals.svy_mod_showFormInDialog(forms.communication_form,null,null,null,null,'Comunicazioni agli utenti',null,null,'frmCommunicationForm');
}

/**
 * @properties={typeid:24,uuid:"4ACB9903-CF9C-4012-97D7-1616C230CA76"}
 */
function manageCommunication()
{
	globals.svy_mod_showFormInDialog(forms.test_form,null,null,null,null,'Test per invio mail',null,null,'frmTestMailForm');
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} idLavoratoreRichiesta
 * @param {Number} idTabRichiestaDettaglioCampo
 * @param {String} giornoIso
 * 
 * @return {JSRecord<db:/ma_richieste/lavoratori_richiestecampi_dettaglio>}
 * 
 * @properties={typeid:24,uuid:"0EDEFB33-85AB-4DE9-985A-D8EE5DCDC12E"}
 * @AllowToRunInFind
 */
function getRichiestaCampoDettaglio(idLavoratoreRichiesta,idTabRichiestaDettaglioCampo,giornoIso)
{
	/** @type {JSFoundSet<db:/ma_richieste/lavoratori_richiestecampi_dettaglio>}*/
	var fs = databaseManager.getFoundSet('ma_richieste','lavoratori_richiestecampi_dettaglio');
	
	if(fs.find())
	{
		fs.idlavoratorerichiesta = idLavoratoreRichiesta;
		fs.idtabrichiestadettagliocampo = idTabRichiestaDettaglioCampo;
		fs.giorno = giornoIso + '|yyyyMMdd';
		
		if(fs.search())
			return fs.getRecord(1);
	}
	
	return null;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} idLavoratoreRichiesta
 * @param {String} codice
 * @param {String} giornoIso
 * 
 * @return {JSRecord<db:/ma_richieste/lavoratori_richiestecampi_dettaglio>}
 * 
 * @properties={typeid:24,uuid:"B31EB249-A94B-41CA-921E-A5A6642B0B7A"}
 * @AllowToRunInFind
 */
function getRichiestaCampoDettaglioCodice(idLavoratoreRichiesta,codice,giornoIso)
{
	/** @type {JSFoundSet<db:/ma_richieste/lavoratori_richiestecampi_dettaglio>}*/
	var fs = databaseManager.getFoundSet('ma_richieste','lavoratori_richiestecampi_dettaglio');
	
	if(fs.find())
	{
		fs.idlavoratorerichiesta = idLavoratoreRichiesta;
		fs.codice = codice;
		fs.giorno = giornoIso + '|yyyyMMdd';
		
		if(fs.search())
			return fs.getRecord(1);
	}
	
	return null;
}