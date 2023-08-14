import axios from 'axios'
import { get, post } from '../utils/http';
// import { UserState } from '/@/store/modules/user/types';

export const getM = async () => get({ url: '/song/url?id=405998841,33894312' })