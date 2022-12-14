import {Container} from './Badge.style'

type BadgeProps = {
    name:string;
}
export function Badge(props:BadgeProps) {
    return (
    <Container className={"type--"+props.name.toLocaleLowerCase()}>{props.name}</Container>
    )
}