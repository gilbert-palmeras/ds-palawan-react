import update from 'immutability-helper'
import { Actions, TourPackageActionTypes, ITourPackageState } from '@modules/tourPackages/types';

const initialState: ITourPackageState = {
	tourPackage: {
		isLoading: false,
		tours: []
	}
};

export const tourPackageReducers = (state = initialState, action: TourPackageActionTypes): ITourPackageState => {
	switch (action.type) {
		case Actions.GET_TOUR_PACKAGE_LIST_START: {
			return update(state, {
				tourPackage: {
					isLoading: { $set: true },
				}
			})
		}
		case Actions.GET_TOUR_PACKAGE_LIST_FULFILLED: {
			return update(state, {
				tourPackage: {
					isLoading: { $set: false },
					tours: { $set: [...action.payload] },
				}
			})
		}
		case Actions.GET_TOUR_PACKAGE_LIST_REJECTED: {
			return update(state, {
				tourPackage: {
					isLoading: { $set: false },
				}
			})
		}
		default: {
			return { ...state };
		}
	}
};
