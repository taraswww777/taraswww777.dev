export const FaIcon = ({iconName}: { iconName: string }) => {
  return (
    <i
      style={{fontSize: '1rem', display: 'inline-block', maxHeight: '1rem'}}
      className={`${iconName}`}></i>
  );
}
