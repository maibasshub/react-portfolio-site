export const Header = () => {
  const componentName = () => 'Header';

  return (
    <div className="test-wrapper">
      This component name is {componentName()} .
    </div>
  );
};