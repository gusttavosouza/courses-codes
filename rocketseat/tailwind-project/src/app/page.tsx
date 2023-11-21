import { SettingsTabs } from "@/components/Settings";
import * as Input from '@/components/Input';
import * as FileInput from '@/components/Form/FileInput';

import { Mail, UploadCloud, User } from "lucide-react";
import { Select } from "@/components/Form/Select";


export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-medium text-zinc-900'>Settings</h1>

      <SettingsTabs />

      <div className='mt-6 flex flex-col '>
        <div className="flex items-center justify-between pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">Update your photo and personal details here</span>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50">Cancel</button>
            <button type="submit" form="settings" className="rounded-lg px-4 py-2 text-sm text-white font-semibold shadow-sm bg-violet-600 hover:bg-violet-700">Save</button>
          </div>
        </div>

        <form id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200">
          <div className="grid gap-3 grid-cols-form">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">Name</label>
            <div className="grid gap-6 grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Gustavo" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Roberto" />
              </Input.Root>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">E-mail Address</label>
              <Input.Root>
                <Input.Prefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>
                <Input.Control id="email" type="email" defaultValue="gustavo@gmail.com" />
              </Input.Root>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
              Your photo
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">This will displayed on your profile.</span>
            </label >

            <FileInput.Root  className="flex flex-row items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">Role</label>
              <Input.Root>
                <Input.Prefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>
                <Input.Control id="role" type="email" defaultValue="CTO" />
              </Input.Root>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700">Country</label>
            <Select />
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">Write a short introduction.</span>
            </label >
            <div></div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="project" className="text-sm font-medium text-zinc-700">
              Portfilio projects
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">Share a few snippets of your work</span>
            </label >
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple/>
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50">Cancel</button>
            <button type="submit" form="settings" className="rounded-lg px-4 py-2 text-sm text-white font-semibold shadow-sm bg-violet-600 hover:bg-violet-700">Save</button>
          </div>
        </form>
      </div>
    </>
  )
}
