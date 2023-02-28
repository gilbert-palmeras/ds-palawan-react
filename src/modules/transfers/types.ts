import  { Action } from '../../types/Redux';

export enum Actions {
    GET_TRANSFER_START = '@tourPackage/GET_TRANSFER_START',
    GET_TRANSFER_FULFILLED = '@tourPackage/GET_TRANSFER_FULFILLED',
    GET_TRANSFER_REJECTED = '@tourPackage/GET_TRANSFER_REJECTED'
};

export type Transfer = {
    image: string;
    date: string;
    title: string;
    type: string;
    price: number;
    description: string;
};

export interface WithLoadingList<T> {
    isLoading: boolean,
    transfer: T;
};

export interface TransferState {
    transferList: WithLoadingList<Transfer[]>
}

export type GetTransferRequest = Action<typeof Actions.GET_TRANSFER_START>;
export type GetTransferAction = Action<typeof Actions.GET_TRANSFER_FULFILLED, Transfer[]>;
export type GetTransferError = Action<typeof Actions.GET_TRANSFER_REJECTED>;

export type TransferActionTypes = 
    | GetTransferRequest
    | GetTransferAction
    | GetTransferError;