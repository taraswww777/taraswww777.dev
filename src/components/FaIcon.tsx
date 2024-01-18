export const FaIcon = ({iconName}: { iconName: string }) => {
  return (
    <i
      aria-hidden
      style={{fontSize: '1rem', display: 'inline-block', maxHeight: '1rem'}}
      className={`${iconName}`}></i>
  );
}
