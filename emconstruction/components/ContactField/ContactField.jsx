import React from 'react'
import { Description, Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

export default function ContactField() {
    return (
        <div className="w-full max-w-lg px-4">
            <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
                <Legend className="text-base/7 font-semibold text-white">Contact Information</Legend>
                <Field>
                    <Label className="text-sm/6 font-medium text-white">Name</Label>
                    <Input
                        className={clsx(
                        'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                    />
                </Field>
                <Field>
                    <Label className="text-sm/6 font-medium text-white">Summary</Label>
                    <Description className="text-sm/6 text-white/50"> What are you thinking of having done</Description>
                    <Textarea
                        className={clsx(
                        'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        rows={3}
                    />
                </Field>
                <Field>
                    <Label className="text-sm/6 font-medium text-white">Contact Type</Label>
                    <Description className="text-sm/6 text-white/50">Whats the best way to reach out to you?</Description>
                    <div className="relative">
                        <Select
                            className={clsx(
                                'mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                                // Make the text of each option black on Windows
                                '*:text-black'
                            )}
                        >
                        <option>Select one</option>
                        <option>Phone</option>
                        <option>Email</option>
                        </Select>
                        <ChevronDownIcon
                            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                            aria-hidden="true"
                        />
                    </div>
                </Field>

            </Fieldset>
        </div>
    )
}
