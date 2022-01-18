# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

 First the user clicks the 1 button, and then the addOnecb function is called through a callback. Then addOne() is called in the callback function, and the output of the type for the switch in the reducer function was returned. The reducer function picks the addOne case from the switch and then adds one to the number in TotalDisplay. Simple!  
* TotalDisplay shows the total plus 1.
