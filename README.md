# React Native Repost App

This project is just a simple example of a repost App built with React Native.

### How to run?

Git Clone the Rep. <br>
- Run `yarn` or `npm install`
- `cd ios` and run `pod install`, then `cd ..` and execute `react-native run-ios` or `react-native run-android` on terminal.<br>


Disclaimer: This project was built using an IPHONE X, IPHONE 8, IPHONE 8 PLUS as model, i suggest you to run one of these on the emulator to test.

TROUBLESHOOTING: 
When building for android they may require the debug.keystore, follow the instructions below:

You can generate the debug keystore by running this command in the android/app/ directory: 
`keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`


