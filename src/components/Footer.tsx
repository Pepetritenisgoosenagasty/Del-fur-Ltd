import React from 'react'
import { createStyles, Container, Group, ActionIcon, rem, Text } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandFacebook, IconBrandLinkedin } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    footer: {
      // marginTop: rem(120),
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
    },
  
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
  
      [theme.fn.smallerThan('xs')]: {
        flexDirection: 'column',
      },
    },
  
    links: {
      [theme.fn.smallerThan('xs')]: {
        marginTop: theme.spacing.md,
      },
    },
  }));

const Footer = () => {
    const { classes } = useStyles();
  return (
    <>
     <div className={`${classes.footer} `}>
      <div className={`${classes.inner}  lg:w-[1170px] px-10 lg:px-0 mx-auto`}>
       {/* Text Here */}
       <Text color="dimmed" size="sm">
       © Copyright Del-Fur Limited. All Right Reserved
        </Text>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg" component="a" href="https://web.facebook.com/people/Del-Fur-Ltd/100063473291108/" target="_blank">
            <IconBrandFacebook size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="https://www.linkedin.com/in/del-fur-ltd-a516661a4" target="_blank">
            <IconBrandLinkedin size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="https://www.instagram.com/delfurltd_/?igshid=1xz4ys0a8kwuy" target="_blank">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
    </>
  )
}

export default Footer