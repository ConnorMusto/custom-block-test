
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 * 
 * to get icons go to https://fontawesome.com/ and choose a icon, click copy glyph on top right of 
 * box to get image and paste below
 */
//% weight=150 color=#0fbc11 icon="" label="XSTREAM!!" block="Basic Blocks"
//% groups=['LED matrix', 'Control flow', 'others']
namespace XSTREAM {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
         * TODO: describe your function here
         * the more advanced param commenting is for something called JsDoc and it lets javascripting
         * become alot easier as you can provide clues to the user about the function through it 
         */
    //% block
    //% group="LED Matrix" 
    export function HelloWorld(): void {
        // Add code here
        basic.showString("Hello World!")
    }

    /**
         * TODO: describe your function here
         * the more advanced param commenting is for something called JsDoc and it lets javascripting
         * become alot easier as you can provide clues to the user about the function through it
         * @param comment the string we want to see printed out on the serial 
         * @param showMessage boolean for if we want to also display the message
         */
    //% block="Serialise $comment | \r\n display on LED $showMessage"
    //% inlineInputMode=inline
    export function Comment(comment: string,showMessage: boolean ): void{
        serial.writeLine(comment);
        if(showMessage){
            basic.showString(comment);
        }
    }


    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}

//% weight=150 color=156 icon="" label="XSTREAM!!" block="Advanced Blocks "
namespace AdvancedMultiCat {
    /**
         * TODO: describe your function here
         * @param value describe value here, eg: 5
         */
    //% block
    export function fibDispStep (value: number): number {
        basic.showNumber(value);
        return value <= 1 ? value : fibDispStep(value - 1) + fibDispStep(value - 2);
    }
}
