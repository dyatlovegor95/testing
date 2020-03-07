function expect(value) {
    return {
        toBe: exp => {
            if (value === exp) {
                console.log('success')
            }
            else {
                console.error(`Value is ${value}, but expqctation is ${exp}`)
            }
        }
    }
}

const sum = (a, b) => a + b

const nativeNull = () => null

//console.log(sum(41, 1))

//expect(sum(41, 1)).toBe(42)
//expect(sum(41, 1)).toBe(43)


//export default {sum, nativeNull}
module.exports = {sum, nativeNull}
