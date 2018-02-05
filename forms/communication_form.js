/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9F5E3456-B54D-4016-89AB-569183A1A73A"}
 */
var vSubject = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E7B96A97-401E-48D7-9D3D-7B429C490134"}
 */
var vMessage = '<html><body></body></html>';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3F5508E3-893D-45C7-B4EB-3DD4B4DC7EB7"}
 */
var vOutput = '';
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3FFCB1B0-62A6-431D-BB93-2797320610B7"}
 */
function onActionSendMessage(event) 
{
	globals.sendMailAdviceToUsers(vSubject,vMessage,'Amministrazione Presenza Semplice <noreply@studiomiazzo.it>');
}

/**
 *
 * @param {Boolean} _firstShow
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"2B3CC995-D4F7-4533-91AF-75716E357819"}
 */
function onShowForm(_firstShow, _event) 
{
	_super.onShowForm(_firstShow, _event);
	vOutput = '';
}
