"use client";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';


export default function TopNav() {
  const { isSignedIn, user } = useUser();
  console.log({ isSignedIn, user });

  return (
    <nav className="flex justify-between items-center p-2 shadow-md">
      <Link href="/" className='flex items-center space-x-2 text-blue-500 hover:text-blue-700 font-bold font-sans'>
        <img  src="icon-96.png" alt="icon"  className='w-8 h-8'/>
        GenAI
      </Link>
      <div className="flex items-center">
        {isSignedIn && (
          <Link href="/dashboard" className="mr-2">
            {`${user?.fullName || 'User'}'s Dashboard`}
        </Link>
          )}
          <SignedOut>
             <SignInButton />
          </SignedOut>
          <SignedIn>
              <UserButton />
          </SignedIn>
      </div>
    </nav>
  )
}
