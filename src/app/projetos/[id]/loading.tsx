import React from 'react'

export default function ProjectDetailLoading() {
  return (
    <div className="mx-auto flex w-full max-w-[700px] flex-col gap-5 pb-12">
      <div className="mt-4 flex items-center gap-3">
        <div className="h-[50px] w-[50px] animate-pulse rounded-full bg-zinc-400"></div>
        <div className=" flex flex-col gap-1.5">
          <div className="h-[30px] w-[160px] animate-pulse rounded bg-zinc-400"></div>
          <div className="h-[20px] w-[220px] animate-pulse rounded bg-zinc-400"></div>
        </div>
      </div>
      <div className="h-[172px] w-full max-w-[500px] animate-pulse rounded-md bg-zinc-400 sm:h-[250px] sm:max-w-[700px] md:h-[320px]"></div>
      <div className="flex items-center gap-3">
        <div className="h-[46px] w-[46px] animate-pulse rounded-xl bg-zinc-400"></div>
        <div className="h-[46px] w-[46px] animate-pulse rounded-xl bg-zinc-400"></div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="h-[25px] w-[160px] animate-pulse rounded bg-zinc-400"></div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <div className="h-[5px] w-[5px] animate-pulse rounded-full bg-zinc-400"></div>
            <div className="h-[10px] w-full animate-pulse rounded bg-zinc-400"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-[5px] w-[5px] animate-pulse rounded-full bg-zinc-400"></div>
            <div className="h-[10px] w-full animate-pulse rounded bg-zinc-400"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-[5px] w-[5px] animate-pulse rounded-full bg-zinc-400"></div>
            <div className="h-[10px] w-full animate-pulse rounded bg-zinc-400"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-[5px] w-[5px] animate-pulse rounded-full bg-zinc-400"></div>
            <div className="h-[10px] w-full animate-pulse rounded bg-zinc-400"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="h-[25px] w-[200px] animate-pulse rounded bg-zinc-400"></div>
        <div className="flex flex-col gap-3">
          <div className="h-[150px] w-full animate-pulse rounded bg-zinc-400"></div>
          <div className="h-[100px] w-full animate-pulse rounded bg-zinc-400"></div>
        </div>
      </div>
    </div>
  )
}
