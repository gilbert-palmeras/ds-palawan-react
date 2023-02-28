import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpStatus } from '@constants/httpStatus';

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
const timeout = 25000;

const config: AxiosRequestConfig = {
    baseURL: SERVER_BASE_URL,
    timeout,
    headers: { 'content-type': 'application/json' }
};

export const arrayBufferToBase64 = (buffer: Array<number>): string => {
	let binary = '';
	const bytes = [].slice.call(new Uint8Array(buffer));
	bytes.forEach((b) => (binary += String.fromCharCode(b)));
	return window.btoa(binary);
};

export const api = (options: AxiosRequestConfig = {}): Promise<AxiosResponse> =>
	axios.request({ ...config, ...options });

export interface ResponseDetails<S extends HttpStatus> {
    message: string | string[];
    statusCode: S;
    error?: string;
}

export type Response<T extends object = {}, S extends HttpStatus = 200> = { data: ResponseDetails<S> & T };