type Props = {
  title: string;
  starter: () => void;
};

export const Button = ({ title, starter }: Props) => {
  const onClickHandler = () => {
    starter();
  };

  return <button onClick={onClickHandler}>{title}</button>;
};
