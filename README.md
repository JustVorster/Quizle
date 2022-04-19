# Quizle
A Quiz app taking inspiration from the popular app, Wordle. You have 75 seconds to answer 7 harder-than-normal general knowledge questions.

Quizle currently pulls its questions from a hard-coded array of objects, using a randomizer to populate the currently used questions array to display to the user.
The user will have 75 seconds to answer 7 randomnly chosen questions. Should all questions be answered, a percentage, time left and symbol score will be displayed upon completion. 
Should the user fail to answer all questions, the Quiz object will be hidden and the score will be the total number of questions answered.

In future improvements to the Quizle app, a daily lock will be applied allowing users to only play once in a 24-hour cycle (starting at 00:00 in their timezone). A leaderboard will also be implemented, only taking into account the time left as the score to based their rank on.
