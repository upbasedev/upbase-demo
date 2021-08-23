import { useAppState } from "components/AppProvider";

export const BackgroundImg = (props) => {
  const [state] = useAppState();
  return (
    <div
      {...props}
      style={{
        backgroundImage: `url(${props.image}), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='150' viewBox='0 0 300 150' %3E%3Crect fill='%23ddd' width='300' height='150' /%3E%3Ctext fill='rgba(0,0,0,0.5)' font-family='Metropolis,sans-serif' font-size='20' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle' %3E ${state.name} %3C/text%3E%3C/svg%3E")`,
        height: props.height ? props.height : "inherit",
      }}
    />
  );
};
