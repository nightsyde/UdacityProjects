/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
timer = 60;

while (timer >0) {
    if (timer == 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else if (timer == 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (timer == 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (timer == 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (timer == 6) {
        console.log("Main engine start");
    } else {
        console.log("T-" + timer + " seconds");
    }
    timer = timer - 1
}
console.log("Solid rocket booster ignition and liftoff!");
