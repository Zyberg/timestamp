# Timestamp Microservice

## Live version:

## [Timestamp](https://spectrum-pocket.glitch.me/)

---

### Algorithm Used to solve the problem:

1. Get the entered string - _'input'_

  * check, if it really was passed

2. Create _'result'_ object, that

  * Has 2 key-value pairs set to:

    * natural: null

    * unix: null

3. Check if _'input'_ is a number

  * If it is a number, 

    * Check if it is a valid **Unix date**

      * If it is,

      * Update _'result'_ with corresponding values

  * If it is not a number,

    * Check if it is a valid **Natural date**

      * If it is,

      * Update _'result'_ with corresponding values

4. Send _'result'_


---

### Tools used:

_ExpressJS, MomentJS, Pug_
