
import mixpanel from "mixpanel-browser";


export const countTraffic = async () => {
	fetch('https://meskat-api.onrender.com', {
		method: "POST",
		body: JSON.stringify({ platform: navigator.platform })
	})
}

export const track = async (event, data = {}) => {

	// http://www.geoplugin.net/json.gp
	const res = await fetch('https://api.db-ip.com/v2/free/self');
	const clientInfo = await res?.json();
	mixpanel.track(event, {
		...data,
		ipAddress: clientInfo?.ipAddress,
		clientInfo
	});
}
export const initMixpanel = () => {
	mixpanel.init('bdada0a2f52d3685770a721a7b8e1997', { debug: false })
}; 