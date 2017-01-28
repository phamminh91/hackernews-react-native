export function action(type, data={}) {
  return {type, ...data};
}

export function networkAction(actionName) {
  return {
    REQUEST: actionName + '_REQUEST',
    SUCCESS: actionName + '_SUCCESS',
    FAILED: actionName + '_FAILED',
  };
}
