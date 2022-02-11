#Calculator using TDD

## Algorithm for MVP

### setup:

- Draw a display
- Draw a 9-9 numbers grid
- draw operators
- draw a equals sign

### initialise stuff

- set a runningTotal to 0 (implementation: number? in state?)
- set a currentNumberString = "" (implementation: string? in state?)
- set an isOperatorAllowed to false?
- set previousOperator = Add <=== VERY IMPORTANT
- set currentOperator = null? (implement as an array of two?)

### case: someone pressed a digit
- SWAP Display to showing the currentNumberString not the runningTotal
- append that digit to the currentNumberString
- update the Display to show the updated currentNumberString
- set isOperatorAllowed to true

### case: someone pressed an operator (mvp -- only the add button)

#### when operator is pressed - prep
(edge case - if someone tries to press an operator before any number has been pressed - might be okay?)
(edge case - two operators are pressed consecutively?)
if NOT isOperatorAllowed, then just ignore that click.

- use currentNumberString(string) to create a currentNumber(number)
- reset the currentNumberString to ""
        - (edge case: if it's the first one, add currentNumber(number) to the runningTotal
        - we have solved this - if we initialise previousOperator to 'add', then it works for first case.

#### when operator is pressed - calculate

(if it's not the first operator - see above) 
  move justPressedOperator to currentOperator and do the calculation to update runningTotal as follows: 
    runningTotal = runningTotal (previousOperator) currentNumber(number) 

        SPECIAL CASE - previousOperator = Add or Subtract and currentOperator is Multiply or Divide then  do lots of complicated stuff (because of BODMAS)
        e.g. 2 + 3 - 5 x 7
        is actually 2 + 3 + (5 x 7) - DEFINITELY NOT MVP

        set a runningTotal to null initially?
        currentNumber = "6"

        currentnumber: 1 + 2 - 3
        running total: 1 3

        currentnumber: 111 + 2 - 3
        RT: null null 111 113
        

TODO: a bit about if the currentOperator is equals

#### when operator is pressed - finishing up
- SWAP Display to showing the runningTotal not the currentNumberString

if currentOperator is NOT 'equals' them 
-   move currentOperator -> previousOPerator, 

if currentOperator IS 'equals' then
 - reset currentOperator and previous operator to their initial states
 (however, the the 
- set isOperatorAllowed to false


## Beyond MVP - user stories
- implement a subtract
- implement a multiply
- implement a divide
- include a 'back' button to undo?
- include BODMAS ,e.g   previousOperator = Add or Subtract and currentOperator is Multiply or Divide etc
- include a clear button

## Wireframe

- see drawio file

## Components

Number

- Props

- Behaviour

- Render
