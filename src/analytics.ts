import posthog from 'posthog-js'
import { getExtensionVersion } from './utils'

posthog.init('phc_9ddG4YT65Cq2yuJPt8GQH4rDiYDuEw9MgdkAeKG1adA', {
  api_host: 'https://app.posthog.com',
  persistence: 'localStorage',
  autocapture: false,
  capture_pageview: false,
  disable_session_recording: true,
  property_blacklist: ['$current_url', '$pathname'],
  loaded: (pg) => {
    pg.people.set({ ext_version: getExtensionVersion() })
  },
})

export function captureEvent(event: string, properties?: object) {
  posthog.capture(event, properties)
}
