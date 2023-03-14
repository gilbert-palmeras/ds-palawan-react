import  { Action } from '../../types/Redux';

export enum Actions {
    GET_TOUR_PACKAGE_LIST_START = '@tourPackage/GET_TOUR_PACKAGE_LIST_START',
    GET_TOUR_PACKAGE_LIST_FULFILLED = '@tourPackage/GET_TOUR_PACKAGE_LIST_FULFILLED',
    GET_TOUR_PACKAGE_LIST_REJECTED = '@tourPackage/GET_TOUR_PACKAGE_LIST_REJECTED'
};

export type TTourPackage = {
    image: string;
    date: string;
    title: string;
    price: number;
};

export interface WithLoadingList<T> {
    isLoading: boolean,
    tours: T;
};

export interface ITourPackageState {
    tourPackage: WithLoadingList<TTourPackage[]>
}

export type GetTourPackageRequest = Action<typeof Actions.GET_TOUR_PACKAGE_LIST_START>;
export type GetTourPackageAction = Action<typeof Actions.GET_TOUR_PACKAGE_LIST_FULFILLED, TTourPackage[]>;
export type GetTourPackageError = Action<typeof Actions.GET_TOUR_PACKAGE_LIST_REJECTED>;

export type TourPackageActionTypes = 
    | GetTourPackageRequest
    | GetTourPackageAction
    | GetTourPackageError;