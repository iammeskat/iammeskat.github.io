
import axios from "axios";
import mixpanel from "mixpanel-browser";

export const track = async (event, data = {}) => {
    let clientInfo = {};
    // http://www.geoplugin.net/json.gp
    await axios.get('https://api.db-ip.com/v2/free/self').then(res => {
        clientInfo = res?.data;
    })
    mixpanel.track(event, {
        ...data,
        ipAddress: clientInfo?.ipAddress,
        clientInfo
    });
}
export const initMixpanel = () => {
    mixpanel.init('bdada0a2f52d3685770a721a7b8e1997', { debug: false })
}; 