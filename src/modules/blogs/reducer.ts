import update from 'immutability-helper';
import { Actions, BlogActionTypes, BlogState } from '@modules/blogs/types';

const initialState: BlogState = {
	blogList: {
		isLoading: false,
		blog: []
	}
};

export const blogReducers = (state = initialState, action: BlogActionTypes): BlogState => {
	switch (action.type) {
		case Actions.GET_BLOG_START: {
			return update(state, {
				blogList: {
					isLoading: { $set: true },
				}
			})
		}
		case Actions.GET_BLOG_FULFILLED: {
			return update(state, {
				blogList: {
					isLoading: { $set: false },
					blog: { $set: [...action.payload] },
				}
			})
		}
		case Actions.GET_BLOG_REJECTED: {
			return update(state, {
				blogList: {
					isLoading: { $set: false },
				}
			})
		}
		default: {
			return { ...state };
		}
	}
};