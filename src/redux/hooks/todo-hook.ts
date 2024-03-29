import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, RootState } from '../store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useTodoDispatch: () => AppDispatch = useDispatch
export const useTodoSelector: TypedUseSelectorHook<RootState> = useSelector