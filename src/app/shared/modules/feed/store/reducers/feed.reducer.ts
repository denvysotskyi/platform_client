import { createReducer, on } from '@ngrx/store'
import { routerNavigationAction } from '@ngrx/router-store'

import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction
} from '../actions/feed.actions'
import { FeedStateInterface } from '../../interfaces/feed-state.interface'

export const initialState: FeedStateInterface = {
  isLoading: false,
  data: null,
  error: null
}

export const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false
    })
  ),
  on(routerNavigationAction, (): FeedStateInterface => initialState)
)
