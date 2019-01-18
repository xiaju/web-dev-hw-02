# web-dev-hw-02
- web-dev-hw-02 is comprised of 2 parts
  - animal.html
  - calc.html and the css and js files for calc.html
  
- The calculator in calc.html is used as follows:
  1) enter a number
  2) enter an operation (add, subtract, multiply, or divide)
  3) enter the second operand to the operation
  4) enter another operation 
    - entering any operation will allow you to view the 
         results of the previous operation
  5) view the result of the previous operation
  6) if desired, continue the calculation by entering another
     number
  7) entering another operation will cause the calculator to
     output the result of the 2nd operation
  8) operations can be chained as shown
  9) the result can be cleared by entering 'c'
    - A successful clear will change the value to 0
    - the calculator can be used again by entering another number
      and following steps 1 - 5
  
- Sample outputs:
  - 1 += 2 += -> 3
  - 1 += 2 - -> 3
  - 1 - 2 += -> -1
  - 2 x 3 x -> 6
  - 6 / 3 / -> 2
  - 0.3 += 0.2 += -> 0.5
  - 2 += 3 x 4 / 5 += -> 4
  
  - Notes:
    - If multiple operations are entered in a row, only the first
      operation is used. Other operations are discarded
    - Numbers cannot be lead by decimals
      - .01 is invalid
      - 0.01 is valid
    - An operation cannot be the first input to the calculator or
      the first input after 'c' is pressed. Only a number can be
      used in this instance
