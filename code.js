class Node {
    constructor (value) {
        this.head = value
        this.next = null
    }

    // push (input) {
    //     this.next = input
    // }
}

class LinkedList {
    constructor (value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    push (input) {
       let newNode = new Node(input) 

       if(!this.head) {
        this.head = newNode
        this.tail = newNode
       }

       this.tail.next = newNode
       this.tail = newNode
       this.length++
    }

    pop () {
        let prev  = this.head
        let temp = this.head

        while(temp.next) {
            prev = temp
            temp = prev.next
        }

        this.tail = prev
        this.tail.next = null
        this.length--
        return temp
    }
}

const myLinkedList = new LinkedList(1)
myLinkedList.push(10)
myLinkedList.push(3)
myLinkedList.pop()
console.log(myLinkedList)