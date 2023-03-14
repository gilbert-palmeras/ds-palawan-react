import { Actions, DestinationActionTypes } from "@modules/destinations/types";

export const getDestinations = (): DestinationActionTypes => ({
    payload: undefined,
    type: Actions.GET_DESTINATION_START
})