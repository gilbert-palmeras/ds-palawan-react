import  { Action } from '../../types/Redux';

export enum Actions {
    GET_TOUR_GUIDES_START = '@tourPackage/GET_TOUR_GUIDE_LIST_START',
    GET_TOUR_GUIDES_FULFILLED = '@tourPackage/GET_TOUR_GUIDE_LIST_FULFILLED',
    GET_TOUR_GUIDES_REJECTED = '@tourPackage/GET_TOUR_GUIDE_LIST_REJECTED'
};

export type TourGuides = {
    image: string;
    name: string;
};

export interface WithLoadingList<T> {
    isLoading: boolean,
    tourGuides: T;
};

export interface TourGuideState {
    tourGuidesList: WithLoadingList<TourGuides[]>
}

export type GetTourGuideRequest = Action<typeof Actions.GET_TOUR_GUIDES_START>;
export type GetTourGuideAction = Action<typeof Actions.GET_TOUR_GUIDES_FULFILLED, TourGuides[]>;
export type GetTourGuideError = Action<typeof Actions.GET_TOUR_GUIDES_REJECTED>;

export type TourGuideActionTypes = 
    | GetTourGuideRequest
    | GetTourGuideAction
    | GetTourGuideError;