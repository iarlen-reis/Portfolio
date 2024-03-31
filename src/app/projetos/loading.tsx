import React from 'react'

export default function ProjectPageLoading() {
  return (
    <div className="mt-4 flex min-h-screen flex-col gap-10 pb-12">
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="h-[30px] w-[160px] animate-pulse rounded bg-zinc-400"></div>
          <div className="flex flex-col gap-1.5">
            <div className="h-[20px] w-full max-w-[500px] animate-pulse rounded bg-zinc-400"></div>
            <div className="h-[20px] w-[250px]  animate-pulse rounded bg-zinc-400"></div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-5">
          <div className="h-[30px] w-[20px] animate-pulse rounded-md bg-zinc-400"></div>
          <div className="h-[30px] w-[20px] animate-pulse rounded-md bg-zinc-400"></div>
          <div className="h-[30px] w-[20px] animate-pulse rounded-md bg-zinc-400"></div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <div className="mx-auto flex h-[380px] w-full max-w-[400px] animate-pulse rounded bg-zinc-400"></div>
          <div className="mx-auto flex h-[380px] w-full max-w-[400px] animate-pulse rounded bg-zinc-400"></div>
          <div className="mx-auto flex h-[380px] w-full max-w-[400px] animate-pulse rounded bg-zinc-400"></div>
          <div className="mx-auto flex h-[380px] w-full max-w-[400px] animate-pulse rounded bg-zinc-400"></div>
          <div className="mx-auto flex h-[380px] w-full max-w-[400px] animate-pulse rounded bg-zinc-400"></div>
          <div className="mx-auto flex h-[380px] w-full max-w-[400px] animate-pulse rounded bg-zinc-400"></div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <div className="h-[35px] w-[35px] animate-pulse rounded-md bg-zinc-400"></div>
        <div className="h-[35px] w-[35px] animate-pulse rounded-xl bg-zinc-400"></div>
      </div>
    </div>
  )
}
