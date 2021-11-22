// // Stack ->
// // Operations that we are going to implement:
// // Push → Add an element to the stack.
// // Pop → Delete an element from the stack.
// // Peek → Get the top element of the stack.
// // Length → Return the length of the stack.
// // Search → Search for the element in the stack.
// // IsEmpty → Check if the stack is empty.
// // Print → Print the elements of the stack.

// // Creating a Stack
// class Stack {
//     constructor(){
//         this.data = [];
//         this.top = 0;
//     }
// }

// //  The Stack class has two attributes:
// // data → Is an array in which we store the value.
// // top → Points to the top element index.

// // Push ->
// // push: Insert an Element to the Top of Stack
// // When we push an element to the stack, we have to store it in the top position of data and need to increment the top variable so that the top will point to the next empty place.

// push(element) {
//    this.data[this.top] = element;
//    this.top = this.top + 1;
// }

// // length: Returns the Length of the Stack
// // To get the length of the stack, we can return the top value.

// length() {
//    return this.top;
// }

// // peek: Get the Top Element of the Stack
// // To get the peek element of the stack, we can use the top-1 attribute of Stack class:

// peek() {
//    return this.data[this.top -1 ];
// }

// // isEmpty: Checks If the Stack Is Empty
// // If the value of the top is equal to 0 then there is no element in the Stack.

// isEmpty() {
//   return this.top === 0;
// }

// // pop: Deletes an Element at the Top of the Stack
// // When we pop an element from the stack, we have to remove the element in the top position of data and need to decrement the top variable so that the top will point to the previous element’s position.

// pop() {
//      this.top = this.top -1;
//      return this.data.pop(); // removes the last element
// }
// // In addition to the above code, we need to ensure that the stack is not empty, otherwise the value of the top will be decremented below zero. So, the above code will be like this:

// pop() {
//     if( this.isEmpty() === false ) {
//        this.top = this.top -1;
//        return this.data.pop(); // removes the last element
//      }
// }

// class Stack {
//     constructor(){
//         this.data = [];
//         this.top = 0;
//     }
//     push(element) {
//       this.data[this.top] = element;
//       this.top = this.top + 1;
//     }
//    length() {
//       return this.top;
//    }
//    peek() {
//       return this.data[this.top-1];
//    }
//    isEmpty() {
//      return this.top === 0;
//    }
//    pop() {
//     if( this.isEmpty() === false ) {
//        this.top = this.top -1;
//        return this.data.pop(); // removes the last element
//      }
//    }
//    print() {
//       var top = this.top - 1; // because top points to index where new    element to be inserted
//       while(top >= 0) { // print upto 0th index
//           console.log(this.data[top]);
//            top--;
//        }
//     }
//     reverse() {
//        this._reverse(this.top - 1 );
//     }
//     _reverse(index) {
//        if(index != 0) {
//           this._reverse(index-1);
//        }
//        console.log(this.data[index]);
//     }
// }
