function createNode (value = null){
   return {
    value: value,
    nextNode: null,
   };

}


function createLinkedList(){
    let headNode = null;
    let _size = 0;

    function getNode(index){
        let  currentNode = headNode;
        for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
    }

    return {
    append(value) {
      const newNode = createNode(value);
      if (!headNode) {
        headNode = newNode;
      } else {
        let current = headNode;
        while (current.nextNode) {
          current = current.nextNode;
        }
        current.nextNode = newNode;
      }
      _size++;
      return this;
    },


    prepend(value) {
      const newNode = createNode(value);
      newNode.nextNode = headNode;
      headNode = newNode;
      _size++;
      return this;
    },


    size() {
      return _size;
    },


    head() {
      return headNode ? headNode.value : undefined;
    },


    tail() {
      if (!headNode) return undefined;
      let current = headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      return current.value;
    },

    
    at(index) {
      if (index < 0 || index >= _size) return undefined;
      return getNodeAt(index).value;
    },
    // Per your spec: removes HEAD and returns its value
    pop() {
      if (!headNode) return undefined;
      const value = headNode.value;
      headNode = headNode.nextNode;
      _size--;
      return value;
    },
    contains(value) {
      let current = headNode;
      while (current) {
        if (current.value === value) return true;
        current = current.nextNode;
      }
      return false;
    },
    findIndex(value) {
      let current = headNode;
      let index = 0;
      while (current) {
        if (current.value === value) return index;
        current = current.nextNode;
        index++;
      }
      return -1;
    },
    toString() {
      if (!headNode) return "";
      let result = "";
      let current = headNode;
      while (current) {
        result += `( ${current.value} ) -> `;
        current = current.nextNode;
      }
      result += "null";
      return result;
    },
    // Extra Credit
    insertAt(index, ...values) {
      if (index < 0 || index > _size) {
        throw new RangeError(
          `Index ${index} is out of bounds. Valid range: 0 to ${_size}`
        );
      }
      if (values.length === 0) return this;
      let firstNew = createNode(values[0]);
      let lastNew = firstNew;
      for (let i = 1; i < values.length; i++) {
        lastNew.nextNode = createNode(values[i]);
        lastNew = lastNew.nextNode;
      }
      if (index === 0) {
        lastNew.nextNode = headNode;
        headNode = firstNew;
      } else {
        let prev = getNodeAt(index - 1);
        lastNew.nextNode = prev.nextNode;
        prev.nextNode = firstNew;
      }
      _size += values.length;
      return this;
    },
    removeAt(index) {
      if (index < 0 || index >= _size) {
        throw new RangeError(
          `Index ${index} is out of bounds. Valid range: 0 to ${_size - 1}`
        );
      }
      let value;
      if (index === 0) {
        value = headNode.value;
        headNode = headNode.nextNode;
      } else {
        let prev = getNodeAt(index - 1);
        value = prev.nextNode.value;
        prev.nextNode = prev.nextNode.nextNode;
      }
      _size--;
      return value;
    },
    // Optional helpers for debugging / tests
    // Not in spec, but useful: lets you see the internal head
    _getHeadNode() {
      return headNode;
    },
  };

}


export { createNode, createLinkedList };
export default createLinkedList;
