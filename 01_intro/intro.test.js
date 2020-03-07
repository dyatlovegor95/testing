const {sum, nativeNull} = require('./intro')
// import { sum, nativeNull } from './intro' // ES 6

// Объединить тесты describe


describe('Sum function', () => {
    test('should return sum of two values', () => {
        // ожидаем
        // toBe == toEqual
        expect(sum(1, 3)).toBe(4)
        expect(sum(1, 3)).toEqual(4)
    
    })
    
    test('should return value correctly comparing to other', () => {
        // expect - ожидаем
        // toBe == toEqual (мечер)
        expect(sum(2, 3)).toBeGreaterThan(4)
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
    
        expect(sum(2, 3)).toBeLessThan(6)
        expect(sum(2, 3)).toBeLessThanOrEqual(5)
        
    })
    
    test('should sum 2 float values correctly', () => {
        
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
        
    })
})

describe('Native null function', () => {
    test('should return false value null', () => {
        
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy() // undefined, null, 0, ''
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()
        expect(nativeNull()).not.toBeUndefined()
        
    })
})





