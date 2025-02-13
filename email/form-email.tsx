import React from "react";

import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactFormEmailProps = {message: string, senderEmail: string};

export default function ContactFormEmail({message, senderEmail}: ContactFormEmailProps) {
    return (
        <Html>
            <Head>
                <Preview>New message from your portfolio site</Preview>
            </Head>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white borderBlack my-10 py-4 px-10 rounded-md">
                            <Heading className="leading-tight">
                                You recieved the following message from the contact form
                            </Heading>
                            <Text>{message}</Text>
                            <Hr/>
                            <Text>The sender"s email is: {senderEmail}</Text>
                        </Section> 
                    </Container>
                </Body>
            </Tailwind>
        </Html>      
    );
}
