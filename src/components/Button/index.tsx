import { FC, ReactNode } from "react";

type props = {
  text?: string;
  disable?: boolean;
  loading?: boolean;
  children?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick?: any;
};

const Button: FC<props> = ({
  text,
  disable,
  loading = false,
  children,
  type,
  className = "",
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disable || loading}
      className="flex justify-center items-center disabled:opacity-50 bg-primary min-w-[122.46px] overflow-hidden relative h-[50px] my-1 rounded-lg text-sm font-bold text-white px-[30px] py-[20px] ml-4 hover:bg-body"
      onClick={onClick}
    >
      {loading ? (
        <svg
          className="animate-spin -ml-1 mr-1 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : null}
      {text}
      {children}
    </button>
  );
};

export default Button;
