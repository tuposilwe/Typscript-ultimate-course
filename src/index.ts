class ArrayUtils {
    static wrapInArrray<T>(value: T){
       return [value]
    }
}

let numbers = ArrayUtils.wrapInArrray(1);