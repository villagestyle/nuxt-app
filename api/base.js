import axios from './config';

export const getInfo = () => {
    return axios({
        method: "GET",
        url: "http://villagestyle.top:9001/interface/info/list",
        params: {
            key: 'PJnt1gv_KN-aOiYshhPT3awWeRvMqARJ9eCz_VR2a6A'
        }
    })
}

export const setInfo = (data) => {
    return axios({
        method: "POST",
        url: "http://villagestyle.top:9001/interface/info",
        data
    })
}