// (function(){
    function Node(value, prev=null, next=null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
        this.setNext = function(next){
            this.next = next;
        };
    }

    function Queue(){
        this.start = null;
        this.last = null;
        this.size = 0;
        this.push = function(value){
            const node = new Node(value, this.last);
            if(this.size===0) {
                this.start=node;
                this.last=node;
            }else{
                this.last.setNext(node);
                this.last = node;
            }
            this.size++;
        };
        this.front = function(){
            if(this.isEmpty()) return null;
            const value = this.last.value;
            if(this.size===1) {
                this.start = null;
                this.last = null;
            }else {
                this.last = this.last.prev;
            }
            this.size--;
            return value;
        };
        this.isEmpty = function(){
            return this.size === 0;
        };
    };

    function Stack(){
        this.start = null;
        this.last = null;
        this.size = 0;
        this.push = function(value){
            const node = new Node(value);
            if(this.size===0) {
                this.start=node;
                this.last=node;
            }else{
                this.last.setNext(node);
                this.last = node;
            }
            this.size++;
        };
        this.pop = function(){

            if(this.isEmpty()) return null;
            const value = this.start.value;
            if(this.size===1){
                this.start = null;
                this.last = null;
            }else{
                this.start = this.start.next;
            }
            this.size--;
            return value;
        };
        this.isEmpty = function(){
            return this.size === 0;
        };
    };


    let songsArray = [];
    let stack;
    let queue;
    let activeSong;

    $(document).ready(function(){
        $.post('/songs', {name: ''}, function(result, status){
            if(!result.success) return alert(result.msg);
            const { songs } = result;
            songs.forEach((element, index) => {
                songsArray.push(element);
                let div = document.createElement('div');
                div.textContent = element.name;
                div.onclick = () => {
                    activeSong = element;
                    selectSong(index)
                };
                $('.musicList').append(div);
            });
        })
    });

    function selectSong(index) {
        console.log(index);
        stack = new Stack();
        queue = new Queue();
        for(let i=0;i<index;i++){
            stack.push(songsArray[i]);
        }
        for(let i=index+1;i<songsArray.length;i++){
            queue.push(songsArray[i]);
        }
        getSong();
    }


    function getSong() {
        $('audio').attr('src', `/songs/?id=${activeSong._id}`);
        document.querySelector('audio').play();
    }


    function next(){
        stack.push(activeSong);
        activeSong = queue.front();
        if(!activeSong) return prev();
        getSong()
    }

    function prev() {
        queue.push(activeSong);
        activeSong = stack.pop();
        if(!activeSong) return next();
        getSong();
    }

    document.querySelector('audio').onended = () => {
        next();
    }
    $('.prevsong > span').click(function(){
        prev();
    })
    $('.nextsong > span').click(function(){
        next();
    })
    $('.pauseandplay > span').click(function(){
        let audio = document.querySelector('audio');
        if(audio.paused) audio.play();
        else audio.pause();
    })
// })();