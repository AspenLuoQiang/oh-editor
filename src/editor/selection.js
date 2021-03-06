class Selection{
	constructor(){
		this.selection = void 0;
		this.range = void 0;
	}

	getSelection(){
		this.selection = window.getSelection();
		return this.selection;
	}

	getRange(){
		this.selection = this.getSelection();
		if(this.selection)
			return this.selection.getRangeAt(0);
		return false;
	}

	/**
	 * resetRange - 重置光标位置
	 *
	 * @param  {type} startContainer description
	 * @param  {type} startOffset    description
	 * @param  {type} endContainer   description	 
	 * @param  {type} endOffset      description
	 * @return {type}                description
	 */
	resetRange(startContainer, startOffset, endContainer, endOffset) {
		const selection = this.getSelection();
		selection.removeAllRanges();

		const range = document.createRange();
		range.setStart(startContainer, startOffset);
		range.setEnd(endContainer, endOffset);
		selection.addRange(range);
		this.selection = selection;
	}

	setRangeEndOfElement(elem) {
		const selection = this.getSelection();
		const range = document.createRange();
		range.selectNodeContents(elem);
		range.collapse(false);
		selection.removeAllRanges();
		selection.addRange(range);
	}

	restoreRange(range) {
		const selection = this.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);
		this.selection = selection;
	}
}

export { Selection };
