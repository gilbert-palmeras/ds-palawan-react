import update from 'immutability-helper';
import { Actions, TransferActionTypes, TransferState } from '@modules/transfers/types';

const initialState: TransferState = {
	transferList: {
		isLoading: false,
		transfer: []
	}
};

export const transferReducers = (state = initialState, action: TransferActionTypes): TransferState => {
	switch (action.type) {
		case Actions.GET_TRANSFER_START: {
			return update(state, {
				transferList: {
					isLoading: { $set: true },
				}
			})
		}
		case Actions.GET_TRANSFER_FULFILLED: {
			return update(state, {
				transferList: {
					isLoading: { $set: false },
					transfer: { $set: [...action.payload] },
				}
			})
		}
		case Actions.GET_TRANSFER_REJECTED: {
			return update(state, {
				transferList: {
					isLoading: { $set: false },
				}
			})
		}
		default: {
			return { ...state };
		}
	}
};