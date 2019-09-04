function Node(value, next=null) {
    this.value = value;
    this.next = next;
    this.setNext = function(next){
        this.next = next;
    }
}

module.exports = function(){
    this.start = null;
    this.last = null;
    this.size = 0;
    this.push = function(value){
        const node = new Node(value);
        if(size===0) {
            this.start=node;
            this.last=node;
        }else{
            this.last.setNext(node);
            this.last = node;
        }
        size++;
    };
    this.front = function(){
        const value = this.start.value;
        if(size===1){
            this.start = null;
            this.last = null;
        }else{
            this.start = this.start.next;
        }
        size--;
        return value;
    };
    this.isEmpty = function(){
        return this.size === 0;
    };
};