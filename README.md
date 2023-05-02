![logo](https://user-images.githubusercontent.com/122832821/235694134-1c4462c9-3146-41c1-9e30-4dbd13b1ffe4.jpeg)

Quiz Me is a site which provides its users the option of three quizzes. The main goal is to provide the user with a fun and educational experience with the three choices of quiz. The user can replay the each quiz as many times as they wish and receive feedback on how they did after each go. The site is aimed at anybody of any age who wishes to have fun and test their general knowledge, history and sports quiz skills. 

## **FEATURES**

### **Existing Features**

* Logo
  * The standout logo contains a pulsing question mark which stands out and promotes the fun aspect of the site.
  
  * The logo is also a link which can be pressed by the user at any time to bring back to the home page.

![nav1](https://user-images.githubusercontent.com/122832821/235694313-10d2cf38-b207-4006-9e23-155bfc288a09.jpeg)

* Navigation Bar
  * The fully responsive navigation bar is positioned directly below the logo which allows the user to quickly and effortlessly transition   between the different quiz pages.

![intro - home](https://user-images.githubusercontent.com/122832821/235628923-d17246de-fb5a-4fa7-9660-17c0f6257a14.jpeg)

* Intro
  * This section introduces the user to the site and provides the user some information on what to expect and who may enjoy the site’s features.
  
  * This provides a nice transition to our first quiz, positioned on the homepage, the General Knowledge quiz.

* The Quiz
  * The General Knowledge quiz is short in length and provides the user a taste of what to expect with the other quizzes available and is found on the home page. The other two quizzes are more specific and focus on Sport & History. There are more questions in both of these, however, the structure of the quizzes are all the same. There is a background image in the quiz container which makes this section really stand out as to the user. This is the area that we really want to highlight as it is the main feature of each page. The text color was changed for this section for readability purposes.

![quiz container](https://user-images.githubusercontent.com/122832821/235694630-e10f5245-1013-4bc8-a48d-6cb639f7c0d3.jpeg)
  
  * When a correct answer is given, the answer is highlighted green and 1 point is added to the users score shown just below the answers.
  
  ![correct-answer](https://user-images.githubusercontent.com/122832821/235694741-ace85c73-4f89-4bee-82bf-7029ef837806.jpeg)

  * A congratulatory message is also given to the user when they input a correct answer which is chosen randomly from an array of options.
  
  * Should the user input an incorrect answer the answer provided is highlighted in red. There will also be a message which pops up confirming that an incorrect response was provided and confirms what the correct answer was.
  
![incorrect](https://user-images.githubusercontent.com/122832821/235694822-f41b7e50-1b6a-473c-88c0-5cd37ce343e6.jpeg)

  * Once the quiz has been completed an alert will show at the top to confirm the quiz is over and the users score is provided as a percentage at the bottom of the quiz. The score is given in this way to provide a competitive element to the quiz so the user can choose to play the quiz again to beat their score.
  
![result](https://user-images.githubusercontent.com/122832821/235694890-d9a82903-eba6-421a-97e4-dba09e94f4a5.jpeg)

  * The Play Again button is provided at the bottom of the quiz container and can be pressed any time that the user wishes to start the quiz over. The button resets the score to 0 and removes any message shown above the score.
  
* Next Quiz Section
  * Under the quiz there is a section which thanks the user for completing the quiz and provides an option of playing another one of our quizzes. The idea of the site is to have the user have a go at each one of our quizzes and so providing easy access to the others makes sense.
  
![next quiz](https://user-images.githubusercontent.com/122832821/235631473-ecdb001e-6c85-4305-90c3-ffb12e5d01b3.jpeg)

* Footer
  * The footer includes links to social media channels used by Quiz Me where the user can find further information. 
  
  * The social media links open in a new tab when selected and are accessible to visually impaired users.

![footer](https://user-images.githubusercontent.com/122832821/235631607-08976e98-abc2-4919-9e22-3944451748d4.jpeg)

## **TESTING**

Throughout the creation of each element of the website, the quiz was tested to prove it’s functionality. Each function of the quiz was checked individually by printing to the console along the way. If the desired output wasn’t printed to the console then I knew I needed to revisit the portion of the code. 

![javascript testing](https://user-images.githubusercontent.com/122832821/235631667-a73326ac-52be-4950-9505-56d12e23c790.jpeg)

The Javascript was passed through JSHint without any errors. There were warnings generated associated with the use of ‘let’, ‘const’ & arrow functions which it let me know were only available with ES6. There was also a few missing semi-colons which have since been addressed.

![css testing](https://user-images.githubusercontent.com/122832821/235631761-6b29db95-7faf-41ce-9f3e-346ca3d996bf.jpeg)

HTML & CSS have both been tested using W3C Validator. CSS was returned with no errors whilst the HTML did have one error. There was no space between the attributes of the logo’s anchor. This has been amended on each of the HTML pages. 
![html testing](https://user-images.githubusercontent.com/122832821/235631781-0465b42b-d64a-40b5-8d2a-745d1a16fc68.jpeg)


## **DEPOLYMENT**
  1. Nutrition By Alex was deployed on GitHub pages.
  2. The process of how this was achieved is as follows:
  3. Open the repository on GitHub.
  4. Go to "Settings" which is found on the right hand side of the tab.
  5. On the left hand side select pages & select the main branch as the source.
  6. Once the main branch has been selected, the page should refresh with details of the deployment including the unique URL.
  7. The page can be found using the [link]: (https://alexmaitland.github.io/general-knowledge-quiz/) 

## **CREDITS**

### **Content**

  * Initial styling was inspired from the Love Maths walk through project. The repository can be found [here](https://github.com/AlexMaitland/love-maths.git)
  * The quiz questions were generated using the [Open Trivia Database](https://opentdb.com/api_config.php). I was able to select the topic, the multiple choice and the difficulty. All three quizzes are of mixed difficulty but follow the same multiple choice theme.
  * Social media & question mark icons were sourced from [Font Awesome](https://fontawesome.com/)
  * The font Poppins was imported from [Google Fonts](https://fonts.google.com/)
  * The background image of the quiz was downloaded from [Pexels](https://www.pexels.com/)
  * I went back to [Code Academy](https://www.codecademy.com/learn) for further training on Javascript as I wasn’t confident with my understanding of certain elements. This helped massively - especially with the creation of the displayQuestion function where we create answer buttons for each multiple choice answer.


	
