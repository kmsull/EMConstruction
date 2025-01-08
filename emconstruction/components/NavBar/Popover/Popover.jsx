import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export default function Example() {
  return (
    <div className="flex justify-center">
      <div className="flex gap-8">
        <Popover>
          <PopoverButton className="place-content-center navigationText text-gray/50 focus:outline-none data-[active]:text-black/1 data-[hover]:text-black data-[focus]:outline-1 data-[focus]:outline-white">
            Portfolio
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="rounded-xl bg-white text-gray-700 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div>
              <a className="block rounded-lg py-2 px-1 transition hover:bg-white/5" href="/Portfolio/Stone">
                <p className="popoverText">Stonework</p>
              </a>
            </div>
            <div>
              <a className="block rounded-lg py-2 px-1 transition hover:bg-white/5" href="/Portfolio/Roofing">
                <p className="popoverText">Roofing</p>
              </a>
            </div>
            <div>
              <a className="block rounded-lg py-2 px-1 transition hover:bg-white/5" href="/Portfolio/Siding">
                <p className="popoverText">Siding</p>
              </a>
            </div>
            <div className="">
              <a className="block rounded-lg py-2 px-1 transition hover:bg-white/5" href="/Portfolio/Repairs">
                <p className="popoverText">Repairs</p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  )
}
