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
        if(!this.head) {
            return undefined
        }

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

    unshift(value) {
        const newNode = new Node(value)

        if(!this.head) {
            return undefined
        }

        if(!this.head) {
            this.head = newNode
            this.tail = newNode
           }

        let temp = this.head
        newNode.next = temp

        this.head = newNode
        this.length ++
    }

    shift() {
        let temp = this.head
        this.head = this.head.next
        temp.next = null

        if(this.length === 0) {
            this.tail === null
        }

        return temp
    }

    getFirst() {
        return this.head
    }

    getLast () {
        if(!this.head) {
            return null
        }
        let temp = this.head
        while(temp.next) {
            temp = temp.next
        }
        return temp
    }

    get(index) {
  
        let temp = this.head
        let i = 0

        while(temp) {
            if(i === index) {
                return temp
            }
            temp = temp.next
            i++
        }

        return null
    }

    set(index, value) {

        let temp = this.get(index)

        if(temp) {
            temp.head = value
            return true
        }
        return false
    }

    insert (index, value) {

        if(index === 0) {
            return this.unshift(value)
        }
        if(index === this.length) {
            return this.push(value) 
        }

        const newNode = new Node(value)
        let counter = 0

        let temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        
        this.length++
    }

    size() {
        let temp  = this.head
        let counter = 0

        while(temp) {
            temp = temp.next
            counter++
        }

        return counter
    }

    clear () {
        this.head = null
        this.tail = null
        this.length = 0
    }
}

const myLinkedList = new LinkedList(1)
myLinkedList.push(10)
// myLinkedList.push(3)

console.log(myLinkedList.clear())
console.log(myLinkedList)