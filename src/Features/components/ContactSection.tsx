import {
    Paper,
    Text,
    TextInput,
    Textarea,
    Button,
    Group,
    SimpleGrid,
    createStyles,
    rem,
    List,
    ThemeIcon,
  } from '@mantine/core';
import { IconAt, IconLighter, IconMapPin, IconPhoneCalling, IconSun } from '@tabler/icons-react';
import { Montserrat } from 'next/font/google';
import ContactForm from './ContactForm';

//   import bg from './bg.svg';
  
  const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan('sm');

    
  
    return {
      wrapper: {
        display: 'flex',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        // borderRadius: theme.radius.lg,
        padding: rem(4),
        // border: `${rem(1)} solid ${
        //   theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
        // }`,
  
        [BREAKPOINT]: {
          flexDirection: 'column',
        },
      },
  
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
  
  const montserrat = Montserrat({ subsets: ["latin"] });
  
  export const ContactSection = () => {
    const { classes } = useStyles();
    return (
      <Paper >
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <Text fz="lg" fw={700} className={classes.title} c="#fff">
              Contact information
            </Text>

            <div className='space-y-6'>
            <List
                style={montserrat.style}
                
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="#46AAE4" size={30} radius="xl">
                    <IconAt size="2rem" />
                  </ThemeIcon>
                }
              >
                <List.Item sx={{fontWeight: 400, lineHeight:1.5}}>
                    <h5 className='text-white text-[12px]'>Email</h5>
                    <p className='text-white text-[14px] font-[500]'>delafurnishers7@gmail.com</p>
                    <p className='text-white text-[14px] font-[500]'>info@delfurltd.com</p>
                </List.Item>
              </List>
              <List
                style={montserrat.style}
                
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="#46AAE4" size={30} radius="xl">
                    <IconMapPin size="2rem" />
                  </ThemeIcon>
                }
              >
                <List.Item sx={{fontWeight: 400, lineHeight:1.5}}>
                    <h5 className='text-white text-[12px]'>Address</h5>
                    <p className='text-white text-[14px] font-[500]'>P.O Box CS 8040</p>
                    <p className='text-white text-[14px] font-[500]'>Tema, Ghana</p>
                </List.Item>
              </List>
              <List
                style={montserrat.style}
                
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="#46AAE4" size={30} radius="xl">
                    <IconPhoneCalling size="2rem" />
                  </ThemeIcon>
                }
              >
                <List.Item sx={{fontWeight: 400, lineHeight:1.5}}>
                    <h5 className='text-white text-[12px]'>Phone</h5>
                    <p className='text-white text-[14px] font-[500]'>+233 (020) 815-2216</p>
                    <p className='text-white text-[14px] font-[500]'>+233 (020) 667-6184</p>
                </List.Item>
              </List>

              <List
                style={montserrat.style}
                
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="#46AAE4" size={30} radius="xl">
                    <IconSun size="2rem" />
                  </ThemeIcon>
                }
              >
                <List.Item sx={{fontWeight: 400, lineHeight:1.5}}>
                    <h5 className='text-white text-[12px]'>Working Hours</h5>
                    <p className='text-white text-[14px] font-[500]'>8 a.m. – 5 p.m.</p>
                </List.Item>
              </List>
            </div>
            


            {/* <ContactIconsList variant="white" /> */}
          </div>
  
         <ContactForm />
        </div>
      </Paper>
    );
  }