let stack = {
    items: [],

    push: function(element) {
        this.items.push(element);
    },

    pop: function() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items.pop();
    },

    peek: function() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items[this.items.length - 1];
    },

    isEmpty: function() {
        return this.items.length === 0;
    },

    size: function() {
        return this.items.length;
    },

    clear: function() {
        this.items = [];
    }
};

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); 
console.log(stack.peek()); 