import React from 'react'
import { Input, Stack, InputLeftAddon, InputGroup, Icon, Button } from "@chakra-ui/react"
import { MdEmail } from "react-icons/md"
import { AiFillPhone } from "react-icons/ai"
import { RiLockPasswordFill } from "react-icons/ri"

const Form = () => {
    return (
        <form>
            <Stack spacing={4}>
                <InputGroup>
                    <InputLeftAddon children={<Icon as={MdEmail} />} />
                    <Input type="email" placeholder="Email address" />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children={<Icon as={AiFillPhone} />} />
                    <Input type="tel" placeholder="Phone number" />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children={<Icon as={RiLockPasswordFill} />} />
                    <Input type="password" placeholder="Password" />
                </InputGroup>

                <Button>Submit</Button>
            </Stack>
        </form>
    )
}

export default Form
