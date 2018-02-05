/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"73000C6E-9609-418B-9F0C-C562643CCDA7"}
 */
var indexLbl = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C46130D9-36C9-42AA-826A-E84354F7F8C8",variableType:4}
 */
var maxIndex = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B74224B6-2754-4A4D-A6EA-5FCFE5125947",variableType:4}
 */
var selectedIndex = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F2488DEE-591E-42FD-8118-0E3E97097B35",variableType:4}
 */
var previousIndex = 1;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"6CB23556-FC2B-4871-9F42-93D2649D2E34"}
 */
function dc_rec_next(event) 
{
	var parentForm = globals.ma_utl_getParentForm(controller.getName());
	if(forms[parentForm]['next_record'])
		forms[parentForm]['next_record']();
	else
		globals.svy_utl_setSelectedIndexNext(parentForm);
	
	updateIndex();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"BE0FE891-272C-4661-87D3-532EBE7C0F5B"}
 */
function dc_rec_prev(event) 
{
	var parentForm = globals.ma_utl_getParentForm(controller.getName());
	if(forms[parentForm]['previous_record'])
		forms[parentForm]['previous_record']();
	else
		globals.svy_utl_setSelectedIndexPrevious(parentForm);
	
	updateIndex();
}

/**
 * @param index
 *
 * @properties={typeid:24,uuid:"A34ECAE3-71BE-4444-A0CA-1C5C7EF8F8F9"}
 */
function gotoIndex(index)
{
	var parentForm = globals.ma_utl_getParentForm(controller.getName());
	if(forms[parentForm]['goto_record'])
		forms[parentForm]['goto_record'](index);
	else
		forms[parentForm].foundset.setSelectedIndex(index);
	
	updateIndex();
}

/**
 * @properties={typeid:24,uuid:"100E6D0E-7D1F-4277-AF30-2F0621093FA0"}
 */
function init()
{
	controller.readOnly = false;
	updateIndex();
}

/**
 * @properties={typeid:24,uuid:"E743630B-4B93-4B5F-A07F-62D1D44992B8"}
 */
function updateIndex()
{
	var parentForm = globals.ma_utl_getParentForm(controller.getName());
	if (parentForm)
	{
		var parentFoundset = forms[parentForm].foundset;
		selectedIndex = parentFoundset.getSelectedIndex();
		maxIndex = parentFoundset.getSize();
		indexLbl = i18n.getI18NMessage('ma.lbl.of') + ' ' + maxIndex;
	}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2F376E03-C7E4-4A0B-B5CE-43BF55EB92C2"}
 */
function onDataChangeSelectedIndex(oldValue, newValue, event)
{
	var parentForm = globals.ma_utl_getParentForm(event.getFormName());
	if(newValue === 0)
		globals.svy_utl_setSelectedIndexLast(parentForm);
	else
		gotoIndex(newValue);
	
	return true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DE5E1D8D-219E-4754-A2DF-B3B153D4F9D5"}
 */
function onActionSelectedIndex(event) 
{
	/**
	 * Move to the next record if the data's not changed
	 */
	if(previousIndex === selectedIndex)
	{
		var nextIndex = (selectedIndex % maxIndex) + 1;
		
		onDataChangeSelectedIndex(selectedIndex, nextIndex, event)
		selectedIndex = nextIndex;
	}

	previousIndex = selectedIndex;
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected 
 *
 * @properties={typeid:24,uuid:"830A362E-9983-457B-B1A3-0C1B320A2AE2"}
 */
function onShow(firstShow, event)
{
	init();
}
