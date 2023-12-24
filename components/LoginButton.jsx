"use client"

import { signIn } from 'next-auth/react';

const LoginButton = () => {
    return (
        <button onClick={() => signIn('github')} className='px-6 py-3 mt-4 text-white rounded-lg bg-slate-800'>
            Login with Github
        </button>
    );
}

export default LoginButton;
