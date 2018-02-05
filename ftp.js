/**
 * @param {{ host: String, username: String, password: String }} params
 * 
 * @return {JFTPclient}
 * 
 * @properties={typeid:24,uuid:"F5ACA95D-CB2E-44DF-9390-5C0C02086C2A"}
 */
function GetClient(params)
{	
	// Removes the heading protocol
	var host = params.host.replace('ftp://', '');
	
	// Removes the trailing slash
	if (host[host.length - 1] == '/')
		host = host.substr(0, host.length - 1);
	
	// Always create a new client
	return plugins.it2be_ftp.createJFTPclient(host, params.username, params.password);
}