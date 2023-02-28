import { Actions, DestinationActionTypes } from "@modules/destinations/types";

export const destinationAction = (): DestinationActionTypes => ({
    payload: undefined,
    type: Actions.GET_DESTINATION_START
})