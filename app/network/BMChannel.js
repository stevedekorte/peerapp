"use strict";

/*

    BMChannel

*/

(class BMChannel extends BMStorableNode {
    
    initPrototypeSlots () {
        this.newSlot("name", "").setShouldStoreSlot(true)
    }

    /*
    init () {
        super.init()
    }
    */
    
    title () {
        return this.name()
    }
    
    privateKey () {
        const hexName = this.name().toString(16)
        const privateKey = new bitcore.PrivateKey(hexName);
        return privateKey
    }
    
    publicKeyString () {
	    return this.privateKey().toPublicKey().toString()
    }
	
}.initThisClass());
