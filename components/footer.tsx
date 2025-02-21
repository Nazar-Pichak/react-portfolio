import React from "react";

export default function Footer() {
    return (
      <footer className="mb-10 px-4 text-center text-gray-500 dark:text-white">
            <small className="mb-2 text-xs block ">&copy; {new Date().getFullYear()} Nazar Pichak. All rights reserved</small>
            <p className="text-xs">
                <span className="font-semibold">About this web dite: </span>built with{" "} 
                <a href="https://react.dev/" className="violetTextLink">React</a>{" "}&{" "} 
                <a href="https://nextjs.org/" className="violetTextLink">Next.js</a> (App Router & Server Action),{" "}
                <a href="https://www.typescriptlang.org/" className="violetTextLink">TypeScript</a>,{" "} 
                <a href="https://tailwindcss.com/" className="violetTextLink">TailwindCSS</a>,{" "} 
                <a href="https://www.npmjs.com/package/framer-motion" className="violetTextLink">Framer Motion</a>,{" "} 
                <a href="https://react.email/" className="violetTextLink">React Email</a>{" "}&{" "} 
                <a href="https://resend.com/" className="violetTextLink">Resend</a>,{" "}
                <a href="https://vercel.com/" className="violetTextLink">Vercel</a> hosting. 
            </p>
      </footer>
    );
}
