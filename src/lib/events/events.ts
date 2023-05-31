type Payload = {
  [key: string]: any,
}
type EnumEvent = {
  enum: string,
} & Payload

function createEvent (payload: EnumEvent) {
  return new CustomEvent('eventbus', {
    detail: payload,
  })
}
const state: {[key: string]: any} = {

}
const events = new Map([])
function eventReducer (event: CustomEvent<EnumEvent>) {
  return events.get(event.detail.enum)
}

// as generator to iterate over user events as a stream
function dispatchEvent (payload: EnumEvent) {
  document.dispatchEvent(createEvent(payload))
}

function eventSetupTeardown (callback: (event: Event) => void) {
  document.addEventListener('eventbus', callback)
  return () => document.removeEventListener('eventbus', callback)
}

// https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel
function initBroadcastChannel (channelName: string) {
  const channel = new BroadcastChannel(channelName)
  return {
    name: channelName,
    postMessage: channel.postMessage,
    close: channel.close,
  }
}