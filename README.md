![logo](https://user-images.githubusercontent.com/122832821/235623180-19b80197-3be5-4ca5-adb9-13cfae1196b6.jpeg)

Quiz Me is a site which provides its users the option of three quizzes. The main goal is to provide the user with a fun and educational experience with the three choices of quiz. The user can replay the each quiz as many times as they wish and receive feedback on how they did after each go. The site is aimed at anybody of any age who wishes to have fun and test their general knowledge, history and sports quiz skills. 

## **FEATURES**

### **Existing Features**

* Logo
  -The standout logo contains a pulsing question mark which stands out and promotes the fun aspect of the site.
  
  -The logo is also a link which can be pressed by the user at any time to bring back to the home page.

* Navigation Bar
  -The fully responsive navigation bar is positioned directly below the logo which allows the user to quickly and effortlessly transition   between the different quiz pages.

* Intro
  -This section introduces the user to the site and provides the user some information on what to expect and who may enjoy the site’s features.
  
  -This provides a nice transition to our first quiz, positioned on the homepage, the General Knowledge quiz.

* General Knowledge Quiz
  -This quiz is short in length and provides the user a taste of what to expect with the other quizzes available. 
  
  -When a correct answer is given, the answer is highlighted green and 1 point is added to the users score shown just below the answers.
  
  -A congratulatory message is also given to the user when they input a correct answer which is chosen randomly from an array of options.
  
  -Should the user input an incorrect answer the answer provided is highlighted in red. There will also be a message which pops up confirming that an incorrect response was provided and confirms what the correct answer was.
  
  -Once the quiz has been completed an alert will show at the top to confirm the quiz is over and the users score is provided as a percentage at the bottom of the quiz. The score is given in this way to provide a competitive element to the quiz so the user can choose to play the quiz again to beat their score.
  
  -The Play Again button is provided at the bottom of the quiz container and can be pressed any time that the user wishes to start the quiz over. The button resets the score to 0 and removes any message shown above the score.

* Next Quiz Section
  -Under the quiz there is a section which thanks the user for completing the quiz and provides an option of playing another one of our quizzes. The idea of the site is to have the user have a go at each one of our quizzes and so providing easy access to the others makes sense.

* Footer
  -The footer includes links to social media channels used by Quiz Me where the user can find further information. 
  
  -The social media links open in a new tab when selected and are accessible to visually impaired users.

## **TESTING**

Throughout the creation of each element of the website, the quiz was tested to prove it’s functionality. Each function of the quiz was checked individually by printing to the console along the way. If the desired output wasn’t printed to the console then I knew I needed to revisit the portion of the code. 

The Javascript was passed through JSHint without any errors. There were warnings generated associated with the use of ‘let’, ‘const’ & arrow functions which it let me know were only available with ES6. There was also a few missing semi-colons which have since been addressed.

HTML & CSS have both been tested using W3C Validator. CSS was returned with no errors whilst the HTML did have one error. There was no space between the attributes of the logo’s anchor. This has been amended on each of the HTML pages. 

## **DEPOLYMENT**
  1. Nutrition By Alex was deployed on GitHub pages.
  2. The process of how this was achieved is as follows:
  3. Open the repository on GitHub.
  4. Go to "Settings" which is found on the right hand side of the tab.
  5. On the left hand side select pages & select the main branch as the source.
  6. Once the main branch has been selected, the page should refresh with details of the deployment including the unique URL.

## **CREDITS**

### **Content8*

  * Initial styling was inspired from the Love Maths walk through project. The repository can be found here… 
  * Social media & question mark icons were sourced from Font Awesome
  * The font Poppins was imported from Google Fonts
  * I went back to Code Academy for further training on Javascript as I wasn’t confident with my understanding of certain elements. This helped massively - especially with the creation of the displayQuestion function where we create answer buttons for each multiple choice answer.


	
