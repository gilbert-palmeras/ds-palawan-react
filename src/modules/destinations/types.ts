import  { Action } from '../../types/Redux';

export enum Actions {
    GET_DESTINATION_START = '@tourPackage/GET_DESTINATION_LIST_START',
    GET_DESTINATION_FULFILLED = '@tourPackage/GET_DESTINATION_LIST_FULFILLED',
    GET_DESTINATION_REJECTED = '@tourPackage/GET_DESTINATION_LIST_REJECTED'
};

export type Destination = {
    image: string;
    place: string;
    placeCount: number;
    hotel: number;
};

export interface WithLoadingList<T> {
    isLoading: boolean,
    destination: T;
};

export interface DestinationState {
    destinationList: WithLoadingList<Destination[]>
}

export type GetDestinationRequest = Action<typeof Actions.GET_DESTINATION_START>;
export type GetDestinationAction = Action<typeof Actions.GET_DESTINATION_FULFILLED, Destination[]>;
export type GetDestinationError = Action<typeof Actions.GET_DESTINATION_REJECTED>;

export type DestinationActionTypes = 
    | GetDestinationRequest
    | GetDestinationAction
    | GetDestinationError;