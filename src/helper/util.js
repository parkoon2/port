export const openNewWindow = url => {
    const win = window.open(url, '_blank')
    win.focus()
}
