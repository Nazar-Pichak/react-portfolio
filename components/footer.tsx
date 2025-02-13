import React from "react";

export default function Footer() {
    return (
      <footer className="mb-10 px-4 text-center text-gray-500 dark:text-white">
            <small className="mb-2 text-xs block ">&copy; {new Date().getFullYear()} Nazar Pichak. All rights reserved</small>
            <p className="text-xs">
                <span className="font-semibold">About this web dite: </span>build with{" "} 
                <a href="" className="violetTextLink">React</a>{" "}&{" "} 
                <a href="" className="violetTextLink">Next.js</a> (App Router & Server Action),{" "}
                <a href="" className="violetTextLink">TypeScript</a>,{" "} 
                <a href="" className="violetTextLink">TailwindCSS</a>,{" "} 
                <a href="" className="violetTextLink">Framer Motion</a>,{" "} 
                <a href="" className="violetTextLink">React Email</a>{" "}&{" "} 
                <a href="" className="violetTextLink">Resend</a>,{" "}
                <a href="" className="violetTextLink">Vercel</a> hosting. 
            </p>
      </footer>
    );
}
