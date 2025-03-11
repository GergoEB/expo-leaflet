import React from 'react'
import { NativeHarness } from './NativeHarness'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(<NativeHarness />)
