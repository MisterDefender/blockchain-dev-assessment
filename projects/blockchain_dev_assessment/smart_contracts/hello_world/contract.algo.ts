import { Contract, Box } from '@algorandfoundation/algorand-typescript'



export class HelloWorld extends Contract {

  // Box as a class field with a compile-time constant key
  greetingBox = Box<string>({key: 'greeting'})

  hello(name: string): string {
    const greeting = `Hello, how are you ${name}?`

    // Storing the greeting data in the contract's state (box storage)
    this.greetingBox.value = greeting;
    return greeting;
  }
}
