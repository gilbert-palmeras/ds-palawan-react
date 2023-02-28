import { Actions, TransferActionTypes } from "@modules/transfers/types";

export const transferAction = (): TransferActionTypes => ({
    payload: undefined,
    type: Actions.GET_TRANSFER_START
})