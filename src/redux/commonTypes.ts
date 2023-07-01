import { PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { RootState, AppDispatch } from "./store";

export type AsyncThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
  serializedErrorType: string;
};

export type RejectedAction = PayloadAction<
  null,
  string,
  {
    arg: any;
    requestId: string;
    aborted: boolean;
    condition: boolean;
  },
  SerializedError
>;

export type PendingAction = {
  payload: undefined;
  type: string;
} & {
  meta: {
    arg: unknown;
    requestId: string;
    requestStatus: "pending";
  };
};
