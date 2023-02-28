import update from 'immutability-helper';
import { Actions, DestinationActionTypes, DestinationState } from '@modules/destinations/types';

const initialState: DestinationState = {
	destinationList: {
		isLoading: false,
		destination: []
	}
};

export const destinationReducers = (state = initialState, action: DestinationActionTypes): DestinationState => {
	switch (action.type) {
		case Actions.GET_DESTINATION_START: {
			return update(state, {
				destinationList: {
					isLoading: { $set: true },
				}
			})
		}
		case Actions.GET_DESTINATION_FULFILLED: {
			return update(state, {
				destinationList: {
					isLoading: { $set: false },
					destination: { $set: [...action.payload] },
				}
			})
		}
		case Actions.GET_DESTINATION_REJECTED: {
			return update(state, {
				destinationList: {
					isLoading: { $set: false },
				}
			})
		}
		default: {
			return { ...state };
		}
	}
};