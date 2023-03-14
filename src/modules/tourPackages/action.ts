import { Actions, TourPackageActionTypes } from "@modules/tourPackages/types";

export const getTourPackages = (): TourPackageActionTypes => ({
    payload: undefined,
    type: Actions.GET_TOUR_PACKAGE_LIST_START
})