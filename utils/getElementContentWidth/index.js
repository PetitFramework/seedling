export default (element) => {
    const styles = window.getComputedStyle(element)
    const padding = parseFloat(styles.paddingLeft) +
        parseFloat(styles.paddingRight)

    return element.clientWidth - padding
}
