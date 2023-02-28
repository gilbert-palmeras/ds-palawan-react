import  { Action } from '../../types/Redux';

export enum Actions {
    GET_BLOG_START = '@tourPackage/GET_BLOG_LIST_START',
    GET_BLOG_FULFILLED = '@tourPackage/GET_BLOG_LIST_FULFILLED',
    GET_BLOG_REJECTED = '@tourPackage/GET_BLOG_LIST_REJECTED'
};

export type Blogs = {
    thumbImage: string;
    writter: string;
    date: string;
    title: string;
    comments: number;
};

export interface WithLoadingList<T> {
    isLoading: boolean,
    blog: T;
};

export interface BlogState {
    blogList: WithLoadingList<Blogs[]>
}

export type GetBlogRequest = Action<typeof Actions.GET_BLOG_START>;
export type GetBlogAction = Action<typeof Actions.GET_BLOG_FULFILLED, Blogs[]>;
export type GetBlogError = Action<typeof Actions.GET_BLOG_REJECTED>;

export type BlogActionTypes = 
    | GetBlogRequest
    | GetBlogAction
    | GetBlogError;