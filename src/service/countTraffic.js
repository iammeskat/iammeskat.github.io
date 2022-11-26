import axios from "axios";

export const countTraffic = async () => {
    // let info = {};
    // info.appVersion = navigator.appVersion;
    // info.platform = navigator.platform;
    // info.browser = navigator.userAgent;
    // console.log("I am from client")
    // console.log(info);
    await axios.post('https://meskat-api.onrender.com', {platform: navigator.platform}).then(res => {
        // console.log(res.data); 
    })
}