import noop from 'lodash/utility/noop'

const notificationsConfig = {
  pageVisibility: true,
  autoClose: 6000
}

/**
 * Create native html notification.
 */
export function createNotification({title, content, icon}, callback = noop) {
  // Notify lands to `html5-desktop-notifications`
  // used in `grape-web-client`.
  const {notify} = window
  if (!notify) return
  notify.config(notificationsConfig)
  const notification = notify.createNotification(title, {
    icon,
    tag: title,
    body: content,
    onclick: () => {
      window.focus()
      notification.close()
      callback()
    }
  })
}

/**
 * Open an url in browser.
 */
export function openUrl(url, blank = true) {
  if (blank) return window.open(url)
  window.location.href = url
}
