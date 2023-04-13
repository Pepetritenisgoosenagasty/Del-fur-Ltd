import { Select, Text, TextInput, Textarea } from '@mantine/core'
import React from 'react'

const QuoteForm = () => {
  return (
    <>
       <Text size="sm" mb="md" px={14}>
          Would you like to request for a quote about a particular furniture?
          Just submit your details and we’ll be in touch shortly. You can also
          email us if you would prefer.
        </Text>
        <form>
          <div className="space-y-4 px-4">
            <Select
              label="Quote"
              placeholder="Select a quote"
              withAsterisk
              data={[
                { value: "Renovation", label: "Renovation" },
                { value: "New Project", label: "New Project" },
                { value: "Existing Project", label: "Existing Project" },
              ]}
            />
            <TextInput
              label="Your email"
              placeholder="Your email"
              data-autofocus
              withAsterisk
            />
            <TextInput
              label="Job Type"
              placeholder="Job Type"
              data-autofocus
            />
            <Select
              label="Request Status"
              placeholder="How soon"
              withAsterisk
              data={[
                { value: "Budgeting", label: "Budgeting" },
                { value: "Working Progress", label: "Working Progress" },
                { value: "Very Urgent", label: "Very Urgent" },
              ]}
            />
            <Textarea
              placeholder="Your location"
              label="Your Location"
              withAsterisk
            />
          </div>
           <div className="mt-10 mb-4 mx-4">
           <button
            className="w-full  px-[25px] py-[12px] text-[#fff] rounded-md  bg-[#2d3091] border border-[#2d3091] text-[14px] font-[600] hover:bg-[#2d3091]"
          >
           Submit
          </button>
           </div>
        </form>
    </>
  )
}

export default QuoteForm