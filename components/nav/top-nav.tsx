"use client";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from './theme-toggle';
import { useUsage } from '@/context/usage';


export default function TopNav() {
  const { isSignedIn, user } = useUser();
  // console.log({ isSignedIn, user });
  const { subscribed } = useUsage();
  return (
    <nav className="flex justify-between items-center p-2 shadow-md">
      <Link href="/" className='flex items-center space-x-2 text-indigo-500 hover:text-indigo-600 font-semibold font-sans hover:scale-105 transform transition duration-300 ease-in-out text-lg'>
        {/* <img  src="icon-96.png" alt="icon"  className='w-8 h-8'/> */}
        <Image
          src="/icon-96.png"
          alt="Logo"
          width={30}
          height={30}
          className="cursor-pointer "
        />
        GenAI
      </Link>

      {!subscribed && (
        <Link href="/membership">🔥 Join free or $9.99/month</Link>
      )}

    <Link href="/gen-ai" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-300 ease-in-out">
      
      Generate AI Content Now
      
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
          <div className="ml-3 ">
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
