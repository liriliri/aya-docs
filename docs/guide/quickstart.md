# Quick Start 

## Installation

AYA supports [Windows x64](https://release.liriliri.io/AYA-0.7.1-win-x64.exe), [macOS ARM](https://release.liriliri.io/AYA-0.7.1-mac-arm64.dmg) and [Linux](https://release.liriliri.io/AYA-0.7.1-linux-x86_64.AppImage) platforms. After downloading and installing, simply click the desktop icon to start using it.

:::warning If you encounter a "damaged" prompt on macOS, you can resolve it by executing `sudo xattr -r -d com.apple.quarantine /Applications/AYA.app`.
:::

## Connecting Devices

To use AYA, you first need to enable USB debugging on your device. Typically, this involves the following steps:

1. Open system settings and navigate to "About phone."
1. Find and enter "Software info." After tapping the build number seven times consecutively, you should see a message like "You are now a developer."
1. You should now be able to find "Developer options" in the settings. Enter and enable "USB debugging."
1. Finally, connect the device to your computer and open the AYA application.
1. A dialog box will appear on the device asking if you allow debugging. Check "Always allow" and confirm.

:::info For subsequent uses, you only need to connect the device to the computer. There is no need to repeat the above process. 
:::

## User Interface

AYA's main interface is primarily divided into a navigation bar at the top and a panel display area below. The left side of the navigation bar is the device selection area, where you can switch between currently connected devices. The middle section is for panel switching options, including eight panels: Overview, Application, Screenshot, Logcat, Shell, Process, Performance, and Webview. Click the <Icon name="setting"/> icon on the far right to open settings, where you can choose the application's theme, language, and ADB location.
