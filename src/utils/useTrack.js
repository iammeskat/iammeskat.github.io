const { useEffect } = require("react");
const { initMixpanel, countTraffic, track } = require("./apis");

export const useTrack = () => {
	initMixpanel();

	useEffect(() => {
		track('home-page');
		countTraffic();
	}, []);

}