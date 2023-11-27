import React, { useState, useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Loading from './components/Loading';


export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);


  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!isIntersecting && entry.isIntersecting) {
        setIntersecting(entry.isIntersecting)
      }
    }, options
    );


    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
