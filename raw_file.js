let max = 100, min = 1, rand_num;
rand_num = Math.floor(Math.random()*(max - min) + min);
let i, user_input, used_guesses;
for(i = 100; i >= 1; i--){
    user_input = prompt("Guess the number (You have " + i + " guesses left)");
    if(user_input == rand_num){
        used_guesses = 100 - (i - 1);
        score = 100 - used_guesses;
        alert("Congratulations! you have guessed the number correctly which was " + rand_num + " and your score is: " + score);
        exit(0);
    }
    else if(user_input < rand_num){
        alert("Your guess was less than the original number.");
    }
    else if(user_input > rand_num){
        alert("Your guess was greater than the original number.");
    }
}
alert("You failed to guess correctly and your score is 0.");


