```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Effect ran with count:', count);
    // This will cause an infinite loop
    setCount(count + 1);
  }, [count]); // This dependency array is crucial for the bug

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```