import update from 'immutability-helper';
import { Actions, TourGuideActionTypes, TourGuideState } from '@modules/tourGuides/types';

const initialState: TourGuideState = {
	tourGuidesList: {
		isLoading: false,
		tourGuides: []
	}
};

export const tourGuideReducers = (state = initialState, action: TourGuideActionTypes): TourGuideState => {
	switch (action.type) {
		case Actions.GET_TOUR_GUIDES_START: {
			return update(state, {
				tourGuidesList: {
					isLoading: { $set: true },
				}
			})
		}
		case Actions.GET_TOUR_GUIDES_FULFILLED: {
			return update(state, {
				tourGuidesList: {
					isLoading: { $set: false },
					tourGuides: { $set: [...action.payload] },
				}
			})
		}
		case Actions.GET_TOUR_GUIDES_REJECTED: {
			return update(state, {
				tourGuidesList: {
					isLoading: { $set: false },
				}
			})
		}
		default: {
			return { ...state };
		}
	}
};