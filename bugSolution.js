```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldIncrement, setShouldIncrement] = useState(true);

  useEffect(() => {
    if(shouldIncrement){
      console.log('Effect ran with count:', count);
      setCount(count + 1);
      setShouldIncrement(false);
    }
  }, [count,shouldIncrement]); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=> setShouldIncrement(true)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```