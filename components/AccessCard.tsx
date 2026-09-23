"use client"

import { useState } from 'react';
import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription, 
} from './ui/card';
import { Input } from "@/components/ui/input"
import { Button } from './ui/button';
import { CgLock } from "react-icons/cg";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useSearchParams } from 'next/navigation';

const AccessCard = () => {
  const searchParams = useSearchParams()
  const hasError = searchParams.get('error') === 'invalid'
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className='min-w-80 md:min-w-120 px-4 py-6 text-brand-black border-brand-grey-500 shadow-xl shadow-brand-grey-600/15'>
        <div className='flex justify-center items-center'>
          <div className='bg-brand-primary-green-100 p-3 rounded-full'>
            <CgLock className='w-7 h-7 text-brand-primary-green-600'/>
          </div>
        </div>
        <CardHeader className='flex flex-col gap-6 items-center text-center md:mt-2'>
          <CardTitle className='font-heading font-bold text-lg md:text-2xl'>211 Wealth Branding Access</CardTitle>
          <CardDescription className='md:text-base'>
              You’ve stumbled across a password protected page.
            </CardDescription>
            <CardDescription className='md:text-base'>
              To access this page’s content please enter the provided password.
            </CardDescription>
        </CardHeader>
        <div className='flex flex-col items-center'>
          <form
            method='POST'
            action='/api/login'
            className='w-full md:max-w-80 flex flex-col justify-center gap-4'>
              <div className='relative'>
                <Input 
                name='password'
                type={showPassword ? 'text' : 'password'}
                id='password-toggle'
                placeholder='Enter password'
                className={`bg-brand-white text-sm h-12 ${hasError ? 'border-red-700' : ''}`}
                />
                <Button
                  className='absolute top-0 right-0 h-full px-3 hover:bg-transparent'
                  onClick={() => setShowPassword(!showPassword)}
                  size='icon'
                  type='button'
                  variant='ghost'
                >
                  {showPassword ? (
                    <FaRegEyeSlash className='h-4 w-4 text-muted-foreground' />
                  ) : (
                    <FaRegEye className='h-4 w-4 text-muted-foreground'/>
                  )}
                </Button>
              </div>
                {hasError && (
                    <p className='text-red-900 text-sm ml-2 -mt-3'>
                      Incorrect password. Please try again or contact for help.
                    </p>
                  )}
              <Button 
                type='submit'
                className='w-full h-12'>Submit</Button>
          </form>
        </div>
    </Card>
  )
}

export default AccessCard