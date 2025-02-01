# 🎨 React Native Card Gallery
> An elegant collection of production-ready card components built with React Native

[![React Native](https://img.shields.io/badge/React%20Native-v0.72-blue.svg)](https://reactnative.dev/)
[![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-green.svg)](https://github.com/mohit-uchit/reactNative)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 📱 Demo & Live Preview

![Demo](https://github.com/mohit-uchit/reactNative/blob/card-and-components/demp.mp4)

## 📱 Features & Components

<table>
<tr>
<td>

### 💫 Key Features
- ✨ 5 Production-Ready Card Designs
- 🎯 Cross-Platform Shadow Effects
- 📱 iOS & Android Compatible
- ♿️ Accessibility Support
- 🔄 Horizontal Scroll
- 🖼️ Image Integration
- 🔗 Deep Linking Support

</td>
<td>

### 🛠 Technical Features
- 📦 Zero External Dependencies
- 🚀 Performance Optimized
- 💾 Memory Efficient
- 🎨 Customizable Styles
- 📐 Responsive Layouts
- 🔍 Type-Safe Props
- 🎯 Platform-Specific Code

</td>
</tr>
</table>

## 🚀 Quick Start

### Installation

```bash
# Using npm
npm install

# Using yarn
yarn install

# iOS only: Install pods
cd ios && pod install && cd ..
```

### Running the Project

```bash
# Start Metro
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## 📚 Component Documentation

### 1. FlatCards
Simple, color-coded card components with flex layout.

![Flat Cards](https://github.com/mohit-uchit/reactNative/blob/card-and-components/flatCards.png)

```jsx
import { FlatCards } from './components';

function App() {
  return <FlatCards />;
}
```

**Features:**
- Color-coded designs
- Flex-based layout
- Customizable dimensions
- Border radius support

### 2. ElevatedCards
Scrollable cards with platform-specific elevation effects.

![Elevated Cards](https://github.com/mohit-uchit/reactNative/blob/card-and-components/elevatedCards.png)

```jsx
import { ElevatedCards } from './components';

function App() {
  return <ElevatedCards />;
}
```

**Key Properties:**
- Horizontal scroll
- Native shadows
- Custom elevation
- Interactive layout

### 3. FancyCards
Premium cards with advanced styling and image support.

![Fancy Cards](https://github.com/mohit-uchit/reactNative/blob/card-and-components/fancyCards.png)

```jsx
import { FancyCards } from './components';

function App() {
  return <FancyCards />;
}
```

**Highlights:**
- Remote image loading
- Custom typography
- Complex layouts
- Platform-specific shadows

### 4. ActionCards
Interactive cards with social media integration.

![Action Cards](https://github.com/mohit-uchit/reactNative/blob/card-and-components/actionCards.png)

```jsx
import { ActionCards } from './components';

function App() {
  return <ActionCards />;
}
```

**Features:**
- URL deep linking
- Touch interactions
- Social media buttons
- Custom image handling

### 5. ContactList
Professional contact display cards.

![Contact List](https://github.com/mohit-uchit/reactNative/blob/card-and-components/linkCard.png)

```jsx
import { ContactList } from './components';

function App() {
  return <ContactList />;
}
```

**Capabilities:**
- Dynamic data rendering
- Avatar support
- Custom typography
- Shadow effects

## 🎨 Styling Guide

### Platform-Specific Shadows

```jsx
const styles = StyleSheet.create({
  card: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
```

### Responsive Layouts

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
```

## 🔧 Development

### Prerequisites
- Node.js >= 14
- npm or yarn
- React Native CLI
- Xcode (iOS)
- Android Studio (Android)

### Environment Setup

1. Clone the repository
```bash
git clone https://github.com/mohit-uchit/reactNative.git
```

2. Install dependencies
```bash
yarn install
```

3. Start development
```bash
yarn start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohit Uchit**
- LinkedIn: [@mohit-uchit](https://www.linkedin.com/in/ezmohit/)
- GitHub: [@mohit-uchit](https://github.com/mohit-uchit)

## 🙏 Acknowledgments

- React Native Team
- React Native Community
- All Contributors

---

<p align="center">Made with ❤️ by Mohit Uchit</p>
