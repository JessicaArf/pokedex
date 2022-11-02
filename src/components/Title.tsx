import {Text} from "./Title.style"

type Titleprops = {
    text: string;
}

export const Title = (props: Titleprops) => {
  return (
    <Text>{props.text}</Text>
  )
}
