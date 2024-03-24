const { useEffect } = require("react");
const { initMixpanel, countTraffic, track } = require("./apis");
const {  } = require("mixpanel-browser");

export const useTrack = () => {
	initMixpanel();

	useEffect(() => {
		track('home-page');
		countTraffic();
	}, []);

}