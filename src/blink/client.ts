import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'foodcontro-template-para-g52pjou9',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_Rdyzh7jUA5pbEFMjnLsqAH2dJujTk2sv',
  authRequired: false,
  auth: { mode: 'managed' },
})
