'use client';

import React, { useState } from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon, Send } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover"
import { useToast } from "@/components/ui/use-toast"

export function SessionPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [isSent, setIsSent] = useState(false)
  const { showToast, ToastComponent } = useToast()

  const handleSend = () => {
    if (date) {
      showToast(`Selected date: ${format(date, "PPPP")}`, 'success')
      setIsSent(true)
    } else {
      showToast("Please select a date first", 'error')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-xl">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal border-green-600 text-green-400 hover:bg-green-900/30",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-green-500" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-black border-green-600">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              className="text-green-400"
            />
          </PopoverContent>
        </Popover>

        {date && (
          <div className="mt-4 text-center">
            <p className="text-sm text-green-300">
              Selected Date: {format(date, "PPPP")}
            </p>
          </div>
        )}

        <Button 
          onClick={handleSend}
          className={cn(
            "w-full mt-4 bg-green-600 text-black hover:bg-green-700",
            isSent && "bg-green-800 cursor-not-allowed"
          )}
          disabled={isSent}
        >
          <Send className="mr-2 h-4 w-4" />
          {isSent ? "Sent" : "Send Date"}
        </Button>
      </div>
      
      {/* Render the Toast Component */}
      <ToastComponent />
    </div>
  )
}

export default SessionPage