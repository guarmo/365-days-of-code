import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, Flex, Icon, Image, useColorMode, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { FaMoon, FaRegMoon } from "react-icons/fa"

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex alignItems="center" justifyContent="space-between">
            <Image src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c540.png" maxW="50px" />

            <Flex alignItems="center">

                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to="/">
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to="/form">
                            Form
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink as={Link} to="/loader" >Loader</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <Input mx={4} maxW="200px" placeholder="Search" size="md" />

                <Button onClick={toggleColorMode}>
                    <Icon as={colorMode === "light" ? FaRegMoon : FaMoon} />
                </Button>
            </Flex>

        </Flex>
    )
}

export default Navbar
