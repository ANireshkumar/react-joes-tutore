import PropType from "prop-types";

export const Child = (props) => {
  return (
    <div>{props.children}</div>
  )
}


Child.propType={
  children:PropType.array,
}