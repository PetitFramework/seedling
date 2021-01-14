export default obj => Object.keys(obj)
    .map((key) => {
        const value = obj[key]
        const parsedValue = `"${value}"`
        return `${key}=${parsedValue}`
    })
    .join(' ')
