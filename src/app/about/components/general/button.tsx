type Props = {
  children: string;
};

export default function Button({ children }: Props) {
  return (
    <button className="w-full inline-block rounded-lg bg-c-dark text-c-light px-5 py-3 font-medium shadow-lg">
      {children}
    </button>
  );
}
