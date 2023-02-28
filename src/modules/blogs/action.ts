import { Actions, BlogActionTypes } from "@modules/blogs/types";

export const blogAction = (): BlogActionTypes => ({
    payload: undefined,
    type: Actions.GET_BLOG_START
})