/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E22BF1B8-C3C7-4B67-9350-5FF4BF476988"}
 */
var vReceiver = '';
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"79AC9EFB-9390-4D66-A1F8-13DE5F693F29"}
 */
function onActionSendButton(event)
{
	globals.sendMailAdviceToUser(vReceiver,vSubject,vMessage,'Amministrazione Presenza Semplice <noreply@studiomiazzo.it>');
}
