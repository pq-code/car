

import { http } from '../index'

export const addusedCar = (params) => {
    return http.post('wx/project/addUsedCar', params);
};

export const getUsedCarList = (params) => {
    return http.post('wx/project/getUsedCar', params);
};




