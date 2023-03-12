import {Input, InputGroup, InputLeftElement, useEventListenerMap} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";

interface  Props {
    onSearch: (searchText: string) => void;
}

export const SearchInput = ({onSearch}: Props) => {

    const ref = useRef<HTMLInputElement>(null);

    return (
        <form style={{ width: '100%'}} onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) onSearch(ref.current.value);
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder='Search game...' variant='filled'/>
            </InputGroup>
        </form>
    )
}
