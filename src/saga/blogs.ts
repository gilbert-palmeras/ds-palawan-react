import { call, put, all, takeLatest } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { api, Response } from '@app/helpers/api';
import { Actions, Blogs } from '@modules/blogs/types';

export function* getBlog(): SagaIterator{
    try {
        const { data }: Response<{ data: Blogs[] }> = yield call(api, {
            url: '/blog/get-blog',
            method: 'get'
        })
        yield put({ type: Actions.GET_BLOG_FULFILLED, payload: data.data })
    } catch (error) {
        yield put({ type: Actions.GET_BLOG_REJECTED, payload: undefined })
    }
}


export function* blogWatchers() {
    yield all([
        takeLatest(Actions.GET_BLOG_START, getBlog)
    ])
}