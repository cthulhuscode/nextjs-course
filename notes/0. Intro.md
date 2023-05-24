# Next.js

Next.js is a framework for building web applications.

With Next.js, you can build user interfaces using React components. Then, Next.js provides additional structure, features, and optimizations for your application.

Under the hood, Next.js also abstracts and automatically configures tooling for you, like bundling, compiling, and more. Next.js can help you build interactive, dynamic, and fast web applications.

### **Main features**

- **Routing**: A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.
- **Rendering**: Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes.
- **Data Fetching**: Simplified data fetching with async/await support in React Components and the fetch()s API that aligns with React and the Web Platform.
- **Styling**: Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS
- **Optimizations**: Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience.
- **Typescript**: Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker.
- **API Reference**: Updates to the API design throughout Next.js.

## **Server Components**

Server and Client Components allow developers to build applications that span the server and client, combining the rich interactivity of client-side apps with the improved performance of traditional server rendering.

Instead of React rendering your whole application client-side (such as in the case of Single-Page Applications), React now gives you the flexibility to choose where to render your components based on their purpose.

Server Components allow developers to better leverage server infrastructure. For example, large dependencies that previously would impact the JavaScript bundle size on the client can instead remain entirely on the server, leading to improved performance. They make writing a React application feel similar to PHP or Ruby on Rails, but with the power and flexibility of React and the components model for templating UI.

With Server Components, the initial page load is faster, and the client-side JavaScript bundle size is reduced. The base client-side runtime is cacheable and predictable in size, and does not increase as your application grows. Additional JavaScript is only added as client-side interactivity is used in your application through _Client Components_.

When a route is loaded with Next.js, the initial HTML is rendered on the server. This HTML is then progressively enhanced in the browser, allowing the client to take over the application and add interactivity, by asynchronously loading the Next.js and React client-side runtime.

To make the transition to Server Components easier, all components inside the App Router are Server Components by default, including special files and colocated components. This allows you to automatically adopt them with no extra work, and achieve great performance out of the box. You can also optionally opt-in to Client Components using the 'use client' directive.

## **Client components**

Client Components enable you to add client-side interactivity to your application. In Next.js, they are pre-rendered on the server and hydrated on the client.

The `"use client"` directive is a convention to declare a boundary between a Server and Client Component module graph.

    'use client';

    import { useState } from 'react';

    export default function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      );
    }

## Patterns

- Move Client components to the leaves
- Composing Client and Server components
  - You cannot _import_ a Server Component into a Client Component. **Instead pass Server Components to Client Components as Props**.
  
