# Password-Generator
Assignment-3

For this application the code starts with 5 global variables, all with blank strings. These are going to determine the length and characters of the User's password. A prompt function follows the variables start the process of asking the user about their password.
![Alt text](assets/images/image0.png)

Every prompt is held within While Loops to prevent the user from answering questions with invalid answers. The prompts are all held within another While Loop to prevent users from answering questions in a way to prevent a password from being generated.
![Alt text](assets/images/image01.png)
![Alt text](assets/images/image02.png)
![Alt text](assets/images/image03.png)

After the Prompt Function is finished, the next few lines of code is display the password on the screen. Style.Wordbreak makes it so that longer passwords won't run off screen.
![Alt text](assets/images/image04.png)

The variable "id" is to hold the Makeid Function, which is the code that generates the User's Passwords. The function uses the User's answers from the prompts to make strings of avalible characters that can be used in the password. 
![Alt text](assets/images/image05.png)

Then the next variable collects the strings of available characters to make one string that is used in a For Loop that uses the User's numer of choice to pick characters randomly until they reach the character number limit. Then the result is assigned as the value to the "id" variable.
![Alt text](assets/images/image06.png)
![Alt text](assets/images/image04.png)

I have console.log for a few different sections of the program, those don't do anything for the program functioning, but was a useful tool for me to keep track of if the program was working properly and keep track of what I was doing.

The page itself is very bare since the focus for this assignment is write working code to generate passwords.
![Alt text](assets/images/image07.png)

When you click the button that says "generate password" it starts prompting you questions. If you try to answer any of the questions outside of the suggested answers the question will prompt again. If you answer every "yes or no" question with no then the prompts will cycle through again.
![Alt text](assets/images/image08.png)
![Alt text](assets/images/image09.png)
![Alt text](assets/images/image10.png)
![Alt text](assets/images/image11.png)
![Alt text](assets/images/image12.png)
![Alt text](assets/images/image13.png)

After answering every prompt the password is generated and displayed in the box for the User.