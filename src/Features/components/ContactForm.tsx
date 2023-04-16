import { createStyles, Group, Loader, rem, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form';
import { Montserrat } from 'next/font/google';
import React, { useState } from 'react'
const montserrat = Montserrat({ subsets: ["latin"] });

  
const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan('sm');

    
  
    return {
  
      form: {
        boxSizing: 'border-box',
        flex: 1,
        padding: theme.spacing.xl,
        paddingLeft: `calc(${theme.spacing.xl} * 2)`,
        borderLeft: 0,
  
        [BREAKPOINT]: {
          padding: theme.spacing.md,
          paddingLeft: theme.spacing.md,
        },
      },
  
      fields: {
        marginTop: rem(-12),
      },
  
      fieldInput: {
        flex: 1,
  
        '& + &': {
          marginLeft: theme.spacing.md,
  
          [BREAKPOINT]: {
            marginLeft: 0,
            marginTop: theme.spacing.md,
          },
        },
      },
  
      fieldsGroup: {
        display: 'flex',
  
        [BREAKPOINT]: {
          flexDirection: 'column',
        },
      },
  
      contacts: {
        boxSizing: 'border-box',
        position: 'relative',
        borderRadius: theme.radius.lg,
        // backgroundImage: `url(${bg.src})`,
        backgroundColor: "#46AAE4",
        background: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // border: `${rem(1)} solid transparent`,
        padding: theme.spacing.xl,
        flex: `0 0 ${rem(280)}`,
  
        [BREAKPOINT]: {
          marginBottom: theme.spacing.sm,
          paddingLeft: theme.spacing.md,
        },
      },
  
      title: {
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  
        [BREAKPOINT]: {
          marginBottom: theme.spacing.xl,
        },
      },
  
      control: {
        [BREAKPOINT]: {
          flex: 1,
        },
      },
    };
  });

const ContactForm = () => {
    const { classes } = useStyles();
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm()

  const handleSubmit = async(value) => {
    setIsLoading(true)
   try {
    const res = await fetch(`/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: value.name,
        email: value.email,
        subject: value.subject,
        message: value.message
      }),
    });
    if(res?.ok) {
      alert("Form Submitted Successfully")
      setIsLoading(false)
      form.reset()
  }
   } catch (error) {
    console.log(error)
   }
  }
  return (
    <>
     {
      isLoading ? (
        <div className='w-full py-20 flex'>
           <Loader color="dark" m="auto"/>
        </div>
      ) : (
        <form className={`${classes.form} mx-10 md:mx-0`} onSubmit={form.onSubmit(handleSubmit)} >
        <Text fz="lg" fw={700} className={classes.title}>
          Get in touch
        </Text>

        <div className={classes.fields}>
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <TextInput required label="Your name" placeholder="Your name"  {...form.getInputProps('name')}/>
            <TextInput label="Your email" placeholder="hello@gmail.com" required {...form.getInputProps('email')}/>
          </SimpleGrid>

          <TextInput mt="md" label="Subject" placeholder="Subject" required {...form.getInputProps('subject')}/>

          <Textarea
            mt="md"
            label="Your message"
            placeholder="Please include all relevant information"
            minRows={3}
            {...form.getInputProps('message')}
          />

          <Group position="right" mt="xl">
          <button
          className={`${montserrat.className} px-[25px] py-[15px] rounded-md mt-4 text-[#2d3091] border border-[#2d3091] text-[12px] font-[700] hover:bg-[#2d3091] hover:text-white hover:transition-all ease-in-out delay-150`}
        >
          Send Message
        </button>
          </Group>
        </div>
      </form>
      )
     }
    </>
  )
}

export default ContactForm