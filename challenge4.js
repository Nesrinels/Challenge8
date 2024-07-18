function createQueue() {
    const queue = {
        items: [],

        enqueue(element) {
            this.items.push(element);
        },

        dequeue() {
            if (this.isEmpty()) return "Queue is empty";
            return this.items.shift();
        },

        front() {
            if (this.isEmpty()) return "Queue is empty";
            return this.items[0];
        },

        isEmpty() {
            return this.items.length === 0;
        },

        size() {
            return this.items.length;
        },

        clear() {
            this.items = [];
        }
    };

    return queue;
}

// Example usage:
const queue = createQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); 
console.log(queue.front()); 
