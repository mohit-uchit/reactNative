This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# 🎨 React Native Card Components Gallery

> A collection of beautifully crafted, reusable card components for React Native applications

## 📱 Demo & Showcase

![Cards Demo](https://via.placeholder.com/800x400)

## 🌟 Features

- 📦 5 Different Card Styles
  - Flat Cards
  - Elevated Cards
  - Fancy Cards
  - Action Cards
  - Contact List Cards
- 🎨 Platform-specific shadows
- 📱 Cross-platform compatibility (iOS & Android)
- ♿ Accessibility-friendly
- 🔄 Horizontal scrolling support
- 🖼️ Image handling
- 🔗 URL linking capabilities

## 🚀 Components Overview

### 1. Flat Cards

Simple, color-coded cards with basic styling:

- Fixed dimensions
- Flex layout
- Border radius
- Color variations

### 2. Elevated Cards

Scrollable cards with platform-specific elevation:

- Horizontal ScrollView
- Platform-specific shadows
- Interactive layout
- Custom styling

### 3. Fancy Cards

Elegant cards with images and detailed content:

- Image integration
- Complex layout structure
- Custom typography
- Border styling
- Platform-specific shadows

### 4. Action Cards

Interactive cards with social media integration:

- URL linking
- Image handling
- Custom styling
- Touch interactions
- Social media buttons

### 5. Contact List

Professional contact display cards:

- ScrollView implementation
- Image avatar handling
- Custom typography
- Shadow effects
- Data mapping

## 🛠️ Technical Stack

- React Native
- React Native StyleSheet
- React Native Image
- React Native Linking
- Platform-specific APIs

## 📖 Usage

```jsx
// Import components
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCards from './components/ActionCards';
import ContactList from './components/ContactList';

// Use in your app
function App() {
  return (
    <SafeAreaView>
      <FlatCards />
      <ElevatedCards />
      <FancyCards />
      <ActionCards />
      <ContactList />
    </SafeAreaView>
  );
}
```

## 🎨 Styling Guide

Each component uses StyleSheet.create() for optimal performance:

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
```

## 🤝 Contributing

Feel free to open issues and pull requests!

## 📝 License

MIT License - feel free to use this in your own projects!
