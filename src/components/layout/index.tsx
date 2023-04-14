import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    console.log('Layout');
    return (
      <div>
        I am Layout
        {children}
      </div>
    );
  }