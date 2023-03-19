
import mixpanel from "mixpanel-browser";

export const track = (event, data = {}) => {
    mixpanel.track(event, data);
}
export const initMixpanel = () => {
    mixpanel.init('bdada0a2f52d3685770a721a7b8e1997', { debug: false })
}; 