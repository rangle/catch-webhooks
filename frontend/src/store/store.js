import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
 


const JSON_RECEIVED = "JSON_RECEIVED"
const SET_WEBHOOK_TITLE = "SET_WEBHOOK_TITLE"
const SET_WEBHOOK_SUMMARY = "SET_WEBHOOK_SUMMARY"
const CLEAR_ALL_ACTION = "CLEAR_ALL_ACTION"

export const jsonReceivedAction = (json) => {
  return {
    type: JSON_RECEIVED,
    title: "Initial title",
    summary: "Some initial notes",
    json
  }
}

export const setWebhookTitleAction = (index, title) => {
  return {
    type: SET_WEBHOOK_TITLE,
    index, title
  }
}

export const setWebhookSummaryAction = (index, summary) => {
  return {
    type: SET_WEBHOOK_SUMMARY,
    index, summary
  }
}

export const clearAllAction = () => {
  return {
    type: CLEAR_ALL_ACTION
  }
}

const initialState = {
  events : []
}



const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case JSON_RECEIVED:
      console.log(action)
      return {
        ...state,
        events : [...state.events, {
          date : new Date(),
          json : action.json,
          title : "",
          summary: ""
        }]
      }
    case SET_WEBHOOK_TITLE:
      return {
        ...state,
        events : [
          ...state.events.slice(0, action.index),
          {
            ...state.events[action.index],
            title : action.title
          },
          ...state.events.slice(action.index + 1)
        ]
      }
    case SET_WEBHOOK_SUMMARY:
      return {
        ...state,
        events : [
          ...state.events.slice(0, action.index),
          {
            ...state.events[action.index],
            summary : action.summary
          },
          ...state.events.slice(action.index + 1)
        ]
      }
    case CLEAR_ALL_ACTION:
      return {
        ...state,
        events : []
      }
    default:
      return state
  }
}


const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
