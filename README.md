# React useEffect Synchronous Side Effect Warning

This repository demonstrates a common but easily overlooked issue in React applications: triggering a side effect synchronously within a useEffect hook.  This practice can lead to performance problems and unexpected behavior.

## The Problem

The provided `bug.js` code shows an example where `console.log` is called directly within the `useEffect` without specifying a dependency array containing the changed variable or using `setTimeout` or similar mechanisms to make the effect run asynchronously. While this might seem harmless, it can trigger a warning in React's development mode and cause inconsistencies.

## The Solution

The solution in `bugSolution.js` shows the correct approach, which involves placing side-effect code, like the `console.log`, inside a `setTimeout` function.   This ensures that the side effect runs asynchronously and prevents the warning. The solution handles the problem by using a `setTimeout` to delay the console log, making it an asynchronous effect.