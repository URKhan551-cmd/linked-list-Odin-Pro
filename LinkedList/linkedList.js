class Node {
    constructor (node = null){
      this.node = node;
      this.nextNode = null;
    }
}


class LinkedList{
    constructor(){
        this.headNode = null;
        this._size = 0;
    }

    // append(value) add a new node containig value to the end of the list
    append(value){
        const newNode = new Node(value);
        if(!this.headNode){
            this.headNode = newNode;
        } else {
            let current = this.headNode;
            while(current.nextNode){
                current = current.nextNode;
            }

            current.nextNode = newNode;
        }
        this._size++;
        return this;
    }

    // prepend adds a new node containing value to the start of the list 
    prepend(value){
       const newNode = new Node(value);
       newNode.nextNode = this.headNode;
       this.headNode = newNode;
       this._size++;
       return this;  // this will return linkedlist   "this" refers to the main obj
    }

    // size() return the total number nodes in the list
    size(){
        return this._size;
    }

    // head the value of the first node in the list
    head(){
        return this.headNode ? this.headNode.value : undefined;
    }

    // tail()  returu the final node value in the list 
    tail(){
        if(!this.headNode) return undefined;  
        let current = this.headNode;
        while(current.nextNode){
            current = current.nextNode;
        }

        return current.value;  // while loop run until last so the current would become the last node;
    }

    // at() return the value of the node at given index.
    at(index){
       if(index < 0 || index >= this._size) return undefined;

       let current = this.headNode;
       for(let i=0; i<index; i++){
        current  = current.nextNode;  // the loop will stop at the specific index the current would be node
       }
       return current.value;
    }

    // pop() remove the head of list node return its value
    pop(){
        if(!this.headNode) return undefined;
        const value = this.headNode.value;
        this.headNode = this.headNode.nextNode;
        this._size--;
        return value;
    }

    // contains(value) return the true if value of node present
    contains(value){
        let current = this.headNode;
        while(current){
            if(current.value === value) return true;
            
            current = current.nextNode;
        }
        return false;
    }

    // findIndex(value) index of value inside of list or -1 not found 
    findIndex(value){
        let current = this.headNode;
        let index = 0;
        while(current){
            if(current.value === value ) return index;
            
            current = current.nextNode;
            index++;
        }
        return -1;
    }

    // toString() get value or null if empty
    toString(){
        if(!this.headNode) return "";

        let result = "";
        let current = this.headNode;
        while(current){
            result += `(${current.value}) ->`;
            current = current.nextNode;
        }
        result += "null";
        return result;
    }

    // extra credit 
    // insertAt(index, values) - index 0 to size inclusive, else range error
    insertAt(index, ...values) {
        if(index < 0 || index > this._size){
            throw new RangeError(`Index ${index} is out of bounds. Valid range: 0 to ${this._size}`);
        }

        if(values.length === 0) return this;

        let firstNew = new Node(values[0]);
        let lastNew = firstNew;

        for(let i=1; i<values.length; i++){
            lastNew.nextNode = new Node(values[i]);
            lastNew = lastNew.nextNode;
        }

        if(index === 0){
            lastNew.nextNode = this.headNode;
            this.headNode = firstNew;
        } else {
            let prev = this.headNode;
            for(let i=0; i<index - 1; i++){
                prev = prev.nextNode;
            }
            lastNew.nextNode = prev.nextNode;
            prev.nextNode = firstNew;
        }
        this._size += values.length;
        return this;

    }

    // removeAt() index 0 to size - 1 else rangeError
    removeAt(index){
        if(index < 0 || index >= this._size){
            throw new RangeError(`Index ${index} is out of bounds. Valid range: 0 to ${this._size - 1}`);

        }

        if(index === 0){
            const value = this.headNode.value;
            this.headNode = this.headNode.nextNode;
            this._size--;
            return value;
        }

        let prev = this.headNode;
        for(let i=0; i<index-1; i++){
            prev = prev.nextNode;
        }

        const value = prev.nextNode.value;
        prev.nextNode = prev.nextNode.nextNode;
        this._size--;
        return  value;
    }
}


// if i wanna do it at factory func
// function createNode(value = null){
//    return {value, nextNode: null};
// }

 export {node, LinkedList, createNode};
 export default LinkedList;