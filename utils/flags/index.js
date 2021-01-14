export default ({ name, code, hide }) => {
    const MAP = {
        ru: '🇷🇺',
        zh: '🇨🇳',
        sw: '🇨🇭'
    }
    const match = MAP[code]
    return !hide && match ? match : name
}
