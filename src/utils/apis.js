
import mixpanel from "mixpanel-browser";


export const countTraffic = async () => {
	fetch('https://meskat-api.onrender.com', {
		method: "POST",
		body: JSON.stringify({ platform: navigator.platform })
	})
}

export const track = async (event, data = {}) => {

	// http://www.geoplugin.net/json.gp
	let clientInfo = JSON.parse(sessionStorage.getItem("client_info"));
	if (!clientInfo) {
		const res = await fetch('https://api.db-ip.com/v2/free/self');
		const jsonData = await res?.json();
		clientInfo = jsonData;
		sessionStorage.setItem("client_info", JSON.stringify(jsonData))
	}
	mixpanel.track(event, {
		...data,
		ipAddress: clientInfo?.ipAddress,
		clientInfo
	});
}
export const initMixpanel = () => {
	mixpanel.init('bdada0a2f52d3685770a721a7b8e1997', { debug: false })
}; 