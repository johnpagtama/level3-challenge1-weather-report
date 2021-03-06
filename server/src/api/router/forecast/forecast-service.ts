import { NextFunction, Request, Response } from 'express';
import axios from 'axios';
import 'dotenv/config';
import { owm } from '../../../config/open_weather/open-weather-config';

export const getForecast = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { data } = await axios.get(`${owm.base}${owm.forecast}Seoul,KR${owm.units}${owm.app_id}${owm.key}`);
        
        res.json(data);
    } catch (error) {
        next(error);
    }
}