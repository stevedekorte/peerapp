"use strict";

/*

    BMGroupChatChannel

*/

(class BMGroupChatChannel extends BMApplet {
    
    initPrototypeSlots () {
        this.newSlot("name", "Untitled")
    }

    init () {
        super.init()
        return this
    } 

    title () {
        return this.name()
    }
	
    setTitle (aString) {
        this.setName(aString)
        return this
    }

}.initThisClass());

