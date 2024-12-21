# Introduction

This document serves not only as a user manual for AYA software but also as a guide for beginners who wish to delve into Android and learn about ADB (Android Debug Bridge) through AYA.

## ADB

[ADB](https://developer.android.com/tools/adb) is a core debugging tool developed by Google for the Android system, released alongside the first-generation Android devices. With ADB, we can access various information on Android devices and control numerous functions of these devices. Whether it's Android app development, debugging, performance analysis, or existing cloud-based real device testing platforms, ADB's underlying support is indispensable.

To use ADB, users must first download and install the Android [SDK Platform Tools](https://developer.android.com/tools/releases/platform-tools). Then, they need to connect the Android device via USB or wirelessly. Finally, they can input commands in the terminal to execute specific tasks, such as running `adb install eruda-android.apk` to install a specified app on the device.

## AYA

AYA is a desktop application that incorporates ADB and provides a user interface based on its functionalities. Compared to the original ADB command-line input, AYA is easy to install, fully featured, and features a fully graphical interface with one-click operations, significantly enhancing user efficiency.

![screenshot](/screenshot.png)

By reading the following document, you will learn how to manage and control Android devices using AYA.
