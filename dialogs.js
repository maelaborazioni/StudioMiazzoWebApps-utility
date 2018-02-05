/**
 * Shows a modal dialog with the specified message and title, plus a loading gif image.
 * Useful when calling long procedures (e.g. through the headless client) and you want
 * to provide the user with a minimum of feedback.<br/>
 * Note that the dialog can't be closed by the user and must be dealt with programmatically,
 * usually on returning from the batch process. In particular, the dialog defines an integer
 * variable named <code>vIsDone</code> which has to be set to 1 for the window to be closed.
 * 
 * @param {Function} func					the function to execute. Must return 1 when done
 * @param {String}	[title]					the dialog title
 * @param {String}	[onStartMessage]		the dialog message to display before executing the operation
 * @param {String}	[onCompletionMessage]	the dialog message to display after executing the operation
 * 
 * @properties={typeid:24,uuid:"7197CB48-4AAD-430D-A1E3-AE494573A7D0"}
 */
function ShowProgressDialog(func, title, onStartMessage, onCompletionMessage)
{
	var form = forms['progress_dialog'];
		form.vMessage = onStartMessage;
		
	globals.ma_utl_showFormDialog({ name: form.controller.getName(), title: title || '' });
	
	form.vIsDone  = func();
	form.vMessage = onCompletionMessage;
	
//	CloseDialog(form.controller.getName());
}

/**
 * Tries to close the window which contains the provided form
 * 
 * @param formName
 *
 * @properties={typeid:24,uuid:"AC17DC2B-38D4-4E98-93A2-79BAF45EA4E5"}
 */
function CloseDialog(formName)
{
	var _context = forms[formName].controller.getFormContext()
	/** @type {String} */
	var _window = _context.getValue(1,1)
	if(application.getWindow(_window))
	{
		var _windowObject = application.getWindow(_window)
		_windowObject.hide()
		
		if(_window != 'infoDialog') //infoDialog is reused
		{
			_windowObject.destroy()			
		}		
	}
}