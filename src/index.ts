class KeyValuePair<K,V> {
    constructor(public key: K,public value: V){}
}

let pair = new KeyValuePair('1','s');
pair.value.