import { Actions, TourGuideActionTypes } from "@modules/tourGuides/types";

export const tourGuideAction = (): TourGuideActionTypes => ({
    payload: undefined,
    type: Actions.GET_TOUR_GUIDES_START
})