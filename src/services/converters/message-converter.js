export function convertToMessageObject (serverModel) {
  return {
    sender: serverModel.sender,
    time: new Date(serverModel.time),
    message: serverModel.message
  }
}
