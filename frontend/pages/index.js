import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Footer from '../components/Footer'
import Input from '../components/Input'
import axios from 'axios'
import SignupModal from '../components/Signup/SignupModal'
import Button from '../components/Button'


export default function Home() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signup, setSignUp] = useState(false)

  return (
    <div className='h-screen'>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex h-11.5/12 bg-facebook md:py-12 lg:py-space justify-evenly xs:flex-wrap md:flex-nowrap'>
            <section className='flex flex-col xl:ml-44 md:h-80 sm:w-8/12 md:justify-center md:w-5/12 xl:w-4.5/12'>
            <Image src={'/facebook.svg'} alt='facebook' 
                className='xs:mx-auto md:m-0'
                width={301}
                height={167} />
                <h2 className='xs:text-center md:text-left md:pl-8 xs:text-xs md:text-lg lg:text-2xl xl:text-3xl m-0 -mt-3'>
                Facebook helps you connect and share with the people in your life.
                </h2>
            </section>
            <section className='flex flex-col md:mr-8 xl:mr-60 mt-8 xs:w-11/12 md:w-5/12 xl:w-3.5/12'>
                <section className='bg-white shadow-xl rounded-md'>
                    <section className='p-5'>
                        <Input 
                        placeholder={'Email'}
                        cyType='email'
                        value={email}
                        type='text'
                        onChange={e => setEmail(e.target.value)}
                        className='py-4 focus:outline-inputOutline'
                         />
                        <section className='mt-3' />
                        <Input placeholder={'Password'}
                        cyType='password'
                        type='password'
                        className='py-4 focus:outline-inputOutline'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                        <button className='w-full text-white bg-facebook-blue rounded-md mt-4 py-2.5 font-bold text-xl'>Log in</button>
                        <p className='text-center text-sm text-blue-600 mt-5 font-semibold'>Forgotten Password?</p>
                        <hr className='text-gray-200 mt-5' />
                        <section className='flex justify-center'>
                            <Button onClick={() => setSignUp(true)}
                            text='Create New Account'
                            className={'py-3 mt-5 px-5'} />
                        </section>
                    </section>
                </section>
                <p className='mt-7 text-center text-sm'><b>Create a Page</b> for a celebrity, brand or business.</p>
            </section>
      </div>
      <Footer />
      {
        signup?

        <SignupModal close={() => setSignUp(false)} />
        :
        <></>
      }
    </div>
  )
}
