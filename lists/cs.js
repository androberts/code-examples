class List {
    constructor(head) {
        this.head = head;
    }

    toString() {
        if (!this.head) {
            return "(empty)";
        }
        let current = this.head;
        let str = "";
        while (current) {
            str += current.data;
            if (current.next) {
                str += " -> ";
            }
            current = current.next;
        }
        return str;
    }

    isCyclic() {
        if (!this.head) {
            return false;
        }
        let seen = new Set();
        let current = this.head;
        while (current) {
            if (seen.has(current)) {
                console.log("Cyclicity detected!")
                return true;
            }
            seen.add(current);
            current = current.next;
        }
        return false;
    }

    reverse() {
        if (!this.head) {
            return;
        }
        let prev = this.head;
        let current = this.head.next;
        while (current) {
            let nextToVisit = current.next;
            current.next = prev;
            prev = current;
            current = nextToVisit;
        }
        this.head.next = null;
        this.head = prev;
    }
}

class Node {
    constructor(data) {
        this.data = data;
    }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
a.next = b;
b.next = c;
c.next = d;


let list = new List(a);

console.log(list.toString());
console.log(list.isCyclic());

list.reverse();
console.log(list.toString());