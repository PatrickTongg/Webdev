# Webdev
ITC 5103 project
Web Name: Revolve
Introduction: It is a project that display a demo of a online trading platform, where we can communicate and performing 2 hand purchase individually. We focus on the main page, items, interaction with users, login, sighup, user profile and admin controlling feature of the platform. 

#Job Allocation/Page Created
##Patrick
##Webpage Created
* Sign up Page
    * Description: A sign up page which will check and store user data into a local storage which can be used in other pages. Animation with the introduction of the p
latform is also shown. 
    * HTML: /login/signup.html
    * CSS: /style/login/signup.css
    * JS: /script/signup.js 
    * Challenges: Majority of the challenge is to construct a form for the sign up page and create different constrain base on the pages the need of the certain information, which might need multiple checker to perform, the second problem is to  insert the user data into the local Storage while not interfering with the existing data, using loading function on the login page I manage to import all the items/user detail from the JSON if there are none, the function will create a empty key and array to allow the form to input the function. Lastly is the slider to make the words and image appear and disappear using fade animation.
    * ![GITHUB](/public/images/projectcaptue/SignUp.png)

* Login Page:
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
##Vitaly
##Webpage Created
* Item Page
    * Description: Page with item name, description, list of features, price, contact form and information. For each item stored in local storage generates different item page based on items' fields.
    * HTML: /items/item-page.html
    * CSS: /style/item-page.css
    * JS: /script/item-page.js
    * Challenges: Initially there was a JSON file with all the items and their properties, so the challenge was to fetch data from JSON file using imports, asserting file type and adding module attribute to src tag in html file.
    * ![GITHUB](/public/images/projectcaptue/item-page.png)

* Messenger Page
    * Description: Messenger page where user can manage all his chats and delete items. All chats are connected to items in local storage and if the item is deleted in messenger it will be deleted in local storage too.
    * HTML: /items/messenger.html
    * CSS: /style/messenger.css
    * JS: /script/messenger.js
    * Challenges: The most challenging part was removing item not only from the html page, but from local storage. The approach of getting item index and deleting it directly from the array of items was not working, so for each html element of item was defined an id which was the same as items id. So when deleting item at first we get html id and then we delete item with the exact same id from local storage.
    * ![GITHUB](/public/images/projectcaptue/messenger.png)

* Upload item Page
    * Description: An upload item page that helps user to upload new item. The item is pushed in local storage, therefore it can be displayed in users profile and on item page.
    * HTML: /items/upload-item.html
    * CSS: /style/upload-item.css
    * JS: /script/upload-item.js
    * Challenges: Majority of challenges were connected to building an object from users input and putting the new object to local storage.
    * ![GITHUB](/public/images/projectcaptue/upload-item.png)

* Footer Page
    * Desertion: Footer for the wbpages
    * HTML: /footer/ footer.html
    * CSS : /style/footer.css

For the major of the 
Lindga
[x] - Home
[x] - About us
[x] - catoegory items

##Pranav

* login page:
    * Description: in this page we have used login for ADMIN as well as USER. the id and password is stored in to a localstorage.
    * ![GITHUB](/public/images/projectcaptue/admin-login.png)

* Home page:
    * Description:  In this page I have used chart.js in order to show the chart in different ways
                    the bottom chart has a slider as well. when the user clicks on that button it slides
    * ![GITHUB](/public/images/projectcaptue/admin-home.png)

* manage user page:
    * Description:  In this page I have actually used JSON file to render the all the user name and data into that page.
                    with the help of JS I have done block/unblock button, delete button.
    * Challenge:    Initially the data was not into JSON file, I have created div for every users in order to show it into browser.          However, Now I hve used JSON to render data dynamically and while making the file I got some difficulty to radndering the data
    * ![GITHUB](/public/images/projectcaptue/admin-manage-user.png)

* manage feedback/inquiry:
    * Description: In this page I have used table to format all the details and used reply button with is goes into another page that
                    is replying page.
    * ![GITHUB](/public/images/projectcaptue/admin-manage-feedback.png)
    * ![GITHUB](/public/images/projectcaptue/feedback-reply.png)

* hamburger menu:
    * Description:  for the mobile view application, I have made a hamburger menu in order to navigae on page to the other.
                    For that I have used JS to run it and used css to display when the mobile view is opend.
    * ![GITHUB](/public/images/projectcaptue/hamburger.png)

