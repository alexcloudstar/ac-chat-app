# Chat app

**note:**  This project is **NOT** using any state management for React or any DB such as MongoDB, MYSQL etc. It's open source and feel free to use. Actually, i didn't use any db/state management because of this purpose, feel free to fork and modify as your needs. Enjoy!

## Functionalities:
- usernames :
    - you can set username by tiping into the username input and it will be saved on localStorage, if no username is set then it will default as **Guest**.
- real-time messages:
    - as it use sockets it's provide real time messages - `Username: your message`
- Know when a user is typing something:
    - If any user is typing something to the textarea a notification will appear into chat body such as: `Username: is typing...`
- Chat ranks: `Admin, Moderator, User`
- Chat cmds: `/ban, /mute`
    - When you enter first time to the app a `blackList: []` field in locall storage will be setted up, when you will add some punishments they will be added to the array
    - note that Moderator doesn't have access to `/ban` and just Admin have
    - Ranks can be tweeked by adding on localStorage a field rank: `[{"username":"Username","rank":"Moderator"}, {"username":"Username1","rank":"Moderator"}]`
    - If user doesn't have access a popup with text: 'You don't have access'
    - If user have punishment a Dialog component from Material UI will show up instead of Chat component
- Emojis: The Chat app supports Apple OS emojis
- Multi theming - app support multi theming and is come with 3 predefined themes
    - default
    - dark
    - purple

## Get started
1. git clone repo:
    - ssh `git@github.com:ac-test-org/chat-app.git`
    - https: `https://github.com/ac-test-org/chat-app.git`
2. cd server & client and run `yarn/npm`
3. cd server & client and run `yarn/npm start`
4. Enjoy

## Others:
For the client side app is using a `webpack 5` with `TS` boilerplate
[https://github.com/alexcloudstar/react-ts-webpack](https://github.com/alexcloudstar/react-ts-webpack)
The app is free, but don't forget to star, also feel free to clone, fork and do whatever you want with it.

<h5>For any issues please refer to:</h5> **[https://github.com/ac-test-org/chat-app/issues](https://github.com/ac-test-org/chat-app/issues)**

📫 How to reach me **contact@alexcloudstar.com**

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://twitter.com/alexcloudstar" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="alexcloudstar" height="30" width="40" /></a>
<a href="https://linkedin.com/in/alexcloudstar" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="alexcloudstar" height="30" width="40" /></a>
<a href="https://fb.com/alexcloudstar" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="alexcloudstar" height="30" width="40" /></a>
<a href="https://instagram.com/alexcloudstar" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="alexcloudstar" height="30" width="40" /></a>
<a href="https://medium.com/@alexcloudstar" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="@alexcloudstar" height="30" width="40" /></a>
<a href="https://www.youtube.com/c/alexcloudstar" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="alexcloudstar" height="30" width="40" /></a>
</p>

