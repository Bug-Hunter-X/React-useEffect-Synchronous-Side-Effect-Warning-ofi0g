```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct approach: Use setTimeout to make side effects asynchronous
    setTimeout(() => {
      console.log('Count changed:', count);
    }, 0);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```