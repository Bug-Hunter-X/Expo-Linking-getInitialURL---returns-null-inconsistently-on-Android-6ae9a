# Expo Linking.getInitialURL() returns null inconsistently on Android

This repository demonstrates a bug where `Linking.getInitialURL()` in Expo returns `null` on Android even when a deep link is present. The issue is intermittent and hard to reproduce consistently.

## Bug Description

The `Linking.getInitialURL()` method is crucial for handling deep links in Expo apps. However, on Android devices, this method occasionally returns `null` despite a valid deep link being used to launch the app. This results in the app failing to process the intended action triggered by the deep link.

## How to Reproduce

1. Clone this repository.
2. Run the app on an Android emulator or device.
3. Try launching the app with a deep link. Note that the issue is inconsistent and may require multiple attempts.
4. Observe the console output.  If `getInitialURL` is returning `null`, the bug is reproduced.

## Workaround (see bugSolution.js)

This issue seems linked to the timing of the `getInitialURL` call.  The provided workaround uses `useEffect` with an empty dependency array to attempt retrieval multiple times before giving up.