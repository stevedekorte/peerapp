"use strict";

/*

    BMInvMessage

*/

(class BMInvMessage extends BMMessage {
    
    initPrototypeSlots () {

    }

    init () {
        super.init()
        this.setMsgType("inv")
        this.setData([])
    }
    
    addMsgHash (msgHash) {
        //const f = this.bloomFilter()
        //if (f === null || f.checkEntry(
        this.data().push(msgHash)
        return this
    }

    addMessages (msgs) {
	    msgs.forEach( (objMsg) => {
            this.addMsgHash(objMsg.msgHash())
        })
        return this
    }
    
    msgDict () {
        return {
            msgType: this.msgType(),
            data: this.data()
        }
    }

}.initThisClass());
