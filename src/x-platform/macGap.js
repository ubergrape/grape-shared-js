export function createNotification({title, content, icon}) {
  MacGap.notify({
    title,
    content,
    sound: false
  })
}

/**
 * Open an url.
 */
export function openUrl(url) {
  return MacGap.openURL(url)
}

/**
 * Renders the doc icon badge.
 */
export const {addBadge} = MacGap.Dock

/**
 * Removes the doc icon badge.
 */
export const {removeBadge} = MacGap.Dock
