"use strict";

/*

    BMChatMessageTile

*/

(class BMChatMessageTile extends TitledTile {
    
    initPrototypeSlots () {

    }

    init () {
        super.init()
        //	this.setSelectedBgColor("white")
        //	this.setUnselectedBgColor("white")

        this.setDisplay("block")
		
        this.setMinHeight("auto")
        this.setMaxHeightPx(1000)
        this.setHeight("auto")
		
        this.setPaddingTopPx(10)
        this.setMarginBottomPx(10)
		
        this.setupTitleView()
    }
    
    setupTitleView () {
        this.titleView().insertElementClassName(this.type() + "Title")
        this.titleView().setWidth("auto")
        this.titleView().setMinWidth("50px")
        this.titleView().setMaxWidth("calc(100% - 100px)")

        this.titleView().setTopPx(0)
        this.titleView().setPosition("relative")
        this.titleView().setLeftPx(null)
        this.titleView().setMarginRightPx(20)
        this.titleView().setMarginLeft(0)
        //this.titleView().setBorder("1px solid rgba(0,0,0,0.05)")
    }
    
    alignToRight () {
	    this.titleView().setRightPx(20)
        this.titleView().setFloat("right")
	    this.titleView().setBorderRadius("8px 8px 0px 8px") // top-left, top-right,  bottom-right, bottom-left
        this.titleView().setBackgroundColor("rgb(84, 193, 250)")
        this.titleView().setColor("white")
        //this.titleView().setBorder("1px solid rgba(0,0,0,0.02)")
	    return this
    }
    
    alignToLeft () {
        this.titleView().setLeftPx(20)
    	this.titleView().setFloat("left")
        this.titleView().setBorderRadius("8px 8px 8px 0px") // top-left, top-right,  bottom-right, bottom-left 
        this.titleView().setBackgroundColor("#ccc")
        this.titleView().setColor("black")
	    return this
    }

    message () {
        return this.node()
    }

    updateSubviews () {
        super.updateSubviews()
		
        const node = this.node()
        if (node) {
            //this.debugLog(" updateSubviews node = " + node.typeId() + " content = ", this.node().content())
            this.titleView().setString(node.title())
		
            if (this.message().wasSentByMe()) {
                this.styleAsSent()
            } else {
                this.styleAsReceived()
            }
        }
		
        return this
    }
	
    styleAsSent () {
        this.alignToRight()
    }
	
    styleAsReceived () {
        this.alignToLeft()
    }
    
    /*
    unselectedBgColor () {
        return "white"
    }
    
    selectedBgColor () {
        return "white"
    }
    */

}.initThisClass());

