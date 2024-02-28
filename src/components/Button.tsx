import React from 'react';

export function Button(
    {children} : { children: React.ReactNode}
){

    return <button className="px-4 text-sm py-3 rounded-md 
    flex items-center justify-center gap-2 
    bg-zinc-800 text-white hover:bg-zinc-900">{children}</button>
}