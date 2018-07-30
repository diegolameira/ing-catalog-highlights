export enum ActionTypes {
  SET_CURRENT
}

export const setCurrent = (index: number) => ({
  type: ActionTypes.SET_CURRENT,
  index
});
