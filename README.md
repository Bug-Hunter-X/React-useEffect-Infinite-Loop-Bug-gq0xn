# React useEffect Infinite Loop

This repository demonstrates a common error in React applications involving the `useEffect` hook: an infinite loop caused by improper dependency management.

## Description
The `bug.js` file contains a component that uses `useEffect` to update a state variable (`count`).  The dependency array for `useEffect` is `[count]`. This creates a loop because the effect runs after every render, updating the count, triggering a re-render, and repeating infinitely.

## Solution
The `bugSolution.js` file shows how to fix this error. By changing the `useEffect` logic or adding appropriate conditions to exit the loop, the infinite rendering can be stopped.