function Node(value, prev=null, next=null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
    this.setNext = function(next){
        this.next = next;
    };
}

module.exports = function(){
    this.start = null;
    this.last = null;
    this.size = 0;
    this.push = function(value){
        const node = new Node(value, this.last);
        if(size===0) {
            this.start=node;
            this.last=node;
        }else{
            this.last.setNext(node);
            this.last = node;
        }
        size++;
    };
    this.pop = function(){
        const value = this.last.value;
        if(this.size===1) {
            this.start = null;
            this.last = null;
        }else {
            this.last = this.last.prev;
        }
        size--;
        return value;
    };
    this.isEmpty = function(){
        return this.size === 0;
    };
};