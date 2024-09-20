"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function NewsletterPopup() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Submitted email:', email)
        setEmail('')
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className=' bg-white'>Subscribe to Newsletter</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle>Subscribe to Our Newsletter</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="col-span-4"
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full">Subscribe</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}