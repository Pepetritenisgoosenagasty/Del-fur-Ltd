import { Box, Loader, LoadingOverlay, Select, Text, TextInput, Textarea } from '@mantine/core'
import { useForm } from '@mantine/form'
import { closeAllModals } from '@mantine/modals'
import React, { useState } from 'react'

const QuoteForm = () => {

    const [isLoading, setIsLoading] = useState(false)

    const form = useForm()

  const handleSubmit = async(value) => {
    setIsLoading(true)
   try {
    const res = await fetch(`/api/quote_request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quote: value.quote,
        email: value.email,
        job_type: value.job_type,
        request_status: value.request_status,
        location: value.location
      }),
    });
    
    if(res?.ok) {
        alert("Qote Submitted Successfully")
        setIsLoading(false)
        closeAllModals()
        form.reset()
    }
   } catch (error) {
    console.log(error)
   }
  }

  return (
    <>

        

       <Text size="sm" mb="md" px={14}>
          Would you like to request for a quote about a particular furniture?
          Just submit your details and we’ll be in touch shortly. You can also
          email us if you would prefer.
        </Text>
       {isLoading ? (
         <div className='w-full py-20 flex'>
         <Loader color="dark" m="auto"/>
      </div>
       ) : (
        <>
            <form  onSubmit={form.onSubmit(handleSubmit)}>
          <div className="space-y-4 px-4">
            <Select
              label="Quote"
              placeholder="Select a quote"
              required
              withAsterisk
              data={[
                { value: "Renovation", label: "Renovation" },
                { value: "New Project", label: "New Project" },
                { value: "Existing Project", label: "Existing Project" },
              ]}
              {...form.getInputProps('quote')}
            />
            <TextInput
              label="Your email"
              placeholder="Your email"
              data-autofocus
              withAsterisk
              required
              {...form.getInputProps('email')}
            />
            <TextInput
              label="Job Type"
              placeholder="Job Type"
              data-autofocus
              required
              {...form.getInputProps('job_type')}
            />
            <Select
              label="Request Status"
              placeholder="How soon"
              withAsterisk
              required
              data={[
                { value: "Budgeting", label: "Budgeting" },
                { value: "Working Progress", label: "Working Progress" },
                { value: "Very Urgent", label: "Very Urgent" },
              ]}
              {...form.getInputProps('request_status')}
            />
            <Textarea
              placeholder="Your location"
              label="Your Location"
              required
              withAsterisk
              {...form.getInputProps('location')}
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
       )}
    </>
  )
}

export default QuoteForm