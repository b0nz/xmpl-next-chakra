export const GA_TRACKING_ID = 'G-NWQ3W47432'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview: any = (url) =>
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event: any = ({ action, category, label, value }) =>
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
