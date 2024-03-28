import { scrollToSection } from "./heplers";

const { useEffect, useState } = require("react");

export const useRoute = () => {
	const [ready, setReady] = useState(false);
	useEffect(() => {
		const path = window.location.pathname;
		if (path) {
			scrollToSection(`section-${path?.slice(1)}`)
		}
		setReady(true);
	}, []);
	return ready;

}