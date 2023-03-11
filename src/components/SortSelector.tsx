import {Button, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";


import {BsChevronDown} from "react-icons/bs";

export const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: relevance
            </MenuButton>
            <MenuList>
                <MenuItem>1</MenuItem>
                <MenuItem>1</MenuItem>
                <MenuItem>1</MenuItem>
                <MenuItem>1</MenuItem>
                <MenuItem>1</MenuItem>
                <MenuItem>1</MenuItem>
            </MenuList>
        </Menu>
    )
}
