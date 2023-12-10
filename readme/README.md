# Webdev
ITC 5103 project
Web Name: Revolve
Introduction: It is a project that display a demo of a online trading platform, where we can communicate and performing 2 hand purchase individually. We focus on the main page, items, interaction with users, login, sighup, user profile and admin controlling feature of the platform. 

#Job Allocation/Page Created
Vitaly
[x] - Message Center
[x] - Iteam info 
[] - Upload Items
##Patrick
##Webpage Created
* Sign up Page
    * Description: A sign up page which will check and store user data into a local storage which can be used in other pages. Animation with the introduction of the platform is also shown. 
    * HTML: /login/signup.html
    * CSS: /style/login/signup.css
    * JS: /script/signup.js 
    * Challenges: Majority of the challenge is to construct a form for the sign up page and create different constrain base on the pages the need of the certain information, which might need multiple checker to perform, the second problem is to  insert the user data into the local Storage while not interfering with the existing data, using loading function on the login page I manage to import all the items/user detail from the JSON if there are none, the function will create a empty key and array to allow the form to input the function. Lastly is the slider to make the words and image appear and disappear using fade animation.
    * ![GITHUB](/public/images/projectcaptue/SignUp.png)

* Login Page
    * Description: A login page that read the local storage and grant access to the user with his/her information stored as a login user, also it act as the portal to login to the admin center.
    * HTML: /login/loginpage.html
    * CSS: /style/login/loginpage.css
    * JS: /script/loginpage.js
    * Challenges: Majorly about checking the login user to the local storage and how to assign the data to a new local storage while extracting all the JASON and creating all the local storage
    * ![GITHUB](/public/images/projectcaptue/loginpage.png)

* Profile Page
    * Description:A profile page where it will show items extracted from the json file and also display the user detail that the user is currently logged into the system, also the user can upload items/ update detail and access item that was purchased or bought
    * HTML: /login/userprofile.html
    * CSS: /style/login/userprofile.css
    * JS: /script/userprofile.js
    * Challenges:The javascript file on how to load a form with the user content while able to store the data after they press the button that created with javascript as event listener might be be able to the job. So using the onclick option to direct the the function is the solution, then it is needed to update both the user and login users storage as it correctly display the detail on both of the platform after the webpage is off.
    * ![GITHUB](/public/images/projectcaptue/userprofile.png)

* Footer Page
    * Desertion: Footer for the wbpages
    * HTML: /footer/ footer.html
    * CSS : /style/footer.css

For the major of the 
Lindga
[x] - Home
[x] - About us
[x] - catoegory items
Pravo
[] - user list page
[] - feedback page
[] - User managmnet page 